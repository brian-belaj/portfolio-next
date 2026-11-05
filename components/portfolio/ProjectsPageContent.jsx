"use client";

import Header from "@/components/headers/HeaderBrian";
import Portfolio3 from "@/components/portfolio/Portfolio3";
import { useLanguage } from "@/context/LanguageContext";
import { gradientMultipage } from "@/data/menu";

export default function ProjectsPageContent() {
  const { locale } = useLanguage();
  const isItalian = locale === "it";

  return (
    <>
      <nav className="main-nav stick-fixed wow-menubar">
        <Header links={gradientMultipage} />
      </nav>

      <main id="main">
        <section className="page-section pb-0" id="projects">
          <div className="container position-relative pt-20 pt-sm-20 text-center">
            <h1 className="hs-title-3 mb-20">
              {isItalian ? "Progetti" : "Case Studies"}
            </h1>
            <p className="section-title-tiny mb-0">
              {isItalian
                ? "Una selezione di siti web e progetti digitali realizzati su misura."
                : "A selection of custom websites and digital projects."}
            </p>
          </div>
        </section>

        <section className="page-section pt-50 pt-sm-40">
          <Portfolio3 />
        </section>
      </main>
    </>
  );
}
