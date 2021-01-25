import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ActiveLink from "./active-link";
import MyDialog from "./mydialog";
import AppContext from "../context/appContext";
import Image from "next/image";

export default function Nav() {
  const router = useRouter();
  const listlink = React.useMemo(
    () => [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "List Pinjam",
        href: "/list-pinjam",
      },
      {
        text: "Barang Pinjam",
        href: "/barang-pinajm",
      },
    ],
    []
  );

  return (
    <div>
      {/* <NavMobile
        open={open}
        active={router.pathname}
        getClose={setOpen}
        getItem={handleClick}
        getLogout={handleLogout}
      /> */}
      <div
        className={`root-nav fixed py-3 xl:px-8 px-6 h-16 w-full bg-white flex justify-between items-center z-40 `}
      >
        <div className='hidden lg:flex lg:justify-between lg:items-center lg:w-full'>
          <div className='flex items-center font-normal justify-between'>
            <Link href='/'>
              <a className='mx-4'>
                <Image
                  width={100}
                  height={100}
                  src='/images/logo.svg'
                  alt='logo'
                />
              </a>
            </Link>
          </div>
          <div className='flex justify-between items-center relative'>
            {listlink.map((item) => (
              <ActiveLink
                key={item.text}
                text={item.text}
                href={item.href}
                active={router.pathname}
              ></ActiveLink>
            ))}
            <button className='mx-4 focus:outline-none rounded-md py-2 px-6 border border-btn-blue-2'>
              <p className='text-btn-blue-2'>Sign Up</p>
            </button>
            <button className='focus:outline-none py-2 rounded-md px-6 border border-btn-blue-2'>
              <p className='text-btn-blue-2'>Login</p>
            </button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .root-nav {
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
          }
          .vl {
            border: 1px solid #dddddd;
            height: 34px;
          }

          .box {
            background: #ffffff;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          }
          .check-box {
            background: #eeeeee;
            border: 1px solid #eeeeee;
            box-sizing: border-box;
            border-radius: 2px;
          }
        `}
      </style>
    </div>
  );
}
