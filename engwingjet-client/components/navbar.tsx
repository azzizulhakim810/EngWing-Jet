"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../context/auth-context";

export function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const routes = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Teachers", href: "/teachers" },
    { label: "All Courses", href: "/items" },
    { label: "Contact", href: "/contact" },
  ];

  async function handleLogout() {
    await logout();
    setDropdownOpen(false);
    setMobileOpen(false);
    router.replace("/login");
  }

  const userName = user?.displayName || user?.email?.split("@")[0] || "Learner";

  return (
    <header className="sticky top-0 z-50 border-b border-[#38BDF8]/20 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-4.5">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#2563EB]">
          EngWingJet
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="transition hover:text-[#2563EB] hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.25)]"
            >
              {route.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {!user ? (
            <>
              <Link
                href="/login"
                className="rounded-full border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:border-[#2563EB]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="rounded-full border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:border-[#2563EB]"
              >
                {userName}
              </button>
              {dropdownOpen ? (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_18px_38px_rgba(15,23,42,0.14)]">
                  <Link
                    href="/items/add"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Add Course
                  </Link>
                  <Link
                    href="/items/manage"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Manage Courses
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-full border border-[#38BDF8]/35 bg-white px-3 py-2 text-sm font-semibold text-[#2563EB] md:hidden"
        >
          Menu
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-[#38BDF8]/20 bg-white px-6 py-4 shadow-[0_16px_32px_rgba(15,23,42,0.08)] md:hidden">
          <div className="flex flex-col gap-2">
            {routes.map((route) => (
              <Link
                key={route.label}
                href={route.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#EFF6FF] hover:text-[#2563EB]"
              >
                {route.label}
              </Link>
            ))}
            {!user ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB]"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <p className="px-2 pt-2 text-sm font-semibold text-slate-700">{userName}</p>
                <Link
                  href="/items/add"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-[#EFF6FF]"
                >
                  Add Course
                </Link>
                <Link
                  href="/items/manage"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-[#EFF6FF]"
                >
                  Manage Courses
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-xl px-4 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
