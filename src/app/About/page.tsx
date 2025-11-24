import Layout from "@/components/Layout"

export default function About() {
  return (
    <Layout>
    <div className="flex items-start justify-between p-5 font-[lexend]">
      <div className="w-1/2 p-10">
        <h1 className="font-semibold text-2xl mb-5">Tentang Kita</h1>

        <p className="opacity-70 text-justify leading-relaxed text-xl">
          Veloz terlahir untuk menjadi temanmu di jalanan.
          Veloz memberikan sensasi kebebasan dan kamu bisa mengekspresikan suasana hati-mu saat bersepeda.
          Veloz dibuat pada tahun 2025 oleh Arka Putra Yazaka dari Indonesia.
          Veloz mengutamakan kenyamananmu.
        </p>

        <h1 className="font-bold text-2xl mt-10">Perjalanan Kami</h1>

        <div className="bg-white shadow-lg w-[400px] p-5 rounded-xl mt-5">
          <div className="bg-[#f3c623] shadow-lg rounded-full w-20 py-2 mb-2 text-center">
            <p className="font-semibold">2024</p>
          </div>

          <p className="leading-relaxed text-justify">
            Berawal dari membaca manhwa bercita-cita membeli sepeda.
          </p>
        </div>
          <div className="bg-white shadow-lg w-[400px] p-5 rounded-xl mt-5">
          <div className="bg-[#f3c623] shadow-lg rounded-full w-20 py-2 mb-2 text-center">
            <p className="font-semibold">2025</p>
          </div>

          <p className="leading-relaxed text-justify">
            Mempunyai sepeda fixie dan membuat website tentang catalog sepeda balap.
          </p>
        </div>
      </div>

      <div className="w-1/2 flex justify-center py-10">
        <div className="bg-[#f3c623] w-[250px] h-[300px] shadow-xl flex mt-5">
          </div>
          <img
            src="/uploads/contact.png"
            alt="Detail"
            className="object-contain w-[300px] h-[300px] ml-[-250]"
          />
        </div>
    </div>
    </Layout>
  );
}
