"use client";
import Image from "next/image";
import Anas from "../../../public/Anas.png";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import Button from "../../components/button/Button";
import { Unbounded } from "next/font/google";
import Resume from "../../components/resume/Resume";
import { motion } from "framer-motion";
// import Link from "next/link";

const unbounded = Unbounded({
  weight: ["400", "500", "700"], // Choose the weights you need
  subsets: ["latin"],
  style: "normal",
});

const zenKakuGothic = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"], // Choose desired font weights
  subsets: ["latin"], // Specify subsets
  style: "normal",
});

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden relative w-full main-bg-color">
      {/* Hero Header - full viewport, ref layout */}

      <header className="md:h-auto min-h-screen flex flex-col lg:flex-row items-center justify-center w-full relative">
        {/* Vertical labels - left edge */}
        <div className="hidden lg:flex fixed left-4 xl:left-8 top-0 bottom-0 flex-col justify-between py-24 z-10 pointer-events-none">
          <span
            className="main-text-color text-xs font-light tracking-[0.3em] uppercase opacity-70"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Web Developer
          </span>
          <span
            className="main-text-color text-xs font-light tracking-[0.3em] opacity-70"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {currentYear}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl mx-auto px-6 lg:px-16 pt-24 lg:pt-0 gap-12 lg:gap-8">
          {/* Left: text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 flex-1 lg:pl-20"
          >
            {/* Stats */}
            <div className="flex gap-10 sm:gap-16 mb-8 lg:mb-10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold main-text-color leading-tight">+15</p>
                <p className="main-text-color text-sm font-light opacity-80 mt-0.5">Projects completed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold main-text-color leading-tight">+2</p>
                <p className="main-text-color text-sm font-light opacity-80 mt-0.5">Years experience</p>
              </div>
            </div>

            {/* Main greeting */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold main-text-color tracking-tight mb-4"
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              Hello
            </h1>
            <p className="main-text-color text-base sm:text-lg opacity-90 mb-12 lg:mb-16 max-w-md">
              — It&apos;s Anas, a web developer & creative builder.
            </p>

            {/* Scroll indicator */}
            <p className="main-text-color text-xs font-light tracking-widest uppercase opacity-60">
              Scroll down ↓
            </p>
          </motion.div>

          {/* Right: single portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={Anas}
                alt="Anas"
                fill
                className="object-cover object-top rounded-2xl"
                sizes="(max-width: 1024px) 320px, 380px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* <hr /> */}

      {/* About Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#141210" }}
      >
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-textGold/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-textGold/30 pointer-events-none" />

        <div className="relative w-full max-w-[1100px] mx-auto px-6 sm:px-8 py-20 sm:py-28">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="inline-block text-textGold text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Who I am
            </span>
            <h2 className="font-extrabold text-textGold tracking-tight text-[clamp(36px,5vw,64px)]">
              About Me
            </h2>
            <p className="main-text-color opacity-80 text-base sm:text-lg mt-3 max-w-md mx-auto">
              Building things that look good and work well.
            </p>
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Bio — left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="pl-0 lg:pl-1 border-l-0 lg:border-l-2 border-textGold/30 lg:pl-8">
                <h3 className="text-2xl sm:text-3xl font-semibold main-text-color mb-6">
                  Passionate Frontend Developer
                </h3>
                <div className="space-y-5 main-text-color text-base sm:text-lg leading-[1.85]">
                  <p>
                    I&apos;m a <strong className="text-textGold font-semibold">self-taught developer</strong> with a deep passion
                    for crafting seamless and visually engaging user experiences.
                    With expertise in <span className="text-textGold font-medium">React</span> and{" "}
                    <span className="text-textGold font-medium">Next.js</span>, I focus on building{" "}
                    <strong className="main-text-color">modern, user-friendly, and efficient</strong> web applications.
                  </p>
                  <p>
                    I love working on ideas that push boundaries and create meaningful experiences.
                    Whether it&apos;s problem-solving, designing clean interfaces, or optimizing performance,
                    I&apos;m always up for a challenge.
                  </p>
                  <p>
                    My approach is simple—write clean, scalable code, stay curious, and keep learning.
                    Let&apos;s build something great together.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick facts — right */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="flex flex-col gap-4">
                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 main-text-color">
                  <span className="text-2xl font-bold text-textGold block mb-1">2+</span>
                  <span className="text-sm font-medium opacity-90">Years in web development</span>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 main-text-color">
                  <span className="text-textGold font-semibold block mb-2">Skills</span>
                  <p className="text-sm leading-relaxed opacity-90">
                    React, Next.js, JavaScript, UI/UX Design
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 main-text-color">
                  <span className="text-textGold font-semibold block mb-2">Focus</span>
                  <p className="text-sm leading-relaxed opacity-90">
                    Scalable & responsive applications, clean code
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-textGold/10 border border-textGold/20 main-text-color">
                  <span className="text-textGold font-semibold block mb-2">Open to</span>
                  <p className="text-sm leading-relaxed opacity-90">
                    Collaborations, projects & internship opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Resume />
    </div>
  );
};
export default About;
