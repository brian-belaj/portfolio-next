/* cspell:disable */

import { getProject, getProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";

const SITE_URL = (process.env.SITE_URL || "https://example.com").replace(/\/$/, "");
const SITE_NAME = process.env.SITE_NAME || "Brian Belaj";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ id: p.slug }));
}

function absoluteUrl(path = "") {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return {
      title: "Progetto non trovato | " + SITE_NAME,
      description: "Il progetto richiesto non è disponibile.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectTitle = project?.title?.it || "Progetto portfolio";
  const projectExcerpt = project?.excerpt?.it?.trim();
  const projectService =
    project?.seo?.service?.it ||
    project?.category?.it ||
    "Sviluppo sito web";

  const title = `${projectTitle} | ${projectService} | ${SITE_NAME}`;

  const description =
    project?.seo?.description?.it ||
    projectExcerpt ||
    `Scopri il progetto ${projectTitle}: ${projectService.toLowerCase()} realizzato da ${SITE_NAME}, sviluppatore web freelance.`;

  const canonical = absoluteUrl(`/project/${project.slug}`);

  const rawImage = project?.seo?.image || project?.cover || "/assets/images/about-home/brian-belaj.webp";
  const ogImage = absoluteUrl(rawImage);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "it_IT",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${projectTitle} - progetto portfolio di ${SITE_NAME}`,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Progetti",
        item: absoluteUrl("/project"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project?.title?.it || "Progetto",
        item: absoluteUrl(`/project/${project.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectPageClient project={project} />
    </>
  );
}