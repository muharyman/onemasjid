import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ActiveLink from "./active-link";
import MyDialog from "./mydialog";
import AppContext from "../context/appContext";
import Image from "next/image";
import Input from "./input";

export default function Nav() {
  const router = useRouter();
  const [item, setItem] = React.useState("");
  const emailLogin = React.useRef();
  const passwordLogin = React.useRef();
  const namaRegister = React.useRef();
  const emailRegister = React.useRef();
  const passwordRegister = React.useRef();
  const konfirmasiPasswordRegister = React.useRef();
  const [passwordActive, setPasswordActive] = React.useState(false);
  const [active, setActive] = React.useState(false);
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
            <button
              onClick={() => setItem("register")}
              className='mx-4 focus:outline-none rounded-md py-2 px-6 border border-btn-blue-2'
            >
              <p className='text-btn-blue-2'>Sign Up</p>
            </button>
            <button
              onClick={() => setItem("login")}
              className='focus:outline-none py-2 rounded-md px-6 border border-btn-blue-2'
            >
              <p className='text-btn-blue-2'>Login</p>
            </button>
          </div>
        </div>
      </div>

      {item.length !== 0 ? (
        <MyDialog
          setState={() => {
            setItem("");
            setActive(false);
          }}
        >
          <div className='p-8 mx-auto box h-auto'>
            <p className='font-sans text-18px font-bold text-black'>
              {item === "login" ? "Selamat Datang" : "Daftar Akun"}
            </p>
            <p className='font-sans text-14px text-black'>
              {item === "login"
                ? "Silahkan masuk dengan email dan kata sandi"
                : "Pastikan data yang didaftarkan adalah benar"}
            </p>
            <div className='mt-4'>
              {item === "login" ? (
                <div>
                  <Input
                    label='Email'
                    type='text'
                    placeholder='namaakun@gmail.com'
                    ref={emailLogin}
                  />
                  <Input
                    label='Kata Sandi'
                    type={active ? "text" : "password"}
                    placeholder='***************'
                    ref={passwordLogin}
                  >
                    <div className='flex items-center mr-4'>
                      <img
                        onClick={() => setActive(!active)}
                        className='cursor-pointer h-5 w-5'
                        src={
                          active ? "/images/eye-active.svg" : "/images/eye.svg"
                        }
                        alt='eye'
                      />
                    </div>
                  </Input>
                  <button
                    // onClick={() =>
                    //   handleSignIn(
                    //     emailLogin.current.value,
                    //     passwordLogin.current.value
                    //   )
                    // }
                    className='focus:outline-none mt-8 mb-4 bg-blue-700 rounded-full p-2 w-full font-sans text-white font-bold'
                  >
                    Login
                  </button>

                  {/* <GoogleLogin
                    clientId='112502138670-mn6b6hdq8snhf0ph1kiao4e3ku4ic3mc.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={responseGoogle}
                    onFailure={onErrorGoogle}
                    cookiePolicy={"single_host_origin"}
                    className='w-full justify-center'
                  /> */}

                  <div className='mt-8 flex space-x-1 justify-center items-center'>
                    <p className='font-sans text-gray-600'>
                      Belum memiliki akun?{" "}
                    </p>
                    <p
                      onClick={() => {
                        setItem("register");
                      }}
                      className='cursor-pointer text-blue-700 font-sans font-bold'
                    >
                      Daftar Sekarang
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <Input
                    label='Nama Lengkap'
                    type='text'
                    placeholder='Nama Lengkap'
                    ref={namaRegister}
                  />
                  <Input
                    label='Email'
                    type='text'
                    placeholder='namaakun@mail.com'
                    ref={emailRegister}
                  />
                  <Input
                    label='Kata Sandi'
                    type={active ? "text" : "password"}
                    placeholder='***************'
                    ref={passwordRegister}
                  >
                    <div className='flex items-center mr-4'>
                      <img
                        onClick={() => setActive(!active)}
                        className='cursor-pointer h-5 w-5'
                        src={
                          active ? "/images/eye-active.svg" : "/images/eye.svg"
                        }
                        alt='eye'
                      />
                    </div>
                  </Input>
                  <Input
                    label='Konfirmasi Kata Sandi'
                    type={passwordActive ? "text" : "password"}
                    placeholder='***************'
                    ref={konfirmasiPasswordRegister}
                  >
                    <div className='flex items-center mr-4'>
                      <img
                        onClick={() => setPasswordActive(!passwordActive)}
                        className='cursor-pointer h-5 w-5'
                        src={
                          passwordActive
                            ? "/images/eye-active.svg"
                            : "/images/eye.svg"
                        }
                        alt='eye'
                      />
                    </div>
                  </Input>

                  <div className='mt-4 flex items-center'>
                    <p className='mx-2 font-sans text-black'>
                      Dengan mendaftar, Saya setuju dengan{" "}
                      <span className='font-sans text-blue-700 font-bold'>
                        <Link href='#'>{`Syarat & Ketentuan`}</Link>
                      </span>{" "}
                      dan{" "}
                      <span className='font-sans text-blue-700 font-bold'>
                        <Link href='#'>Kebijakan Privasi</Link>
                      </span>{" "}
                      dari One Masjid
                    </p>
                  </div>

                  <button
                    // onClick={() =>
                    //   handleRegister(
                    //     namaRegister.current.value,
                    //     emailRegister.current.value,
                    //     passwordRegister.current.value,
                    //     konfirmasiPasswordRegister.current.value
                    //   )
                    // }
                    className='mb-2 focus:outline-none mt-8 bg-blue-700 rounded-full p-2 w-full font-sans text-white font-bold'
                  >
                    Register
                  </button>

                  {/* <GoogleLogin
                    clientId='112502138670-mn6b6hdq8snhf0ph1kiao4e3ku4ic3mc.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={responseGoogle}
                    onFailure={onErrorGoogle}
                    cookiePolicy={"single_host_origin"}
                    className='w-full justify-center'
                  /> */}

                  <div className='mt-8 flex space-x-1 justify-center items-center'>
                    <p className='font-sans text-black'>
                      Sudah memiliki akun?{" "}
                    </p>
                    <p
                      onClick={() => {
                        setItem("login");
                      }}
                      className='cursor-pointer text-blue-700 font-sans font-bold'
                    >
                      Login disini
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </MyDialog>
      ) : null}

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
