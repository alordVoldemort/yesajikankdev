"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useLanguage } from "@/context/LanguageContext";
import { FooterData } from "@/data/mainpage";
import map from "../../../public/location-map.svg";
import logo from "../../../public/main_logo.png";
export default function Footer() {

  const { lang, textFontClass } = useLanguage()

  const items = FooterData[lang];

  return (
    <footer className={`bg-[#232323] text-white pt-8 pb-12 px-6 md:px-10 lg:px-16 ${textFontClass}`}>
      {items.map((item, index) => (
        <div key={index} className="max-w-7xl w-full mx-auto">
          
          {/* 1. Brand Header */}
          <div className="flex items-center justify-between gap-4 mb-12 ml-4">
            <div className="flex items-center gap-4">
              <Image 
                src={logo} 
                alt="Logo" 
                width={48} 
                height={48} 
                className="rounded-full border border-white/20 shadow-lg" 
              />
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-snug">
                {item.trustName}
              </h2>
            </div>
            <div className="flex items-center gap-4 mr-4">
              <InstagramIcon
                className="cursor-pointer transition-all duration-300 hover:scale-110 text-white"
                style={{ fontSize: 28 }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cursor-pointer transition-all duration-300 hover:scale-110 text-white"
                style={{ width: 28, height: 28 }}
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
              </svg>
            </div>
          </div>

          {/* 2. Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Home Menu */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-100">{item.homeTitle}</h3>
              <ul className="space-y-3 text-#fff-400 text-sm">
                {(item.homeLinksWithUrl || []).map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-gray-300 transition-colors w-fit block">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Menu */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-100">{item.aboutTitle}</h3>
              <ul className="space-y-3 text-#fff-400 text-sm">
                {(item.aboutLinksWithUrl || []).map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-gray-300 transition-colors w-fit block">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
  <h3 className="text-lg font-bold mb-6 text-gray-100">
    {item.contactTitle}
  </h3>

  <div className="space-y-5 text-white text-sm">

    {/* Email */}
    <a
      href={`mailto:${item.email}`}
      className="flex items-center gap-3 group hover:text-gray-300 transition-all duration-300"
    >
      <Mail size={16} />
      <span className="cursor-pointer">{item.email}</span>
    </a>

    {/* Phone */}
    <a
      href={`tel:${item.phone}`}
      className="flex items-center gap-3 group hover:text-gray-300 transition-all duration-300"
    >
      <Phone size={16} />
      <span className="cursor-pointer">{item.phone}</span>
    </a>

    {/* Location */}
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 group hover:text-gray-300 transition-all duration-300"
    >
      <MapPin size={20} className="shrink-0 mt-1" />
      <span className="leading-relaxed cursor-pointer">
        {item.address}
      </span>
    </a>

  </div>
</div>

            {/* Map Illustration - FIXED ASPECT RATIO */}
              <div className="relative  w-full h-full rounded-[15px] overflow-hidden ">
                <Image 
                  src={map} 
                  alt="Trust Map" 
                  fill 
                  className="object-cover " 
                />
              </div>
          </div>

          {/* 3. Bottom Copyright Bar */}
          <div className="border-t border-white/10 pt-6 mt-4 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 gap-4">
            <p>{item.rights}</p>
            <p className="italic font-medium text-gray-400">{item.tagline}</p>
          </div>

        </div>
      ))}
    </footer>
  );
}