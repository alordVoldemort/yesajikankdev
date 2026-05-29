"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroTexts } from "@/data/site-data";
import extrainfo from "../../../public/MainPage/extrainfo.png";
import {
  ExtraInfo,
  Trust,
  History,
  Work,
  Shivkalin,
  Card,
  Prashansapatr,
  Feedback,
  CardText,
} from "@/data/mainpage";
import { useLanguage } from "@/context/LanguageContext";
import trust from "../../../public/MainPage/Trust.svg";
import WadaGallery from "@/components/sections/WadaGallery";
import card from "../../../public/MainPage/card.svg";
import mvp from "../../../public/MainPage/mpl.svg";
import child from "../../../public/MainPage/child.svg";
import women from "../../../public/MainPage/women.svg";
import oldcard from "../../../public/MainPage/oldcard.svg";
import feedback from "../../../public/MainPage/feedback.svg";
import oldcard1 from "../../../public/MainPage/oldcard1.svg";
import flag from "../../../public/MainPage/flag.svg";
import trustone from "../../../public/trust1.jpg";
import trusttwo from "../../../public/trust2.jpg";
import trustthree from "../../../public/trust3.jpg";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const { lang, textFontClass } = useLanguage();

  const items = ExtraInfo[lang];
  const trusts = Trust[lang];
  const Histories = History[lang];
  const works = Work[lang];
  const shivkalins = Shivkalin[lang];
  const Cards = Card[lang];
  const PrashansaPatrs = Prashansapatr[lang];
  const testimonials = Feedback[lang];
  const CardTexts = CardText[lang];

  // Double the list for seamless infinite scrolling
  const scrollList = [...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroTexts.length);
        setVisible(true);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const current = heroTexts[index];

  const circleImages = [
    "./MainPage/weapon.svg",
    "./MainPage/coin.svg",
    "./MainPage/letter.svg",
  ];

  return (
    <div className={`${textFontClass}`}>
      <section
        className={`relative flex h-auto flex-col items-center justify-center text-center px-4 overflow-hidden ${textFontClass}`}
      >
        {/* GIF background */}
        <Image
          src="/hero_vi.gif"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 mt-32 sm:mt-36 md:mt-40 lg:mt-46 px-4">
          <p
            className={`${current.font} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide transition-all duration-500 ${
              visible ? "opacity-100 text-gray-950" : "opacity-0 text-white"
            }`}
          >
            {current.text}
          </p>

          <Image
            src="/yasaji.png"
            alt="Yesaji"
            width={220}
            height={220}
            className="object-contain"
            priority
          />

          <div
            className="w-[90%] sm:w-[500px] md:w-[600px] h-[4px] rounded-full"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, #f97316 40%, #ea580c 50%, #f97316 60%, transparent 100%)",
            }}
          />
          <div className="relative w-full max-w-[469px] mx-auto aspect-[469/240] min-h-[170px] sm:min-h-0 mb-4 overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[34px] lg:rounded-[39px]">
            {/* Background Image */}
            <Image
              src={extrainfo}
              alt="extrainfo"
              fill
              sizes="(max-width: 640px) 100vw, 469px"
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/5" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-3 min-[390px]:px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-full max-w-[420px] mx-auto text-center"
                >
                  {/* Heading */}
                  <h2 className="text-[12px] min-[390px]:text-[13px] sm:text-[16px] md:text-[19px] lg:text-[20px] font-bold text-[#1F1F1F] leading-tight px-1 sm:px-3">
                    "{item.name}"
                  </h2>

                  {/* Subtitle */}
                  <p className="mt-1 sm:mt-2 text-[9px] min-[390px]:text-[10px] sm:text-[15px] md:text-[17px] lg:text-[18px] font-medium text-[#1F1F1F] px-2 sm:px-4 leading-tight opacity-90 line-clamp-1 sm:line-clamp-2 md:line-clamp-none">
                    - {item.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-row items-center justify-center gap-2 min-[390px]:gap-3 sm:gap-3 md:gap-4 mt-2 min-[390px]:mt-3 sm:mt-5 md:mt-6 lg:mt-6 w-full px-1 sm:px-2">
                    {/* Contact Button */}
                    <button className="w-1/2 max-w-[140px] sm:w-[150px] md:w-[150px] lg:w-[184px] h-[30px] min-[390px]:h-[34px] sm:h-[42px] md:h-[46px] lg:h-[50px] rounded-[6px] border border-[#C05621] bg-[#F5F5F5] text-[#C05621] text-[10px] min-[390px]:text-[12px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold transition-all duration-300 whitespace-nowrap px-2">
                      {item.btn1}
                    </button>

                    {/* More Info Button */}
                    <button className="w-1/2 max-w-[140px] sm:w-[150px] md:w-[150px] lg:w-[184px] h-[30px] min-[390px]:h-[34px] sm:h-[42px] md:h-[46px] lg:h-[50px] rounded-[6px] bg-[#C05621] border border-[#C05621] text-white text-[10px] min-[390px]:text-[12px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold transition-all duration-300 whitespace-nowrap px-2">
                      {item.btn2}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`bg-[#A1A186] py-12 lg:py-20 overflow-hidden ${textFontClass}`}
      >
        {/* 1. Header Scroll Section */}
        <div className="relative flex justify-center mb-10 md:mb-16 px-4">
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px]">
            <Image src={trust} alt="trust scroll" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h2
                className={`font-bold ${lang === "mr" ? "text-[30px] sm:text-[28px] md:text-[32px] lg:text-[45px]" : "text-[16px] sm:text-[20px] md:text-[24px]"} text-[#1F1F1F]`}
              >
                {trusts[0]?.name}
              </h2>
            </div>
          </div>
        </div>

        {/* 2. Main Content Grid (Text + Gallery) */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side: Descriptive Text */}
          <div className="flex flex-col gap-6 text-[#1F1F1F]">
            <p className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-[1.7] font-medium text-justify">
              {trusts[0]?.desc1}
            </p>
            <p className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-[1.7] font-medium text-justify">
              {trusts[0]?.desc2.split("सांस्कृतिक").map((part, index, arr) => (
                <span key={index}>
                  {part}
                  {index !== arr.length - 1 && (
                    <span className="font-historical-marathi">सांस्कृतिक</span>
                  )}
                </span>
              ))}
            </p>

            {/* Read More Button */}
            <button className="mt-4 w-[140px] sm:w-[180px] h-[38px] sm:h-[45px] rounded-full border border-white bg-[#BD512A] text-white text-[13px] sm:text-[15px] font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-[#a94822] transition-all">
              {trusts[0]?.btn}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Side: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Top Row: Two small images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[15px] overflow-hidden shadow-lg aspect-[4/3] relative border-2 border-white/20">
                <Image
                  src={trustone}
                  alt="Trust Event 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-[15px] overflow-hidden shadow-lg aspect-[4/3] relative border-2 border-white/20">
                <Image
                  src={trusttwo}
                  alt="Trust Event 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Row: One large image */}
            <div className="rounded-[15px] overflow-hidden shadow-lg aspect-[16/10] relative border-2 border-white/20">
              <Image
                src={trustthree}
                alt="Trust Event Large"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <WadaGallery
        title={Histories[0]?.name ?? "ऐतिहासिक वाडा"}
        description={Histories[0]?.desc ?? ""}
      />
      <section className="bg-[linear-gradient(177.14deg,#EED5B1_49.41%,#7E868E_97.93%)] h-auto overflow-hidden">
        {" "}
        {/* Work Header */}
        <div className="relative flex flex-col items-center mt-10 sm:mt-10 md:mt-28 mb-10">
          <div className="absolute top-[-50px] z-0 opacity-80 pointer-events-none">
            <Image
              src={flag}
              alt="Crossed Maratha Flags"
              width={500}
              height={500}
            />
          </div>
          <div className="relative z-10 flex justify-center items-center mt-15">
            <Image
              src={trust}
              alt="Title Scroll"
              width={300}
              className="pt-5"
            />
            <div className="absolute inset-0 flex items-center justify-center pt-5">
              {works.map((item, i) => (
                <p
                  key={i}
                  className={`font-bold text-[28px] sm:text-[32px] md:text-[36px] ${textFontClass} text-black`}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="relative z-10 text-center mt-6 sm:mt-10 md:mt-16 max-w-2xl px-6">
            {works.map((item, i) => (
              <p
                key={i}
                className="text-[#3d2b1f] font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed"
              >
                {item.desc}
              </p>
            ))}
          </div>
        </div>
        {/* --- Updated Work Gallery Section --- */}
        <div className="max-w-7xl mx-auto px-6 mt-8 sm:mt-14 md:mt-25 pb-20">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-5">
            {[
              { src: card, alt: "Agriculture" },
              { src: mvp, alt: "Events" },
              { src: child, alt: "Education" },
              { src: women, alt: "Training" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative w-full sm:w-[48%] md:w-[35%] lg:flex-1 aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* --- HOVER OVERLAY (Semi-transparent black box with top border) --- */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#5252529E] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8">
                  {/* Title from CardTexts data */}
                  <h3 className="text-white text-[20px] md:text-[24px] font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {CardTexts[i]?.name}
                  </h3>

                  {/* Description from CardTexts data */}
                  <p className="text-white/90 text-[14px] md:text-[16px] leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {CardTexts[i]?.desc ||
                      (lang === "mr"
                        ? "समृद्ध शेती, सशक्त शेतकरी आणि उज्ज्वल भविष्य."
                        : "Prosperous farming, empowered farmers and a bright future.")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* सर्व पहा button — aligned to the right, links to our-work page */}
          <div className="flex justify-end mt-4 pr-1">
            <Link href="/our-work">
              <button className="flex items-center gap-1 bg-[#3d2b1f] hover:bg-[#5a3e2b] text-[#f5e6d0] text-[14px] font-semibold px-5 py-2 rounded-full shadow transition-colors duration-300">
                {works[0]?.btn}
                <span className="text-base">→</span>
              </button>
            </Link>
          </div>
        </div>
        {/* Shivkalin Section */}
        <div className="flex justify-center items-center relative">
          <Image src={trust} alt="trust" width={380} className="pt-5" />
          <div className="absolute">
            {shivkalins.map((item, i) => (
              <p
                key={i}
                className={`mt-5 font-bold ${lang === "mr" ? "text-[28px] sm:text-[32px] md:text-[36px]" : "text-[18px] sm:text-[22px] md:text-[26px]"} ${textFontClass}`}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-10 md:mt-14 max-w-2xl mx-auto px-5 sm:px-8 md:px-10">
          {shivkalins.map((item, i) => (
            <p
              key={i}
              className="font-medium  text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed"
            >
              {item.desc}
            </p>
          ))}
        </div>
        {/* --- Updated Armor Scroll Cards (With Hover Effect) --- */}
        <div
          className={`flex flex-wrap justify-center gap-8 py-8 sm:py-14 md:py-20 px-4 ${textFontClass}`}
        >
          {Cards.map((item, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[360px] h-[420px] sm:h-[460px] md:h-[500px] flex flex-col items-center cursor-pointer"
            >
              {/* Background Default */}
              <div className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-0 group-active:opacity-0">
                <Image
                  src={oldcard}
                  alt="scroll bg"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Background Hover / Mobile Tap */}
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100">
                <Image
                  src={oldcard1}
                  alt="scroll bg hover"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* DEFAULT VIEW */}
              <div className="relative z-10 flex flex-col items-center h-full w-full transition-all duration-500 group-hover:opacity-0 group-active:opacity-0 group-hover:scale-95 group-active:scale-95">
                {/* Center Image */}
                <div className="mt-20 sm:mt-24 md:mt-28 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 relative rounded-full overflow-hidden">
                  <Image
                    src={circleImages[index]}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Title */}
                <div className="mt-auto mb-20 px-6 text-center">
                  <h3
                    className={`${lang === "mr" ? "text-[24px] md:text-[28px]" : "text-[18px] md:text-[20px]"} font-bold text-[#2d1b0d] tracking-tight`}
                  >
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* HOVER / MOBILE TAP VIEW */}
              <div className="absolute inset-0 z-20 flex flex-col items-center p-14 opacity-0 transition-all duration-700 translate-y-4 group-hover:opacity-100 group-active:opacity-100 group-hover:translate-y-0 group-active:translate-y-0">
                {/* Top Small Image */}
                <div className="mt-10 w-24 h-24 relative rounded-full overflow-hidden">
                  <Image
                    src={circleImages[index]}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <div className="flex-1 flex items-center justify-center mt-4">
                  <p
                    className={`text-center text-[#1a0f08] ${lang === "mr" ? "text-[14px] md:text-[16px]" : "text-[11px] md:text-[13px]"} font-medium leading-relaxed px-4`}
                  >
                    {item.desc || "Information about the collection goes here."}
                  </p>
                </div>

                {/* Bottom Title */}
                <div className="mt-auto mb-10">
                  <h3
                    className={`${lang === "mr" ? "text-[24px] md:text-[28px]" : "text-[18px] md:text-[20px]"} font-bold text-[#1a0f08] tracking-tight`}
                  >
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        {/* <div className="flex items-center justify-center gap-6 -mt-4 pb-10"> */}
        {/* Previous */}
        {/* <button className="transition-all duration-300 hover:scale-105">
            <Image
              src={prevBtn}
              alt="Previous"
              width={52}
              height={52}
              className="object-contain"
            />
          </button> */}
        {/* Next */}
        {/* <button className="transition-all duration-300 hover:scale-105">
            <Image
              src={nextBtn}
              alt="Next"
              width={52}
              height={52}
              className="object-contain"
            />
          </button>
        </div> */}
        {/* Feedback Section Header */}
        <div className="flex justify-center items-center relative">
          <Image src={trust} alt="trust" width={380} className="pt-6" />

          <div className="absolute">
            {PrashansaPatrs.map((item, i) => (
              <p
                key={i}
                className={`mt-5 font-bold ${lang === "mr" ? "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[45px]" : "text-[18px] sm:text-[22px] md:text-[26px] lg:text-[35px]"} ${textFontClass}`}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
        {/* --- INFINITE SCROLL FEEDBACK SECTION --- */}
        <div className="py-20 overflow-hidden">
          <div className="flex w-max animate-marquee gap-1 hover:[animation-play-state:paused]">
            {scrollList.map((item, index) => (
              <div
                key={index}
                className="relative w-[90vw] sm:w-[350px] md:w-[420px] lg:w-[450px] min-h-[260px] md:min-h-[280px] flex-shrink-0 flex flex-col"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={feedback}
                    alt="feedback background"
                    fill
                    className="object-fill drop-shadow-lg"
                  />
                </div>

                <div className="relative z-10 p-6 sm:p-8 md:p-14 flex flex-col h-full">
                  <h4 className="ml-3 sm:ml-0 text-[20px] md:text-[24px] mt-4 mb-4 border-b border-[#8b5e34]/20 pb-2 ">
                    {item.name}
                  </h4>

                  <p className="ml-3 sm:ml-0 text-[#3d2b1f] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-justify ">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation CSS */}
      <style jsx global>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
