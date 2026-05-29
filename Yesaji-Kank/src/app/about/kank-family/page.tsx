"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  mr: {
    card1: (
      <>
        <p className="mb-4 leading-relaxed">
          कंक घराणे हे महाराष्ट्रातील ऐतिहासिक आणि वीर घराणे आहे. ज्याचा इतिहास
          प्रामुख्याने छत्रपती शिवाजी महाराजांच्या काळाशी आणि स्वराज्यस्थापनेशी
          जोडलेला आहे.
        </p>

        <p className="leading-relaxed">
          महाभारतामध्ये पांडवांना १२ वर्षांचा वनवास व १ वर्षाचा अज्ञातवास होता.
          या अज्ञातवासामध्ये युधिष्ठिराने विराट राजाच्या पदरी सेवा करत असताना
          'कंक' हे उपनाव धारण केले. साताऱ्याजवळील वाई येथील वैराटगडच्या भागातील
          वैराट समाजावर पांडवांनी विजय मिळवला व हे सर्व पांडवांचे अनुयायी
          झाल्याने त्यांनीही 'कंक' हे आडनाव धारण केले.
        </p>
      </>
    ),
    card2: (
      <>
        <p className="mb-4 leading-relaxed">
          १६०० व्या शतकात महाराष्ट्रातील सह्याद्री नावाच्या कुरुक्षेत्रावर
          छ.शिवाजी महाराजांच्या रुपी कृष्ण अवतरले. अन्याय, अधर्म आणि
          असत्याविरुद्ध रणशिंग फुंकणाऱ्या कृष्णाला 'येसाजी कंक' नावाच्या
          युधिष्ठिराची साथ लाभली.
        </p>

        <p className="leading-relaxed">
          स्वतंत्र हिंदवी स्वराज्याचे पराक्रमी योद्धे सरनोबत येसाजी यांचा जन्म
          इ.स. १६२६ साली भोर जवळील भुतोंडे गावी कंक घराण्यात झाला.
        </p>
      </>
    ),

    card3: (
      <>
        <p className="mb-4 leading-relaxed">
          पिळदार शरीरयष्टीचे व बलशाली बाहूंचे येसाजी कंक हे छ.शिवाजी
          महाराजांच्या बालपणीचेसवगंडी होते १६४५ साली रायरेश्वर येथे छ.शिवाजी
          महाराजांनी येसाजी कंक आणि काही मोजक्या मावळ्यांसह स्वराज्याची शप्पथ
          घेतली.
        </p>

        <p className="leading-relaxed">
          स्वराज्यात पहिला गड 'तोरणा' घेण्यापासनू ते १६९० साली छ.राजाराम
          महाराजांच्या कार्यकाळात जेष्ठ सल्लागार म्हणनू येसाजींनी प्रत्येक मोहीम
          व योजना साहसी आणि नीति मानाने लढले.
        </p>
        <p className="leading-relaxed">
          छ.शिवाजी महाराजांच्या आयुष्यातील जवळपास सर्व महत्वपूर्ण घटनांमध्ये
          येसाजी कंकांचा सहभाग आढळतो. अफझलखान वध, लाल महाल प्रंसग , आग्रा भेट,
          दक्षिण दिग्विजय तसेच फोंडा किल्ला युद्धात वयाच्या ५० व्या वर्षी हाती
          समशरे घेऊन पोर्तुगीजांशी लढा देणारे येसाजी कंक साहस, अढळ, स्वाभिमान
          आणि स्वामिनिष्ठ यांचे सर्वोच्च उदाहरण ठरतात.
        </p>
        <p className="leading-relaxed">
          'स्वराज्य हेच सर्वस्व' मानून स्वराज्यसेवेच्या ३० वर्षा त येसाजी कंक
          फक्त २० वेळा आपल्या निवासस्थानी गेले.
        </p>
      </>
    ),
  },
  en: {
    card1: (
      <>
        <p className="mb-4 leading-relaxed">
          The Kank family is a historic and brave family in Maharashtra. Their
          story is mostly linked to the time of Chhatrapati Shivaji Maharaj and
          the creation of Swarajya.
        </p>
        <p className="leading-relaxed">
          In the Mahabharata, the Pandavas had to undergo twelve years of exile
          in the forest and one year of living in disguise. During this period
          of disguise, while serving in the court of King Virata, Yudhishthira
          assumed the alias &apos;Kanka&apos;. The Pandavas achieved victory
          over the Vairat community residing in the area of Vairatgad, near Wai
          in the Satara region; subsequently, as all these people became
          followers of the Pandavas, they, too, adopted the surname
          &apos;Kank&apos;.
        </p>
      </>
    ),
    card2: (
      <>
        <p className="mb-4 leading-relaxed">
          In the 16th century, on the battlefield known as the Sahyadri in
          Maharashtra, Lord Krishna took the form of Chhatrapati Shivaji
          Maharaj. This Krishna, who started the fight against injustice,
          unfairness, and lies, was supported by a Yudhishthira named Yesaji
          Kank.
        </p>
        <p className="leading-relaxed">
          Sarnobat Yesaji — a brave warrior of the independent Hindavi Swarajya
          — was born in 1626 in the Kank family in Bhutonde, a village near
          Bhor.
        </p>
      </>
    ),
    card3: (
      <>
        <p className="mb-4 leading-relaxed">
          Yesaji Kank, who was strong and muscular, was a childhood friend of
          Chhatrapati Shivaji Maharaj. In 1645, at Rayereshwar, Chhatrapati
          Shivaji Maharaj took the oath of Swarajya along with Yesaji Kank and a
          few chosen Mavalas.
        </p>
        <p className="mb-4 leading-relaxed">
          From the capture of &apos;Torna&apos; — the very first fort of the
          Swarajya — to his tenure as a senior advisor during the reign of
          Chhatrapati Rajaram Maharaj in 1690, Yesaji handled every battle and
          plan with both bravery and honesty.
        </p>
        <p className="mb-4 leading-relaxed">
          Yesaji Kank was part of almost every important event in Chhatrapati
          Shivaji Maharaj&apos;s life. From the killing of Afzal Khan, the
          attack on Lal Mahal, the visit to Agra, to the victory in the South —
          and especially the Battle of Ponda Fort, where he fought the
          Portuguese with a sword at fifty years old — Yesaji Kank is the
          perfect example of bravery, strength, self-respect, and unwavering
          loyalty to his King.
        </p>
        <p className="leading-relaxed">
          Considering &apos;Swarajya&apos; as his everything. In his 30 years of
          service, Yesaji Kank visited his own home only 20 times.
        </p>
      </>
    ),
  },
};

