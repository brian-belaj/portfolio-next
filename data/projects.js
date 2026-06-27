/**
 * Dati statici dei progetti — usati al posto delle chiamate API esterne.
 * Struttura compatibile con il formato restituito dall'API Symfony.
 *
 * Per aggiungere un nuovo progetto: copia uno dei blocchi esistenti,
 * incrementa l'id e compila i campi. Le immagini vanno in /public/uploads/projects/.
 */

export const projects = [
  {
    id: 1,
    slug: "youfix",
    title: {
      it: "Youfix",
      en: "Youfix",
    },
    excerpt: {
      it: "Un tema WordPress completamente personalizzato per YouFix, una piattaforma e-commerce per il settore delle costruzioni.",
      en: "A fully custom WordPress theme for YouFix, an e-commerce platform for the construction industry.",
    },
    description: {
      it: "Ho lavorato insieme a un collega allo sviluppo di un tema WordPress completamente custom per YouFix, una piattaforma e-commerce per il settore delle costruzioni. Inoltre, abbiamo personalizzato WooCommerce a livello di API per gestire una struttura di categorizzazione dei prodotti particolarmente complessa, realizzando una soluzione flessibile e scalabile pensata per supportare una gestione efficiente del catalogo e un'esperienza utente fluida.",
      en: "I worked with my colleague to develop a fully custom WordPress theme for YouFix, an e-commerce platform for the construction industry. We also customized WooCommerce at the API level to manage a highly complex product categorization structure, creating a flexible and scalable solution designed to support efficient catalog management and a smooth user experience.",
    },
    client: {
      it: "Youfixing Srl",
      en: "Youfixing Srl",
    },
    isFeatured: true,
    githubUrl: null,
    liveUrl: "https://youfix.shop/",
    createdAt: "2026-06-24T15:07:00+00:00",
    coverImageUrl: "/uploads/projects/youfix-cover.webp",
    gallery: [],
  },
  {
      id: 2,
      slug: "bluegame-yachts",
      title: {
        it: "Bluegame Yachts",
        en: "Bluegame Yachts"
      },
      excerpt: {
        it: "Per il sito bluegame.it, ho adattato un tema moderno basato su Bootstrap, HTML, CSS e JavaScript all’ambiente WordPress, personalizzando il layout e le funzionalità per soddisfare le esigenze del cliente.",
        en: "For the bluegame.it website, I adapted a modern theme based on Bootstrap, HTML, CSS, and JavaScript to the WordPress environment, customizing the layout and functionalities to meet the client's needs."
      },
      description: {
        it: "Per il sito bluegame.it, ho adattato un tema moderno basato su Bootstrap, HTML, CSS e JavaScript all’ambiente WordPress, personalizzando il layout e le funzionalità per soddisfare le esigenze del cliente. Ho curato l’integrazione con WordPress, ottimizzando la gestione dei contenuti e implementando funzionalità avanzate tramite PHP, come la visualizzazione delle flotte di yacht e i dettagli dei contatti. Particolare attenzione è stata posta alle prestazioni e alla compatibilità su tutti i dispositivi, garantendo un’esperienza utente fluida e un sito in linea con l’eleganza e l’esclusività del brand Bluegame Yachts.",
        en: "For the bluegame.it website, I adapted a modern theme based on Bootstrap, HTML, CSS, and JavaScript to the WordPress environment, customizing the layout and functionalities to meet the client's needs. I handled the integration with WordPress, optimizing content management and implementing advanced features via PHP, such as yacht fleet displays and contact details. Special attention was paid to performance and compatibility across all devices, ensuring a smooth user experience and a site that reflects the elegance and exclusivity of the Bluegame Yachts brand."
      },
      client: {
        it: "Bluegame Yachts"
      },
      isFeatured: false,
      githubUrl: null,
      liveUrl: "https://bluegame.it/",
      createdAt: "2026-06-11T13:41:00+00:00",
      coverImageUrl: "/uploads/projects/bluegame-yacht-bgx73-exterior-su.webp",
      gallery: []
    },
    {
      id: 3,
      slug: "sanlorenzo-charter-fleet",
      title: {
        it: "Sanlorenzo Charter Fleet",
        en: "Sanlorenzo Charter Fleet"
      },
      excerpt: {
        it: "Sanlorenzo Charterfleet è un progetto che mi ha permesso di applicare concretamente le mie competenze nello sviluppo di temi WordPress personalizzati.",
        en: "Sanlorenzo Charterfleet was a project focused on the development of a fully custom WordPress solution, leveraging my experience in building tailored themes and scalable frontend/backend components."
      },
      description: {
        it: "Sanlorenzo Charterfleet è un progetto che mi ha permesso di applicare concretamente le mie competenze nello sviluppo di temi WordPress personalizzati.\n\nHo sviluppato un tema WordPress completamente custom, senza l’utilizzo di temi predefiniti o page builder, per garantire massima flessibilità e prestazioni elevate. Il layout è stato realizzato con Bootstrap, con particolare attenzione alla responsività e alla resa su tutti i dispositivi.\n\nDal lato backend, ho implementato funzionalità personalizzate in PHP per la gestione dinamica dei contenuti, come la visualizzazione delle flotte di yacht e dei dettagli di contatto. Ho inoltre lavorato sull’ottimizzazione delle performance, intervenendo su codice e risorse per migliorare i tempi di caricamento.\n\nIl progetto include anche l’integrazione di funzionalità avanzate, tra cui sistemi di prenotazione online e gestione delle gallerie fotografiche.\n\nTecnologie utilizzate: WordPress, Bootstrap, PHP, HTML, CSS, JavaScript, MySQL.\n\nIl risultato è un sito web completamente personalizzato, in grado di riflettere l’eleganza e l’esclusività del brand Sanlorenzo. Le prestazioni e l’usabilità sono state significativamente migliorate, con feedback positivi da parte degli utenti finali, e la soluzione risulta facilmente scalabile e gestibile per il cliente.",
        en: "Sanlorenzo Charterfleet was a project focused on the development of a fully custom WordPress solution, leveraging my experience in building tailored themes and scalable frontend and backend components. I developed the theme from scratch without using pre-built themes or page builders, in order to maximize flexibility, maintainability, and performance. I also built a responsive interface with Bootstrap to ensure a consistent experience across desktop, tablet, and mobile devices. On the backend, I implemented dynamic data management in PHP to handle yacht fleet listings, contact details, and other structured content, while optimizing code and assets to improve loading speed and overall performance. I also integrated advanced functionalities such as online booking and photo gallery management. The project was built with WordPress, Bootstrap, PHP, HTML, CSS, JavaScript, and MySQL, and the final result was a fully customized website aligned with the elegance and exclusivity of the Sanlorenzo brand, offering improved usability, strong performance, and a scalable, easy-to-manage solution for the client."
      },
      client: {
        it: "Sanlorenzo Charter Fleet"
      },
      isFeatured: false,
      githubUrl: "https://sanlorenzocharterfleet.com/",
      liveUrl: null,
      createdAt: "2026-06-11T13:38:00+00:00",
      coverImageUrl: "/uploads/projects/sanlorenzo-sd118-unique-s.webp",
      gallery: []
    },
    {
      id: 4,
      slug: "maria-gabriella-crotti",
      title: {
        it: "Maria Gabriella Crotti",
        en: "Maria Gabriella Crotti"
      },
      excerpt: {
        it: "Per il sito shths-shahtoosh.com, dedicato all'alta moda e alle creazioni esclusive di Maria Gabriella Crotti, ho curato lo sviluppo utilizzando un tema altamente personalizzabile e il page builder Elementor.",
        en: "For the shths-shahtoosh.com website, dedicated to high fashion and the exclusive creations of Maria Gabriella Crotti, I handled the development using a highly customizable theme and the Elementor page builder."
      },
      description: {
        it: "Per il sito shths-shahtoosh.com, dedicato all'alta moda e alle creazioni esclusive di Maria Gabriella Crotti, ho curato lo sviluppo utilizzando un tema altamente personalizzabile e il page builder Elementor. Questo approccio ha permesso di realizzare un design raffinato ed elegante, in linea con l'esclusività del brand, valorizzando al meglio la bellezza e l'artigianalità degli scialli in pelo di Chiru.\nL'uso di Elementor ha consentito una gestione flessibile dei contenuti, permettendo aggiornamenti dinamici e un'organizzazione visiva che mette in risalto le collezioni e la filosofia del marchio. Ho ottimizzato il layout per garantire un'esperienza di navigazione fluida e intuitiva, con particolare attenzione alla resa estetica e alla compatibilità su tutti i dispositivi.\nIl risultato è un sito che combina eleganza e funzionalità, offrendo agli utenti un viaggio immersivo nell’universo esclusivo di Shths Shahtoosh.",
        en: "For shths-shahtoosh.com, a site dedicated to haute couture and the exclusive creations of Maria Gabriella Crotti, I handled development using a highly customizable theme and the Elementor page builder. The project focuses on a refined design that highlights the quality and craftsmanship of Chiru wool shawls, with flexible content management via Elementor for easy, dynamic updates. I optimized the layout for a smooth, intuitive browsing experience, prioritizing aesthetics and cross-device compatibility. The result is a site that blends elegance and functionality to offer an immersive journey into the exclusive world of Shths Shahtoosh."
      },
      client: {
        it: "Maria Gabriella Crotti"
      },
      isFeatured: false,
      githubUrl: null,
      liveUrl: "https://shths-shahtoosh.com/",
      createdAt: "2024-02-25T14:40:00+00:00",
      coverImageUrl: "/uploads/projects/mariagabrielacrotti.webp",
      gallery: []
    },
    {
      id: 5,
      slug: "centro-demetra",
      title: {
        it: "Centro Demetra",
        en: "Centro Demetra"
      },
      excerpt: {
        it: "Per il progetto centrodemetra.com, ho sviluppato l'intero layout grafico partendo da zero, senza l’utilizzo di temi preconfezionati, garantendo un design su misura e un'esperienza utente ottimizzata.",
        en: "For the centrodemetra.com project, I designed the entire graphical layout from scratch, without using pre-made themes, ensuring a custom design and an optimized user experience."
      },
      description: {
        it: "Per il progetto centrodemetra.com, ho sviluppato l'intero layout grafico partendo da zero, senza l’utilizzo di temi preconfezionati, garantendo un design su misura e un'esperienza utente ottimizzata. Ho interagito direttamente con i dati di WordPress tramite PHP, personalizzando le funzionalità del sito per adattarle alle esigenze specifiche del cliente.\nUno degli aspetti più rilevanti del progetto è stato lo sviluppo di uno store locator avanzato, realizzato attraverso l'integrazione con le API di Google Maps. Questo sistema consente agli utenti di individuare facilmente le sedi del centro, filtrando i risultati in base alla posizione e migliorando così l’accessibilità e la fruibilità del servizio.\nDurante lo sviluppo, ho posto particolare attenzione alle prestazioni del sito, ottimizzando codice e risorse per garantire tempi di caricamento rapidi e una navigazione fluida. Il risultato è una piattaforma moderna, funzionale e scalabile, che unisce estetica e usabilità a un'infrastruttura solida e performante.",
        en: "For the centrodemetra.com project, I designed the entire graphical layout from scratch, without using pre-made themes, ensuring a custom design and an optimized user experience. I directly interacted with WordPress data using PHP, customizing the site's functionalities to meet the client's specific needs.\nOne of the most significant aspects of the project was the development of an advanced store locator, achieved through integration with the Google Maps API. This system allows users to easily find the center’s locations, filtering results based on their position, thereby improving accessibility and service usability.\nDuring development, I paid particular attention to the site's performance, optimizing code and resources to ensure fast loading times and smooth navigation. The result is a modern, functional, and scalable platform that combines aesthetics and usability with a solid and high-performing infrastructure."
      },
      client: {
        it: "Centro Demetra"
      },
      isFeatured: false,
      githubUrl: null,
      liveUrl: "https://centrodemetra.com/",
      createdAt: "2023-10-24T15:27:00+00:00",
      coverImageUrl: "/uploads/projects/centrodemetra.webp",
      gallery: []
    },
    {
      id: 6,
      slug: "genera-pma",
      title: {
        it: "Genera PMA",
        en: "Genera PMA"
      },
      excerpt: {
        it: "Per il sito generapma.it, clinica specializzata in procreazione assistita, ho realizzato un completo restyling, trasformando un sito inizialmente basato su un tema con WP Bakery e un elevato numero di plugin in una soluzione interamente custom.",
        en: "For the generapma.it website, a clinic specializing in assisted reproduction, I carried out a complete redesign, transforming a site initially based on a theme with WP Bakery and a large number of plugins into a fully custom solution."
      },
      description: {
        it: "Per il sito generapma.it, clinica specializzata in procreazione assistita, ho realizzato un completo restyling, trasformando un sito inizialmente basato su un tema con WP Bakery e un elevato numero di plugin in una soluzione interamente custom. L'obiettivo principale è stato migliorare sia le performance che la manutenibilità del sito, riducendo drasticamente il numero di plugin e sviluppando una struttura più leggera, scalabile ed efficiente.\nUna delle sfide più significative è stata l’ottimizzazione delle prestazioni: grazie a un codice più pulito e a interventi mirati su script e risorse, i valori dei Core Web Vitals sono passati da 4 a 60, garantendo un sito più veloce, fluido e user-friendly.\nIl nuovo sito non solo offre un'esperienza di navigazione più intuitiva e accessibile, ma è anche più stabile e performante, assicurando una gestione più efficiente dei contenuti e un impatto positivo sulla SEO e sull’esperienza utente.",
        en: "For generapma.it, a clinic specializing in assisted reproduction, I carried out a complete redesign, transforming a site originally built on a theme with WP Bakery and many plugins into a fully custom solution. The main goal was to improve performance and maintainability by drastically reducing the number of plugins and developing a lighter, more scalable, and more efficient structure. A major challenge was performance optimization: through cleaner code and targeted interventions on scripts and resources, Core Web Vitals improved from 4 to 60, delivering a faster, smoother, and more user-friendly site. The new site now offers a more intuitive and accessible browsing experience, greater stability, and higher performance, with concrete benefits for content management, SEO, and overall user experience."
      },
      client: {
        it: "Genera PMA"
      },
      isFeatured: true,
      githubUrl: null,
      liveUrl: "https://www.generapma.it/",
      createdAt: "2023-03-02T14:44:00+00:00",
      coverImageUrl: "/uploads/projects/generalife.webp",
      gallery: []
    }


];

/**
 * Restituisce tutti i progetti ordinati per data decrescente.
 * @returns {Array}
 */
export function getProjects() {
  return [...projects].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}

/**
 * Restituisce solo i progetti in evidenza (isFeatured: true).
 * @returns {Array}
 */
export function getFeaturedProjects() {
  return getProjects().filter((p) => p.isFeatured);
}

/**
 * Restituisce il singolo progetto tramite slug o id (stringa/numero).
 * @param {string|number} slugOrId
 * @returns {object|undefined}
 */
export function getProject(slugOrId) {
  const key = String(slugOrId);
  return projects.find(
    (p) => p.slug === key || String(p.id) === key
  );
}
