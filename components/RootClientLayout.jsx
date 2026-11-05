"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { LanguageProvider } from "@/context/LanguageContext";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { GoogleTagManager } from "@next/third-parties/google";
import CookiePopup from "@/components/common/CookiePopup";

export default function RootClientLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    const mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => window.removeEventListener("scroll", headerChangeOnScroll);
  }, [path]);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.esm");
  }, []);

  return (
    <>
      <LocalBusinessSchema />
      <GoogleTagManager gtmId="GTM-W8FH852B" />
      <LanguageProvider>
        {children}
        <CookiePopup />
      </LanguageProvider>
    </>
  );
}
