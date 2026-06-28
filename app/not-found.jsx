import Footer from "@/components/footers/Footer9";
import Header5 from "@/components/headers/HeaderBrian";
import { gradientMultipage } from "@/data/menu";
import NotFoundClient from "./NotFoundClient";

export const metadata = {
  title: "Pagina non trovata | Brian Belaj, Web Developer",
  description:
    "La pagina richiesta non è stata trovata. Torna alla home per continuare la navigazione.",
};

export default function NotFoundPage() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <Header5 links={gradientMultipage} />
        </nav>
        <main id="main">
          <NotFoundClient />
        </main>
        <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
          <Footer />
        </footer>
      </div>
    </div>
  );
}