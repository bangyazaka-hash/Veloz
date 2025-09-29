import type { Metadata } from "next";
import {Geist, Geist_Mono} from"next/font/google";
import Link from"next/link";
import image from "next/image";
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
          <h1 className="font-bold h-6 flex items-center px-2 text-2xl">Veloz</h1>
          <nav className="flex justify-end space-4 gap-4">
            <div className="font-bold text-lg, flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/Frame">Frame</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact Us</Link>
            </div>
          </nav>
        </header>
        { children }
      </body>
    </html>
  )

}