import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="font-[lexend] w-full">
        {/* Header */}
        <section className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <p className="text-sm text-gray-600">Véloz</p>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-1">
              Tentang Kita
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              Veloz terlahir untuk menjadi temanmu di jalanan—memberikan sensasi
              kebebasan dan ruang untuk mengekspresikan suasana hati saat
              bersepeda. Veloz dibuat pada tahun 2025 oleh Arka Putra Yazaka dari
              Indonesia, dengan fokus pada kenyamananmu.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: story */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Perjalanan Kami</h2>
              <p className="text-gray-600 mt-2">
                Sedikit cerita singkat dari awal sampai jadi.
              </p>

              {/* Timeline */}
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border bg-white shadow-sm p-6">
                  <div className="inline-flex items-center rounded-full bg-[#f3c623] px-4 py-2 font-semibold">
                    2024
                  </div>
                  <p className="mt-3 text-gray-800 leading-relaxed">
                    Berawal dari membaca manhwa dan mulai punya mimpi untuk
                    membeli sepeda.
                  </p>
                </div>

                <div className="rounded-2xl border bg-white shadow-sm p-6">
                  <div className="inline-flex items-center rounded-full bg-[#f3c623] px-4 py-2 font-semibold">
                    2025
                  </div>
                  <p className="mt-3 text-gray-800 leading-relaxed">
                    Punya sepeda fixie dan membuat website katalog perlengkapan
                    sepeda balap.
                  </p>
                </div>
              </div>

              {/* Highlight */}
              <div className="mt-8 rounded-2xl bg-[#f3c623]/25 p-6">
                <p className="font-semibold">Fokus kami</p>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  Menyajikan katalog yang rapi, mudah diakses di HP, dan membantu
                  kamu memilih produk sebelum datang ke toko.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="bg-[#f3c623] w-[250px] shadow-xl h-[350px]" />
                <img
                  src="/uploads/contact.png"
                  alt="Véloz"
                  className="absolute inset-0 mr-25 m-auto w-[92%] h-[92%] object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
