import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 font-[lexend] p-10 relative">
      <hr className="mb-6" />

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/3">
          <div className="bg-[#f3c623] w-25 h-10 rounded-full flex items-center justify-center mb-2">
            <h1 className="font-bold text-lg text-center">Véloz</h1>
          </div>
          <div> 
            <h2 className="font-bold mb-2 ml-30 mt-[-35]">Reach Your Max Speed</h2>
          </div>
          <p className="text-justify mb-5">
            Veloz adalah sebuah web yang menyediakan catalog sepeda di toko. Web ini hanya menampilkan sepeda yang tersedia di toko owner.
          </p>
        </div>

        <div className="md:w-1/3 ml-30">
          <h2 className="font-bold mb-2">Navigation</h2>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Frame">Frame</Link></li>
            <li><Link href="/Wheel">Wheel</Link></li>
            <li><Link href="/Component">Component</Link></li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <h2 className="font-bold mb-2">Hubungi kami</h2>
          <p>Jl. Pangauban Kec. Katapang</p>
          <p><Link href="mailto:yourveloz@gmail.com">yourveloz@gmail.com</Link></p>
          <p>Whatsapp: <Link href="https://wa.me/qr/6CAEMBCFK3XVK1">0895411959084</Link></p>
          <div className="flex gap-4 mt-2">
            <Link href="https://www.tiktok.com/@yazaka37?_r=1&_t=ZS-91No59d2nma">Tiktok</Link>
            <Link href="https://www.instagram.com/yzakaa_?igsh=bW15YXVvdGJwY21o">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}