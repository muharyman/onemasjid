import React from "react";
import Link from "next/link";
import AppContext from "../context/appContext";
import { gql } from "graphql-request";
export default function NavbarMobile({ open, active, getClose, getItem }) {
  const listlink = React.useMemo(
    () => [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "Pinjam Barang",
        href: "/pinjam-barang",
      },
      {
        text: "List Pinjam",
        href: "/list-pinjam",
      },
      {
        text: "Barang Dipinjam",
        href: "/barang-dipinjam",
      },
    ],
    []
  );

  return (
    <div>
      <div className='lg:hidden rootnav fixed w-full z-10 bg-white -mt-4 flex flex-col justify-center'>
        {listlink.map((item) => (
          <div key={item.text} className='mx-8 my-2 p-1'>
            <Link href={item.href}>
              <a
                onClick={() => {
                  getClose(false);
                }}
                className={`text-xl font-sans ${
                  active === item.href
                    ? "text-blue-700 font-semibold"
                    : "text-black"
                } `}
              >
                {item.text}
              </a>
            </Link>
          </div>
        ))}
        <hr className='h-px mx-8 bg-gray-300' />
        <div className='mt-4 flex justify-center items-center'>
          <div>
            <p
              onClick={() => getItem("login")}
              className={`cursor-pointer lg:px-2 xl:px-4 p-2 text-14px text-black font-sans text-center`}
            >
              Login
            </p>
            <p
              onClick={() => getItem("register")}
              className='cursor-pointer lg:p-2 p-2 bg-blue-700 text-center rounded-full h-auto w-32 text-white font-bold font-sans'
            >
              Sign Up
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .rootnav {
            height: ${open ? "102vh" : "0vh"};
            overflow-y: hidden;
            transition: height 0.5s;
          }
        `}
      </style>
    </div>
  );
}
