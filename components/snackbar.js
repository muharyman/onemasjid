import React from "react";
import AppContext from "../context/appContext";
export default function Snackbar({ open, message, color }) {
  const { setSnack } = React.useContext(AppContext);
  const [openSnack, setOpen] = React.useState(false);
  const handleClose = React.useCallback((bool) => {
    if (bool) {
      setTimeout(() => {
        setSnack(false);
      }, 3000);
    }
  }, []);
  const handleCloseClick = React.useCallback(() => {
    setSnack(false);
  }, [setSnack]);
  React.useEffect(() => {
    setOpen(open);
  }, [open]);
  React.useEffect(() => {
    handleClose(openSnack);
  }, [openSnack]);
  return (
    <div className='snackbar fixed rounded-md py-2 px-3 shadow-2xl h-12 flex justify-between items-center bg-opacity-50'>
      <p className='text-buttonlg text-white cursor-default mb-0'>{message}</p>
      <button
        className='button'
        onClick={() => {
          handleCloseClick(false);
        }}
      >
        <img
          className='transform scale-75 ml-3'
          src={"/images/closewhite.svg"}
          id='close'
          alt='close'
        />
      </button>
      <style jsx>
        {`
          .snackbar {
            visibility: ${openSnack ? "visible" : "hidden"};
            min-width: 300px;
            margin-left: -150px;
            background-color: ${color};
            left: 50%;
            bottom: 30px;
            z-index: 100;
            animation: fadein 0.5s, fadeout 0.5s 2.5s;
          }
          .button {
            outline: none;
            border-radius: 12px;
            height: 24px;
          }
          @keyframes fadein {
            from {
              bottom: 0;
              opacity: 0;
            }
            to {
              bottom: 30px;
              opacity: 1;
            }
          }
          @keyframes fadeout {
            from {
              bottom: 30px;
              opacity: 1;
            }
            to {
              bottom: 0;
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
