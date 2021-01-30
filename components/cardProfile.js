import React from "react";

export default function CardProfile() {
  return (
    <React.Fragment>
      <div className='box p-4'>
        <div className='flex space-x-2'>
          <img className='h-20 w-20' src='/images/profil.png' />
          <div className='space-y-2'>
            <p className='font-sans text-xl font-bold'>
              Masjid Sunda Kelapa, Jakarta
            </p>
            <p className='font-sans text-black'>
              Jl. Taman Sunda Kelapa No.16, RT.6/RW.4, Menteng, Kec. Menteng,
              Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310
            </p>
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
      `}</style>
    </React.Fragment>
  );
}
