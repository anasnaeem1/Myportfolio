"use client";

import { useState } from "react";
import { Unbounded } from "next/font/google";
import LayoutSelector from "./LayoutSelector";
import ProjectCard from "./ProjectCard";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const DEFAULT_LAYOUT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "grid", label: "Grid" },
];

/**
 * Reusable work/portfolio section with layout toggle and project cards.
 * @param {Object} props
 * @param {{ id: number|string, slug: string, label: string, image: string, desc: string, url: string }[]} props.projects
 * @param {string} [props.eyebrow] - Small label above title
 * @param {string} [props.title] - Main heading
 * @param {string} [props.subtitle] - Description below title
 * @param {{ id: string, label: string }[]} [props.layoutOptions] - Options for layout selector
 * @param {string} [props.defaultLayout] - Initial layout id ("featured" | "grid" or first option)
 * @param {number} [props.maxProjects] - Max number of projects to show (default: all)
 */
export default function WorkSection({
  projects,
  eyebrow = "Portfolio",
  title = "All projects",
  subtitle = "Things I've built with focus on design and usability.",
  layoutOptions = DEFAULT_LAYOUT_OPTIONS,
  defaultLayout = "featured",
  maxProjects,
}) {
  const [layout, setLayout] = useState(defaultLayout);
  const list = maxProjects != null ? projects.slice(0, maxProjects) : projects;

  return (
    <div className="relative w-full main-bg-color overflow-x-hidden">
      <header className="px-6 md:px-12 pt-16 pb-10 md:pt-24 md:pb-14 max-w-6xl mx-auto">
        <span className="inline-block text-textGold text-xs font-medium tracking-[0.2em] uppercase mb-2">
          {eyebrow}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <h1
              className={`${unbounded.className} text-[clamp(36px,5vw,64px)] font-semibold main-text-color tracking-tight`}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 main-text-color opacity-80 text-lg max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
          <div className="md:block hidden mt-6 sm:mt-0">
            <LayoutSelector
              options={layoutOptions}
              value={layout}
              onChange={setLayout}
              ariaLabel="Layout options"
            />
          </div>
        </div>
      </header>

      <section
        className={`w-full px-4 md:px-8 pb-20 md:pb-28 ${
          layout === "grid"
            ? "flex flex-col items-center"
            : "flex flex-col items-center gap-12 md:gap-16"
        }`}
      >
        {layout === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {list.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="grid"
              />
            ))}
          </div>
        ) : (
          list.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="featured"
            />
          ))
        )}
      </section>
    </div>
  );
}

/** Case-study page for a single project (`/work/[slug]`). */
export { default as ProjectCaseStudy } from "./ProjectCaseStudy";
