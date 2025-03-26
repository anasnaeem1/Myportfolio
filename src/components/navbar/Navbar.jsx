"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Switch from "../switch/Switch";
import { Tinos } from "next/font/google";

const tinos = Tinos({
  weight: "400", // Choose the weight (400, 700, etc.)
  subsets: ["latin"], // Choose subsets (default: latin)
  style: "normal",
});

const Navbar = () => {
  const NavLinks = [
    { id: 1, label: "Home", url: "/" },
    { id: 2, label: "Portfolio", url: "/portfolio" },
    { id: 3, label: "Blog", url: "/blog" },
    { id: 4, label: "About", url: "/about" },
    { id: 5, label: "Contact", url: "/contact" },
    { id: 6, label: "Dashboard", url: "/dashboard" },
  ];

  return (
    <div className="text-blue-300 bg-white p-3">Navbar</div>
    // <>
    //   <div className="h-[98px] w-full"></div>
    //   <header className="fixed bg-tranparent w-full top-0 left-0">
    //     <div className="flex items-center justify-between h-[98px] px-6">
    //       {/* Logo */}
    //       <span
    //         className={`cursor-pointer text-3xl font-bold tracking-wide text-[#b9afa2] ${tinos.className}`}
    //       >
    //         Anas <span className="text-[#b9afa2]">N</span>
    //       </span>

    //       {/* Theme Switch */}
    //       <Switch />
    //     </div>
    //   </header>
    // </>
  );
};

export default Navbar;
