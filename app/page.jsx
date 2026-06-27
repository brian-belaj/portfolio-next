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
  title: "Brian Belaj || Web Developer",
  description:
    "I am a passionate web developer with a strong focus on creating visually appealing and user-friendly websites. My expertise lies in front-end development, where I combine my technical skills with a keen eye for design to deliver exceptional web experiences.",
  keywords: [
    "Brian Belaj",
    "Web Developer",
    "Front-end Development",
    "UI/UX Design",
    "Responsive Web Design",
    "JavaScript",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Web Development Portfolio",
    "Creative Web Solutions",
  ],
};
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
                className="page-section scrollSpysection"
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
