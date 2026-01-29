"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";

type WheelItem = {
  id: number | string;
  judul: string;
  harga: number;
  gambar: string;
};

export default function WheelPage() {
  const [data, setData] = useState<WheelItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/wheel");
        const json = await res.json();
        setData(Array.isArray(json) ? json : []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const count = useMemo(() => data.length, [data]);

  return (
    <Layout>
      <div className="font-[lexend] w-full">
        {/* HERO */}
        <section className="relative w-full overflow-hidden">
          <div className="relative h-[240px] sm:h-[320px] lg:h-[380px] w-full">
            <img
              src="/uploads/rb.jpg"
              alt="Wheel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="max-w-2xl">
                <p className="text-white/90 text-sm sm:text-base">Catalog</p>
                <h1 className="text-white text-2xl sm:text-4xl font-extrabold tracking-tight mt-1">
                  Wheel Collection
                </h1>
                <p className="text-white/90 mt-3 leading-relaxed">
                  Pilih wheel yang cocok buat gaya gowes kamu. Lihat detail untuk spesifikasi dan harga.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-4 py-2 text-sm backdrop-blur">
                  <span className="font-semibold">{loading ? "Loading..." : `${count} item`}</span>
                  <span className="opacity-70">•</span>
                  <span className="opacity-90">Ready in store</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIST */}
        <section className="w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header kecil */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Semua Wheel</h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  Klik produk untuk melihat detail.
                </p>
              </div>

              <Link
                href="/Contact"
                className="inline-flex items-center justify-center rounded-full text-white px-5 py-3 font-semibold hover:opacity-90 w-full sm:w-auto"
              >
                Tanya Stok / Pesan
              </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {loading &&
                Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border bg-white p-5 shadow-sm animate-pulse"
                  >
                    <div className="w-full aspect-[4/3] rounded-xl bg-gray-200" />
                    <div className="h-4 bg-gray-200 rounded mt-4 w-3/4" />
                    <div className="h-4 bg-gray-200 rounded mt-3 w-1/2" />
                  </div>
                ))}

              {!loading &&
                data.map((item) => (
                  <Link
                    key={item.id}
                    href={`/Wheel/${item.id}`}
                    className="group block"
                  >
                    <div className="w-full bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-5">
                        <div className="w-full aspect-[4/3] rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                          <img
                            src={item.gambar}
                            alt={item.judul}
                            className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform"
                          />
                        </div>

                        <div className="mt-4">
                          <div className="text-base sm:text-lg font-semibold break-words line-clamp-2">
                            {item.judul}
                          </div>

                          <div className="mt-2 flex items-center justify-between gap-3">
                            <div className="text-lg sm:text-xl font-extrabold text-red-500">
                              Rp. {Number(item.harga).toLocaleString("id-ID")}
                            </div>

                            <span className="text-sm font-semibold text-black/70 group-hover:text-black transition-colors">
                              Detail →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {!loading && data.length === 0 && (
              <div className="mt-10 rounded-2xl border bg-white p-8 text-center">
                <p className="font-semibold">Belum ada produk wheel.</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Coba cek lagi nanti atau hubungi toko.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
