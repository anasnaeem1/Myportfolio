"use client";
import { Unbounded } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="flex items-center justify-center py-14 md:py-20 px-4 md:px-8 relative overflow-hidden main-bg-color"
    >
      {/* Single subtle glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse, rgba(185, 175, 162, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl w-full text-center"
      >
        <motion.h2
          variants={textVariants}
          className={`${unbounded.className} text-[clamp(28px,5vw,52px)] font-normal main-text-color leading-tight tracking-tight mb-3`}
        >
          Services I Provide{" "}
          <span className="bg-gradient-to-r from-[#b9afa2] via-[#d4c9ba] to-[#b9afa2] bg-clip-text text-transparent">
            For My Clients
          </span>
        </motion.h2>

        <motion.div
          variants={textVariants}
          className="flex items-center justify-center gap-3 my-5"
        >
          <span
            className="h-px w-16 flex-1 max-w-[80px] rounded-full opacity-40"
            style={{ backgroundColor: "rgba(185, 175, 162, 0.5)" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-textGold opacity-80"
            style={{ boxShadow: "0 0 8px rgba(191, 161, 129, 0.4)" }}
          />
          <span
            className="h-px w-16 flex-1 max-w-[80px] rounded-full opacity-40"
            style={{ backgroundColor: "rgba(185, 175, 162, 0.5)" }}
          />
        </motion.div>

        <motion.p
          variants={textVariants}
          className="text-[clamp(15px,2vw,18px)] main-text-color opacity-80 font-normal max-w-xl mx-auto leading-relaxed"
        >
          Delivering exceptional web solutions tailored to your needs
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
