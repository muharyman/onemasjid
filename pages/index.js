import React from "react";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div>
      <div className='pt-16'>
        <img
          className='h-screen w-full'
          src='/images/homepage.png'
          alt='home apge'
        />
      </div>
    </div>
  );
}
