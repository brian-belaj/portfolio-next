"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  it: {
    aboutText:
      "Aiuto aziende, professionisti e freelance a creare siti web chiari, moderni e facili da usare. Mi occupo dello sviluppo del progetto dall’inizio alla fine, con attenzione sia all’aspetto visivo sia a ciò che serve per avere un sito veloce, ordinato e semplice da gestire. Il mio obiettivo è realizzare soluzioni affidabili, pensate per presentare al meglio un’attività online e offrire un’esperienza piacevole a chi visita il sito. Se hai un progetto da sviluppare o un sito da migliorare, possiamo parlarne.",
  },
  en: {
    aboutText:
      "I help businesses, professionals, and freelancers create clear, modern, and easy-to-use websites. I handle the development of each project from start to finish, with attention to both visual quality and everything needed to make a website fast, well-structured, and easy to manage. My goal is to build reliable solutions that present a business at its best online and offer a smooth experience to the people using the site. If you have a project to build or a website to improve, we can talk about it.",
  },
};

const t = (key, locale) =>
  translations[locale]?.[key] || translations.en[key] || key;

export default function About() {
  const { locale } = useLanguage(); // <-- qui la differenza
  const servicesLabel = locale === "it" ? "servizi" : "services";

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5 mb-xs-50">
          <div className="call-action-4-images">
            <div className="call-action-4-image-1">
              <Image
                src="/assets/images/about-home/about-home-2.jpg"
                alt="Image description"
                width={500}
                height={692}
                className="wow scaleOutIn"
                data-wow-duration="1.2s"
              />
            </div>
            <div
              className="call-action-4-image-2"
              data-rellax-y=""
              data-rellax-speed="0.7"
              data-rellax-percentage="0.25"
            >
              <Image
                src="/assets/images/about-home/brian-belaj.webp"
                alt="Image description"
                width={500}
                height={692}
                className="wow scaleOutIn"
                data-wow-duration="1.2s"
                data-wow-offset={0}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-xl-6 offset-xl-1 mt-n10">
          <div className="wow linesAnimIn" data-splitting="lines">
            <p className="mb-40">{t("aboutText", locale)}</p>
          </div>
          <div className="local-scroll wow fadeInUp" data-wow-offset={0}>
            <Link
              href="#services"
              className="btn btn-mod btn-border btn-round btn-large"
            >
              <span className="btn-animate-y">
                <span className="btn-animate-y-1">{servicesLabel}</span>
                <span className="btn-animate-y-2" aria-hidden="true">
                  {servicesLabel}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}