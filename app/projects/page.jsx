import Footer from "@/components/footers/Footer9";
import ProjectsPageContent from "@/components/portfolio/ProjectsPageContent";

const SITE_URL = (process.env.SITE_URL || "https://brianbelaj.com").replace(
  /\/$/,
  "",
);
const SITE_NAME = process.env.SITE_NAME || "Brian Belaj";

export const metadata = {
  title: `Progetti | ${SITE_NAME}, Web Developer Freelance`,
  description:
    "Scopri tutti i progetti realizzati da Brian Belaj: siti web, e-commerce e piattaforme digitali sviluppati su misura.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: `Progetti | ${SITE_NAME}`,
    description:
      "Una raccolta di siti web, e-commerce e piattaforme digitali realizzati da Brian Belaj.",
    url: `${SITE_URL}/projects`,
    siteName: SITE_NAME,
    locale: "it_IT",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div className="theme-elegant">
      <div className="light-mode">
        <div className="page bg-light-1" id="top">
          <ProjectsPageContent />

          <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
