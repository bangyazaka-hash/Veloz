import type { Metadata } from "next";
import { Geist_Mono } from"next/font/google";
import { Lexend } from "next/font/google";
import Link from"next/link";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-Mono",
  subsets: ["latin"]
});  

export const metadata: Metadata =  {
  title: "Véloz",
  description: "Generate by arka putra yazaka"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      className={`${lexend.variable} ${geistMono.variable} antialiased`}>
      
        <header className="bg-[#f3c623] shadow-lg h-12 flex items-center justify-between px-4">
          <nav className="flex font-[lexend] justify-end space-4 gap-4">
            <div className="font-bold text-lg, flex space-x-4">
              <hr></hr>
            <h1 className="font-bold h-6 flex items-center px-2 text-2xl">Véloz</h1>
            <div className="flex absolute right-0 gap-4 ">
            <Link href="/">Home</Link>
            <div className="relative group"><Link href="/Catalog">Catalog</Link>
              <div className="absolute hidden group-hover:block bg-white z-10">
                <div className="hover:bg-gray-200 text-center px-4 py-2"><Link href="Frame">Frame</Link></div>
                <div className="hover:bg-gray-200 text-center px-4 py-2"><Link href="Wheel">Wheel</Link></div>
                <div className="hover:bg-gray-200 text-center px-4 py-2"><Link href="Component">Component</Link></div>
              </div>
              </div>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact Us</Link>
            </div>
            </div>
            
          </nav>
        </header>
        { children }
        <div className="inset-x-0 bottom-0 h-16 p-3"></div>

        <footer className="relative font-[lexend]"><hr className="mt-30"></hr>
        <div className="bg-[#f3c623] w-20 h-10 m-5 rounded-full ml-30">
          <h1 className="flex font-bold text-lg text-center py-1 ml-4">Véloz</h1>
          <h1 className="font-bold w-50 ml-25 mt-[-30] ">Reach Your Max Speed</h1>
          <p className="w-70 mt-5 text-justify">Veloz adalah sebuah web yang menyediakan catalog sepeda disebuah toko. Web ini hanya menampilkan sepeda yang tersedia di toko owner.</p>
          </div>
          <div className="relative ml-160 mt-[-50]">
          <h1 className="font-bold">Navigation</h1>
          <div className="relative"><Link href="/">Home</Link></div>
          <div className="relative"><Link href="Frame">Frame</Link></div>
          <div className="relative"><Link href="Wheel">Wheel</Link></div>
          <div className="relative"><Link href="Component">Component</Link></div>
          </div>    

          <div className="relative ml-250 mt-[-120]">
          <h1 className="font-bold">Hubungi kami</h1>
          <div className="relative">Jl.Pangauban Kec.Katapang</div>
          <div className="relative"><Link href="mailto:yourveloz@gmail.com">yourveloz@gmail.com</Link></div>
          <div className="relative"><Link href="https://wa.me/qr/6CAEMBCFK3XVK1">Whatsapp</Link> : 0895411959084</div>
          <div className="flex flex-row gap-5">
          <div className="relative"><Link href="https://www.tiktok.com/@yazaka37?_r=1&_t=ZS-91No59d2nma">Tiktok</Link></div>
          <div className="relative"><Link href="https://www.instagram.com/yzakaa_?igsh=bW15YXVvdGJwY21o">Instagram</Link></div>
          </div>
          </div>
        </footer>
      </body>
    </html>
  )

}