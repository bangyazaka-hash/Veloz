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
      </body>
    </html>
  )

}