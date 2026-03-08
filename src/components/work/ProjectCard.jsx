"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../button/Button";

/**
 * Reusable project card in either grid (compact) or featured (large alternating) layout.
 * @param {Object} props
 * @param {{ id: number|string, label: string, image: import('next/image').StaticImageData, desc: string, link: string }} props.project
 * @param {number} props.index - 0-based index (used for "Project 01" and alternating layout)
 * @param {"grid"|"featured"} props.variant
 */
export default function ProjectCard({ project, index, variant = "grid" }) {
  const projectNumber = String(index + 1).padStart(2, "0");

  if (variant === "grid") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-textGold/25 transition-all duration-500 group"
      >
        <figure className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.label}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </figure>
        <div className="flex flex-col flex-1 px-5 py-5 text-center sm:text-left">
          <span className="text-textGold text-xs font-medium tracking-wider uppercase mb-1">
            Project {projectNumber}
          </span>
          <h3 className="text-lg font-bold main-text-color leading-tight mb-2">
            {project.label}
          </h3>
          <p className="main-text-color opacity-90 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.desc}
          </p>
          <Button size="sm">View project</Button>
        </div>
      </motion.article>
    );
  }

  // variant === "featured"
  const reverse = index % 2 !== 0;
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${reverse ? "md:flex-row" : "md:flex-row-reverse"
        } relative flex flex-col items-stretch w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-textGold/25 transition-all duration-500 group`}
    >
      <figure className="relative w-full md:max-w-[55%] aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.label}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:from-black/40"
          aria-hidden
        />
      </figure>
      <div className="w-full md:min-w-[45%] flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 text-center md:text-left">
        <span className="text-textGold text-sm font-medium tracking-wider uppercase mb-2">
          Project {projectNumber}
        </span>
        <h3 className="text-[clamp(24px,2.8vw,32px)] font-bold main-text-color leading-tight mb-3">
          {project.label}
        </h3>
        <p className="main-text-color opacity-90 text-[clamp(15px,1.8vw,18px)] leading-relaxed mb-6">
          {project.desc}
        </p>
        <Button size="md">View project</Button>
      </div>
    </motion.article>
  );
}
