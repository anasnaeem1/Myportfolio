"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Reusable project card in either grid (compact) or featured (large alternating) layout.
 * @param {Object} props
 * @param {{ id: number|string, slug: string, label: string, image: string, desc: string, url: string, accentColor?: string, borderColor?: string }} props.project
 * @param {number} props.index - 0-based index (used for "Project 01" and alternating layout)
 * @param {"grid"|"featured"} props.variant
 */
export default function ProjectCard({ project, index, variant = "grid" }) {
  const projectNumber = String(index + 1).padStart(2, "0");
  const detailHref = `/work/${project.slug}`;
  const accent = project.accentColor ?? "text-textGold";

  if (variant === "grid") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-textGold/25 transition-all duration-500 group"
      >
        <Link href={detailHref} className="flex min-h-0 flex-1 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-textGold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]">
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
            <span className="text-textGold text-xs font-medium tracking-wider uppercase mb-1">Project {projectNumber}</span>
            <h3 className="text-lg font-bold main-text-color leading-tight mb-2">{project.label}</h3>
            <p className="main-text-color opacity-90 text-sm leading-relaxed mb-4 line-clamp-2">{project.desc}</p>
            <span className="btn-underline relative mt-auto inline-flex items-center self-center p-0 border-0 bg-transparent font-semibold cursor-pointer text-[var(--foreground)] transition-colors duration-200 ease-out text-sm sm:self-start">
              <span className="btn-reveal-text text-inherit" data-text="View case study">
                View case study
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 w-3.5 h-3.5 text-[var(--foreground)] transition-all duration-200 ease-out"
                aria-hidden
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </Link>
        <div className="border-t border-white/5 px-5 py-3 text-center sm:text-left">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-medium ${accent} opacity-90 underline-offset-4 hover:underline hover:opacity-100 transition-opacity`}
          >
            Open live project ↗
          </a>
        </div>
      </motion.article>
    );
  }

  const reverse = index % 2 !== 0;
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-textGold/25 transition-all duration-500 group"
    >
      <Link
        href={detailHref}
        className={`flex flex-col items-stretch focus:outline-none focus-visible:ring-2 focus-visible:ring-textGold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] ${
          reverse ? "md:flex-row" : "md:flex-row-reverse"
        }`}
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
          <span className="text-textGold text-sm font-medium tracking-wider uppercase mb-2">Project {projectNumber}</span>
          <h3 className="text-[clamp(24px,2.8vw,32px)] font-bold main-text-color leading-tight mb-3">{project.label}</h3>
          <p className="main-text-color opacity-90 text-[clamp(15px,1.8vw,18px)] leading-relaxed mb-6">{project.desc}</p>
          <span className="btn-underline relative inline-flex items-center justify-center md:justify-start p-0 border-0 bg-transparent font-semibold cursor-pointer text-[var(--foreground)] transition-colors duration-200 ease-out text-[18px] gap-2">
            <span className="btn-reveal-text text-inherit" data-text="View case study">
              View case study
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-[18px] h-[18px] text-[var(--foreground)] transition-all duration-200 ease-out"
              aria-hidden
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </Link>
      <div className="border-t border-white/5 px-6 py-3 text-center md:text-left">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-medium ${accent} opacity-90 underline-offset-4 hover:underline hover:opacity-100 transition-opacity`}
        >
          Open live project ↗
        </a>
      </div>
    </motion.article>
  );
}
