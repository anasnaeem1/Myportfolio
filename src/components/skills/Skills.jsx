"use client";
import { Unbounded } from "next/font/google";
import {
  motion,
  useInView,
} from "framer-motion";
import { useRef } from "react";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const skills = [
  {
    id: 1,
    label: "UI/UX Design",
    desc: "Designing beautiful & functional interfaces",
    gradient: "from-purple-900/80 via-purple-800/70 to-pink-900/80",
    textColor: "text-purple-200",
  },
  {
    id: 2,
    label: "React & Next.js",
    desc: "Building dynamic and responsive web applications",
    gradient: "from-blue-900/80 via-cyan-800/70 to-indigo-900/80",
    textColor: "text-cyan-200",
  },
  {
    id: 3,
    label: "HTML, CSS & JavaScript",
    desc: "Crafting modern and responsive web designs",
    gradient: "from-orange-900/80 via-amber-800/70 to-yellow-900/80",
    textColor: "text-orange-200",
  },
  {
    id: 4,
    label: "MongoDB",
    desc: "Managing and integrating NoSQL databases",
    gradient: "from-green-900/80 via-emerald-800/70 to-teal-900/80",
    textColor: "text-green-200",
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.85,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        duration: 0.7,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 w-full relative main-bg-color overflow-visible"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#b9afa2]/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      {/* Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`${unbounded.className} text-[clamp(42px,6vw,72px)] font-[400] main-text-color relative z-10 mb-4`}
      >
        My Skills
      </motion.h1>

      {/* Skills Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`skills-container flex gap-5 lg:gap-6 mt-8 pt-8 pb-4 lg:items-start justify-center items-center px-4 md:px-8 w-full lg:flex-row flex-col overflow-x-auto overflow-y-visible lg:scroll-snap-x-mandatory scrollbar-hide custom-scroll relative z-10`}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.03,
              rotateY: 2,
              transition: { type: "spring", stiffness: 400, damping: 20 }
            }}
            className="group relative max-w-[300px] w-full flex-shrink-0 lg:w-[260px] scroll-snap-align-start"
            style={{ transformOrigin: "center center", perspective: "1000px" }}
          >
            {/* Banner Card */}
            <motion.div
              className={`relative h-[180px] rounded-xl overflow-hidden shadow-lg`}
              whileHover={{
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.6)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient}`}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                }}
                transition={{ duration: 0.4 }}
              ></motion.div>

              {/* Animated Pattern Overlay */}
              <motion.div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                animate={{
                  backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              ></motion.div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              ></motion.div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <motion.h3 
                  className={`text-2xl md:text-3xl font-bold ${skill.textColor} leading-tight drop-shadow-md`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {skill.label}
                </motion.h3>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="text-center py-3 px-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            >
              <p className="main-text-color/70 text-sm sm:text-base font-normal">
                {skill.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
