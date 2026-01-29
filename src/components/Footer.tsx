import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-[lexend]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <hr className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#f3c623] h-10 px-6 rounded-full flex items-center justify-center">
                <h1 className="font-bold text-lg">Véloz</h1>
              </div>
              <h2 className="font-bold">Reach Your Max Speed</h2>
            </div>

            <p className="text-sm sm:text-base text-justify">
              Veloz adalah sebuah web yang menyediakan catalog sepeda di toko.
              Web ini hanya menampilkan sepeda yang tersedia di toko owner.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-bold mb-3">Navigation</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/Frame" className="hover:underline">Frame</Link></li>
              <li><Link href="/Wheel" className="hover:underline">Wheel</Link></li>
              <li><Link href="/Component" className="hover:underline">Component</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold mb-3">Hubungi kami</h2>
            <p className="mb-1">Jl. Pangauban Kec. Katapang</p>

            <p className="mb-1">
              <Link className="hover:underline" href="mailto:yourveloz@gmail.com">
                yourveloz@gmail.com
              </Link>
            </p>

            <p className="mb-3">
              Whatsapp:{" "}
              <Link className="hover:underline" href="https://wa.me/6289630165130">
                +62-896-3016-5130
              </Link>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link className="hover:underline" href="https://www.tiktok.com/@yazaka37?_r=1&_t=ZS-91No59d2nma">
                Tiktok
              </Link>
              <Link className="hover:underline" href="https://www.instagram.com/yzakaa_?igsh=bW15YXVvdGJwY21o">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
