export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Brian Belaj",
    image: "https://brianbelaj.com/assets/images/about-home/brian-belaj.webp",
    url: "https://brianbelaj.com",
    telephone: "+393206632575",
    email: "belaj.br@gmail.com",
    description:
      "Web developer freelance a Pisa. Realizzo siti web performanti, moderni e ottimizzati SEO per professionisti e aziende.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pisa",
      addressRegion: "PI",
      addressCountry: "IT"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Pisa"
      },
      {
        "@type": "Country",
        name: "Italia"
      }
    ],
    sameAs: [
      "https://www.linkedin.com/in/brian-belaj/",
      "https://github.com/brian-belaj/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}