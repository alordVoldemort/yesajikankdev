"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import name from "../../../../public/wada/name.svg";
import card from "../../../../public/wada/card.svg";
import trust from "../../../../public/MainPage/Trust.svg";
import home from "../../../../public/wada/home.svg";
import yesaji from "../../../../public/wada/yesaji.svg";
import pot from "../../../../public/wada/pot.png";

const data = {
mr: {
  title: "वाड्याची माहिती",

  section1: {
    line1: "स्वराज्याचे सरसेनापती आणि छ.शिवाजी महाराजांचे विश्वासू सहकारी येसाजी कंक यांचे गाव भुतोंडे पुण्यातील",
    line2: "भोर मधील राजगड किल्ल्याच्या पायथ्याशी वसलेले गाव.",
    line3: "आज ही ह्या वाड्यात पाऊल ठेवल्यावर वेळ थांबते आणि इतिहास आपल्या डोळ्यासमोर जसाच्या तसा उभा",
    line4: "राहतो.",
    line5: "इतिहास संकलक श्री. आप्पा परब म्हणतात,",
    line6: "“भू म्हणजे भूमी आणि तोंड म्हणजे मुख्य.",
    line7: "भुतोंडे म्हणजेच राजगड जिल्ह्याच्या जवळपासच्या गावातील मुख्य गाव ",
  },

  section2: {
    line1: "येसाजी कंक वाडा पुण्यापासून ६५  किमी, भोरपासून ५५  किमी तर साताऱ्यापासून ११० किमीवर आहे.",
    line2: "छ.शिवाजी महाराज, छ.संभाजी महाराज, छ. शाहूमहाराज आणि छ.राजाराम महाराज यांच्या पदस्पर्शाने पावन",
    line3: "झालेल्या कंक वाड्यात आज ही येसाजी कंकांचे १२वे, १३वे, आणि १४वे वंशज राहतात.",
    line4: "इतिहासाचा पुरावा देणारा हा वाडा गेल्या अनेक दशकांतील बदलांचा साक्षीदार आहे.",
    line5: "वाड्याच्या अंगणात तुळसी वृंदावन आहे. आतमध्ये वाडा सागवानी तुळईंवर उभा आहे. मुख्य दारातून प्रवेश",
    line6: "करताच आत ओसरी आहे. ओसरीच्या उजव्या बाजूस सरसेनापती येसाजी कंक यांचा पुतळा आहे. त्या लगत काही",
    line7: "पुरातन हत्यारे जसे तलवार, धोप, खंजीर, बंदूक तसेच शिवकालीन नाणी बघायला मिळतात. दोन मजली वाड्यात",
    line8: "वरच्या बाजूस माडीवर जुनी भांडी आहेत. वाड्यामध्ये आत चौक आहे.",
    line9: "भव्य कंक वाडा इतिहासाच्या प्रत्येक पानाची साक्ष देतो.",
  },

  section3: {
    line1: "प्रत्येक खिडकीतून राजगडचा बालेकिल्ला आणि संजीवनी माची दिसणाऱ्या या वाड्यात आज हि येसाजी कंकांचे",
    line2: "वंशज इतिहास जपताना दिसतात. येणाऱ्या प्रत्येकाला ते वाड्याची, इतिहासाची संपूर्ण माहिती देतात.",
    line3: "इतिहासाचा हा अनमोल ठेवा सर्वां साठी नेहमी खुला असतो. आजही कंक वाडा येथे अनेक शिवभक्त, इतिहास",
    line4: "अभ्यासक, मावळे रोज  भेट देण्यास येतात.",
  },
},
en: {
  title: "Information About The Wada",

  section1: {
    line1: "Bhutonde is the village of Yesaji Kank, the Commander-in-Chief of the Swarajya and a trusted",
    line2: "associate of Chhatrapati Shivaji Maharaj, situated at the foothills of Rajgad Fort in Bhor, Pune.",
    line3: "Even today, when you step into this wada, time stops. History comes alive right before the eyes,",
    line4: "exactly as it was back then.",
    line5: "History compiler Mr. Appa Parab says:",
    line6: "“ Bhu means land, and Tonde means main.",
    line7: "Therefore, Bhutonde means the main village among all the villages located near Rajgad.”",
  },

  section2: {
    line1: "The Yesaji Kank Wada is located 65 km from Pune, 55 km from Bhor, and 110 km from Satara.",
    line2: "In the Kank Wada blessed by the visits of Chhatrapati Shivaji Maharaj, Chhatrapati Sambhaji",
    line3: "Maharaj, Chhatrapati Shahu Maharaj, and Chhatrapati Rajaram Maharaj- the 12th, 13th, and",
    line4: "14th descendants of the Yesaji Kank still live today.",
    line5: "This mansion serves as a living record of history, standing as a witness to all the changes over",
    line6: "the last several decades.",
    line7: "There is a Tulsi Vrindavan in the open courtyard of the wada. Inside, wada is held up by teak",
    line8: "wood beams. Right after you walk through the main door, there is a veranda. To the right of the",
    line9: "veranda stands the statue of Commander-in-Chief Yesaji Kank. Next to the Statue, one can see",
    line10: "various antique weapons- such as swords, dhops, daggers, and guns- as well as coins from the",
    line11: "Shivaji era.",
    line12: "In this two-story mansion, old vessels are kept on the upper floor. Inside the mansion lies a",
    line13: "central courtyard. The grand Kank Wada stands as a witness to every page of history.",
  },

  section3: {
    line1: "In this wada, from every window of which the Balekilla and Sanjivani Machi of Rajgad are",
    line2: "visible, the descendants of Yesaji Kank can still be seen today, preserving history. They provide",
    line3: "complete information about the wada and its history to everyone who visits.",
    line4: "This invaluable treasure of history is always open to everyone.",
    line5: "Even today, numerous followers of Shivaji, history experts, and Mavalas visit Kank Wada on a daily basis.",
  },
},};

