"use client";
import Link from "next/link";
import DesktopMenu from "../ui/navbar/desktop-menu";
import MobileMenu from "../ui/navbar/mobile-menu";

import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header
      id="navbar"
      className="fixed max-auto w-full top-0 left-0 right-0 z-10 bg-rose bg-opacity-90
                dark:bg-black dark:border-y dark:border-y-slate-600"
    >
      <div className="flex lg:py-4 flex-wrap max-auto items-center justify-between px-4 py-2">
        <Link href="#overview" className="text-white text-3xl font-semibold">
          {"Melanie Le"}
        </Link>
        <div className="flex flex-row justify-end gap-3">
          <DesktopMenu />
          <MobileMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
