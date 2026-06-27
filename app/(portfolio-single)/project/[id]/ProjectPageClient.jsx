"use client";

import Footer5 from "@/components/footers/Footer9";
import Header5 from "@/components/headers/HeaderBrian";
import Image from "next/image";
import Link from "next/link";
import { gradientMultipage } from "@/data/menu";
import { useLanguage } from "@/context/LanguageContext";

const getLocalizedValue = (field, locale) => {
  if (!field) return "";
  if (typeof field === "string") return field;

  const preferred = field[locale];
  const fallbackIt = field.it;
  const fallbackEn = field.en;

  return preferred || fallbackIt || fallbackEn || "";
};

const translations = {
  it: {
    projectDetails: "Dettagli progetto",
    website: "Sito web",
    date: "Data",
    client: "Cliente",
    description: "Descrizione",
    allProjects: "Tutti i progetti",
    contactMe: "Contattami",
  },
  en: {
    projectDetails: "Project Details",
    website: "Website",
    date: "Date",
    client: "Client",
    description: "Description",
    allProjects: "All projects",
    contactMe: "Contact me",
  },
};

const t = (key, locale) =>
  translations[locale]?.[key] || translations.en[key] || key;

export default function ProjectPageClient({ project }) {
  const { locale } = useLanguage();

  const title = getLocalizedValue(project.title, locale);
  const excerpt = getLocalizedValue(project.excerpt, locale);
  const description = getLocalizedValue(project.description, locale);
  const client = getLocalizedValue(project.client, locale);

  return (
    <div className="theme-elegant">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <Header5 links={gradientMultipage} />
        </nav>

        <main id="main">
          {/* Hero */}
          <section
            className="page-section bg-dark-alpha-50 light-content"
            style={{
              backgroundImage: project.coverImageUrl
                ? `url(${project.coverImageUrl})`
                : undefined,
              backgroundPosition: "center center",
            }}
            id="home"
          >
            <div className="container position-relative pt-20 pt-sm-20 text-center">
              <h1
                className="hs-title-3 mb-10 wow fadeInUpShort"
                data-wow-duration="0.6s"
              >
                {title}
              </h1>

              <div className="row wow fadeIn" data-wow-delay="0.2s">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <p className="section-title-tiny mb-0 opacity-075">
                    {excerpt}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Project details & description */}
          <section className="page-section">
            <div className="container relative">
              <div className="row mb-80 mb-sm-40">
                {/* Project Details */}
                <div className="col-md-6 mb-sm-40">
                  <h2 className="section-title-small mb-20">
                    {t("projectDetails", locale)}
                  </h2>
                  <hr className="mb-20" />

                  <div className="row text-gray">
                    <div className="col-sm-4">
                      <b>{t("website", locale)}</b>
                    </div>
                    <div className="col-sm-8">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.liveUrl
                            .replace(/^https?:\/\//, "")
                            .replace(/\/$/, "")}
                        </a>
                      ) : (
                        "—"
                      )}
                    </div>
                  </div>

                  <hr className="mb-20" />

                  <div className="row text-gray">
                    <div className="col-sm-4">
                      <b>{t("date", locale)}:</b>
                    </div>
                    <div className="col-sm-8">
                      {project.createdAt &&
                        `${new Date(project.createdAt)
                          .toLocaleString("en-US", { month: "long" })
                          .toUpperCase()} ${new Date(
                          project.createdAt,
                        ).getDate()}, ${new Date(
                          project.createdAt,
                        ).getFullYear()}`}
                    </div>
                  </div>

                  <hr className="mb-20" />

                  <div className="row text-gray">
                    <div className="col-sm-4">
                      <b>{t("client", locale)}:</b>
                    </div>
                    <div className="col-sm-8">{client || "—"}</div>
                  </div>

                </div>

                {/* Project Description */}
                <div className="col-md-6">
                  <h2 className="section-title-small mb-20">
                    {t("description", locale)}
                  </h2>
                  <hr className="mb-20" />
                  <p
                    className="text-gray mb-20"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {description}
                  </p>
                  <Link
                    href="/contact"
                    className="btn btn-mod btn-border btn-large btn-round"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">{t("contactMe", locale)}</span>
                      <span className="btn-animate-y-2">{t("contactMe", locale)}</span>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="row mb-n30">
                {project.gallery && project.gallery.length > 0 && (
                  <div className="row mb-n30">
                    {project.gallery
                      .slice() 
                      .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
                      .map((image, index) => (
                        <div
                          key={index}
                          className="col-md-6 mb-30 wow fadeInUp"
                          data-wow-delay={`${index * 0.1}s`}
                        >
                          <Image
                            src={image.url}
                            alt={title || "Project image"}
                            width={970}
                            height={1136}
                          />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </section>


        </main>

        <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
          <Footer5 />
        </footer>
      </div>
    </div>
  );
}
