import type { Metadata } from "next";
import {Geist, Geist_Mono} from"next/font/google";
import Link from"next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-Mono",
  subsets: ["latin"]
});

export const metadata: Metadata =  {
  title: "Created next app",
  description: "Generate by create next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-[#F3C623] h-12 flex items-center justify-between px-4">
          <h1 className="font-bold h-6 flex items-center px-2 text-2xl">Véloz</h1>
          <nav className="flex justify-end space-4 gap-4">
            <div className="font-bold text-lg, flex space-x-4">
            <Link href="/">Home</Link>

            <div className="relative group"><Link href="/">Catalog</Link>
              <div className="absolute hidden group-hover:block bg-white z-10">
                <div className="hover:bg-gray-200 text-center px-4 py-2"><Link href="Frame">Frame</Link></div>
                <div className="hover:bg-gray-200 text-center px-4 py-2"><Link href="Wheel">Wheel</Link></div>
                <div className="hover:bg-gray-200 text-center px-4 py-2"><Link href="Component">Component</Link></div>
              </div>

            </div>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact Us</Link>
            </div>
            
          </nav>
        </header>
        { children }
        <div className="absolute inset-x-0 bottom-0 h-16 p-3"></div>

        <footer className="relative"><hr className="mt-50"></hr>
        <div className="bg-[#f3c623] w-20 h-10 m-5 rounded-full ml-30">
          <h1 className="flex font-bold text-lg ml-2 text-center p-1">Veloz</h1>
          <h1 className="font-bold w-50 ml-25 mt-[-30] ">Reach Your Max Speed</h1>
          <p className="w-70 mt-5 text-justify">Veloz adalah sebuah website catalog sepeda namun juga menyediakan barangnya, semua pemesanan dialihkan ke whatsapp</p>
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
          <div className="relative">Veloz@gmail.com</div>
          <div className="relative">Whatsapp : 0895411959084</div>
          <div className="relative">Tiktok</div>
          <div className="relative">Instagram</div>
          </div>    
        </footer>
      </body>
    </html>
  )

}