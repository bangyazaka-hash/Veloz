"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DaftarComponentPage() {
  const [data, setData] = useState([]);

  async function loadData() {
    const res = await fetch("/api/admin/frame");
    const json = await res.json();
    setData(json);
  }

  async function handleDelete(id: number) {
    if (!confirm("Yakin ingin menghapus frame ini?")) return;

    const res = await fetch(`/api/admin/frame/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Frame berhasil dihapus");
      loadData();
    } else {
      alert("Gagal menghapus frame");
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-white rounded-xl">
      <div className="p-6 flex justify-between items-center">
        <div className="text-3xl font-bold">Daftar Frame</div>

        <Link
          href="/Admin/frame/tambah"
          className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:opacity-70"
        >
          <span className="text-xl">+</span> Tambah Frame
        </Link>
      </div>

      <div className="px-6 flex flex-col gap-4">
        {data.map((item: any) => (
          <div
            key={item.id}
            className="w-full bg-gray-100 rounded-full flex items-center justify-between p-3 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.gambar}
                alt="Frame"
                className="w-20 h-14 object-cover rounded-full"
              />
              <div>
                <div className="font-semibold">{item.judul}</div>
                <div className="text-red-500 font-bold">
                  Rp. {item.harga.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-4 relative z-10">
              <Link href={`/Admin/frame/edit/${item.id}`}>
                <button className="bg-green-500 text-white p-2 rounded-full hover:opacity-70">
                  ✏️
                </button>
              </Link>

              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}