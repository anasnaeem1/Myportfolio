"use client";
import Link from "next/link";
import { Unbounded } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const NavLinks = ({ isMenuOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const NavLinks = [
    { id: 1, index: 1, label: "Home", url: "/" },
    { id: 4, index: 2, label: "About", url: "/about" },
    { id: 5, index: 3, label: "Work", url: "/work" },
    { id: 6, index: 4, label: "Contact", url: "/dashboard" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true);
    } else {
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  }, [isMenuOpen]);

  const listVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    opened: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const listItemsVariants = {
    closed: {
      y: 40,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
    opened: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={{ y: isAnimating ? "0%" : "-100%" }}
      transition={{
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
      }}
      onAnimationComplete={() => setIsAnimating(isMenuOpen)}
      className="fixed top-0 left-0 w-full h-full main-bg-color z-40"
    >
      {/* Top accent line when menu is open */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-textGold/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.4, delay: isMenuOpen ? 0.3 : 0 }}
      />
      <div className="h-full flex flex-col justify-end items-start w-full px-6 sm:px-12 md:px-20">
        <div className="flex items-center md:items-end md:flex-row flex-col md:justify-between justify-center gap-8 md:gap-10 w-full min-h-[70vh] pb-16 sm:pb-20 md:pb-[100px]">
          {/* Navigation Links */}
          <motion.ul
            variants={listVariants}
            initial="closed"
            animate={isMenuOpen ? "opened" : "closed"}
            exit="closed"
            className="flex flex-col items-start gap-5 md:gap-6"
          >
            {NavLinks.map((link) => (
              <motion.li key={link.id} variants={listItemsVariants}>
                <Link
                  href={link.url}
                  className="group gap-3 flex items-center justify-center"
                >
                  <div
                    className="h-8 w-8 flex items-center justify-center rounded-full border border-textGold/30 main-text-color font-semibold text-sm opacity-80 group-hover:opacity-100 group-hover:border-textGold/60 group-hover:bg-textGold/10 transition-all duration-300"
                  >
                    <span>{link.index}</span>
                  </div>
                  <span
                    className={`${unbounded.className} main-text-color text-[clamp(24px,4vw,56px)] font-medium tracking-wider transition-all duration-300 group-hover:text-textGold inline-block group-hover:translate-x-1`}
                  >
                    {link.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Contact Section */}
          <div className="absolute md:right-[50px] md:bottom-[110px] bottom-12 left-6 md:left-auto">
            <div className="flex flex-col justify-center items-start md:items-end border-l-2 md:border-l-[3px] border-textGold/30 pl-4 md:pl-6">
              <span className="main-text-color opacity-70 text-xs sm:text-sm uppercase tracking-widest">
                Get in Touch
              </span>
              <Link href="/dashboard" className="mt-1">
                <span className="underline underline-offset-4 text-lg sm:text-xl md:text-2xl text-textGold font-semibold tracking-wide hover:opacity-80 transition-opacity duration-300">
                  Send me an email
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavLinks;
