"use client";

import Link from "next/link";
import Switch from "../switch/Switch";
import { Tinos } from "next/font/google";

const tinos = Tinos({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between">
        <Link href="/" className={`${tinos.className} text-xl font-semibold text-[var(--foreground)]`}>
          Anas <span className="text-[var(--foreground)]">N</span>
        </Link>
        <Switch />
      </div>
    </header>
  );
}
