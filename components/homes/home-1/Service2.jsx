"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  it: {
    intro: [
      "Mi occupo di sviluppo full-stack per siti web, piattaforme digitali e applicativi web, seguendo i progetti sia sul lato frontend che backend. Realizzo soluzioni su misura, con attenzione a performance, chiarezza del codice e obiettivi di business.",
    ],
    services: [
      {
        id: "services-item-1",
        number: "01",
        title: "Siti web",
        description:
          "Realizzo siti web personalizzati, corporate o promozionali, con layout moderni, struttura chiara e contenuti pensati per comunicare bene il valore del brand. Posso partire da un tema esistente oppure sviluppare un'interfaccia completamente custom.",
        image: "/assets/images/tab-home/website-mockup.jpg",
        alt: "Sviluppo siti web su misura",
      },
      {
        id: "services-item-2",
        number: "02",
        title: "Restyling siti",
        description:
          "Aggiorno siti esistenti migliorando design, codice, velocità, struttura dei contenuti e usabilità. È il servizio giusto quando hai un sito datato, poco performante o non più coerente con l'immagine attuale della tua attività.",
        image: "/assets/images/tab-home/sketch.jpg",
        alt: "Restyling di siti esistenti",
      },
      {
        id: "services-item-3",
        number: "03",
        title: "Frontend",
        description:
          "Sviluppo interfacce moderne, responsive e fluide con attenzione all'esperienza utente e all'integrazione con API e CMS. Posso lavorare su landing page, portfolio, sezioni custom, aree riservate e componenti interattivi.",
        image: "/assets/images/tab-home/frontend.jpg",
        alt: "Sviluppo frontend responsive",
      },
      {
        id: "services-item-4",
        number: "04",
        title: "Backend & API",
        description:
          "Progetto e sviluppo logiche backend, API e pannelli amministrativi per gestire contenuti, richieste, dati e integrazioni. È il tipo di lavoro ideale quando serve una base solida per applicativi web, siti dinamici o piattaforme interne.",
        image: "/assets/images/tab-home/api.jpg",
        alt: "Sviluppo backend e API",
      },
      {
        id: "services-item-5",
        number: "05",
        title: "SaaS support",
        description:
          "Posso affiancarti nello sviluppo o nella manutenzione di piattaforme SaaS, dashboard, gestionali e applicativi web, intervenendo su nuove feature, bug fixing, refactoring e miglioramenti tecnici progressivi.",
        image: "/assets/images/tab-home/saas.jpg",
        alt: "Supporto tecnico per SaaS e web app",
      },
      {
        id: "services-item-6",
        number: "06",
        title: "Manutenzione",
        description:
          "Offro supporto continuativo per aggiornamenti, correzione problemi, ottimizzazioni e piccole evoluzioni di progetto. È una soluzione utile per chi ha bisogno di un riferimento tecnico affidabile anche dopo la pubblicazione.",
        image: "/assets/images/tab-home/website-maintenance.webp",
        alt: "Manutenzione tecnica di siti e applicativi",
      },
    ],
  },
  en: {
    intro: [
      "I work as a full-stack developer for websites, digital platforms, and web applications, following projects across both frontend and backend. I build tailored solutions with strong attention to performance, code clarity, and business goals.",
    ],
    services: [
      {
        id: "services-item-1",
        number: "01",
        title: "Websites",
        description:
          "I build tailored websites for companies, professionals, and brands, with modern layouts, clear structure, and content designed to communicate value effectively. I can start from an existing theme or develop a fully custom interface.",
        image: "/assets/images/tab-home/website-mockup.jpg",
        alt: "Custom website development",
      },
      {
        id: "services-item-2",
        number: "02",
        title: "Redesigns",
        description:
          "I redesign existing websites by improving design, code quality, performance, content structure, and usability. This is the right service when your current site feels outdated, underperforms, or no longer reflects your business properly.",
        image: "/assets/images/tab-home/sketch.jpg",
        alt: "Website redesign service",
      },
      {
        id: "services-item-3",
        number: "03",
        title: "Frontend",
        description:
          "I develop modern, responsive, and polished interfaces with a strong focus on user experience and integration with APIs and CMS platforms. I can work on landing pages, portfolios, custom sections, restricted areas, and interactive components.",
        image: "/assets/images/tab-home/frontend.jpg",
        alt: "Responsive frontend development",
      },
      {
        id: "services-item-4",
        number: "04",
        title: "Backend & API",
        description:
          "I design and develop backend logic, APIs, and admin panels to manage content, requests, data flows, and third-party integrations. This is ideal when a project needs a solid foundation for web applications, dynamic sites, or internal tools.",
        image: "/assets/images/tab-home/api.jpg",
        alt: "Backend and API development",
      },
      {
        id: "services-item-5",
        number: "05",
        title: "SaaS support",
        description:
          "I can support the development and maintenance of SaaS platforms, dashboards, management tools, and web applications, helping with new features, bug fixing, refactoring, and progressive technical improvements.",
        image: "/assets/images/tab-home/saas.jpg",
        alt: "Technical support for SaaS and web apps",
      },
      {
        id: "services-item-6",
        number: "06",
        title: "Maintenance",
        description:
          "I provide ongoing support for updates, bug fixing, optimizations, and small project evolutions. It is a practical solution for businesses that need a reliable technical partner even after launch.",
        image: "/assets/images/tab-home/website-maintenance.webp",
        alt: "Technical maintenance for websites and applications",
      },
    ],
  },
};

export default function Service2() {
  const { locale } = useLanguage();
  const currentContent = content[locale] || content.en;

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <div className="row mb-50 mb-sm-30">
            <div className="col-md-10">
              <p className="text-gray">{currentContent.intro[0]}</p>

              {currentContent.intro[1] && (
                <p className="text-gray mb-0">{currentContent.intro[1]}</p>
              )}
            </div>
          </div>

          <ul className="nav nav-tabs services-tabs" role="tablist">
            {currentContent.services.map((service, index) => (
              <li role="presentation" key={service.id}>
                <a
                  href={`#${service.id}`}
                  className={index === 0 ? "active" : ""}
                  aria-controls={service.id}
                  role="tab"
                  aria-selected={index === 0 ? "true" : "false"}
                  data-bs-toggle="tab"
                >
                  {service.title} <span className="number"><i className="mi-arrow-left"></i></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {currentContent.services.map((service, index) => (
              <div
                key={service.id}
                className={`tab-pane services-content-item fade ${
                  index === 0 ? "show active" : ""
                }`}
                id={service.id}
                role="tabpanel"
              >
                <div className="services-text">
                  <div className="services-text-container">
                    <h4 className="services-title">{service.title}</h4>
                    <p className="text-gray mb-0">{service.description}</p>
                  </div>
                </div>

                <Image
                  width={945}
                  height={1016}
                  className="services-image"
                  src={service.image}
                  alt={service.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}