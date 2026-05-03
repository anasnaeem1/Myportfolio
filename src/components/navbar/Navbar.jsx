"use client";
import Image from "next/image";
import Link from "next/link";
import Switch from "../switch/Switch";
import { Tinos } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

const tinos = Tinos({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

const SCROLL_BLUR_THRESHOLD = 24;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isCooldownActive, setIsCooldownActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = (event) => {
    event.preventDefault();

    if (isCooldownActive) return;

    setIsMenuOpen(!isMenuOpen);

    setIsCooldownActive(true);
    setTimeout(() => {
      setIsCooldownActive(false);
    }, 700);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_BLUR_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} />
      <header
        className={`fixed inset-x-0 top-0 z-[60] h-[72px] transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out ${
          scrolled
            ? "bg-[var(--background)]/80 shadow-[0_1px_0_rgba(255,255,255,0.06)] supports-[backdrop-filter]:backdrop-blur-lg"
            : "bg-transparent supports-[backdrop-filter]:backdrop-blur-none"
        }`}
      >
        <div className="relative flex h-full max-w-6xl mx-auto items-center justify-between px-5">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight main-text-color"
          >
            Anas <span className="main-text-color">N</span>
          </Link>

          <div className="flex items-center gap-5">
            <Switch isMenuOpen={isMenuOpen} handleClick={handleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
