"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import first from "../../../../public/Yesaji Kankabadal/first.svg";
import card from "../../../../public/Yesaji Kankabadal/card.svg";
import sun from "../../../../public/Yesaji Kankabadal/sun.svg";
import name from "../../../../public/Yesaji Kankabadal/name.svg";
import first1 from "../../../../public/Yesaji Kankabadal/first1.svg"
export const Info = {
  mr: [
    {
      name: "येसाजी कंकांबद्दल माहिती",
      desc1:
        "येसाजींचे नाव ऐकताच येसाजींनी तलवार उगारली, क्षणभर पातं चमकलं, दुसऱ्याच क्षणी सोंडेवर वार करून येसाजी बाजूला झाले.  वारामध्ये हत्तीची सोंड कापली गेली होती-श्रीमान योगी कादंबरीमध्ये उल्लेख असलेला, कुतुबशहाच्या दरबारात घडलेला हा प्रसंग आपल्या नजरेसमोर उभा राहतो!",
      desc2:
        "येसाजी कंक यांचा जन्म इ.स. १६२६ मध्ये भुतोंडे गावात, राजगडाच्या पायथ्याशी झाला होता. येसाजी हे शारीरिक दृष्ट्या सशक्त आणि बलदंड शरीरयष्टीचे होते.",
      desc3:
        "छत्रपती शिवरायांनी इ.स. १६४५ साली रायरेश्वरी घेतलेल्या स्वराज्य शपथेपासून ते इ.स. १६८९–१६९० साली छ.संभाजी महाराजांनंतर छ.राजाराम महाराजांच्या कार्यकाळात ज्येष्ठ सल्लागार म्हणून येसाजींचा उल्लेख आहे.",
      desc4:
        "स्वराज्यसेवेमध्ये सलग ३० वर्ष पायदळाचे सरनोबत पद भूषवताना फक्त २० वेळा आपल्या निवास्थानी जात स्वामिनिष्ठ आणि स्वराज्यनिष्ठेचे सर्वोत्तम उदाहरण येसाजी कंक यांनी दाखवून दिले.",
      desc5:
        "स्वामिनिष्ठ, स्वराज्यभक्ती आणि स्वराज्यसेवेचे धगधगते स्फुलिंग सरनोबत येसाजी कंक यांना मानाचा मुजरा !!!",
    },
  ],
  en: [
    {
      name: "Information about Yesaji Kank",
      desc1:
"The moment he heard his name, Yesaji raised his sword, for a quick second, the blade flashed, and in the very next moment, after hitting the trunk, Yesaji stepped aside. With that one strike, the elephant's trunk was cut off. — This event, set in Qutb Shah’s court and described in the novel Shriman Yogi, clearly appears right in front of us! " ,
  desc2:
  "Yesaji Kank was born in 1626 AD in the village of Bhutonde, at the base of Rajgad. Yesaji was physically robust and possessed a powerful physique.",
      desc3:
      "Starting from the time Chhatrapati Shivrai took the Oath of Swarajya at Raireshwar in 1645 AD, until the years 1689–1690 AD, Yesaji is noted as a senior guide during the rule of Chhatrapati Rajaram Maharaj- following that of Chhatrapati Sambhaji Maharaj.",
      desc4:
      "While holding the high rank of Sar-nobat (Chief of the infantry) for the service of Swarajya for 30 years in a row—visiting his own home only twenty times— Yesaji Kank set the ultimate example of unwavering loyalty to both his master and the cause of Swarajya.",

      desc5:
      "A respectful salute to Sarnobat Yesaji Kank—a bright spark of steady loyalty to his master, devotion to Swarajya, and selfless service to the cause"
    },
  ],
};

