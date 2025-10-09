import Image from "next/image";
import Link from "next/link";

const contactChannels = [
  {
    title: "Email",
    value: "velozstore@gmail.com",
    href: "mailto:velozstore@gmail.com",
    icon: "/gmail.png",
  },
  {
    title: "Instagram",
    value: "@yzakaa_",
    href: "https://www.instagram.com/yzakaa_",
    icon: "/ig.png",
  },
  {
    title: "TikTok",
    value: "@yazaka",
    href: "https://www.tiktok.com/@yazaka",
    icon: "/tiktok.png",
  },
];

const infoCards = [
  {
    title: "Jam operasional",
    detail: "Senin - Jumat, 10.00 - 17.00 WIB",
  },
  {
    title: "Lokasi workshop",
    detail: "Jl. Cendana No. 09, Jakarta Selatan",
  },
  {
    title: "Layanan darurat",
    detail: "Hubungi WhatsApp 0812-1234-5678 untuk bantuan cepat.",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 py-5">
      <section className="page-shell pb-28 pt-32 md:pb-32 md:pt-36">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Customer Service
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Kami siap membantu setiap kebutuhan bersepeda Anda.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Tim customer experience kami tersedia untuk konsultasi, pemesanan, dan layanan purna jual.
              Pilih kanal komunikasi favoritmu, kami akan merespons secepatnya.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[var(--radius-lg)] border border-slate-200/70 bg-white/70 p-5 text-sm leading-relaxed text-slate-600 shadow-sm backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {card.title}
                  </p>
                  <p className="mt-2 text-base text-slate-700">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface overflow-hidden rounded-[var(--radius-lg)] bg-white">
            <div className="relative h-[420px]">
              <Image src="/bar.png" alt="Hubungi Veloz" fill className="object-contain p-8" priority />
            </div>
            <div className="space-y-4 border-t border-slate-100 bg-white/80 px-6 py-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Pangkas waktu tunggu
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Scan barcode pada kartu member atau tekan tombol kontak di bawah untuk langsung terhubung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <h2 className="text-3xl font-semibold text-slate-900">Saluran komunikasi</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <Link
                key={channel.title}
                href={channel.href}
                className="card-surface flex h-full flex-col items-center gap-4 rounded-[var(--radius-lg)] p-6 text-center transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-14 w-14">
                  <Image
                    src={channel.icon}
                    alt={channel.title}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {channel.title}
                </p>
                <p className="text-base font-semibold text-slate-900">{channel.value}</p>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Hubungi sekarang &gt;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

