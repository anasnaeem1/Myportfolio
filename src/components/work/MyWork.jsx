"use client";
import Image from "next/image";
import idkWhat from "../../../public/idkwhat.png";
import SocialImage from "../../../public/social.jpg";
import travelWebsite from "../../../public/travelWebsite.jpg";
import { Unbounded } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const Work = [
  {
    id: 1,
    label: "Social Media",
    url: "/",
    image: SocialImage,
    desc: "A feature-packed social media app to connect, share, and engage—built with passion and creativity.",
    color: "from-blue-600 via-purple-600 to-pink-600",
    accentColor: "text-blue-300",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    label: "Real Change",
    url: "/",
    image: idkWhat,
    desc: "Designing beautiful & functional interfaces",
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    accentColor: "text-emerald-300",
    borderColor: "border-emerald-500/30",
  },
  {
    id: 3,
    label: "Travel Website",
    url: "/",
    image: travelWebsite,
    desc: "A sleek travel website designed for easy exploration, booking, and discovering new destinations.",
    color: "from-orange-600 via-amber-600 to-yellow-600",
    accentColor: "text-orange-300",
    borderColor: "border-orange-500/30",
  },
];

const MyWork = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#b9afa2]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`${unbounded.className} text-[clamp(42px,6vw,72px)] font-[400] main-text-color relative z-10 mb-8`}
      >
        My Work
      </motion.h1>

      {/* Work Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-8 mt-8 px-4 md:px-8 w-full max-w-7xl mx-auto relative z-10"
      >
        {Work.map((project, index) => (
          <motion.article
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group relative"
            style={{ transformOrigin: "center center" }}
          >
            <Link href={project.url} className="block">
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#b9afa2]/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Color Accent Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Image Container */}
                <figure className="relative w-full h-[280px] md:h-[320px] overflow-hidden">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>

                  {/* Color Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10`}
                  ></div>

                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </figure>

                {/* Content */}
                <figcaption className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.color}`}
                    ></div>
                    <h3
                      className={`text-2xl md:text-3xl font-bold ${project.accentColor} transition-colors duration-300`}
                    >
                      {project.label}
                    </h3>
                  </div>
                  <p className="main-text-color/70 text-sm md:text-base leading-relaxed">
                    {project.desc}
                  </p>

                  {/* View Project Link */}
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`text-sm ${project.accentColor} font-medium`}>
                      View Project
                    </span>
                    <svg
                      className={`w-4 h-4 ${project.accentColor} transform group-hover:translate-x-1 transition-transform duration-300`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </figcaption>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default MyWork;
