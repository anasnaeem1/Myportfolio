"use client";
import { Unbounded } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const services = [
  {
    label: "Frontend Development",
    icon: "ri-code-s-slash-line",
    desc: "Building fast, interactive interfaces with React and Next.js.",
  },
  {
    label: "UI Implementation",
    icon: "ri-layout-line",
    desc: "Turning designs into polished, pixel-perfect web experiences.",
  },
  {
    label: "Responsive Design",
    icon: "ri-smartphone-line",
    desc: "Layouts that look and work great on every screen size.",
  },
  {
    label: "Performance",
    icon: "ri-speed-up-line",
    desc: "Optimizing load times and smooth user interactions.",
  },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const ServiceCard = ({ label, icon, desc }) => (
  <motion.div
    variants={cardVariants}
    className="flex flex-col items-start text-left p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#b9afa2]/30 transition-colors duration-300"
  >
    <i className={`${icon} text-2xl text-[#b9afa2] mb-4`} aria-hidden="true" />
    <h3 className="text-lg font-medium text-white mb-2">{label}</h3>
    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center py-14 md:py-20 px-4 md:px-8 relative overflow-hidden main-bg-color"
    >
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
        className="relative z-10 max-w-5xl w-full text-center"
      >
        <motion.h2
          variants={textVariants}
          className={`${unbounded.className} text-[clamp(28px,5vw,52px)] font-normal main-text-color leading-tight tracking-tight mb-10 md:mb-12`}
        >
          Services I Provide{" "}
          <span className="bg-gradient-to-r from-[#b9afa2] via-[#d4c9ba] to-[#b9afa2] bg-clip-text text-transparent">
            For My Clients
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-8">
          {services.map((service) => (
            <ServiceCard
              key={service.label}
              label={service.label}
              icon={service.icon}
              desc={service.desc}
            />
          ))}
        </div>

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
