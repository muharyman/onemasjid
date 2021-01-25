import React from "react";

const MyDialog = ({ children, setState }) => {
  return (
    <div className='absolute top-0 left-0 flex h-screen w-full justify-center items-center'>
      <div className='fixed z-30 h-full' onClick={() => setState(false)}>
        <div className='bg-black w-screen h-screen opacity-25'></div>
      </div>
      <div className='fixed showing z-40'>{children}</div>
      <style jsx>
        {`
          @keyframes show {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .showing {
            animation-name: show;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: backwards;
          }
        `}
      </style>
    </div>
  );
};

export default MyDialog;
