import React from "react";
import Card from "../../components/card";

export default function Index() {
  const daftarBarang = React.useMemo(
    () => [
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
      {
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
      },
    ],
    []
  );
  return (
    <div className='bg-white w-full pt-20 pb-12 px-16'>
      <p className='font-sans font-bold text-black text-3xl'>
        Barang yang tersedia
      </p>
      <div className='mt-4 grid grid-cols-4 gap-4'>
        {daftarBarang.map((item, i) => (
          <div key={i} className='col-span-1'>
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
  );
}
