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
      className="flex items-center justify-center min-h-[60vh] py-20 md:py-32 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #141414 15%, #1f1f1f 35%, #1c1c1c 50%, #1a1a1a 65%, #141414 85%, #0f0f0f 100%)"
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb - more blur for smoother edges */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(185, 175, 162, 0.12) 0%, rgba(185, 175, 162, 0.06) 30%, rgba(185, 175, 162, 0.02) 60%, transparent 100%)",
            filter: "blur(80px)",
          }}
        ></div>
        
        {/* Top accent gradient - smoother transition */}
        <div 
          className="absolute top-0 left-0 w-full h-2/3"
          style={{
            background: "linear-gradient(180deg, rgba(185, 175, 162, 0.08) 0%, rgba(185, 175, 162, 0.05) 20%, rgba(185, 175, 162, 0.02) 50%, transparent 100%)",
            filter: "blur(40px)",
          }}
        ></div>
        
        {/* Side accent gradients - smoother */}
        <div 
          className="absolute top-0 left-0 w-2/5 h-full"
          style={{
            background: "linear-gradient(90deg, rgba(185, 175, 162, 0.06) 0%, rgba(185, 175, 162, 0.03) 30%, rgba(185, 175, 162, 0.01) 60%, transparent 100%)",
            filter: "blur(50px)",
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-2/5 h-full"
          style={{
            background: "linear-gradient(270deg, rgba(185, 175, 162, 0.06) 0%, rgba(185, 175, 162, 0.03) 30%, rgba(185, 175, 162, 0.01) 60%, transparent 100%)",
            filter: "blur(50px)",
          }}
        ></div>
        
        {/* Bottom subtle accent - smoother */}
        <div 
          className="absolute bottom-0 left-0 w-full h-2/5"
          style={{
            background: "linear-gradient(0deg, rgba(185, 175, 162, 0.05) 0%, rgba(185, 175, 162, 0.02) 40%, transparent 100%)",
            filter: "blur(40px)",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl w-full text-center"
      >
        {/* Main Heading */}
        <motion.h2
          variants={textVariants}
          className={`${unbounded.className} text-[clamp(36px,7vw,96px)] font-normal main-text-color leading-tight tracking-tight mb-6 drop-shadow-lg`}
        >
          Services I Provide
          <br />
          <span className="bg-gradient-to-r from-[#b9afa2] via-[#d4c9ba] to-[#b9afa2] bg-clip-text text-transparent drop-shadow-md">
            For My Clients
          </span>
        </motion.h2>

        {/* Decorative Line */}
        <motion.div
          variants={textVariants}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div 
            className="h-px w-24"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(185, 175, 162, 0.2) 30%, rgba(185, 175, 162, 0.4) 60%, rgba(185, 175, 162, 0.5) 100%)",
              filter: "blur(0.5px)",
            }}
          ></div>
          <div 
            className="w-3 h-3 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(185, 175, 162, 0.7) 0%, rgba(185, 175, 162, 0.5) 70%, rgba(185, 175, 162, 0.3) 100%)",
              boxShadow: "0 0 10px rgba(185, 175, 162, 0.3), 0 0 20px rgba(185, 175, 162, 0.15)",
            }}
          ></div>
          <div 
            className="h-px w-24"
            style={{
              background: "linear-gradient(270deg, transparent 0%, rgba(185, 175, 162, 0.2) 30%, rgba(185, 175, 162, 0.4) 60%, rgba(185, 175, 162, 0.5) 100%)",
              filter: "blur(0.5px)",
            }}
          ></div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={textVariants}
          className="text-[clamp(16px,2.5vw,20px)] main-text-color/70 font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Delivering exceptional web solutions tailored to your needs
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
