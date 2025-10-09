"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/lib/products";
import { getProduct, type ProductCategory } from "@/lib/products";

const STORAGE_KEY = "veloz-cart";

export interface CartLine {
  product: Product;
  quantity: number;
}

interface StoredCartLine {
  id: string;
  category: ProductCategory;
  quantity: number;
}

interface CartContextValue {
  items: CartLine[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

function serializeCart(items: CartLine[]): StoredCartLine[] {
  return items.map(({ product, quantity }) => ({
    id: product.id,
    category: product.category,
    quantity,
  }));
}

function hydrateCart(lines: StoredCartLine[]): CartLine[] {
  return lines
    .map((line) => {
      const product = getProduct(line.category, line.id);
      if (!product) return null;
      return { product, quantity: line.quantity };
    })
    .filter((line): line is CartLine => Boolean(line));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredCartLine[];
        setItems(hydrateCart(parsed));
      }
    } catch (error) {
      console.error("Failed to hydrate cart from storage", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      const payload = JSON.stringify(serializeCart(items));
      window.localStorage.setItem(STORAGE_KEY, payload);
    } catch (error) {
      console.error("Failed to persist cart", error);
    }
  }, [items, isHydrated]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((line) => line.product.id === product.id);
      if (existing) {
        return current.map((line) =>
          line.product.id === product.id
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      }
      return [...current, { product, quantity }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((line) => line.product.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((current) =>
      current
        .map((line) =>
          line.product.id === id ? { ...line, quantity: Math.max(1, quantity) } : line
        )
        .filter(Boolean) as CartLine[]
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((sum, line) => sum + line.quantity, 0);
    const totalPrice = items.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
    return {
      items,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    };
  }, [items, addItem, removeItem, updateQuantity, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
