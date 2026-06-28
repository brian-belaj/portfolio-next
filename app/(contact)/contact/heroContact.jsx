"use client";
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
    title: "Hai un progetto in mente?",
    subtitle:
      "Sviluppo siti web moderni, veloci e orientati ai risultati per freelance, professionisti e piccole aziende.",
    cta: "Contattami",
  },
  en: {
    title: "Do you have a project in mind?",
    subtitle:
      "I build modern, fast, results-driven websites for freelancers, professionals, and small businesses.",
    cta: "Get in touch",
  },
};

export default function heroContact() {
  const { locale } = useLanguage();

  return (
    <div className="theme-elegant">
      {/* Hero */}
      <section
        className="page-section bg-dark-alpha-50 light-content bg-cover"
        style={{
          backgroundImage: "url(/assets/images/demo-elegant/hero-brian.webp)",
        }}
        id="home"
      >
        <div className="container position-relative pt-20 pt-sm-20 text-center">
          <h1 className="overflow-hidden mb-30 mb-sm-20">
            <span className="d-block text-center wow fadeRotateIn">
              {getLocalizedValue(translations[locale]?.title, locale)}
            </span>
          </h1>
          <span
              className="d-block wow fadeRotateIn"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              {getLocalizedValue(translations[locale]?.subtitle, locale)}
            </span>
          <a
            href="#contact"
            className="btn btn-mod btn-round text-dark btn-medium mt-5"
            data-btn-animate="y"
            data-wow-delay="0.4s"
            style={{ borderColor: "#fff", backgroundColor: '#fff', color: '#000' }}
          >
            <span className="btn-animate-y">
              <span className="btn-animate-y-1">
                {getLocalizedValue(translations[locale]?.cta, locale)}
              </span>
              <span className="btn-animate-y-2" aria-hidden="true" style={{ color: '#000' }}>
                {getLocalizedValue(translations[locale]?.cta, locale)}
              </span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
