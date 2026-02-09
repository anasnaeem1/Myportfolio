"use client"; 
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/navbar/Navbar"), {
  ssr: false, // Prevent SSR for Navbar
});

const NavbarWrapper = () => {
  return <Navbar />;
};

export default NavbarWrapper;
