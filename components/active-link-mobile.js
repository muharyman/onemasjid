import Link from "next/link";
import React from "react";
export default function ActiveLinkMobile({ text, href, active }) {
  return (
    <div className='h-16 flex flex-col items-center relative'>
      <Link href={href}>
        <div className='cursor-pointer'>
          <p
            className={`lg:px-4 p-2 ${
              active === href ? "text-blue-700 font-semibold" : "text-black"
            } font-sans `}
          >
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
}
