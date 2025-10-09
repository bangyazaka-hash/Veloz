import Link from "next/link";
import { productsByCategory } from "@/lib/products";

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const categories = [
  {
    key: "frames",
    title: "Frames",
    description: "Kelola koleksi frameset aero, climbing, hingga endurance.",
  },
  {
    key: "wheels",
    title: "Wheels",
    description: "Atur wheelset aero dan climbing siap race.",
  },
  {
    key: "components",
    title: "Components",
    description: "Groupset, cockpit, dan aksesoris premium untuk upgrade pelanggan.",
  },
] as const;

export default function AdminProductsPage() {
  return (
    <div className="page-shell flex flex-col gap-16 py-32 md:py-36">
      <section className="space-y-6 py-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Admin
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Catalog Manager
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              CRUD dashboard untuk frames, wheels, dan components. Gunakan tombol aksi di bawah untuk menambahkan produk baru,
              memperbarui salinan, atau menandai produk sebagai tidak tersedia.
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Lihat katalog publik
          </Link>
        </div>
      </section>

      {categories.map((category) => {
        const products = productsByCategory[category.key];
        return (
          <section key={category.key} className="space-y-6 py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold text-slate-900">{category.title}</h2>
                <p className="text-sm leading-relaxed text-slate-600">{category.description}</p>
              </div>
              <button className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-foreground)] transition hover:brightness-110">
                + Tambah Produk
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <tr>
                    <th className="px-6 py-4 text-left">Produk</th>
                    <th className="px-6 py-4 text-left">Harga</th>
                    <th className="px-6 py-4 text-left">Headline</th>
                    <th className="px-6 py-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {products.map((product) => (
                    <tr key={product.id} className="transition hover:bg-slate-50/60">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">{product.name}</div>
                        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.id}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">{product.priceLabel}</div>
                        <div className="text-xs text-slate-500">
                          Diskon 10%: {currencyFormatter.format(Math.round(product.price * 0.9))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{product.headline}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                            Edit
                          </button>
                          <button className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600 transition hover:border-rose-300 hover:text-rose-700">
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}
