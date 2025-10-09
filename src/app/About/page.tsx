import Image from "next/image";

const values = [
  {
    title: "Komunitas",
    description: "Kami tumbuh bersama komunitas pesepeda, menghadirkan event mingguan dan sesi latihan terstruktur.",
  },
  {
    title: "Kurasi Produk",
    description: "Setiap produk melalui proses seleksi performa, durabilitas, dan ketersediaan sparepart.",
  },
  {
    title: "Layanan Personal",
    description: "Bike fitting, konsultasi upgrade, hingga after sales dikelola tim profesional tersertifikasi.",
  },
];

const milestones = [
  {
    year: "2018",
    note: "Veloz terbentuk sebagai komunitas gowes akhir pekan.",
  },
  {
    year: "2020",
    note: "Membuka workshop pertama dengan layanan bike fitting.",
  },
  {
    year: "2023",
    note: "Resmi menjadi distributor frameset dan wheelset premium.",
  },
  {
    year: "2025",
    note: "Meluncurkan platform digital untuk konsultasi dan pemesanan online.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-16 py-5">
      <section className="page-shell pb-28 pt-32 md:pb-32 md:pt-36">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Tentang Veloz
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Teman berkendara yang lahir dari kecintaan terhadap sepeda.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Veloz terlahir untuk menjadi sahabatmu di jalanan. Kami percaya bersepeda bukan sekadar olahraga,
              melainkan cara mengekspresikan suasana hati dan bertemu dengan komunitas yang suportif.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-slate-600">
              Dengan tim mekanik dan coach berpengalaman, kami berkomitmen menghadirkan pengalaman menyeluruh mulai dari
              pemilihan sepeda, perawatan, hingga program latihan.
            </p>
          </div>
          <div className="card-surface overflow-hidden rounded-[var(--radius-lg)]">
            <div className="relative h-[420px]">
              <Image src="/contact.png" alt="Tim Veloz" fill className="object-contain p-8" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell space-y-10">
          <h2 className="text-3xl font-semibold text-slate-900">Nilai yang kami pegang</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="card-surface flex h-full flex-col gap-4 rounded-[var(--radius-lg)] p-6">
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="page-shell space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900">Perjalanan kami</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
              Dari komunitas kecil hingga platform digital, setiap tahun menjadi fondasi bagi layanan yang kami hadirkan hari ini.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-y-8 left-4 hidden w-px bg-gradient-to-b from-[var(--accent)]/70 via-slate-200 to-slate-200 md:block" />
            <div className="grid gap-6 md:grid-cols-2">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className="relative flex h-full flex-col rounded-[var(--radius-lg)] border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-[var(--accent-foreground)] shadow">
                      {item.year}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Langkah {index + 1}
                      </p>
                      <p className="text-base font-semibold text-slate-900">Perkembangan {item.year}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
