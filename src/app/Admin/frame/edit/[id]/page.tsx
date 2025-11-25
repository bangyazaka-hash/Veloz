"use client";

import { use, useEffect, useState } from "react";

export default function EditFramePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [judul, setJudul] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`/api/admin/frame/${id}`);
      const data = await res.json();

      setJudul(data.judul);
      setHarga(String(data.harga));
      setDeskripsi(data.deskripsi);
      setPreview(data.gambar);
    }

    loadData();
  }, [id]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("harga", harga);
    formData.append("deskripsi", deskripsi);

    if (gambar) {
      formData.append("gambar", gambar);
    }

    const res = await fetch(`/api/admin/frame/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      alert("Frame berhasil diperbarui");
      window.location.href = "/Admin/frame";
    } else {
      alert("Gagal mengupdate frame");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Edit Frame</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Merk Frame"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="rounded-full p-3 bg-gray-100 outline-none shadow-sm"
            required
          />

          <input
            type="number"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="rounded-full p-3 bg-gray-100 outline-none shadow-sm"
            required
          />

          <textarea
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="rounded-2xl p-4 bg-gray-100 outline-none shadow-sm min-h-[120px] resize-none"
            required
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-40 object-contain rounded-lg"
            />
          )}

          <label className="flex flex-col gap-2">
            <span className="font-semibold">Ganti Gambar</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setGambar(e.target.files?.[0] || null)}
              className="rounded-full p-3 bg-gray-100 shadow-sm"
            />
          </label>

          <button
            type="submit"
            className="bg-[#f3c623] text-white p-3 rounded-full shadow hover:bg-yellow-300"
          >
            Update Frame
          </button>
        </form>
      </div>
    </div>
  );
}
