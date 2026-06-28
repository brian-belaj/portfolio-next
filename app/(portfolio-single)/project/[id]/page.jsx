// app/(portfolio-single)/project/[id]/page.jsx

import { getProject, getProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";

const SITE_URL = process.env.SITE_URL;
const SITE_NAME = process.env.SITE_NAME;

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return {
      title: "Progetto non trovato",
      description: "Il progetto richiesto non è disponibile.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = project?.title?.it || "Progetto portfolio";
  const description =
    project?.excerpt?.it ||
    `Scopri il progetto ${title} realizzato da ${SITE_NAME}, sviluppatore web freelance.`;

  const canonical = `${SITE_URL}/project/${project.slug}`;

  const rawImage = project?.seo?.image || project?.cover;
  const ogImage = rawImage
    ? rawImage.startsWith("http")
      ? rawImage
      : `${SITE_URL}${rawImage}`
    : `${SITE_URL}assets/images/about-home/brian-belaj.webp`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "it_IT",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - progetto portfolio di ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}