"use client";

import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** @param {{ project: import("../../data/workProjects").WorkProject }} props */
export default function ProjectCaseStudy({ project }) {
  const { pages } = project.caseStudy;

  return (
    <div className="main-bg-color min-h-screen px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <Link href="/work" className="text-xs text-textGold hover:underline">
              ← All projects
            </Link>
            <h1 className={`${unbounded.className} mt-2 text-2xl font-semibold main-text-color md:text-3xl`}>
              {project.label}
            </h1>
            <p className="mt-1 max-w-xl text-xs leading-snug main-text-color/70 md:text-sm">{project.desc}</p>
            <p className="mt-1 text-[11px] main-text-color/50">
              {project.role} · {project.year} · {project.stack.join(", ")}
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs text-textGold underline underline-offset-2 md:text-sm"
          >
            Live site ↗
          </a>
        </div>

        <div className="relative mt-6 aspect-[16/10] w-full min-h-[200px] max-h-[min(52vh,420px)] overflow-hidden rounded-lg border border-white/10 md:min-h-[260px] md:max-h-[min(48vh,480px)]">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-10">
          <nav className="md:sticky md:top-24 md:self-start" aria-label="Jump to page">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-textGold/70">Pages</p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 md:flex-col md:gap-1">
              {pages.map((page) => (
                <li key={page.id}>
                  <button
                    type="button"
                    onClick={() => go(page.id)}
                    className="text-left text-xs main-text-color/80 hover:text-textGold md:text-sm"
                  >
                    {page.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 space-y-7 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:border-white/10 md:pl-10 md:pt-0">
            {pages.map((page) => {
              const filledSubpages = (page.subpages ?? []).filter((sp) => {
                const bits = sp.points ?? sp.bullets ?? [];
                return Boolean(sp.title?.trim()) && bits.length > 0;
              });

              return (
                <section key={page.id} id={page.id} className="scroll-mt-20">
                  <h2 className={`${unbounded.className} text-base font-semibold text-textGold md:text-lg`}>{page.title}</h2>
                  {page.desc ? <p className="mt-1.5 text-xs leading-relaxed main-text-color/75 md:text-sm">{page.desc}</p> : null}
                  {page.descPoints?.length ? (
                    <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs leading-snug main-text-color/80 md:text-sm">
                      {page.descPoints.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  ) : null}
                  {filledSubpages.length > 0 ? (
                    <ul className="mt-3 space-y-1.5 border-t border-white/5 pt-3 text-xs leading-snug main-text-color/80 md:text-sm">
                      {filledSubpages.map((sp) => {
                        const bits = sp.points ?? sp.bullets ?? [];
                        return (
                          <li key={sp.id}>
                            <span className="font-medium text-main-text-color/90">{sp.title}</span>
                            <span className="main-text-color/60"> — {bits.join(" · ")}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
