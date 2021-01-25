import Link from "next/link";
import React from "react";
export default function ActiveLink({ text, href, active }) {
  const link = href.split("/")[1];
  return (
    <div className='h-16 flex items-center relative'>
      <Link href={href}>
        <div className='cursor-pointer'>
          <p
            className={`lg:px-2 xl:px-4 p-2 text-14px ${
              active === href
                ? "text-black font-semibold"
                : active.includes(link) && link !== ""
                ? "text-black font-semibold"
                : "text-black opacity-75"
            } font-sans `}
          >
            {text}
          </p>
          <div
            className={`${
              active === href
                ? "bg-black"
                : active.includes(link) && link !== ""
                ? "bg-black"
                : "hidden"
            } absolute bottom-0 lg:px-2 xl:px-4 px-2 h-1 z-20 w-full`}
          ></div>
        </div>
      </Link>
    </div>
  );
}
