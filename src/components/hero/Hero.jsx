"use client";
import Image from "next/image";
import Anas from "../../../public/Anas.png";
import Button from "../button/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const Hero = () => {
  return (
    <header className="md:h-screen py-24 md:py-16 relative flex flex-col lg:flex-row items-center justify-center w-full px-4 md:px-8 lg:px-12 gap-8 md:gap-10 lg:gap-14 max-w-6xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-gradient-to-r from-[#b9afa2]/8 via-[#b9afa2]/4 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-gradient-to-l from-[#b9afa2]/8 via-[#b9afa2]/4 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#b9afa2]/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Intro Text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`relative z-10 max-w-[560px] w-full flex flex-col md:gap-6 gap-5 ${inter.className} order-2 lg:order-1`}
      >
        {/* Greeting Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-full border border-[#b9afa2]/20 bg-[#b9afa2]/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#b9afa2] animate-pulse" />
          <span className="text-xs main-text-color/70 font-medium">Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(28px,5vw,48px)] leading-[1.15] tracking-tight main-text-color font-bold"
        >
          <span className="block font-light">Hi, I&apos;m</span>
          <span className="block font-bold mt-0.5">Anas</span>
          <span className="block mt-1.5 bg-gradient-to-r from-[#b9afa2] via-[#b9afa2] to-[#b9afa2]/60 bg-clip-text text-transparent font-semibold">
            Creative Web Developer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-[clamp(15px,2.2vw,18px)] leading-relaxed font-normal tracking-wide main-text-color/75 max-w-[520px]"
        >
          Born and raised in <span className="main-text-color font-medium">Karachi, Pakistan</span>. I began my web development
          journey in <span className="main-text-color font-medium">2023</span>. Currently seeking opportunities to grow my
          skills and explore more programming languages.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="flex justify-start pt-2">
          <Link href="/about" className="inline-block group">
            <Button size="md">About me</Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.figure
        initial={{ opacity: 0, scale: 0.85, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 16, duration: 0.8 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }}
        className="relative flex-shrink-0 z-10 order-1 lg:order-2"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#b9afa2]/25 via-[#b9afa2]/10 to-transparent rounded-2xl blur-2xl -z-10 scale-110" />
        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#b9afa2]/20 to-transparent rounded-2xl blur-lg -z-10" />
        <div className="relative rounded-2xl overflow-hidden border border-[#b9afa2]/15 shadow-[0_16px_40px_-12px_rgba(185,175,162,0.25)] bg-gradient-to-br from-[#b9afa2]/5 to-transparent backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/20 via-transparent to-transparent z-10 pointer-events-none" />
          <Image
            src={Anas}
            height={420}
            width={420}
            alt="Anas N - Web Developer"
            className="rounded-2xl object-contain opacity-100 hover:opacity-95 transition-all duration-500 relative z-0"
            priority
          />
        </div>
        <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#b9afa2]/20 rounded-tr-2xl" />
        <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#b9afa2]/20 rounded-bl-2xl" />
      </motion.figure>
    </header>
  );
};

export default Hero;
