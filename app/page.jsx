import Footer5 from "@/components/footers/Footer9";
import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header5 from "@/components/headers/HeaderBrian";
import Image from "next/image";
import Link from "next/link";
import About from "@/components/homes/home-1/About";
const onePage = false;
const dark = true;
import { gradientMultipage } from "@/data/menu";
import Portfolio from "@/components/portfolio/Portfolio3";
import Service2 from "@/components/homes/home-1/Service2";

export const metadata = {
  title: 'Sviluppatore Web Freelance a Pisa | Brian Belaj',
  description:
    'Realizzo siti web moderni, veloci e ottimizzati SEO. Portfolio e progetti di sviluppo web freelance con focus su performance, UX e Next.js.',
  alternates: {
    canonical: 'https://brianbelaj.com/',
  },
  openGraph: {
    title: 'Sviluppatore Web Freelance a Pisa | Brian Belaj',
    description:
      'Realizzo siti web moderni, veloci e ottimizzati SEO. Scopri portfolio e progetti di sviluppo web freelance.',
    url: 'https://brianbelaj.com/',
    siteName: 'Brian Belaj',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/assets/images/about-home/brian-belaj.webp',
        width: 1200,
        height: 630,
        alt: 'Portfolio di Brian Belaj, sviluppatore web freelance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sviluppatore Web Freelance a Pisa | Brian Belaj',
    description:
      'Portfolio e progetti di sviluppo web freelance, con focus su siti performanti e ottimizzati SEO.',
    images: ['/assets/images/about-home/brian-belaj.webp'],
  },
}
export default function ElegantPortfolioPageDark() {
  return (
    <>
      <div className="theme-elegant">
        <div className="light-mode">
          <div className="page bg-light-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header5 links={gradientMultipage} />
            </nav>
            <main id="main">
              <section
                className="page-section bg-dark-alpha-50 light-content"
                
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
              <section className="page-section ">
                <About />
              </section>
              <section
                className="page-section pt-0 scrollSpysection dark-content "
                id="portfolio"
              >
                <div className="container text-center mb-40">
                  <h2 className="section-title">Portfolio</h2>
                </div>
                <Portfolio locale="it" />
              </section>
              <section
                className="page-section pt-0 scrollSpysection"
                id="services"
              >
                <Service2 />
              </section>
            </main>
            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
