"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  it: {
    aboutText:
      "Sono uno sviluppatore full‑stack specializzato nella creazione di applicazioni web moderne e ad alte prestazioni. Aiuto aziende e professionisti a creare e mantenere la loro presenza online con soluzioni end‑to‑end — dall’architettura backend scalabile e API fino a frontend curati e responsive. Presto attenzione ai dettagli per garantire un’esperienza utente fluida, sicura e accessibile. Lavoro su tutto lo stack con tecnologie server‑side, database e framework JavaScript per consegnare prodotti affidabili e ben ottimizzati. Se cerchi una soluzione web completa e pronta per la produzione, contattami per trasformare la tua idea in realtà.",
  },
  en: {
    aboutText:
      "I am a fullstack developer specializing in building modern, high-performance web applications. I help businesses and professionals create and maintain their online presence with end-to-end solutions — from scalable backend architectures and APIs to polished, responsive frontends. I pay attention to detail to ensure a smooth, secure, and accessible user experience. I work across the stack with server-side technologies, databases, and JavaScript frameworks to deliver reliable, well-optimized products. If you need a complete, production-ready web solution, contact me to turn your idea into reality.",
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