import { getProjects } from "@/data/projects";

const siteUrl = (process.env.SITE_URL || "https://brianbelaj.com").replace(/\/$/, "");

export default function sitemap() {
  const staticPages = [
    { url: `${siteUrl}/`, priority: 1 },
    { url: `${siteUrl}/projects`, priority: 0.9 },
    { url: `${siteUrl}/contact`, priority: 0.8 },
    { url: `${siteUrl}/privacy`, priority: 0.3 },
    { url: `${siteUrl}/cookie-policy`, priority: 0.3 },
  ];

  const projectPages = getProjects().map((project) => ({
    url: `${siteUrl}/project/${project.slug}`,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
