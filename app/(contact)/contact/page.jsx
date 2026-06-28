import Footer5 from "@/components/footers/Footer9";
import Header7 from "@/components/headers/HeaderBrian";
import Contact from "@/components/homes/home-7/Contact";

import { gradientMultipage, gradientMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import HeroContact from "./heroContact";
const onePage = false;
const dark = true;

const SITE_URL = process.env.SITE_URL;
const SITE_NAME = process.env.SITE_NAME;

export const metadata = {
  title: `Contatti | ${SITE_NAME}, Web Developer Freelance a Pisa`,
  description:
    "Contatta Brian Belaj per sviluppo siti web, applicazioni web e consulenza tecnica. Disponibile per nuovi progetti, restyling di siti esistenti e collaborazioni da remoto.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contatti | ${SITE_NAME}, Web Developer Freelance a Pisa`,
    description:
      "Contatta Brian Belaj per sviluppo siti web, applicazioni web e consulenza tecnica. Disponibile per nuovi progetti e collaborazioni da remoto.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Contatti ${SITE_NAME}, web developer freelance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contatti | ${SITE_NAME}, Web Developer Freelance a Pisa`,
    description:
      "Contatta Brian Belaj per sviluppo siti web, applicazioni web e consulenza tecnica.",
    images: [`${SITE_URL}/twitter-image.jpg`],
  },
};

export default function GradientContactPageDark() {
  return (
    <>
      <div className="theme-gradient">
        <div className="light-mode">
          <div className="page bg-light-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header7 links={gradientMultipageDark} />
            </nav>
            <main id="main">
              <section className="position-relative z-auto">
                <HeroContact />
              </section>
              <section className="page-section" id="contact">
                <Contact />
              </section>
            </main>
            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
