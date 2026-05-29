"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { navLinks } from "@/data/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang,textFontClass } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = navLinks[lang];

  return (
    <nav
      className={`fixed  z-50 w-full transition-all duration-300 ${textFontClass} ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      {/* ── Single row: logo | menu (center) | lang toggle ── */}
      <div className="mx-auto flex h-[64px] sm:h-[68px] lg:h-[70px] items-center justify-between px-3 sm:px-5 md:px-6 lg:px-10 xl:px-12 max-w-[1600px]">
        {/* Left: logo + org name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/main_logo.png"
            alt="सरनोबत येसाजी कंक ट्रस्ट"
            width={48}
            height={48}
            className="rounded-full object-contain"
            priority
          />
          <span
            className="
    hidden xl:block whitespace-nowrap
    text-[#1F2937]
    font-devanagari
    font-semibold
    text-[14px]
    leading-[100%]
    tracking-[0]
  "
            style={{
              fontFamily: "'IBM Plex Sans Devanagari', sans-serif",
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            सरनोबत येसाजी कंक ट्रस्ट
          </span>
        </Link>

        {/* Center: menu items */}
        <ul
          ref={dropdownRef}
          className={`hidden lg:flex items-center text-sm flex-1 justify-center ${
            lang === "mr"
              ? "gap-4 xl:gap-8 2xl:gap-12"
              : "gap-3 xl:gap-6 2xl:gap-10"
          }`}
        >
          {items.map((item) => (
            <li key={item.href} className="relative">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.href ? null : item.href,
                      )
                    }
                    className={`nav-btn relative inline-flex items-center gap-1 px-2 h-[30px] whitespace-nowrap leading-none font-medium text-gray-800 transition-colors duration-300 group 
                      ${lang === "mr" ? "text-[13px] xl:text-[15px]" : "text-[12px] xl:text-[13px]"}`}
                  >
                    {/* top-left bracket */}
                    <span className="pointer-events-none absolute top-[1px] left-[1px] w-[5px] h-[5px] border-t border-l border-gray-500 group-hover:border-[#d4a017] transition-colors duration-300 z-20" />
                    {/* bottom-right bracket */}
                    <span className="pointer-events-none absolute bottom-[1px] right-[1px] w-[5px] h-[5px] border-b border-r border-gray-500 group-hover:border-[#d4a017] transition-colors duration-300 z-20" />
                    <span className="relative z-10">{item.label}</span>
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.href ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === item.href && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-100 rounded-sm z-50">
                      <ul className="py-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`block px-4 py-2 text-gray-700 hover:text-[#d4a017] hover:bg-orange-50 transition-colors duration-200 ${lang === "mr" ? "text-[14px]" : "text-[13px]"}`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`nav-btn relative inline-flex items-center px-2 h-[30px] whitespace-nowrap leading-none font-medium text-gray-800 transition-colors duration-300 group ${lang === "mr" ? "text-[15px]" : "text-[13px]"}`}
                >
                  {/* top-left bracket */}
                  <span className="pointer-events-none absolute top-[1px] left-[1px] w-[5px] h-[5px] border-t border-l border-gray-500 group-hover:border-[#d4a017] transition-colors duration-300 z-20" />
                  {/* bottom-right bracket */}
                  <span className="pointer-events-none absolute bottom-[1px] right-[1px] w-[5px] h-[5px] border-b border-r border-gray-500 group-hover:border-[#d4a017] transition-colors duration-300 z-20" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right: language toggle + hamburger */}
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          {/* Language toggle — desktop */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Globe Icon */}
            <div className="flex items-center justify-center self-center translate-y-[-2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px] text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>

            {/* Marathi Button */}
            <button
              onClick={() => setLang("mr")}
              className="flex flex-col items-center transition duration-300 hover:text-orange-500"
            >
              <span
                className={`font-devanagari text-[14px] leading-none translate-y-[2px] ${
                  lang === "mr"
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                }`}
              >
                मराठी
              </span>
              <span
                className={`mt-[4px] h-[2px] rounded-full bg-orange-500 transition-all duration-300 ${
                  lang === "mr" ? "w-full" : "w-0"
                }`}
              />
            </button>

            {/* Divider */}
            <span className="text-gray-400 text-[18px] leading-none">|</span>

            {/* English Button */}
            <button
              onClick={() => setLang("en")}
              className="flex flex-col items-center transition duration-300 hover:text-orange-500"
            >
              <span
                className={`font-english text-[14px] leading-none ${
                  lang === "en"
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                }`}
              >
                English
              </span>

              <span
                className={`mt-[4px] h-[2px] rounded-full bg-orange-500 transition-all duration-300 ${
                  lang === "en" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-1"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md max-h-[calc(100vh-70px)] overflow-y-auto">
          <ul className="flex flex-col text-sm text-gray-800">
            {items.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(
                          mobileOpenDropdown === item.href ? null : item.href,
                        )
                      }
                      className="w-full flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100 hover:text-orange-500 transition duration-300"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${mobileOpenDropdown === item.href ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {mobileOpenDropdown === item.href && (
                      <ul className="bg-orange-50">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => {
                                setMenuOpen(false);
                                setMobileOpenDropdown(null);
                              }}
                              className="block pl-10 pr-6 py-2.5 border-b border-orange-100 text-gray-700 hover:text-orange-500 transition duration-300"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 border-b border-gray-100 hover:text-orange-500 transition duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="flex items-center gap-2 px-6 py-3 text-gray-700">
              <button
                onClick={() => setLang("mr")}
                className={`font-devanagari text-[14px] transition duration-300 ${
                  lang === "mr"
                    ? "text-orange-600 font-semibold"
                    : "hover:text-orange-500"
                }`}
              >
                मराठी
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLang("en")}
                className={`font-english text-[14px] transition duration-300 ${
                  lang === "en"
                    ? "text-orange-600 font-semibold"
                    : "hover:text-orange-500"
                }`}
              >
                English
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
