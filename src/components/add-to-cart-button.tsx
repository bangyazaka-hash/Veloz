"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "./cart-provider";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  children?: React.ReactNode;
}

export function AddToCartButton({
  product,
  className = "",
  children,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-[var(--accent-foreground)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60 ${className}`}
      onClick={() => {
        if (isAdding) return;
        setIsAdding(true);
        addItem(product, 1);
        setTimeout(() => setIsAdding(false), 600);
      }}
      disabled={isAdding}
    >
      {children ?? "Tambah ke cart"}
    </button>
  );
}
