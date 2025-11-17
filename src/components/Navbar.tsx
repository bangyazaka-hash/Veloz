import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#f3c623] shadow-lg h-12 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-2xl">Véloz</h1>
        <nav className="flex space-x-4 font-[lexend]">
          <Link href="/">Home</Link>
          <div className="relative group">
            <Link href="/frame">Catalog</Link>
            <div className="absolute hidden group-hover:block bg-white z-10">
              <div className="hover:bg-gray-200 text-center px-4 py-2">
                <Link href="/frame">Frame</Link>
              </div>
              <div className="hover:bg-gray-200 text-center px-4 py-2">
                <Link href="/Wheel">Wheel</Link>
              </div>
              <div className="hover:bg-gray-200 text-center px-4 py-2">
                <Link href="/Component">Component</Link>
              </div>
            </div>
          </div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}