import { notFound } from "next/navigation";
import ProjectCaseStudy from "../../../components/work/ProjectCaseStudy";
import { getAllWorkSlugs, getWorkProjectBySlug } from "../../../data/workProjects";

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.label} — Case study`,
    description: project.desc,
  };
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export default async function WorkProjectPage({ params }) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
