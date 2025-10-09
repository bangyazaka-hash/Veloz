"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "./cart-provider";

interface CartNavLinkProps {
  variant?: "icon" | "label";
  className?: string;
}

export function CartNavLink({ variant = "label", className = "" }: CartNavLinkProps) {
  const { totalItems } = useCart();

  const counter = useMemo(() => {
    if (totalItems === 0) return null;
    return (
      <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-slate-900 px-1 text-[0.65rem] font-semibold text-white">
        {totalItems}
      </span>
    );
  }, [totalItems]);

  if (variant === "icon") {
    return (
      <Link
        href="/cart"
        className={`relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 ${className}`}
      >
        <span aria-hidden="true" className="uppercase">
          Cart
        </span>
        {counter}
        <span className="sr-only">Buka cart</span>
      </Link>
    );
  }

  return (
    <Link
      href="/cart"
      className={`inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 ${className}`}
    >
      <span>Cart</span>
      {counter}
    </Link>
  );
}
