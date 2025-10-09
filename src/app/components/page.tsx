import Image from "next/image";
import Link from "next/link";
import { productsByCategory } from "@/lib/products";
import { AddToCartButton } from "@/components/add-to-cart-button";

const components = productsByCategory.components;

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="page-shell pb-28 pt-32 md:pb-32 md:pt-36">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8 py-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Komponen premium
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Upgrade performa sepeda dengan komponen terbaik.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Semua komponen resmi bergaransi pabrikan dan tersedia layanan instalasi oleh mekanik tersertifikasi Veloz.
            </p>
            <div className="rounded-[var(--radius-lg)] bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Workshop premium
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Booking slot pemasangan, wheel truing, dan bleeding hidrolik melalui customer service kami.
              </p>
            </div>
          </div>
          <div className="card-surface relative overflow-hidden">
            <div className="relative h-[420px] bg-white">
              <Image src="/scot.jpg" alt="Komponen pilihan Veloz" fill className="object-cover" priority />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-slate-100 backdrop-blur">
              <p className="text-sm font-semibold text-slate-500">
                Konsultasi upgrade gratis untuk member komunitas Veloz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="page-shell space-y-12">
          <header className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Pilihan komponen unggulan</h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">
                Tingkatkan efisiensi, kenyamanan, dan daya tahan sepeda dengan komponen kurasi tim Veloz.
              </p>
            </div>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {components.map((product) => {
              const discountedPrice = currencyFormatter.format(Math.round(product.price * 0.9));
              return (
                <article
                  key={product.id}
                  className="card-surface flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)]"
                >
                  <div className="relative h-56 bg-slate-900/5">
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
                        href={`/components/${product.id}`}
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
    </div>
  );
}
