// app/(portfolio-single)/project/[id]/page.jsx

import { getProject, getProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";

/**
 * Genera i percorsi statici per tutti i progetti (SSG).
 * La chiave DEVE corrispondere al nome del parametro dinamico della cartella: [id]
 */
export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Progetto non trovato" };

  const title = project?.title?.it ?? "Portfolio project";
  const description = project?.excerpt?.it ?? "Project description";

  return { title, description };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}