"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import card from "../../../public/MainPage/card.svg";
import mvp from "../../../public/MainPage/mpl.svg";
import child from "../../../public/MainPage/child.svg";
import women from "../../../public/MainPage/women.svg";
import ourwork from "../../../public/Ourwork/ourwork.svg"

const workDetails = {
  mr: [
    { heading: "कृषी", body: "सरनोबत येसाजी कंक ट्रस्ट शेतकऱ्यांच्या सबलीकरणासाठी अनेक उपक्रम राबवते. आधुनिक शेती तंत्रज्ञान, बियाणे वितरण, कृषी प्रशिक्षण शिबिरे आणि शेतकरी मेळाव्यांच्या माध्यमातून ग्रामीण भागातील शेतकऱ्यांना सक्षम करण्याचे काम केले जाते." },
    { heading: "क्रीडा", body: "मराठा प्रीमियर लीग शिवजयंती जळगाव." },
    { heading: "सामाजिक", body: "समाजातील वंचित व गरजू घटकांसाठी आरोग्य शिबिरे, शैक्षणिक सहाय्य, महिला सक्षमीकरण आणि वृद्धांसाठी मदत यासारखे उपक्रम राबवले जातात. ग्रामीण भागात स्वच्छता मोहीम, वृक्षारोपण आणि पाणी बचत अभियान यांसारख्या पर्यावरणीय कार्यांतही ट्रस्ट सक्रिय आहे." },
    { heading: "सांस्कृतिक", body: "मराठा इतिहास, शिवकालीन परंपरा आणि लोककला यांचे जतन व संवर्धन करणे हे सांस्कृतिक उपक्रमाचे मुख्य उद्दिष्ट आहे. दरवर्षी येसाजी कंक जयंती, शिवजयंती, आणि ऐतिहासिक वारसा दिनी विविध सांस्कृतिक कार्यक्रम आयोजित केले जातात." },
  ],
  en: [
    { heading: "Agricultural", body: "The Sarnobat Yesaji Kank Trust runs various initiatives to empower farmers. Through modern farming techniques, seed distribution, agricultural training camps and farmer gatherings, rural farmers are empowered." },
    { heading: "Sports", body: "Recognizing sporting talents in the younger generation, the Trust organizes various sports competitions and training camps. Traditional sports like wrestling, kabaddi, and archery are promoted." },
    { heading: "Social", body: "Health camps, educational assistance, women empowerment, and support for the elderly are organized for the underprivileged. The Trust is also active in cleanliness drives, tree plantation, and water conservation." },
    { heading: "Cultural", body: "The main objective is the preservation and promotion of Maratha history, Shivaji-era traditions, and folk arts. Cultural programs are organized on Yesaji Kank Jayanti, Shiv Jayanti, and Heritage Day." },
  ],
};

const cardImages = [card, mvp, child, women];