export default function YesajiKankPage() {
  const { lang, textFontClass, digitFontClass } = useLanguage();
  const currentData = Info[lang][0];

  // Wrap Devanagari numerals in digitFontClass span so they render correctly
  function renderText(text: string) {
    return text.split(/([०-९]+)/g).map((part, i) =>
      /^[०-९]+$/.test(part)
        ? <span key={i} className={digitFontClass}>{part}</span>
        : part
    );
  }

  return (
    <main className={` ${textFontClass}`}>
      <div className="h-auto relative overflow-hidden">

        {/* Desktop Image */}
        <Image
          src={first}
          alt="Yesaji Kank vs Elephant"
          className="
      hidden sm:block
      w-full h-auto pt-8 md:pt-14
      bg-[#A88657] opacity-50
    "
        />

        {/* Mobile Image */}
        <Image
          src={first1}
          alt="Yesaji Kank Mobile"
          className="
      block sm:hidden
      w-full h-auto pt-8
      bg-[#A88657] opacity-50
    "
        />

        <div className="absolute top-[22%] sm:top-[24%] md:top-[28%] w-full flex justify-center px-4">
          <Image
            src={name}
            alt="Yesaji Kank Name"
            className="
        w-[220px]
        min-[300px]:w-[200px]
        sm:w-[380px]
        md:w-[500px]
        lg:w-[650px]
        h-auto
      "
          />
        </div>
      </div>

<section className="relative w-full bg-[linear-gradient(168.07deg,_#838366_2.31%,_#EED5B1_50.3%,_#7E868E_98.28%)] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-14 lg:py-16 flex items-center justify-center overflow-hidden">        <div className="relative w-full max-w-[100%] sm:max-w-[480px] md:max-w-[550px] lg:max-w-[580px] mx-auto ">
          <Image
            src={card}
            alt="Information Scroll"
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex items-start justify-center pt-[12%] sm:pt-[14%] md:pt-[16%] lg:pt-[18%]">
            <div className="relative z-10 text-center w-full  sm:px-8 md:px-10 lg:px-12">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity ">
                <Image
                  src={sun}
                  alt="Sun"
                  className="w-[200px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto"
                />
              </div>

              <h2 className="relative mb-3 sm:mb-4 md:mb-5 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] font-semibold text-[#f8e8d0] mt-4 min-[400px]:pt-5 min-[350px]:pt-5 min-[300px]:max-[345px]: pt-5">
                {currentData.name}
              </h2>

              <div
                className={`relative z-10 flex flex-col text-[#f8e8d0] text-start
                      ${lang === "en"
                    ? "gap-1 sm:gap-2 px-10 sm:px-12 md:px-14  min-[350px]:px-15 min-[400px]:px-17 min-[500px]:px-25 min-[300px]:max-[345px]:px-13 min-[372px]:max-[376px]:px-16  lg:px-15"
                    : "gap-1 sm:px-15 sm:gap-2 md:gap-3 min-[350px]:px-17 min-[400px]:px-17 min-[500px]:px-25 min-[300px]:max-[345px]:px-15 min-[372px]:max-[376px]:px-17 font-devanagari"
                  }`}
              >
                <p className={`${lang === 'en'
                  ? "text-[10px] sm:text-[12px] md:text-[13px] sm:leading-snug min-[400px]:text-[8px] min-[500px]:text-[11px] min-[350px]:text-[8px] min-[350px]:pt-2 min-[300px]:max-[345px]:text-[7px] min-[372px]:max-[376px]:text-[7px] min-[372px]:max-[376px]:pt-1 min-[359px]:max-[361px]:text-[7px] min-[359px]:max-[361px]:pt-1"
                  : "text-[10px] sm:text-[12px] md:text-[13px]  lg:text-[15px] sm:leading-snug min-[400px]:leading-[1.5] min-[500px]:text-[13px] min-[350px]:text-[10px] min-[350px]:pt-2 min-[300px]:max-[345px]:text-[8px] min-[372px]:max-[376px]:text-[8px] min-[372px]:max-[376px]:pt-2 min-[359px]:max-[361px]:text-[8px]"
                  }`}  >                {lang === "mr" ? renderText(currentData.desc1) : currentData.desc1}
                </p>



                <p className={`${lang === 'en'

                  ? "text-[10px] sm:text-[12px] md:text-[13px]   sm:leading-snug pt-2 min-[400px]:pt-3  min-[400px]:text-[8px] min-[500px]:text-[11px]  min-[350px]:text-[8px] min-[300px]:max-[345px]:text-[7px] min-[372px]:max-[376px]:text-[7px] min-[372px]:max-[376px]:pt-3 min-[359px]:max-[361px]:text-[7px] min-[359px]:max-[361px]:pt-1"
                  : "text-[10px] sm:text-[12px] md:text-[13px]  lg:text-[15px] sm:leading-snug pt-2 min-[400px]:pt-5 min-[400px]:leading-[1.5] min-[500px]:text-[13px] min-[500px]:leading[1] min-[350px]:text-[10px] min-[300px]:max-[345px]:text-[8px] min-[372px]:max-[376px]:text-[8px] min-[372px]:max-[376px]:pt-5 min-[359px]:max-[361px]:text-[8px] min-[359px]:max-[361px]:pt-4"

                  }`}>
                  {lang === "mr" ? renderText(currentData.desc2) : currentData.desc2}
                </p>

                <p className={`${lang === 'en'
                  ? "text-[10px] sm:text-[12px] md:text-[13px]  sm:leading-snug pt-2  min-[400px]:pt-3  min-[400px]:text-[8px] min-[400px]:leading-[1.5] min-[500px]:text-[11px] min-[350px]:text-[8px] min-[300px]:max-[345px]:text-[7px] min-[372px]:max-[376px]:text-[7px] min-[372px]:max-[376px]:pt-3 min-[359px]:max-[361px]:text-[7px] min-[359px]:max-[361px]:pt-1 "
                  : "text-[10px] sm:text-[12px] md:text-[13px]  lg:text-[15px] sm:leading-snug pt-2  min-[400px]:pt-5 min-[400px]:leading-[1.5] min-[500px]:text-[13px] min-[350px]:text-[10px] min-[300px]:max-[345px]:text-[8px] min-[372px]:max-[376px]:text-[8px] min-[372px]:max-[376px]:pt-5 min-[359px]:max-[361px]:text-[8px] min-[359px]:max-[361px]:pt-4 "


                  }`}>
                  {lang === "mr" ? renderText(currentData.desc3) : currentData.desc3}
                </p>

                <p className={`${lang === 'en'
                  ? "text-[10px] sm:text-[12px] md:text-[13px]  sm:leading-snug pt-2 min-[400px]:pt-3 min-[400px]:text-[8px] min-[500px]:text-[11px] min-[350px]:text-[8px] min-[300px]:max-[345px]:text-[7px] min-[372px]:max-[376px]:text-[7px] min-[372px]:max-[376px]:pt-3 min-[359px]:max-[361px]:text-[7px] min-[359px]:max-[361px]:pt-1"
                  : "text-[10px] sm:text-[12px] md:text-[13px]  lg:text-[15px] sm:leading-snug pt-2 min-[400px]:pt-5 min-[400px]:leading-[1.5] min-[500px]:text-[15px] min-[350px]:text-[10px] min-[300px]:max-[345px]:text-[8px] min-[372px]:max-[376px]:text-[8px] min-[372px]:max-[376px]:pt-5 min-[359px]:max-[361px]:text-[8px] min-[359px]:max-[361px]:pt-4"

                  }`}>
                  {lang === "mr" ? renderText(currentData.desc4) : currentData.desc4}
                </p>

                <p className={`${lang === "en"
                  ? "pt-1  text-[10px] sm:text-[12px] md:text-[13px]  sm:leading-snug pt-2 min-[400px]:pt-3  min-[400px]:text-[8px] min-[500px]:text-[11px] min-[350px]:text-[8px] min-[300px]:max-[345px]:text-[7px] min-[372px]:max-[376px]:text-[7px] min-[372px]:max-[376px]:pt-3 min-[359px]:max-[361px]:text-[7px] min-[359px]:max-[361px]:pt-2"
                  : "pt-1  text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] sm:leading-snug pt-2 min-[400px]:pt-5  min-[400px]:leading-[1.5] min-[500px]:text-[15px] min-[350px]:text-[10px] min-[300px]:max-[345px]:text-[8px] min-[372px]:max-[376px]:text-[8px] min-[372px]:max-[376px]:pt-5 min-[359px]:max-[361px]:text-[8px] min-[359px]:max-[361px]:pt-3"
                  }`}>
                  {lang === "mr" ? renderText(currentData.desc5) : currentData.desc5}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}