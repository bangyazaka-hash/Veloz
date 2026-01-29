"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (loading) return;

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin", // ✅ penting supaya cookie tersimpan
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/Admin");
      } else {
        setError(data.error || "Login gagal");
      }
    } catch {
      setError("Terjadi error. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-[lexend] min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT / BRAND */}
      <div className="bg-[#f3c623] text-black flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3">
            <img
              src="/uploads/Veloz.png"
              alt="Veloz"
              className="w-[160px] h-auto"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold mt-6 leading-tight">
            Reach Your Max Speed
          </h1>

          <p className="mt-3 text-black/80 leading-relaxed">
            Selamat datang di halaman admin. Jika kamu user, silakan kembali ke
            halaman utama.
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 font-semibold hover:opacity-90"
            >
              Kembali ke Home
            </Link>
          </div>

          <p className="mt-6 text-xs text-black/60">*Halaman ini khusus admin.</p>
        </div>
      </div>

      {/* RIGHT / FORM */}
      <div className="bg-white flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight">Login</h2>
            <p className="text-gray-600 mt-2">
              Masukkan username dan password untuk masuk ke dashboard.
            </p>
          </div>

          <div
            className="flex flex-col gap-4"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
          >
            <label className="text-sm font-semibold text-gray-700">
              Username
              <input
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 w-full rounded-2xl p-3 bg-gray-100 outline-none ring-0 focus:bg-white focus:border focus:border-black/20"
              />
            </label>

            <label className="text-sm font-semibold text-gray-700">
              Password
              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-2xl p-3 bg-gray-100 outline-none ring-0 focus:bg-white focus:border focus:border-black/20"
              />
            </label>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading || !username || !password}
              className="mt-2 rounded-full py-3 bg-[#f3c623] w-full shadow-md font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Confirm"}
            </button>

            <p className="text-xs text-gray-500 mt-2">
              Dengan login, kamu menyetujui penggunaan sistem admin Véloz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
