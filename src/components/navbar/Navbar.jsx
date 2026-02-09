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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isCooldownActive, setIsCooldownActive] = useState(false);

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

  return (
    <>
      <div className="relative w-full h-[98px]">
        <div className="h-[98px] main-bg-color w-full fixed top-0 left-0"></div>
      </div>
      <header className="fixed w-full top-0 left-0 bg-transparent z-50">
        {/* Fullscreen Animated Menu */}

        <Menu isMenuOpen={isMenuOpen} />

        {/* Navbar */}
        <div className="flex items-center justify-between h-[98px] px-6">
          <Link
            href="/"
            className="text-3xl font-bold tracking-wide main-text-color"
          >
            Anas <span className="main-text-color">N</span>
          </Link>

          <div className="flex gap-6">
            {/* Switch for Dark Mode Toggle */}
            <Switch isMenuOpen={isMenuOpen} handleClick={handleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
