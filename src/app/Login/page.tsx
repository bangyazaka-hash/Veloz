"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const ADMIN_EMAIL = "admin@veloz.id";
const ADMIN_PASSWORD = "velo2025!";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirected = searchParams.get("redirected") === "true";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error" | "submitting">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        try {
          localStorage.setItem("isAdmin", "true");
        } catch (error) {
          console.warn("Cannot access localStorage", error);
        }
        setStatus("success");
        router.push("/admin/products");
      } else {
        setStatus("error");
        setMessage(`Kredensial tidak valid. Gunakan email ${ADMIN_EMAIL} dan password ${ADMIN_PASSWORD}.`);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Terjadi kesalahan saat masuk. Coba lagi.");
    }
  };

  return (
    <div className="page-shell flex flex-col gap-12 py-32 md:py-36 lg:flex-row lg:items-center">
      <div className="space-y-6 py-5 lg:w-1/2">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Admin Area
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          Portal internal Veloz.
        </h1>
        <p className="text-lg leading-relaxed text-slate-600">
          Halaman ini khusus untuk tim Veloz mengelola katalog, status pesanan, dan jadwal workshop. Pelanggan tidak perlu login, cukup gunakan menu Products dan cart lalu checkout via WhatsApp.
        </p>
        <div className="relative h-52 w-full overflow-hidden rounded-[var(--radius-lg)] bg-slate-900/5">
          <Image src="/Login.png" alt="Veloz admin login" fill className="object-contain p-6" priority />
        </div>
      </div>
      <div className="card-surface w-full max-w-lg rounded-[var(--radius-lg)] bg-white p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={ADMIN_EMAIL}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/40"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/40"
              required
            />
          </div>
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[var(--accent)] focus:ring-[var(--accent)]" />
              Ingat saya
            </label>
            <Link href="#" className="text-[var(--accent-foreground)] transition hover:text-slate-900">
              Bantuan login
            </Link>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-foreground)] shadow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Memproses..." : "Masuk admin"}
          </button>
          {redirected && status === "idle" && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
              Sesi admin telah berakhir. Silakan masuk kembali.
            </div>
          )}
          {status === "error" && message && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {message}
            </div>
          )}
          {status === "success" && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Akses diberikan. Mengarahkan ke halaman admin...
            </div>
          )}
          <p className="text-center text-xs text-slate-500">
            Jika Anda adalah pelanggan, silakan gunakan menu Products dan cart lalu checkout via WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}
