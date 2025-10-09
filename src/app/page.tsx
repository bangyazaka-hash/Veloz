import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { getAllProducts, type Product } from "@/lib/products";

const spotlight = getAllProducts().slice(0, 3);

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const essentials = [
  {
    title: "Frameset",
    copy: "Koleksi frameset kelas dunia dari manufaktur terpercaya untuk performa tanpa kompromi.",
    href: "/frames",
  },
  {
    title: "Wheelset",
    copy: "Pilihan wheelset aero hingga climbing yang ringan namun kuat untuk segala kondisi.",
    href: "/wheels",
  },
  {
    title: "Komponen",
    copy: "Handlebar, groupset, dan aksesoris premium yang menyempurnakan setup sepeda Anda.",
    href: "/components",
  },
];

const stats = [
  { value: "500+", label: "Produk tersertifikasi" },
  { value: "72 Jam", label: "Pengiriman di Pulau Jawa" },
  { value: "4.9/5", label: "Kepuasan pelanggan" },
];

function productDetailPath(product: Product) {
  return `/${product.category}/${product.id}`;
}

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-32 top-12 hidden h-48 w-48 rounded-full bg-[var(--accent)]/30 blur-3xl lg:block" />
        <div className="absolute -right-20 -top-12 hidden h-60 w-60 rounded-full bg-slate-900/10 blur-3xl md:block" />
        <div className="page-shell relative grid gap-16 pb-36 pt-32 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:pb-40 lg:pt-36">
          <div className="space-y-10 py-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
              Koleksi 2025
              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Temukan sepeda dan aksesoris terbaik untuk menaklukkan setiap rute.
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
              Veloz menghadirkan kurasi produk premium dari brand ternama dengan layanan personal
              untuk membantu Anda menemukan setup impian. Dari latihan rutin hingga race day,
              kami menyiapkan performa terbaik.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/catalog"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-foreground)] shadow-lg transition hover:brightness-110"
              >
                Jelajahi katalog
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Konsultasi cepat
              </Link>
            </div>
            <div className="grid gap-6 pt-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/60 bg-white/80 p-4 text-center shadow-sm backdrop-blur">
                  <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="card-surface relative overflow-hidden p-6">
              <div className="absolute -left-16 top-4 h-24 w-24 rounded-full bg-[var(--accent)]/40 blur-3xl" />
              <div className="absolute -bottom-8 right-0 h-32 w-32 rounded-full bg-slate-900/15 blur-3xl" />
              <div className="relative flex h-[430px] items-center justify-center">
                <Image
                  src="/black.jpg"
                  alt="Veloz hero"
                  fill
                  className="rounded-[var(--radius-lg)] object-cover opacity-90"
                  priority
                />
                <div className="absolute inset-x-6 -bottom-4 rounded-3xl bg-white/90 p-5 shadow-xl ring-1 ring-slate-100 backdrop-blur">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">Promo Minggu Ini</p>
                      <p className="text-lg font-semibold text-slate-900">Diskon hingga 25%</p>
                    </div>
                    <Link
                      href="/catalog"
                      className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:brightness-110"
                    >
                      Lihat katalog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="page-shell space-y-16 pb-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Spotlight rides</h2>
              <p className="mt-2 max-w-xl text-pretty text-base text-slate-600">
                Pilihan paling favorit minggu ini dari komunitas Veloz. Setiap unit telah melalui
                proses quality check dan siap dikirim.
              </p>
            </div>
            <Link
              href="/catalog"
              className="text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-slate-900"
            >
              Lihat semua koleksi &gt;
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {spotlight.map((product) => {
              const discountedPrice = currencyFormatter.format(Math.round(product.price * 0.9));
              return (
                <article key={product.id} className="card-surface flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)]">
                  <div className="relative h-56 bg-slate-900/5">
                    <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 shadow-sm">
                      {product.category}
                    </span>
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{product.headline}</p>
                    </div>
                    <div className="mt-auto flex flex-col gap-3">
                      <div>
                        <p className="text-xs font-medium text-slate-500 line-through">{product.priceLabel}</p>
                        <p className="text-lg font-semibold text-slate-900">{discountedPrice}</p>
                      </div>
                      <AddToCartButton product={product} className="w-full justify-center px-6 py-3 text-sm" />
                      <Link
                        href={productDetailPath(product)}
                        className="w-full rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                      >
                        Detail produk &gt;
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="page-shell flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl font-semibold text-slate-900">Kebutuhan utama untuk setup ideal</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Kami menyediakan dukungan end-to-end dari konsultasi setup, pilihan komponen, hingga
              after service. Pastikan setiap detail sepeda Anda sesuai gaya bersepeda dan target
              performa.
            </p>
            <Link
              href="/contact"
              className="text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-slate-900"
            >
              Konsultasi gratis &gt;
            </Link>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {essentials.map((item) => (
              <div key={item.title} className="card-surface flex h-full flex-col justify-between gap-4 rounded-[var(--radius-lg)] p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.copy}</p>
                </div>
                <Link
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-slate-900"
                >
                  Selengkapnya &gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
