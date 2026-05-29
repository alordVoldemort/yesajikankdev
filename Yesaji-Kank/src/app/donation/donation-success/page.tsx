"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import check from "../../../../public/check.svg";

const successContent = {
  mr: {
    title: "धन्यवाद!",
    message1: "आपल्या देणगीबद्दल मनःपूर्वक धन्यवाद!",
    message2: "आपण समाजाच्या उन्नतीसाठी महत्त्वाचा वाटा उचलला आहे.",
  },
  en: {
    title: "Thank You!",
    message1: "Heartfelt thanks for your donation!",
    message2:
      "You have played an important role in the progress of society.",
  },
};

export default function DonationSuccessPage() {
  const { lang, textFontClass } = useLanguage();
  const items = successContent[lang];

  return (
    <main className={`min-h-screen bg-[linear-gradient(168.07deg,#838366_2.31%,#EED5B1_50.3%,#7E868E_98.28%)] flex items-center justify-center px-3 sm:px-4 py-6 sm:py-10 ${textFontClass}`}>
      
      {/* Smaller Card */}
      <div className="w-full max-w-[460px] bg-[#f6f6f4] rounded-[18px] sm:rounded-[24px] px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 text-center shadow-2xl">
        
        {/* Icon */}
        <div className="relative mx-auto w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[95px] md:h-[95px]">
          <Image
            src={check}
            alt="success"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 sm:mt-6 text-[24px] sm:text-[34px] md:text-[42px] leading-tight font-medium text-black">
          {items.title}
        </h2>

        {/* Message 1 */}
        <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-[#333] font-medium mx-auto">
          {items.message1}
        </p>

        {/* Message 2 */}
        <p className="mt-3 sm:mt-4 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#555] mx-auto">
          {items.message2}
        </p>
      </div>
    </main>
  );
}