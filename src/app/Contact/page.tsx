import Link from "next/link";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="font-[lexend] p-10 max-w-6xl mx-auto space-y-12">

        <h1 className="text-3xl font-semibold">Customer Service</h1>

        <p className="text-gray-700 leading-relaxed max-w-2xl text-justify">
          Pelayanan dari Veloz dimulai dari pukul 10.00-17.00. 
          Scan barcode yang ada di sisi kanan untuk ke WhatsApp kami,
          atau bisa menghubungi lewat media sosial kami di bawah ini.
          Terima kasih.
        </p>

        <div className="flex flex-wrap gap-14 items-start">

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img 
              src="/uploads/email.png" 
              width={40} 
              height={40} 
              alt="email" />
              <Link href="mailto:yourveloz@gmail.com">yourveloz@gmail.com</Link>
            </div>

            <div className="flex items-center gap-4">
              <img 
              src="/uploads/ig.png" 
              width={40} 
              height={40} 
              alt="instagram" />
              <Link href="https://www.instagram.com/yzakaa_">@yzakaa_</Link>
            </div>

            <div className="flex items-center gap-4">
              <img 
              src="/uploads/tiktok.png"
              width={40} 
              height={40} 
              alt="tiktok" />
              <Link href="https://www.tiktok.com/@yazaka37">@Yazaka.</Link>
            </div>
          </div>

          <div className="ml-120 mt-[-100]">
            <div className="bg-white shadow-lg w-[200px] h-[230px] rounded-xl flex items-center justify-center">
              <img
                src="/uploads/bar.png"
                alt="WhatsApp Barcode"
                className="w-[180px] h-[180px]"
              />
            </div>
          </div>
        </div>
        <div className="h-10" />
      </div>
    </Layout>
  );
}
