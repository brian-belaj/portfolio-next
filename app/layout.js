"use client";
import { useEffect } from "react";
import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";

import "photoswipe/dist/photoswipe.css";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";

import "tippy.js/dist/tippy.css";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";

import { LanguageProvider } from "@/context/LanguageContext";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { GoogleTagManager } from "@next/third-parties/google";
import CookiePopup from "@/components/common/CookiePopup";
import { Epilogue, Poppins } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [path]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  return (
    <html lang="en" className="no-mobile no-touch ">
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/hero.webp"
          fetchPriority="high"
        />
      </head>
      <body className={`appear-animate body ${epilogue.variable} ${poppins.variable}`} suppressHydrationWarning={true}>
        <LocalBusinessSchema />
        <GoogleTagManager gtmId="GTM-W8FH852B" />
        <LanguageProvider>
          {children}
          <CookiePopup />
        </LanguageProvider>
      </body>
    </html>
  );
}
