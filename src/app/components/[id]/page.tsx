import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import {
  formatWhatsAppMessage,
  getProduct,
  productsByCategory,
  whatsappNumber,
} from "@/lib/products";

export function generateStaticParams() {
  return productsByCategory.components.map((product) => ({ id: product.id }));
}

export default function ComponentDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct("components", params.id);

  if (!product) {
    notFound();
  }

  const whatsappMessage = formatWhatsAppMessage([{ product, quantity: 1 }]);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="page-shell flex flex-col gap-16 py-32 md:py-36">
      <section className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start py-5">
        <div className="card-surface overflow-hidden rounded-[var(--radius-lg)] bg-white">
          <div className="relative h-[420px] bg-slate-900/5">
            <Image src={product.image} alt={product.name} fill className="object-contain p-10" priority />
          </div>
          <div className="flex flex-col gap-4 border-t border-slate-100 bg-white/85 p-6 text-sm text-slate-600 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {product.name}
            </p>
            <p className="text-lg font-semibold text-slate-900">{product.priceLabel}</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900">{product.name}</h1>
            <p className="text-lg leading-relaxed text-slate-600">{product.headline}</p>
            <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] bg-slate-900 px-6 py-5 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Siap upgrade komponen?
              </p>
              <div className="flex items-center gap-3">
                <AddToCartButton
                  product={product}
                  className="border border-slate-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 hover:brightness-105 focus:ring-slate-200/60"
                />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-foreground)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 whitespace-nowrap"
                >
                  Hubungi sales
                </a>
              </div>
            </div>
          </div>
          {product.specs?.length ? (
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Spesifikasi</h2>
              <dl className="mt-6 space-y-4">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-start justify-between gap-4 rounded-[var(--radius-md)] border border-slate-200/70 bg-white/85 px-5 py-4 text-sm text-slate-600 backdrop-blur"
                  >
                    <dt className="font-semibold text-slate-900">{spec.label}</dt>
                    <dd className="max-w-xs text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
          {product.highlights?.length ? (
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Keunggulan produk</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-[var(--radius-md)] border border-slate-200/70 bg-white/85 px-5 py-4 backdrop-blur"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="rounded-[var(--radius-lg)] bg-white/90 p-6 text-sm leading-relaxed text-slate-600 shadow-sm backdrop-blur">
            <p>
              Ingin diskusi paket komponen lengkap?{" "}
              <Link href="/contact" className="font-semibold text-slate-900 transition hover:text-[var(--accent-foreground)]">
                Hubungi tim kami
              </Link>{" "}
              untuk mendapatkan rekomendasi setup terbaik.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
