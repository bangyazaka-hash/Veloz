"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { CartNavLink } from "./cart-nav-link";
import { useCallback, useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

interface SiteHeaderProps {
  navigation: NavItem[];
}

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";
  const isAdminPage = pathname.startsWith("/admin");

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const canShowFullNav = !isLoginPage && !isAdminPage;
  const showFullNav = mounted ? canShowFullNav : true;
  const showAdminActions = mounted ? isAdminPage : false;

  const handleLogout = useCallback(async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    } catch (error) {
      console.warn("Failed to call logout endpoint", error);
    }
    try {
      localStorage.removeItem("isAdmin");
    } catch (error) {
      console.warn("Cannot access localStorage", error);
    }
    router.push("/login");
  }, [router]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-lg">
      <div className="page-shell flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900"
        >
          <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-bold uppercase text-[var(--accent-foreground)] shadow-sm shadow-[rgba(15,23,42,0.15)]">
            Veloz
          </span>
          <span className="hidden sm:inline">Ride beyond limits</span>
        </Link>

        {showFullNav ? (
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : (
          <span className="hidden lg:block" />
        )}

        <div className="hidden lg:flex">
          {showFullNav ? (
            <CartNavLink className="my-1" />
          ) : showAdminActions ? (
            <button
              type="button"
              onClick={handleLogout}
              className="my-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
              title="Keluar"
            >
              <span className="text-base font-semibold" aria-hidden="true">
                👤
              </span>
              <span className="sr-only">Keluar</span>
            </button>
          ) : (
            <span className="my-1 h-10 w-10" />
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {showFullNav ? (
            <>
              <CartNavLink variant="icon" className="my-1" />
              <details className="relative [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900">
                  Menu
                </summary>
                <div className="absolute right-0 mt-3 w-60 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-slate-100">
                  <div className="flex flex-col gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            </>
          ) : showAdminActions ? (
            <button
              type="button"
              onClick={handleLogout}
              className="my-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
              title="Keluar"
            >
              <span className="text-base font-semibold" aria-hidden="true">
                👤
              </span>
              <span className="sr-only">Keluar</span>
            </button>
          ) : (
            <span className="my-1 h-10 w-10" />
          )}
        </div>
      </div>
    </header>
  );
}


