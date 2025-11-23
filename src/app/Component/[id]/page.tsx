"use client";

import { use, useEffect, useState } from "react";
import Layout from "@/components/Layout"

export default function DetailComponent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`/api/admin/component/${id}`);
      const json = await res.json();
      setData(json);
    }
    loadData();
  }, [id]);

  if (!data) return <div className="p-10 font-[lexend]">Loading...</div>;

  return (
    <Layout>
    <div className="p-10 font-[lexend] flex gap-10">
      <div className="w-[350px] bg-white shadow-lg rounded-2xl p-5">
        <div className="w-full h-60">
          <img
            src={data?.gambar ?? "/no-image.png"}
            alt={data?.judul ?? "Product Image"}
            className="object-contain w-full h-full"
          />
        </div>

        <h2 className="mt-3 font-semibold text-xl">{data?.judul}</h2>
        <p className="text-red-600 font-bold text-lg">
          Rp {data?.harga ? Number(data.harga).toLocaleString("id-ID") : "-"}
        </p>
      </div>

      <div className="flex-1 bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-3">Detail Product</h3>
        <p className="text-gray-700 whitespace-pre-line">{data?.deskripsi}</p>
      </div>
    </div>
    </Layout>
  );
}
