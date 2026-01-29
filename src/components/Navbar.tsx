"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const t = e.target as Node;
      if (wrapRef.current && !wrapRef.current.contains(t)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const close = () => setOpen(false);

  const navItem =
    "rounded-full px-4 py-2 text-sm font-semibold text-black hover:text-[#f3c623] hover:bg-[#f3c623]/10 transition";

  return (
    <header className="font-[lexend] sticky top-0 z-50">
      <div className="bg-white border-b border-black/10 shadow-sm">
        <div
          ref={wrapRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        >
          {/* Brand */}
          <Link href="/" onClick={close} className="flex items-center gap-2">
            <div className="leading-tight">
              <div className="bg-[#f3c623] rounded-full text-center w-20">
                <div className="text-lg font-extrabold tracking-tight">
                  Véloz
                </div>
              </div>
              <div className="text-[11px] text-black/50">Reach Your Max Speed</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" onClick={close} className={navItem}>Home</Link>

            <div className="relative group">
              <span className={`${navItem} inline-flex items-center gap-2 cursor-default select-none`}>
                Catalog <span className="text-xs">▾</span>
              </span>

              <div className="absolute left-0 mt-2 hidden group-hover:block">
                <div className="w-44 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
                  <DropdownLink href="/Frame" onClick={close}>Frame</DropdownLink>
                  <DropdownLink href="/Wheel" onClick={close}>Wheel</DropdownLink>
                  <DropdownLink href="/Component" onClick={close}>Component</DropdownLink>
                </div>
              </div>
            </div>

            <Link href="/About" onClick={close} className={navItem}>About</Link>
            <Link href="/Contact" onClick={close} className={navItem}>Contact</Link>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-black/5 transition"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#f3c623]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden bg-white border-b border-black/10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
            <MobileLink href="/" onClick={close}>Home</MobileLink>

            <details className="group rounded-2xl border border-black/10">
              <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between font-semibold text-black hover:text-[#f3c623] transition">
                <span>Catalog</span>
                <span className="text-xs group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-2 pb-2">
                <MobileLink href="/Frame" onClick={close}>Frame</MobileLink>
                <MobileLink href="/Wheel" onClick={close}>Wheel</MobileLink>
                <MobileLink href="/Component" onClick={close}>Component</MobileLink>
              </div>
            </details>

            <MobileLink href="/About" onClick={close}>About</MobileLink>
            <MobileLink href="/Contact" onClick={close}>Contact</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-sm font-semibold text-black hover:text-[#f3c623] hover:bg-[#f3c623]/10 transition"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-2xl px-4 py-3 font-semibold text-black hover:text-[#f3c623] hover:bg-[#f3c623]/10 transition"
    >
      {children}
    </Link>
  );
}
