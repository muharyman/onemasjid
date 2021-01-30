import React from "react";
import CardProfile from "../../components/cardProfile";
import AppContext from "../../context/appContext";
export default function Detail() {
  const { setSnack } = React.useContext(AppContext);

  return (
    <React.Fragment>
      <div className='pt-24 pb-4 px-4 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='col-span-1'>
            <div className='box flex justify-center items-center'>
              <img src='/images/example.png' />
            </div>
            <div className='mt-4 flex- flex-col items-start space-y-2 font-sans text-black'>
              <p>
                Blackmagic Pocket Cinema 4k with full Tilta Cage.
                <p>- 500 gb SSD</p>
                <p>- Cartoni Alpha Tripod - Rokinon 12mm F2.0 MFT Lens </p>
                <p>- Lumix G 14-42mm F35-6.1 Lens </p>
                <p>
                  - 8 Canon batteries - 4 NPF Batteries + Tilta battery plate{" "}
                </p>
                <p>- 7” Small HD Monitor</p>
              </p>
            </div>
          </div>
          <div className='col-span-1'>
            <CardProfile />
            <div className='mt-8'>
              <div className='box p-4'>
                <p className='font-sans text-2xl'>Free</p>
                <div className='mt-4 grid grid-cols-2 gap-4'>
                  <div className='col-span-1 space-y-1'>
                    <p>Dari</p>
                    <input
                      className='w-full py-3 px-2 input-box focus:outline-none'
                      type='date'
                    />
                  </div>
                  <div className='col-span-1 space-y-1'>
                    <p>Sampai</p>
                    <input
                      className='w-full py-3 px-2 input-box focus:outline-none'
                      type='date'
                    />
                  </div>
                </div>
                <div className='mt-4 space-y-1'>
                  <p>Digunakan untuk</p>
                  <input
                    className='w-full py-3 px-2  input-box focus:outline-none'
                    type='type'
                  />
                </div>
                <div className='mt-4'>
                  <button
                    onClick={() =>
                      setSnack("Request berhasil diajukan", "success")
                    }
                    className='focus:outline-none hover:bg-opacity-80 bg-blue-800 rounded-lg px-6 py-4 flex mx-auto justify-center items-center text-white'
                  >
                    REQUEST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          /* #FFFFFF - White */

          background: #ffffff;
          /* #D4D4D4 - Light Grey */

          border: 1px solid #d4d4d4;
          box-sizing: border-box;
          /* 9dp/Light */

          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
          border-radius: 16px;
        }
        .input-box {
          /* #FFFFFF - White */

          background: #ffffff;
          /* #D4D4D4 - Light Grey */

          border: 1px solid #d4d4d4;
          box-sizing: border-box;
          border-radius: 6px;
        }
      `}</style>
    </React.Fragment>
  );
}
