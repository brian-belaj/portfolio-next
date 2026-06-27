"use client";

import { getProjects } from "@/lib/api";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Errore nel fetch dei progetti:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="container">
        {/* Qui il filtro è rimosso, ma manteniamo il container per non rompere il layout */}
      </div>

      <div className="position-relative">
        {/* Works Grid */}
        <ul
          className="works-grid work-grid-4 work-grid-gut-sm hide-titles"
          id="work-grid"
        >
          <Gallery>
            {projects.map((item) => (
              <li
                key={item.id}
                className={`work-item mix`}
              >
           
                <Link
                  href={`/elegant-portfolio-single/${item.slug}`}
                  className="work-ext-link"
                >
                  <div className="work-img">
                    <div className="work-img-bg wow-p scalexIn" />

                    {item.coverImageUrl && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL?.replace(
                          /\/api$/,
                          ""
                        )}${item.coverImageUrl}`}
                        width={650}
                        height={761}
                        alt={item.title}
                      />
                    )}
                  </div>

                  <div className="work-intro">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">
                      {item.excerpt || "Web Development"}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </Gallery>
        </ul>
        {/* End Works Grid */}
      </div>
    </>
  );
}