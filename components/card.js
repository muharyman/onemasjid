import React from "react";
import Image from "next/image";

export default function Card(props) {
  return (
    <React.Fragment>
      <div className='box p-2 w-full'>
        <Image
          src={props.gambar_barang}
          width={100}
          height={100}
          alt='example'
        />
        <p className='font-sans text-black opacity-50 text-center'>
          {props.alamat}
        </p>
        <p className='font-sans text-black font-semibold'>
          {props.deskripsi_barang}
        </p>
        <p className='font-sans text-black'>{props.harga}</p>
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