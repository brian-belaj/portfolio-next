"use client";

import { getProjects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { Gallery } from "react-photoswipe-gallery";

export default function Portfolio3({ gridClass = "" }) {
  const { locale } = useLanguage();

  // I dati sono locali e sincroni: nessun useEffect/fetch necessario
  const projects = useMemo(
    () => getProjects(),
    []
  );

  const getLocalizedValue = (field) => {
    if (!field) return "";
    if (typeof field === "string") return field;

    const preferred = field[locale];
    const fallbackIt = field.it;
    const fallbackEn = field.en;

    return preferred || fallbackIt || fallbackEn || "";
  };

  const getMixClasses = (project) => {
    const classes = [];
    if (project.isFeatured) classes.push("branding");
    if (project.liveUrl) classes.push("development");
    classes.push("design");
    return classes.join(" ");
  };

  return (
    <div className="full-wrapper position-relative">
      <ul
        className={`works-grid work-grid-3 work-grid-gut-lg masonry ${gridClass}`}
        id="work-grid"
      >
        <Gallery>
          {projects.map((project) => {
            const mixClasses = getMixClasses(project);
            // Le immagini sono in /public, path diretto senza base URL
            const cover = project.coverImageUrl || null;

            const title = getLocalizedValue(project.title);
            const excerpt = getLocalizedValue(project.excerpt);

            return (
              <li
                key={project.id}
                className={`work-item mt-90 mt-md-0 mix ${mixClasses}`}
              >
                <Link
                  href={`/project/${project.slug}`}
                  className="work-lightbox-link mfp-image"
                >
                  <div className="work-img">
                    <div className="work-img-bg wow-p" />
                    {cover && (
                      <Image
                        width={719}
                        height={461}
                        src={cover}
                        alt={title || "Project cover"}
                      />
                    )}
                  </div>

                  <div className="work-intro text-start">
                    <h3 className="work-title">{title}</h3>
                    <div className="work-descr">
                      {excerpt || "Web Development"}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </Gallery>
      </ul>
      
    </div>
  );
}
