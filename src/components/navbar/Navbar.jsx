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
      {/* <div className="relative w-full h-[72px]">
        <div className="h-[72px] bg-transparent w-full fixed top-0 left-0" />
      </div> */}
      <header className="fixed w-full top-0 left-0 bg-transparent z-50">
        <Menu isMenuOpen={isMenuOpen} />
        {/* Nav bar (logo + menu icon) always on top so icon never disappears */}
        <div className="relative z-[60] flex items-center justify-between h-[72px] max-w-6xl mx-auto px-5">
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
