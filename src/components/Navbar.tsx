import Link from "next/link";

export default function Navbar() {
  return (
    <div className="font-[lexend]">
    <header className="bg-[#f3c623] shadow-lg h-12 flex items-center justify-between px-4">
      <div className="flex font-[lexend] font-semibold items-center space-x-4">
        <h1 className="font-bold text-2xl">Véloz</h1>
        </div>
        <nav className="flex space-x-4 font-[lexend] font-semibold right-0 ">
          <Link href="/">Home</Link>
          <div className="relative group">
            <Link href="/Catalog">Catalog</Link>
            <div className="absolute hidden group-hover:block bg-white z-10">
              <div className="hover:bg-gray-200 text-center px-4 py-2">
                <Link href="/Frame">Frame</Link>
              </div>
              <div className="hover:bg-gray-200 text-center px-4 py-2">
                <Link href="/Wheel">Wheel</Link>
              </div>
              <div className="hover:bg-gray-200 text-center px-4 py-2">
                <Link href="/Component">Component</Link>
              </div>
            </div>
          </div>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact Us</Link>
        </nav>
    </header>
    </div>

  );
}