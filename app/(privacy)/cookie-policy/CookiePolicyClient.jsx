"use client";

import { useLanguage } from "@/context/LanguageContext";
import Footer1 from "@/components/footers/Footer9";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/HeaderBrian";
import AnimatedText from "@/components/common/AnimatedText";
import { gradientMultipage } from "@/data/menu";

const translations = {
  it: {
    title: "Cookie Policy",
    lastUpdated: "Ultimo aggiornamento: luglio 2026",
    intro: "Questa Cookie Policy spiega cosa sono i cookie, come vengono utilizzati su questo sito web e quali sono le tue scelte in merito. Visitando il sito, acconsenti all'utilizzo dei cookie in conformità con la presente policy.",
    whatAreCookiesTitle: "Cosa sono i cookie?",
    whatAreCookiesDesc: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web o renderli più efficienti, nonché per fornire informazioni ai proprietari del sito.",
    howIUseCookiesTitle: "Come utilizzo i cookie",
    howIUseCookiesDesc: "Questo sito utilizza principalmente cookie tecnici, che sono essenziali per il corretto funzionamento del sito.",
    essentialCookiesTitle: "Cookie strettamente necessari:",
    essentialCookiesDesc: "Questi cookie sono necessari per consentirti di navigare all'interno del sito web e di utilizzarne le funzionalità. Senza questi cookie, i servizi che hai richiesto non possono essere forniti.",
    analyticsCookiesTitle: "Cookie di analisi:",
    analyticsCookiesDesc: "Potremmo utilizzare cookie di terze parti (come Google Analytics) per raccogliere informazioni su come i visitatori utilizzano il sito, quali pagine visitano più spesso e se ricevono messaggi di errore. Questi cookie ci aiutano a migliorare le prestazioni e l'esperienza utente del sito.",
    thirdPartyServicesTitle: "Servizi di terze parti",
    thirdPartyServicesDesc: "Potremmo includere contenuti di terze parti (come video o collegamenti ai social media) che potrebbero impostare i propri cookie. Non abbiamo alcun controllo su questi cookie. Ti invitiamo a consultare le informative sulla privacy di questi siti terzi per ulteriori informazioni su come gestiscono i cookie.",
    howToManageCookiesTitle: "Come gestire i cookie",
    howToManageCookiesDesc: "La maggior parte dei browser web consente di gestire i cookie attraverso le impostazioni del browser. Puoi impostare il tuo browser per rifiutare tutti o alcuni cookie o per avvisarti quando un sito web imposta o accede ai cookie. Tuttavia, tieni presente che se disabiliti i cookie, alcune parti di questo sito potrebbero diventare inaccessibili o non funzionare correttamente.",
    contactTitle: "Contatti",
    contactDesc: "Per domande su questa Cookie Policy, puoi contattarmi all’indirizzo email:",
    footerText: "Questa Cookie Policy può essere aggiornata occasionalmente per riflettere cambiamenti nelle nostre pratiche o nei requisiti normativi. Ti invitiamo a visitare regolarmente questa pagina per gli ultimi aggiornamenti."
  },
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last updated: July 2026",
    intro: "This Cookie Policy explains what cookies are, how they are used on this website, and what your choices are. By visiting the site, you consent to the use of cookies in accordance with this policy.",
    whatAreCookiesTitle: "What are cookies?",
    whatAreCookiesDesc: "Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the owners of the site.",
    howIUseCookiesTitle: "How I use cookies",
    howIUseCookiesDesc: "This site primarily uses technical cookies, which are essential for the proper functioning of the site.",
    essentialCookiesTitle: "Strictly necessary cookies:",
    essentialCookiesDesc: "These cookies are necessary to allow you to navigate the website and use its features. Without these cookies, the services you have requested cannot be provided.",
    analyticsCookiesTitle: "Analytics cookies:",
    analyticsCookiesDesc: "We may use third-party cookies (such as Google Analytics) to collect information about how visitors use the site, which pages they visit most often, and if they get error messages. These cookies help us improve the performance and user experience of the site.",
    thirdPartyServicesTitle: "Third-party services",
    thirdPartyServicesDesc: "We may include third-party content (such as videos or social media links) that may set their own cookies. We have no control over these cookies. We encourage you to review the privacy policies of these third-party sites for more information on how they handle cookies.",
    howToManageCookiesTitle: "How to manage cookies",
    howToManageCookiesDesc: "Most web browsers allow you to manage cookies through the browser settings. You can set your browser to refuse all or some cookies, or to alert you when a website sets or accesses cookies. However, please note that if you disable cookies, some parts of this site may become inaccessible or not function properly.",
    contactTitle: "Contact",
    contactDesc: "For questions about this Cookie Policy, you can contact me at:",
    footerText: "This Cookie Policy may be updated from time to time to reflect changes in our practices or regulatory requirements. We encourage you to review this page regularly for the latest updates."
  }
};

export default function CookiePolicyClient() {
  const { locale } = useLanguage();
  const t = translations[locale] || translations.en;

  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <Header1Multipage links={gradientMultipage} />
        </nav>

        <main id="main">
          {/* Hero */}
          <section className="page-section pt-0 pb-0" id="home">
            <ParallaxContainer
              className="page-section bg-gray-dark-1 bg-dark-alpha-70 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/cookies/cookies.webp)",
              }}
            >
              <div className="container position-relative pt-30 pt-sm-50">
                <div className="text-center">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      <h1 className="hs-title-1 mb-20">
                        <span
                          className="wow charsAnimIn text-light"
                          data-splitting="chars"
                        >
                          <AnimatedText text={t.title} />
                        </span>
                      </h1>
                      <div className="row">
                        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                          <p
                            className="section-descr mb-0 wow fadeIn"
                            data-wow-delay="0.2s"
                            data-wow-duration="1.2s"
                          >
                            {t.lastUpdated}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxContainer>
          </section>

          {/* Contenuto */}
          <section className="page-section">
            <div className="container relative">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <p>{t.intro}</p>

                  <h2 className="mt-40 mb-20">{t.whatAreCookiesTitle}</h2>
                  <p>{t.whatAreCookiesDesc}</p>

                  <h2 className="mt-40 mb-20">{t.howIUseCookiesTitle}</h2>
                  <p>{t.howIUseCookiesDesc}</p>
                  <ul>
                    <li>
                      <strong>{t.essentialCookiesTitle}</strong> {t.essentialCookiesDesc}
                    </li>
                    <li>
                      <strong>{t.analyticsCookiesTitle}</strong> {t.analyticsCookiesDesc}
                    </li>
                  </ul>

                  <h2 className="mt-40 mb-20">{t.thirdPartyServicesTitle}</h2>
                  <p>{t.thirdPartyServicesDesc}</p>

                  <h2 className="mt-40 mb-20">{t.howToManageCookiesTitle}</h2>
                  <p>{t.howToManageCookiesDesc}</p>

                  <h2 className="mt-40 mb-20">{t.contactTitle}</h2>
                  <p>
                    {t.contactDesc}{" "}
                    <strong>belaj.br@gmail.com</strong>
                  </p>

                  <p className="mt-40 text-gray">
                    {t.footerText}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
          <Footer1 />
        </footer>
      </div>
    </div>
  );
}
