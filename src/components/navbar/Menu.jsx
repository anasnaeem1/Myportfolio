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
        delayChildren: 0.4, // Delay before stagger starts
        staggerChildren: 0.2, // Show one item at a time
      },
    },
  };

  const listItemsVariants = {
    closed: {
      y: 40, // Moves down when closing (reduced for a more natural effect)
      opacity: 0,
      transition: {
        duration: 0.25, // Slightly faster closing for a snappier feel
        ease: "easeInOut",
        staggerChildren: 0.08, // Closes items slightly faster
        staggerDirection: -1, // Closes in reverse order
      },
    },
    opened: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6, // Slightly longer duration for a smoother reveal
        ease: "easeOut",
        staggerChildren: 0.12, // Items appear one by one with a slightly longer delay
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
      className="fixed top-0 left-0 w-full h-full main-bg-color"
    >
      <div className="h-screen flex flex-col justify-end items-start w-full px-20">
        <div className="flex items-center md:items-end md:flex-row flex-col md:justify-between justify-center gap-10 w-full h-full pb-[100px]">
          {/* Navigation Links */}
          <motion.ul
            variants={listVariants}
            initial="closed"
            animate={isMenuOpen ? "opened" : "closed"}
            exit="closed"
            className="flex flex-col items-start gap-6"
          >
            {NavLinks.map((link) => (
              <motion.li key={link.id} variants={listItemsVariants}>
                <Link
                  href={link.url}
                  className="group gap-3 flex items-center justify-center"
                >
                  <div
                    className={`h-8 w-8 flex items-center justify-center rounded-full 
                    main-bg-color/30 main-text-color font-semibold text-lg 
                 opacity-70 group-hover:opacity-100 transition-all duration-500`}
                  >
                    <span>{link.index}</span>
                  </div>
                  <span
                    className={`${unbounded.className} main-text-color hover:main-text-color text-[clamp(28px,4vw,60px)] 
                 font-medium tracking-wider transition-all duration-300 group-hover:text-textGold`}
                  >
                    {link.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Contact Section */}
          <div className="absolute md:right-[50px] md:bottom-[110px] bottom-[50px]">
            <div className="flex flex-col justify-center items-end border-l-[3px] border-gray-600 pl-6">
              <span className="text-gray-800 text-lg uppercase tracking-wider">
                Get in Touch
              </span>
              <Link href="/">
                <span className="underline text-2xl text-textGold font-semibold tracking-wide hover:main-text-color transition-all duration-300">
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
