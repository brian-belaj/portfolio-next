export default function robots() {
  const baseUrl = (process.env.SITE_URL || "https://brianbelaj.com").replace(/\/$/, "");

  return {
    rules: {
      userAgent: '*',
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
