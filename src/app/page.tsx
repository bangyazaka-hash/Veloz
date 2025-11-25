import Link from "next/link";
import Layout from "@/components/Layout"

export default function Home() {
  return (
    <Layout>
    <div className="font-[lexend]">
      <div className="relative w-full h-[250px]">
        <img
          src="/uploads/black.jpg"
          alt="Home"
          className="object-cover w-full h-full"
        />

        <p className="absolute mt-[-170] left-10 text-white text-lg leading-relaxed">
          Bersepeda bukanlah sekedar berolahraga <br />
          namun bisa juga untuk mengekspresikan suasana hati kita.
        </p>

        <Link href="/Catalog">
          <div className="absolute left-10 top-10">
            <div className="bg-white w-28 h-10 mt-30 rounded-full shadow-lg flex items-center justify-center">
              <p className="font-semibold">Catalog</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="p-10">
        <div className="flex flex-col items-start">
          <p className="text-4xl font-semibold font-[lexend] mt-10 min-w-[200px]">
            Selamat Datang Di Veloz
          </p>
           <p className="text-xl font-[lexend] mt-10 min-w-[200px]">
            Veloz akan membantu anda untuk memilih perlengkapan sepeda balap anda sebelum anda membeli ketoko kami.
            kami menyediakan perlengkapan sepeda yang berkualitas dan tentunya original. jika anda ingin membeli atau
            bertanya seputar sepeda balap yang tersedia di toko kalian dapat membuka halaman Contact us.
          </p>
          <p className="text-xl font-[lexend] mt-10 min-w-[200px]">
           Terima Kasih.
          </p>

          
        </div>
      </div>
    </div>
    </Layout>
  );
}
