"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  it: {
    message: "Questo sito utilizza i cookie per migliorare la tua esperienza. Continuando a navigare acconsenti al loro utilizzo.",
    moreInfo: "Maggiori informazioni",
    accept: "Accetto",
    reject: "Rifiuto"
  },
  en: {
    message: "This site uses cookies to improve your experience. By continuing to browse you consent to their use.",
    moreInfo: "More information",
    accept: "Accept",
    reject: "Reject"
  }
};

export default function CookiePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const { locale } = useLanguage();
  const t = translations[locale] || translations.en;

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowPopup(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(18, 18, 18, 0.95)",
        backdropFilter: "blur(10px)",
        color: "#ffffff",
        padding: "15px 0",
        zIndex: 9999,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container text-center d-flex flex-column flex-md-row align-items-center justify-content-center">
        <p className="mb-3 mb-md-0 me-md-4" style={{ fontSize: "14px", margin: 0, color: "#ccc" }}>
          {t.message}
          <br className="d-block d-md-none" />
          <Link href="/cookie-policy" style={{ color: "#fff", textDecoration: "underline", marginLeft: "5px" }}>
            {t.moreInfo}
          </Link>
        </p>
        <div className="d-flex gap-2 mt-3 mt-md-0">
          <button
            onClick={rejectCookies}
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #fff",
              padding: "8px 24px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              transition: "all 0.3s ease",
            }}
          >
            {t.reject}
          </button>
          <button
            onClick={acceptCookies}
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              padding: "8px 24px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              transition: "all 0.3s ease",
            }}
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
