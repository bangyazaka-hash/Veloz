import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="font-[lexend] w-full">
        <section className="relative overflow-hidden">
          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
            <img
              src="/uploads/gng.png"
              alt="Home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="absolute inset-0 flex items-end sm:items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-0">
              <div className="max-w-2xl">
                <p className="text-white/90 text-sm sm:text-base mb-2">
                  Reach Your Max Speed
                </p>
                <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Bersepeda bukan sekadar olahraga,
                  <br className="hidden sm:block" />
                  tapi cara mengekspresikan suasana hati.
                </h1>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/Catalog"
                    className="bg-white text-black px-5 py-3 rounded-full font-semibold shadow hover:opacity-90"
                  >
                    Lihat Catalog
                  </Link>
                  <Link
                    href="/Contact"
                    className="border bg-white text-white px-5 py-3 rounded-full font-semibold hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg border p-6 sm:p-8 mt-25">
            <h2 className="text-xl sm:text-2xl font-bold">Lihatlah koleksi kami</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Kami menjual berbagai kelengkapan sepeda mulai dari frame, wheel, dan component
              yang sangat berkualitas.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="w-full aspect-square rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/uploads/dolan.png"
                    alt="Frame"
                    className="w-full h-full object-contain hover:scale-[1.03] transition-transform"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Frame</h3>
                    <p className="text-gray-600 text-sm mt-1">Rangka ringan & kuat</p>
                  </div>
                </div>

                <Link
                  href="/Frame"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f3c623] px-5 py-3 font-semibold hover:opacity-90"
                >
                  Lihat Koleksi
                </Link>
              </div>
            </div>

            {/* Wheel */}
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="w-full aspect-square rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/uploads/mavic.png"
                    alt="Wheel"
                    className="w-full h-full object-contain hover:scale-[1.03] transition-transform"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-bold text-lg">Wheel</h3>
                  <p className="text-gray-600 text-sm mt-1">Stabil & siap ngebut</p>
                </div>

                <Link
                  href="/Wheel"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f3c623] px-5 py-3 font-semibold hover:opacity-90"
                >
                  Lihat Koleksi
                </Link>
              </div>
            </div>

            {/* Component */}
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="w-full aspect-square rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/uploads/chain.png"
                    alt="Component"
                    className="w-full h-full object-contain hover:scale-[1.03] transition-transform"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-bold text-lg">Component</h3>
                  <p className="text-gray-600 text-sm mt-1">Part original & awet</p>
                </div>

                <Link
                  href="/Component"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f3c623] px-5 py-3 font-semibold hover:opacity-90"
                >
                  Lihat Koleksi
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