export default function KankFamilyPage() {
  const { lang, textFontClass } = useLanguage();
  const t = lang === "en" ? content.en : content.mr;

  return (
    <main
      className={`min-h-screen overflow-hidden ${textFontClass}`}
      style={{
        background:
          "linear-gradient(135deg, #838366 0%, #EED5B1 50%, #7E868E 100%)",
      }}
    >
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[85vh] overflow-hidden mt-[70px]">
  <Image
    src="/yasaji_kank_gharane.png"
    alt="कंक घराणे"
    fill
    priority
    className="object-cover opacity-50"
    style={{ objectPosition: "50% 25%" }}
  />

  {/* Dark Gray Overlay */}
  <div className="absolute inset-0 bg-black/5" />

  {/* Title */}
  <div className="absolute top-6 sm:top-0 md:-top-8 left-0 right-0 flex justify-center items-start z-10">
    <Image
      src="/kankfont2.png"
      alt="कंक घराणे"
      width={650}
      height={320}
      className="object-contain w-[260px] sm:w-[380px] md:w-[620px]"
      priority
    />
  </div>
</div>
      {/* History Cards */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-4 md:gap-20">
        {/* Section Heading */}
        <h2 className="text-center text-[#black] text-2xl md:text-4xl font-bold tracking-wide">
          {lang === "en" ? "Information" : "माहिती"}
        </h2>
        {/* Card 1 */}
        <div className="relative">
          {/* Ropes hanging into card */}

          {/* Paper Background */}
          <div className="relative overflow-hidden rounded-md z-20">
            <Image
              src="/moblieviewbg.png"
              alt="background"
              fill
              className="object-cover md:hidden"
            />
            <Image
              src="/gharanebg.png"
              alt="background"
              fill
              className="object-cover hidden md:block"
            />

            <div className="relative z-10 h-[60vh] grid md:grid-cols-[2fr_1fr] lg:grid-cols-[4fr_1fr] gap-6 items-stretch px-12 md:px-24 py-10 md:py-14">
              {/* Text */}
              <div className="overflow-y-auto scrollbar-hide">
                <div className="min-h-full flex flex-col justify-center py-4">
                  <div className="text-[#3f2a1c] text-sm md:text-base leading-[2.0] font-medium whitespace-pre-line [&>p]:mb-4 [&>p:last-child]:mb-0">
                    {t.card1}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center order-first md:order-none">
                <Image
                  src="/firstcardimg.png"
                  alt="historic"
                  width={350}
                  height={350}
                  className="object-contain grayscale opacity-90 w-32 md:w-full lg:w-[280px] max-w-[180px] md:max-w-[320px] lg:max-w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          {/* Ropes hanging into card */}
          <Image
            src="/linkrrop.png"
            alt="rope"
            width={90}
            height={50}
            className="absolute -top-10 md:-top-18 -left-6 md:left-0 z-10"
            style={{
              transform: "rotate(-40deg)",
              transformOrigin: "top center",
            }}
          />
          <Image
            src="/linkrrop.png"
            alt="rope"
            width={90}
            height={50}
            className="absolute -top-10 md:-top-18 right-10 z-10"
            style={{
              transform: "rotate(-42deg)",
              transformOrigin: "top center",
            }}
          />

          {/* Paper */}
          <div className="relative overflow-hidden rounded-md z-20">
            <Image
              src="/moblieviewbg.png"
              alt="background"
              fill
              className="object-cover md:hidden"
            />
            <Image
              src="/gharanebg.png"
              alt="background"
              fill
              className="object-cover hidden md:block"
            />

            <div className="relative z-10 h-[60vh] grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_3fr] gap-4 items-stretch px-10 md:px-20 py-10 md:py-14">
              {/* Image — bottom-left corner */}
              <div className="flex justify-center md:justify-center items-center md:self-center">
                <Image
                  src="/secondcardimg.png"
                  alt="historic"
                  width={220}
                  height={220}
                  className="object-contain grayscale opacity-90 w-32 md:w-56 lg:w-[220px]"
                />
              </div>
              {/* Text */}
              <div className="overflow-y-auto scrollbar-hide">
                <div className="min-h-full flex flex-col justify-center py-4">
                  <div className="text-[#3f2a1c] text-sm md:text-base leading-[2.0] font-medium whitespace-pre-line [&>p]:mb-4 [&>p:last-child]:mb-0">
                    {t.card2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          {/* Ropes hanging into card */}
          <Image
            src="/linkrrop.png"
            alt="rope"
            width={90}
            height={50}
            className="absolute -top-10 md:-top-18 -left-6 md:left-0 z-10"
            style={{
              transform: "rotate(-40deg)",
              transformOrigin: "top center",
            }}
          />
          <Image
            src="/linkrrop.png"
            alt="rope"
            width={90}
            height={50}
            className="absolute -top-10 md:-top-18 right-10 z-10"
            style={{
              transform: "rotate(-42deg)",
              transformOrigin: "top center",
            }}
          />

          {/* Paper */}
          <div className="relative overflow-hidden rounded-md z-20">
            <Image
              src="/moblieviewbg.png"
              alt="background"
              fill
              className="object-cover md:hidden"
            />
            <Image
              src="/gharanebg.png"
              alt="background"
              fill
              className="object-cover hidden md:block"
            />

            <div className="relative z-10 h-[60vh] grid md:grid-cols-[2fr_1fr] lg:grid-cols-[4fr_1fr] gap-6 items-stretch px-10 md:px-20 py-10 md:py-14">
              {/* Text */}
              <div className="overflow-y-auto scrollbar-hide">
                <div className="min-h-full flex flex-col justify-center py-4">
                  <div className="text-[#3f2a1c] text-sm md:text-base leading-[2.0] font-medium whitespace-pre-line [&>p]:mb-4 [&>p:last-child]:mb-0">
                    {t.card3}
                  </div>
                </div>
              </div>
              {/* Image — right center */}
              <div className="flex justify-center md:justify-center items-center md:self-center order-first md:order-none">
                <Image
                  src="/thirdcardimg.png"
                  alt="historic"
                  width={160}
                  height={160}
                  className="object-contain grayscale opacity-90 w-28 md:w-48 lg:w-[160px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
