import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Véloz",
  description: "Generate by Arka Putra Yazaka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white font-[lexend]">
        {children}
      </body>
    </html>
  );
}
