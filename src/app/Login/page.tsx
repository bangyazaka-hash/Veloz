import Image from "next/image";
import Link from "next/link"

export default function LoginPage() {
    
  return (
    <div className="flex min-h-screen">
      
      <div className="w-1/2 bg-[#f3c623] flex flex-col items-center justify-center text-black">
       
        <Image
              src="/veloz.png"
              alt="Login"
              width={150}
              height={150}
              className="flex"
              />
        <h1 className="text-2xl font-bold mt-4">Reach Your Max Speed</h1>
        <p className="w-70 text-center">Selamat datang di halaman admin. Jika anda adalah user silahkan kembali ke halaman utama</p>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-8">Login</h2>

        <div className="flex flex-col gap-4 w-3/4 max-w-md">
          <input
            type="text"
            placeholder="Username"
            className="rounded-full p-3 bg-gray-100 outline-none shadow-sm"
          />

          <input
            type="password"
            placeholder="Password"
            className="rounded-full p-3 bg-gray-100 outline-none shadow-sm"
          />
          <Link href="/Admin">
          <button className="rounded-full py-3 bg-[#f3c623] w-full shadow-md font-semibold">
            Confirm
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
