import React from "react";
import Card from "../../components/card";
import { useRouter } from "next/router";

export default function Index() {
  const {
    query: { barang },
  } = useRouter();

  const router = useRouter();

  const toDetail = React.useCallback((id) => {
    router.push(`/pinjam-barang/${id}`);
  }, []);

  const { query } = useRouter();

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
  return (
    <div className='bg-white w-full pt-20 pb-12 px-16'>
      {!barang ? (
        <p className='font-sans font-bold text-black text-3xl'>
          Barang yang tersedia
        </p>
      ) : (
        <p className='font-sans font-bold text-black text-3xl'>
          {`Hasil Pencarian : ${barang}`}
        </p>
      )}
      <div className='mt-4 grid grid-cols-4 gap-4'>
        {daftarBarang.map((item, i) => (
          <div key={i} className='col-span-1' onClick={() => toDetail(item.id)}>
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