export default function KankWadaPage() {
  const { lang, textFontClass  } = useLanguage();
  const datas = data[lang as keyof typeof data];

  const renderLines = (section: Record<string, string>) =>
    Object.values(section).map((line, i) => (
      <p key={i} className="m-0">
        {line}
      </p>
    ));

  return (
    <main className={`pt-[64px] ${textFontClass} `}>
      <div className="relative w-full">
        <video autoPlay muted loop playsInline className="w-full h-auto">
          <source src="/wada/video.mp4" type="video/mp4" />
        </video>        <div className="absolute top-0 left-0 right-0 flex justify-center mt-5">
          <Image
            src={name}
            alt="name"
            className="w-[70%] max-w-[620px] h-auto"
          />
        </div>
      </div>

      <div className="relative w-full bg-[linear-gradient(168.07deg,#838366_2.31%,#EED5B1_50.3%,#7E868E_98.28%)] py-5">
        <div className="relative mx-auto w-full max-w-[820px]">
          <Image src={card} alt="card" className="w-full h-auto block" />

          <div className="absolute inset-0 px-4 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-8 flex flex-col">
            <div className="relative w-[180px] sm:w-[170px] lg:w-[290px] md:w-[240px] mb-4 sm:mb-5 shrink-0 mx-auto">
              <Image src={trust} alt="trust" className="w-full h-auto block" />
              <h1 className="absolute inset-0 flex items-center justify-center text-center text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-black px-4 leading-tight">
                {datas.title}
              </h1>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar text-black">
              <div className="flex flex-col items-center">
                <Image
                  src={home}
                  alt="home"
                  className="w-[78%] max-w-[320px] h-auto rounded-2xl mb-5 sm:mb-6"
                />

                <div className={`w-full text-center text-[13px] sm:text-[15px] leading-6 sm:leading-7 space-y-2 ${lang ==="mr" ? "lg:text-[18px] md:text-[18px]" : ""}`}>
                  {renderLines(datas.section1)}
                </div>

                <Image
                  src={yesaji}
                  alt="yesaji"
                  className="w-[70%] max-w-[320px] h-auto rounded-2xl my-5 sm:my-6"
                />

                <div className={`w-full text-center text-[13px] sm:text-[15px] leading-6 sm:leading-7 space-y-2 ${lang === "mr" ? "lg:text-[18px] md:text-[18px]" :""}`}>
                  {renderLines(datas.section2)}
                </div>

                <Image
                  src={pot}
                  alt="pot"
                  className="w-[72%] max-w-[320px] h-auto rounded-2xl my-5 sm:my-6"
                />

                <div className={`w-full text-center text-[13px] sm:text-[15px] leading-6 sm:leading-7 space-y-2 ${lang === "mr" ? "lg:text-[18px] md:text-[18px]" :""}`}>
                  {renderLines(datas.section3)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }
      `}</style>
    </main>
  );
}