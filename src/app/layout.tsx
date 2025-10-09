import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigation = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Products" },
  { href: "/frames", label: "Frames" },
  { href: "/wheels", label: "Wheels" },
  { href: "/components", label: "Components" },
];

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: "Veloz",
  description: "Kurasi sepeda dan aksesoris premium untuk setiap petualangan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[var(--foreground)]`}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader navigation={navigation} />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-slate-200/70 py-5 bg-white">
              <div className="page-shell space-y-10 py-16">
                <div className="grid gap-12 text-sm text-slate-600 md:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))]">
                  <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900">
                      <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-bold uppercase text-[var(--accent-foreground)] shadow-sm shadow-[rgba(15,23,42,0.15)]">
                        Veloz
                      </span>
                      Ride beyond limits
                    </Link>
                    <p className="max-w-sm leading-relaxed">
                      Kurasi sepeda dan aksesoris premium dengan layanan personal, konsultasi, dan dukungan after-sales untuk setiap jenis rider.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Navigasi</p>
                    <div className="flex flex-col gap-2">
                      {navigation.map((item) => (
                        <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Hubungi kami</p>
                    <div className="flex flex-col gap-2">
                      <span>Jl. Cendana No. 09, Jakarta Selatan</span>
                      <Link href="mailto:veloz@gmail.com" className="transition hover:text-slate-900">
                        veloz@gmail.com
                      </Link>
                      <span>WhatsApp: 0812-1234-5678</span>
                      <div className="flex items-center gap-4 pt-2">
                        <Link href="https://instagram.com" className="transition hover:text-slate-900">
                          Instagram
                        </Link>
                        <Link href="https://tiktok.com" className="transition hover:text-slate-900">
                          TikTok
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                  <p>&copy; {currentYear} Veloz. All rights reserved.</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link href="/catalog" className="transition hover:text-slate-900">
                      Katalog
                    </Link>
                    <Link href="/contact" className="transition hover:text-slate-900">
                      Hubungi kami
                    </Link>
                    <Link href="/about" className="transition hover:text-slate-900">
                      Tentang Veloz
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}



