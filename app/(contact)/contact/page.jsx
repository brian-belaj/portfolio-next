
import Footer5 from "@/components/footers/Footer9";
import Header7 from "@/components/headers/HeaderBrian";
import Contact from "@/components/homes/home-7/Contact";
import { useLanguage } from "@/context/LanguageContext";

import { gradientMultipage, gradientMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = true;
export const metadata = {
  title: "Contatti | Brian Belaj, Full‑stack Web Developer a Pisa",
  description:
    "Contatta Brian Belaj per lo sviluppo di siti web, applicazioni web e supporto tecnico per piattaforme SaaS. Disponibile per nuovi progetti, restyling di siti esistenti e consulenza tecnica.",
  keywords: [
    "contatti",
    "Brian Belaj",
    "sviluppatore web Torino",
    "fullstack developer",
    "sviluppo siti web",
    "applicazioni web",
    "supporto tecnico SaaS",
    "restyling siti",
  ],
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
              <section
                className="page-section bg-dark-alpha-50 light-content bg-cover"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-elegant/hero-brian.webp)",
                }}
                id="home"
              >
                <div className="container position-relative pt-20 pt-sm-20 text-center">
                  <h1 className="hs-title-4 overflow-hidden mb-30 mb-sm-20">
                    <span className="d-block text-center wow fadeRotateIn">
                      Brian Belaj
                    </span>
                    <span
                      className="d-block wow fadeRotateIn"
                      data-wow-delay="0.2s"
                      data-wow-offset={0}
                    >
                      Web Developer
                    </span>
                  </h1>
                </div>
              </section>
              <section className="page-section" id="contact">
                <Contact />
              </section>
            </main>
            <footer className="footer bg-dark-2 light-content overflow-hidden pb-30">
              <div className="bg-shape-4 opacity-003">
                <Image
                  width="1443"
                  height="644"
                  src="/assets/images/demo-gradient/bg-shape-1.svg"
                  alt=""
                />
              </div>
              <Footer5 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
