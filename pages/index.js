import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../components/card";
import AppContext from "../context/appContext";
import { gql } from "graphql-request";

export default function IndexPage() {
  const router = useRouter();
  const pencarianRef = React.useRef();
  const { client } = React.useContext(AppContext);

  const daftarBarang = React.useMemo(
    () => [
      {
        id: 1,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        id: 2,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        id: 3,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        id: 4,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        id: 5,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        id: 6,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        id: 7,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        id: 8,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        id: 9,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
    ],
    []
  );

  // const fetchData = React.useCallback(async () => {
  //   const query = gql`
  //     query Myquery {
  //       user {
  //         nama_depan
  //         nama_belakang
  //         email
  //         passowrd
  //       }
  //     }
  //   `;
  //   const { user } = await client.request(query);
  //   console.log(user);
  // }, [client]);

  // React.useEffect(() => {
  //   fetchData();
  // }, [client]);

  const toDetail = React.useCallback((id) => {
    router.push(`/pinjam/${id}`);
  }, []);

  return (
    <div className='pb-16'>
      <div className='relative w-full'>
        <img
          className='h-screen w-full absolute z-min-1'
          src='/images/homepage.png'
          alt='home page'
        />
        <div className='flex flex-col space-y-2 h-screen justify-center items-center'>
          <p className='font-sans font-bold text-blue-3 text-5xl capitalize'>
            cari barang untuk dipinjam
          </p>
          <p className='font-sans font-light text-blue-3 text-lg capitalize'>
            Temukan dan Pinjam
          </p>
          <div className='py-8 px-4 mx-auto box flex space-x-2 justify-between items-center h-8 w-2/3'>
            <img
              className='cursor-pointer'
              src='/images/search.svg'
              alt='search'
              onClick={() => {
                console.log("test");
              }}
            />
            <input
              className='w-full focus:outline-none bg-transparent text-xl'
              type='text'
              placeholder='Pencarian'
              ref={pencarianRef}
              onKeyDown={({ key }) => (key === "Enter" ? "" : null)}
            />
            <button className='focus:outline-none py-2 btn-search rounded-md px-6'>
              <p className='text-white'>CARI</p>
            </button>
          </div>
        </div>
      </div>
      <div className='bg-white w-full mt-12 px-16'>
        <p className='font-sans font-bold text-black text-3xl'>
          Barang yang tersedia
        </p>
        <div className='mt-4 grid grid-cols-4 gap-4'>
          {daftarBarang.map((item, i) => (
            <div
              key={i}
              className='col-span-1'
              onClick={() => toDetail(item.id)}
            >
              <Card
                gambar_barang={item.gambar_barang}
                alamat={item.alamat}
                deskripsi_barang={item.deskripsi_barang}
                harga={item.harga}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .box {
            background: #f5f5f7;
            border-radius: 32px;
          }
          .btn-search {
            background: #3838d0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 23px;
          }
        `}
      </style>
    </div>
  );
}
