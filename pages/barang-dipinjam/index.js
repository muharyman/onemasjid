import React from "react";
import AppContext from "../../context/appContext";
export default function ListPinjam() {
  const [open, setOpen] = React.useState();
  const [data, setData] = React.useState();
  const { setSnack } = React.useContext(AppContext);
  const daftarBarang = React.useMemo(
    () => [
      {
        id: 1,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
        tanggal: "16 Januari 2020 - 16 Januari 2020",
        status: "Belum dikembalikan",
        peringatan1: "Anda belum mengembalikan 1",
        peringatan2: "Anda belum mengembalikan 2",
      },
      {
        id: 2,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
        tanggal: "16 Januari 2020 - 16 Januari 2020",
        status: "Belum dikembalikan",
        peringatan1: "Anda belum mengembalikan 1",
        peringatan2: "Anda belum mengembalikan 2",
      },
      {
        id: 3,
        gambar_barang: "/images/example.png",
        alamat: "Masjid Sunda Kelapa, Jakarta",
        deskripsi_barang: "Kamera Black EOS Rebel T6",
        harga: "Free",
        tanggal: "16 Januari 2020 - 16 Januari 2020",
        status: "Sudah Dikembalikan",
      },
    ],
    []
  );

  const getDetailItem = React.useCallback((open) => {
    if (open) {
      let test = daftarBarang.filter((e) => e.id === open);
      setData(test[0]);
    }
  }, []);

  React.useEffect(() => {
    getDetailItem(open);
  }, [open]);

  console.log(data);

  return (
    <React.Fragment>
      <div className='pt-20 pb-4 px-16'>
        <div className='flex justify-between items-start space-x-2'>
          <div className='w-7/12'>
            <p className='font-sans font-bold text-xl'>Barang Dipinjam</p>
            <div className='mt-8 flex flex-col space-y-2'>
              {daftarBarang.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(item.id)}
                  className={`${
                    open === item.id ? "bg-gray-200" : ""
                  } cursor-pointer box p-6 w-full grid grid-cols-3 gap-2`}
                >
                  <div className='col-span-1 flex items-center justify-center'>
                    <img
                      className='h-40 w-40'
                      src={item.gambar_barang}
                      alt='example'
                    />
                  </div>
                  <div className='space-y-2 col-span-2'>
                    <p className='font-sans text-black font-bold text-xl'>
                      {item.deskripsi_barang}
                    </p>
                    <p className='font-sans text-black font-sm'>{item.harga}</p>
                    <p className='font-sans text-black opacity-50'>
                      {item.alamat}
                    </p>
                    <p className='font-sans text-black'>Pinjam hingga</p>
                    <p className='font-sans text-red-500'>{item.tanggal}</p>
                    <p
                      className={`font-sans ${
                        item.status === "Belum dikembalikan"
                          ? "text-red-500"
                          : "text-green-500"
                      } text-right`}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-5/12'>
            <p className='font-sans font-bold text-xl'>Profil Peminjam</p>
            <div className={`${open ? "block" : "hidden"} mt-8`}>
              <div className='box p-4'>
                <div className='flex space-x-2'>
                  <img className='h-20 w-20' src='/images/profil.png' />
                  <div className='space-y-2'>
                    <p className='font-sans text-xl font-bold'>
                      Masjid Sunda Kelapa, Jakarta
                    </p>
                    <p className='font-sans text-black'>
                      Jl. Taman Sunda Kelapa No.16, RT.6/RW.4, Menteng, Kec.
                      Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
                      10310
                    </p>
                  </div>
                </div>

                <div className='mt-8 space-y-2'>
                  <p>Digunakan untuk :</p>
                  <p className='font-sans'>
                    Dokumentasi acara tabligh akbar Ustad Muharyman al-Hafizh
                  </p>
                </div>

                {data ? (
                  <div className='mt-8 space-y-2'>
                    <p>Digunakan pada :</p>
                    <p className='font-sans text-red-500'>{data.tanggal}</p>

                    {data ? (
                      <div className='flex justify-between space-x-1'>
                        <p
                          className={`mt-4 text-right ${
                            data.status === "Belum dikembalikan"
                              ? "text-red-500"
                              : "text-green-500"
                          } font-bold`}
                        >
                          {data.status}
                        </p>
                        {data.status === "Belum dikembalikan" ? (
                          <button
                            onClick={() =>
                              setSnack(
                                "Peminjam akan diingatkan kembali",
                                "success"
                              )
                            }
                            className='bg-blue-800 rounded-lg px-6 py-4 flex mx-auto justify-center items-center text-white'
                          >
                            Ingatkan
                          </button>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
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
