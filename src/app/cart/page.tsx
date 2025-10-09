"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/components/cart-provider";
import { formatWhatsAppMessage, whatsappNumber } from "@/lib/products";

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  const whatsappLink = useMemo(() => {
    const message = formatWhatsAppMessage(items);
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [items]);

  const hasItems = items.length > 0;

  return (
    <div className="page-shell py-32 md:py-36">
      <div className="flex flex-col gap-10 py-5">
        <header className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Cart pelanggan
          </span>
          <h1 className="text-4xl font-semibold text-slate-900">Rangkum kebutuhanmu di sini.</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Checkout melalui WhatsApp untuk menyelesaikan pembayaran dan atur jadwal pengambilan atau pengiriman
            langsung dengan tim kami.
          </p>
        </header>

        {hasItems ? (
          <div className="grid gap-10 lg:grid-cols-[1fr_0.45fr]">
            <div className="space-y-6">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="card-surface flex flex-col gap-4 rounded-[var(--radius-lg)] border border-white/60 bg-white/90 p-6 shadow-sm backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                        {product.category.toUpperCase()}
                      </p>
                      <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.headline}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                    >
                      Hapus
                    </button>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:border-slate-100 disabled:text-slate-300"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        disabled={quantity === 1}
                      >
                        -
                      </button>
                      <span className="min-w-[3rem] text-center text-sm font-semibold text-slate-900">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-base font-semibold text-slate-900">
                      {currencyFormatter.format(product.price * quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="card-surface flex h-full flex-col gap-6 rounded-[var(--radius-lg)] border border-white/60 bg-white/90 p-6 shadow-lg backdrop-blur">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Ringkasan
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>Total item</span>
                  <span className="font-semibold text-slate-900">{totalItems}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-base font-semibold text-slate-900">
                  <span>Estimasi total</span>
                  <span>{currencyFormatter.format(totalPrice)}</span>
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-foreground)] transition hover:brightness-110"
                >
                  Checkout via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  Kosongkan cart
                </button>
              </div>
              <p className="text-xs leading-relaxed text-slate-500">
                Setelah mengirim pesan WhatsApp, tim kami akan mengonfirmasi ketersediaan unit, pilihan pengiriman,
                dan tata cara pembayaran.
              </p>
            </aside>
          </div>
        ) : (
          <div className="rounded-[var(--radius-lg)] border border-dashed border-slate-300 bg-white/70 p-10 text-center shadow-sm backdrop-blur">
            <h2 className="text-2xl font-semibold text-slate-900">Cart masih kosong</h2>
            <p className="mt-2 text-sm text-slate-600">
              Jelajahi katalog kami dan tambahkan produk yang kamu butuhkan sebelum checkout via WhatsApp.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/catalog"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-foreground)] transition hover:brightness-110"
              >
                Buka katalog
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Hubungi kami
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
