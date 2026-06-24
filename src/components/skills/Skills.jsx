"use client";
import { Unbounded } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const skills = [
  {
    label: "UI/UX Design",
    icon: "ri-palette-line",
    desc: "Designing beautiful and functional interfaces.",
    accent: "border-t-purple-400/50 hover:border-purple-400/30",
    iconBg: "bg-purple-500/10 text-purple-300",
  },
  {
    label: "React & Next.js",
    icon: "ri-reactjs-line",
    desc: "Building dynamic and responsive web applications.",
    accent: "border-t-cyan-400/50 hover:border-cyan-400/30",
    iconBg: "bg-cyan-500/10 text-cyan-300",
  },
  {
    label: "HTML, CSS & JavaScript",
    icon: "ri-code-box-line",
    desc: "Crafting modern and responsive web designs.",
    accent: "border-t-amber-400/50 hover:border-amber-400/30",
    iconBg: "bg-amber-500/10 text-amber-300",
  },
  {
    label: "MongoDB",
    icon: "ri-database-2-line",
    desc: "Managing and integrating NoSQL databases.",
    accent: "border-t-emerald-400/50 hover:border-emerald-400/30",
    iconBg: "bg-emerald-500/10 text-emerald-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headingVariants = {
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

const SkillCard = ({ label, icon, desc, accent, iconBg }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`group flex flex-col items-start text-left p-6 rounded-2xl border border-white/10 border-t-2 bg-white/[0.03] backdrop-blur-sm ${accent} hover:bg-white/[0.05] transition-colors duration-300`}
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconBg} group-hover:scale-105 transition-transform duration-300`}
    >
      <i className={`${icon} text-2xl`} aria-hidden="true" />
    </div>
    <h3 className="text-lg font-medium text-white mb-2">{label}</h3>
    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 px-4 md:px-8 w-full relative main-bg-color overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse, rgba(185, 175, 162, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`${unbounded.className} text-[clamp(32px,5vw,56px)] font-normal main-text-color relative z-10 mb-10 md:mb-12 text-center`}
      >
        My{" "}
        <span className="bg-gradient-to-r from-[#b9afa2] via-[#d4c9ba] to-[#b9afa2] bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full max-w-4xl"
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.label}
            label={skill.label}
            icon={skill.icon}
            desc={skill.desc}
            accent={skill.accent}
            iconBg={skill.iconBg}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
