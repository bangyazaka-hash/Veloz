import Link from "next/link";
import Layout from "@/components/Layout"

export default function About() {
  return (
    <Layout>
    <div className="flex items-start justify-between p-5">
      <div className="m-10">
        <h1 className="absolute font-[lexend] font-semibold m-15 mt-20 text-2xl">
          Customer Service
        </h1>

        <p className="absolute font-[lexend] w-[700] m-10 p-7 opacity-60 text-justify leading-relaxed mt-55 inset-y-0 left-15 w-16 text-xl">
          Pelayanan dari Veloz dimulai dari pukul 10.00-17.00.
          Scan barcode yang ada di sisi kanan untuk ke WhatsApp kami,
          atau bisa menghubungi lewat media sosial kami di bawah ini.
          Terima kasih.
        </p>
      </div>

      <div className="relative">
        <div className="bg-[#FFFFFF] shadow-lg w-50 h-60 ml-230 mt-30 rounded-xl"></div>

        <img
          src="/uploads/bar.png"
          alt="Contact"
          className="ml-230 mt-[-250px] w-[200px] h-[200px]"
        />
      </div>

      <div className="w-240">
        <img
          src="/uploads/email.png"
          alt="Contact"
          className="absolute inset-y-0 left-29 w-11 mt-95"
          width={40}
          height={40}
        />

        <h3 className="absolute inset-y-0 left-45 w-11 mt-98">
          <Link href="mailto:yourveloz@gmail.com">yourveloz@gmail.com</Link>
        </h3>
      </div>

      <div className="w-240">
        <img
          src="/uploads/ig.png"
          alt="Contact"
          className="absolute inset-y-0 left-28 w-13 mt-108"
          width={40}
          height={40}
        />

        <h3 className="absolute inset-y-0 left-45 w-11 mt-112">
          <Link href="https://www.instagram.com/yzakaa_">@yzakaa_</Link>
        </h3>
      </div>

      <div className="w-240">
        <img
          src="/uploads/tiktok.png"
          alt="Contact"
          className="absolute inset-y-0 left-30 mt-125"
          width={40}
          height={40}
        />

        <h3 className="absolute inset-y-0 left-45 w-11 mt-128">
          <Link href="https://www.tiktok.com/@yazaka37">@Yazaka.</Link>
        </h3>
      </div>
    </div>
    </Layout>
  );
}
