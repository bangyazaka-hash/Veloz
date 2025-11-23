"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/Admin");
    } else {
      setError(data.error || "Login gagal");
    }
  };

  return (
    <div className="flex font-[lexend] min-h-screen">
      <div className="w-1/2 bg-[#f3c623] flex flex-col items-center justify-center text-black">
        
        <img 
          src="/uploads/Veloz.png"
          alt="Login"
          className="w-[200px] h-[150px]"
        />

        <h1 className="text-2xl font-bold mt-4">Reach Your Max Speed</h1>
        <p className="w-70 text-center">
          Selamat datang di halaman admin. Jika anda adalah user silahkan kembali ke halaman utama
        </p>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-8">Login</h2>

        <div className="flex flex-col gap-4 w-3/4 max-w-md">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-full p-3 bg-gray-100 outline-none shadow-sm"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full p-3 bg-gray-100 outline-none shadow-sm"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            className="rounded-full py-3 bg-[#f3c623] w-full shadow-md font-semibold"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
