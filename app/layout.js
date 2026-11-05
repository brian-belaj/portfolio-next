import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import { Epilogue, Poppins } from "next/font/google";
import RootClientLayout from "@/components/RootClientLayout";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-epilogue" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"], variable: "--font-poppins" });
const siteUrl = (process.env.SITE_URL || "https://brianbelaj.com").replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brian Belaj | Sviluppatore Web Freelance",
    template: "%s | Brian Belaj",
  },
  description:
    "Sviluppatore web freelance a Pisa. Realizzo siti web e applicazioni moderne, performanti e accessibili per aziende e professionisti.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Brian Belaj",
    images: [{ url: "/assets/images/about-home/brian-belaj.webp", width: 1200, height: 630, alt: "Brian Belaj, sviluppatore web freelance" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/images/about-home/brian-belaj.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="no-mobile no-touch">
      <body className={`appear-animate body ${epilogue.variable} ${poppins.variable}`} suppressHydrationWarning>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