export default function OurWorkPage() {
  const { lang, textFontClass } = useLanguage();
  const details = workDetails[lang];
  const [active, setActive] = useState(0);

  return (
    <main className={`min-h-screen ${textFontClass}`} style={{ background: "linear-gradient(135deg, #838366 0%, #EED5B1 50%, #7E868E 100%)" }}>
      {/* Banner */}
      <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
        <Image src="/ourwork.png" alt="Our Work" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-white/40" />
       <div className="absolute inset-0 flex items-start justify-center pt-20 sm:pt-6 md:pt-20 z-10">
          <Image src={ourwork} alt="Our Work Icon" width={1000} height={200} className="object-contain w-[460px] md:w-[800px]" priority />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 px-4 pt-10 pb-6">
        {details.map((item, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`px-6 py-2.5 rounded-full text-sm md:text-base font-semibold border-2 transition-all duration-300 ${active === i ? "bg-[#3d2b1f] text-[#f5e6d0] border-[#3d2b1f] shadow-lg scale-105" : "bg-white/30 text-[#3d2b1f] border-[#3d2b1f]/40 hover:bg-[#3d2b1f]/10"}`}>
            {item.heading}
          </button>
        ))}
      </div>

      {/* Content Card */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-10">
        <div className="rounded-[24px] overflow-hidden shadow-2xl bg-[#f5e6d0]/80 flex flex-col md:flex-row">
          {/* Square image */}
          <div className="relative w-full md:w-[360px] md:min-w-[360px] aspect-square">
            <Image src={cardImages[active]} alt={details[active].heading} fill className="object-cover transition-all duration-500" />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center px-7 md:px-10 py-8 flex-1">
            <h2 className="text-[#2d1b0d] text-2xl md:text-3xl font-bold mb-4">{details[active].heading}</h2>
            <p className="text-[#3d2b1f] text-sm md:text-base leading-[2] font-normal">{details[active].body}</p>
          </div>
        </div>
      </section>

      {/* Krushi image cards — shown only for कृषी / Agricultural */}
      {active === 0 && (
        <section className="max-w-5xl mx-auto px-4 md:px-8 pb-20 flex flex-col gap-5">
          {[
            {
              n: 1,
              mr: "बारामती कृषी विद्यालयात शिक्षण घेत असताना २ राज्यस्तरीय विद्यार्थी आंदोलनाच्या प्रत्यक्ष युवा नेतृत्वाची जबाबदारी घेऊन मंत्रालयाकडून विद्यार्थी आंदोलनाच्या मागण्या मान्य करून घेण्यात यशस्वी.",
              en: "While studying at Baramati Agricultural College, successfully led 2 state-level student movements as a youth leader and got the students' demands accepted by the Ministry.",
            },
            {
              n: 2,
              mr: "'कृषी पदवीधर युवाशक्ती' संघटनेच्या माध्यमातून १५ हजारहून अधिक कृषी पदवीधर विद्यार्थी आणि शेतकरी सदस्यांचे प्रतिनिधित्व.",
              en: "Represented more than 15,000 agricultural graduate students and farmer members through the 'Krushi Padvidhara Yuvashakti' organization.",
            },
            {
              n: 3,
              mr: "वेळवंडी को.ऑप. फार्मर्स फेडरेशन, भोर या शेतकरी उत्पादक कंपनीच्या CEO पदाची धुरा सांभाळताना मा. कृषि मंत्री माणिकराव कोकाटे यांच्या हस्ते '६ लाख' रुपयांचा धनादेश प्राप्त.",
              en: "While serving as CEO of Velwandi Co-op Farmers Federation, Bhor — a farmer producer company — received a cheque of ₹6 Lakhs from the hands of Agriculture Minister Manikrao Kokate.",
            },
            {
              n: 4,
              mr: "कृषी क्षेत्रातील 'सगुणा रुरल फाऊंडेशन' मार्फत शेतकऱ्यांना शेतीमधील उपयुक्त अवजारे, खते याबाबत शिक्षण-प्रशिक्षणाचे मोफत मार्गदर्शनाचे अमूल्य कार्य.",
              en: "Through 'Saguna Rural Foundation' in the agricultural sector, invaluable free guidance and training to farmers on useful farming tools, fertilizers, and agricultural education.",
            },
          ].map((item) => (
            <div key={item.n} className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-lg bg-[#f5e6d0]/80">
              {/* Image — always on left, full image visible */}
              <div className="w-full md:w-[340px] md:min-w-[340px] bg-[#e8d5b0] flex items-center justify-center p-3">
                <div className="relative w-full h-56 md:h-64">
                  <Image
                    src={`/Ourwork/krushiimg${item.n}.jpg`}
                    alt={`krushi ${item.n}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Info */}
              <div className="flex flex-col justify-center px-7 md:px-10 py-8 flex-1">
                <p className="text-[#3d2b1f] text-sm md:text-base leading-[2] font-normal">
                  {lang === "en" ? item.en : item.mr}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Samajik image cards — shown only for सामाजिक / Social */}
      {active === 2 && (
        <section className="max-w-5xl mx-auto px-4 md:px-8 pb-20 flex flex-col gap-5">
          {[
            {
              n: 1, ext: "jpg",
              mr: "बेळगाव येथे शेकडो शालेय विद्यार्थांना इतिहासाचे मार्गदर्शन.",
              en: "Guided hundreds of school students on history at Belgaum.",
            },
            {
              n: 2, ext: "png",
              mr: "राजगडाच्या पायथ्याशी वसलेल्या भुतोंडे गावातील कंक वाड्याचा अभ्यास व इतिहास जाणून घेण्यासाठी आलेल्या शिवभक्तांसाठी मोफत निवासाची आणि भोजनाची व्यवस्था.",
              en: "Free accommodation and meals arranged for Shiv devotees who came to study the history of Kank Wada at Bhutonde village, at the foothills of Rajgad.",
            },
            {
              n: 3, ext: "jpg",
              mr: "वेल्हा (राजगड) तालुक्यातील वांगणी गावातील शाळेत मित्रपरिवासह शालेय साहित्याचे वाटप.",
              en: "Distribution of school supplies at a school in Wangani village, Velha (Rajgad) taluka, along with friends.",
            },
          ].map((item) => (
            <div key={item.n} className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-lg bg-[#f5e6d0]/80">
              <div className="w-full md:w-[340px] md:min-w-[340px] bg-[#e8d5b0] flex items-center justify-center p-3">
                <div className="relative w-full h-56 md:h-64">
                  <Image src={`/Ourwork/samajikimg${item.n}.${item.ext}`} alt={`samajik ${item.n}`} fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col justify-center px-7 md:px-10 py-8 flex-1">
                <p className="text-[#3d2b1f] text-sm md:text-base leading-[2] font-normal">{lang === "en" ? item.en : item.mr}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Sanskrutik image cards — shown only for सांस्कृतिक / Cultural */}
      {active === 3 && (
        <section className="max-w-5xl mx-auto px-4 md:px-8 pb-20 flex flex-col gap-5">
          {[
            {
              n: 1, ext: "jpg",
              mr: "राष्ट्रीय स्वयंसेवक संघ (RSS), सह्यद्री प्रतिष्ठान, श्री शिवप्रतिष्ठान हिंदुस्तान, शिवप्रतिष्ठान युवा हिंदुस्तान, ऐतिहासिक राजघराणे संस्था इ. महाराष्ट्रातील कार्यरत संस्थेमार्फत सहभाग आणि सेवेची संधी.",
              en: "Opportunity to participate and serve through active organizations in Maharashtra like RSS, Sahyadri Pratishthan, Shri Shivpratishthan Hindustan, Shivpratishthan Yuva Hindustan, and historical royal organizations.",
            },
            {
              n: 2, ext: "jpg",
              mr: "सरनोबत येसाजी कंक व छ.शिवाजी महाराज यांचा गौरवशाली इतिहास जनसामान्यांपर्यंत पोहोचवण्याची संधी.",
              en: "An opportunity to spread the glorious history of Sarnobat Yesaji Kank and Chhatrapati Shivaji Maharaj to the common people.",
            },
            {
              n: 3, ext: "jpg",
              mr: "पनवेल येथील शिवस्मारक उदघाटन प्रसंगी राष्ट्रवादी काँग्रेसचे प्रदेशाध्यक्ष, खासदार श्री. तटकरे साहेबांसोबत.",
              en: "At the inauguration of Shiv Memorial in Panvel, along with NCP State President and MP Shri. Tatkare Saheb.",
            },
            {
              n: 4, ext: "png",
              mr: "सरनोबत येसाजी कंक यांचा गौरवशाली इतिहास सर्वांपर्यंत पोहोचवण्यासाठी कंक वाडा, भुतोंडे या परिसरात 'येसाजी कंक' यांचे भव्य स्मारक उभे करण्याचे कार्य सुरू.",
              en: "Work has begun to build a grand memorial of 'Yesaji Kank' in the Kank Wada, Bhutonde area, to bring the glorious history of Sarnobat Yesaji Kank to everyone.",
            },
          ].map((item) => (
            <div key={item.n} className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-lg bg-[#f5e6d0]/80">
              <div className="w-full md:w-[340px] md:min-w-[340px] bg-[#e8d5b0] flex items-center justify-center p-3">
                <div className="relative w-full h-56 md:h-64">
                  <Image src={`/Ourwork/sanskrutikimg${item.n}.${item.ext}`} alt={`sanskrutik ${item.n}`} fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col justify-center px-7 md:px-10 py-8 flex-1">
                <p className="text-[#3d2b1f] text-sm md:text-base leading-[2] font-normal">{lang === "en" ? item.en : item.mr}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
