import Footer1 from "@/components/footers/Footer9";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/HeaderBrian";
import AnimatedText from "@/components/common/AnimatedText";
import { gradientMultipage } from "@/data/menu";

export const metadata = {
  title: "Informativa Privacy | Brian Belaj",
  description:
    "Informativa sulla Privacy per il sito personale e portfolio di Brian Belaj.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header1Multipage links={gradientMultipage} />
          </nav>

          <main id="main">
            {/* Hero */}
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Informativa sulla Privacy" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              Ultimo aggiornamento: giugno 2026
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
                    <p>
                      Questa informativa descrive come Brian Belaj («io»)
                      raccoglie, utilizza e protegge i tuoi dati personali
                      quando visiti questo sito web o mi contatti tramite il
                      form di contatto.
                    </p>

                    <h2 className="mt-40 mb-20">Titolare del trattamento</h2>
                    <p>
                      Il titolare del trattamento è <strong>Brian Belaj</strong>
                      . Puoi contattarmi all’indirizzo email{" "}
                      <a href="mailto:belaj.br@gmail.com">
                        belaj.br@gmail.com
                      </a>{" "}
                      per qualsiasi domanda relativa a questa informativa o ai
                      tuoi dati personali.
                    </p>

                    <h2 className="mt-40 mb-20">Dati che raccolgo</h2>
                    <ul>
                      <li>
                        Dati di contatto che fornisci volontariamente (ad
                        esempio nome, indirizzo email e messaggio quando
                        utilizzi il form di contatto).
                      </li>
                      <li>
                        Informazioni tecniche raccolte automaticamente dal
                        provider di hosting (come indirizzo IP e log di
                        sicurezza) per motivi di sicurezza e manutenzione.
                      </li>
                    </ul>

                    <h2 className="mt-40 mb-20">Come utilizzo i dati</h2>
                    <ul>
                      <li>
                        Per leggere e rispondere alle tue richieste e ai tuoi
                        messaggi.
                      </li>
                      <li>
                        Per gestire, mantenere e proteggere il corretto
                        funzionamento del sito.
                      </li>
                      <li>
                        Per adempiere a eventuali obblighi di legge
                        applicabili.
                      </li>
                    </ul>

                    <h2 className="mt-40 mb-20">
                      Base giuridica del trattamento
                    </h2>
                    <p>
                      Tratto i tuoi dati personali principalmente per rispondere
                      alle tue richieste (misure precontrattuali) e sulla base
                      del mio legittimo interesse a gestire la mia attività
                      professionale e le comunicazioni.
                    </p>

                    <h2 className="mt-40 mb-20">
                      Cookie e strumenti di tracciamento
                    </h2>
                    <p>
                      Questo sito può utilizzare cookie essenziali strettamente
                      necessari al suo corretto funzionamento. Se in futuro
                      dovessi aggiungere strumenti di analisi o altri servizi di
                      terze parti che utilizzano cookie, questa informativa
                      verrà aggiornata per riflettere tali cambiamenti.
                    </p>

                    <h2 className="mt-40 mb-20">Servizi di terze parti</h2>
                    <p>
                      Il sito è ospitato da fornitori terzi che possono trattare
                      dati come indirizzi IP e informazioni di log per mio
                      conto. Tali fornitori dispongono di proprie informative
                      sulla privacy e si impegnano a rispettare la normativa
                      applicabile.
                    </p>

                    <h2 className="mt-40 mb-20">Conservazione dei dati</h2>
                    <p>
                      Conservo i messaggi e i dati di contatto solo per il tempo
                      necessario a gestire e documentare la nostra
                      comunicazione, salvo periodi di conservazione più lunghi
                      richiesti dalla legge.
                    </p>

                    <h2 className="mt-40 mb-20">I tuoi diritti</h2>
                    <p>
                      In base alla normativa applicabile, puoi avere il diritto
                      di accedere, rettificare, cancellare o limitare il
                      trattamento dei tuoi dati personali. In alcuni casi puoi
                      anche opporti al trattamento o richiedere la portabilità
                      dei dati. Per esercitare i tuoi diritti puoi contattarmi
                      all’indirizzo email indicato di seguito.
                    </p>

                    <h2 className="mt-40 mb-20">Contatti</h2>
                    <p>
                      Per domande su questa Informativa sulla Privacy o per
                      richieste relative ai tuoi dati personali, puoi contattare:{" "}
                      <strong>Brian Belaj</strong> — email:{" "}
                      <a href="mailto:belaj.br@gmail.com">
                        belaj.br@gmail.com
                      </a>
                      .
                    </p>

                    <p className="mt-40 text-gray">
                      Questa Informativa sulla Privacy può essere aggiornata
                      occasionalmente. L’uso continuato del sito dopo le
                      modifiche implica l’accettazione della versione aggiornata
                      dell’informativa.
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
    </>
  );
}