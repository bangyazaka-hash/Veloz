import Image from "next/image";

export default function LoginPage() {
    
  return (
    <div className="flex min-h-screen">
      
      <div className="w-1/2 bg-[#f3c623] flex flex-col items-center justify-center text-black">
       
        <h1 className="text-2xl font-bold mt-4">Ride To Work</h1>
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

          <button className="rounded-full py-3 bg-[#f3c623] shadow-md font-semibold">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
