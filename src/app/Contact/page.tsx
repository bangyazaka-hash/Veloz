import Link from "next/link";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="font-[lexend] w-full">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <p className="text-sm text-gray-600">Véloz</p>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-1">
              Customer Service
            </h1>
            <p className="text-gray-700 leading-relaxed mt-4 max-w-2xl">
              Pelayanan dari Veloz dimulai dari pukul <b>10.00–17.00</b>. Scan QR
              di halaman ini untuk WhatsApp kami, atau hubungi lewat media sosial
              di bawah ini. Terima kasih.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact card */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold">Kontak</h2>
              <p className="text-gray-600 mt-2">
                Pilih salah satu channel di bawah ini.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img src="/uploads/email.png" width={40} height={40} alt="email" />
                  <Link className="hover:underline break-all" href="mailto:yourveloz@gmail.com">
                    yourveloz@gmail.com
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/uploads/ig.png" width={40} height={40} alt="instagram" />
                  <Link className="hover:underline" href="https://www.instagram.com/yzakaa_">
                    @yzakaa_
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/uploads/tiktok.png" width={40} height={40} alt="tiktok" />
                  <Link className="hover:underline" href="https://www.tiktok.com/@yazaka37">
                    @yazaka37
                  </Link>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-[#f3c623]/25 p-4">
                <p className="text-sm text-gray-700">
                  Jam operasional: <b>10.00–17.00</b>
                </p>
              </div>
            </div>

            {/* QR card */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 sm:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">WhatsApp</h2>
                  <p className="text-gray-600 mt-2">
                    Scan QR untuk chat cepat.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6">
                  <img
                    src="/uploads/bar.png"
                    alt="WhatsApp Barcode"
                    className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-600">
                Jika QR tidak terbaca, gunakan tombol WhatsApp di footer.
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
