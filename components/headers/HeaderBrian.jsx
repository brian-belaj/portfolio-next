"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import LanguageSelect from "./components/LanguageSelect";
import Image from "next/image";

export default function Header({ links }) {
  return (
    <div className="main-nav-sub container">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap position-static pe-lg-4 me-lg-5 local-scroll">
        <a href="/" className="logo alt-font">
          Brian Belaj
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-start scrollspyLinks">
          <Nav links={links} animateY />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>
          {/* Languages */}
          <LanguageSelect />
        </ul>
        <ul className="items-end clearlist local-scroll">
          <li>
            <a
              href="https://wa.me/391234567890" // <-- metti qui il tuo numero
              className="opacity-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
