"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const messages = {
  it: {
    title: "Pagina non trovata",
    description: "La pagina che stavi cercando non è stata trovata.",
    backToHome: "Torna alla home",
  },
  en: {
    title: "Page not found",
    description: "The page you were looking for could not be found.",
    backToHome: "Back to home page",
  },
};

export default function NotFoundClient() {
  const { locale } = useLanguage();
  const t = messages[locale] ?? messages.en;

  return (
    <section
      className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
      style={{ backgroundImage: "url(/assets/images/404.webp)" }}
      id="home"
    >
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        <div className="home-content">
          <div className="row">
            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="hs-wrap">
                <div className="wow fadeInUp" data-wow-delay=".1s">
                  <h1 className="hs-title-12 mb-40 mb-sm-30">404</h1>
                </div>
                <div
                  className="mb-40 mb-sm-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h2 className="section-descr mb-20">{t.title}</h2>
                  <p className="section-descr">{t.description}</p>
                </div>
                <div
                  className="local-scroll wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Link
                    href="/"
                    className="btn btn-mod btn-w btn-round btn-medium btn-hover-anim"
                  >
                    <i className="mi-arrow-left size-24 align-center" />
                    <span>{t.backToHome}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}