// ─── Progetti: dati locali (no backend) ──────────────────────────────────────

export {
  getProjects,
  getFeaturedProjects,
  getProject,
} from "@/data/projects";

// ─── Contact form: Route Handler interno Next.js (/app/api/contact/route.js) ──

export async function sendContact(payload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(result.error || `Error: ${response.status}`);
    error.responseData = result;
    throw error;
  }

  return result;
}