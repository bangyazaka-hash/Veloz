import Image from "next/image";
import Link from "next/link";
import { productsByCategory } from "@/lib/products";

const categoryCards = [
  {
    slug: "frames",
    title: "Frameset",
    description:
      "Rangka pilihan yang memadukan aerodinamika, stiffness, dan kenyamanan jarak jauh. Siap dikombinasikan dengan groupset favoritmu.",
  },
  {
    slug: "wheels",
    title: "Wheelset",
    description:
      "Profil aero hingga climbing yang ringan namun stabil di crosswind. Sudah termasuk tubeless kit siap pakai.",
  },
  {
    slug: "components",
    title: "Komponen",
    description:
      "Groupset, cockpit, dan aksesoris premium untuk menyempurnakan setup sepeda dan meningkatkan efisiensi.",
  },
];

export default function CatalogPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/gng.png"
            alt="Koleksi katalog Veloz"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="page-shell relative pb-36 pt-32 md:pb-40 md:pt-36">
          <div className="max-w-3xl space-y-8 py-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Katalog Veloz
              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-snug sm:text-5xl lg:text-6xl">
              Susun sepeda impianmu dengan kurasi produk terbaik kami.
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              Mulai dari frameset, wheelset, hingga komponen premium-semua tersedia dengan layanan konsultasi,
              instalasi profesional, dan dukungan after-sales.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {categoryCards.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/20"
                >
                  Jelajahi {category.title}
                  <span aria-hidden="true">&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="page-shell space-y-12">
          <header className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Kurasi kategori</h2>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                Klik masing-masing kategori untuk melihat detail produk, tambahkan ke cart, dan lanjutkan proses booking
                melalui WhatsApp.
              </p>
            </div>
            <Link
              href="/contact"
              className="text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-slate-900"
            >
              Konsultasikan kebutuhan &gt;
            </Link>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {categoryCards.map((category) => {
              const featured = productsByCategory[category.slug as keyof typeof productsByCategory][0];
              return (
                <article
                  key={category.slug}
                  className="card-surface flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)]"
                >
                  <div className="relative h-52 bg-slate-900/5">
                    <Image
                      src={featured?.image ?? "/black.jpg"}
                      alt={category.title}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{category.description}</p>
                    </div>
                    <Link
                      href={`/${category.slug}`}
                      className="mt-auto text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:text-slate-900"
                    >
                      Lihat koleksi &gt;
                    </Link>
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

