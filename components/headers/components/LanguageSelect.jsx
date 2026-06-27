"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelect() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((open) => !open);
  };

  const handleLanguageSelect = (lang) => {
    setLocale(lang);
    setIsDropdownOpen(false);
  };

  const label = locale === "it" ? "It" : "En";

  return (
    <li className="languageSelect">
      <a
        href="#"
        className="mn-has-sub opacity-1"
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
      >
        {label} <i className="mi-chevron-down" />
      </a>

      <ul
        className={`mn-sub to-left ${isDropdownOpen ? "open" : "closed"}`}
        ref={dropdownRef}
      >
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLanguageSelect("en");
            }}
          >
            English
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLanguageSelect("it");
            }}
          >
            Italiano
          </a>
        </li>
      </ul>
    </li>
  );
}