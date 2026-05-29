"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import twoflags from "@/../public/twoflags.svg";

const content = {
  mr: {
    pageTitle: "संपर्क",
    contact: "संपर्क",
    email: "ई-मेल",
    address: "पत्ता",
    phone: "+91 1234567890",
    emailId: "info@yesajikanktrust.org",
    addressText: "सरसेनापती कंक वाडा, भुतोंडे ता.भोर जि पुणे ",
    formTitle: "संदेश पाठवा",
    firstName: "पहिले नाव",
    firstNamePlaceholder: "आपले पहिले नाव",
    lastName: "आडनाव",
    lastNamePlaceholder: "आपले आडनाव",
    mobile: "मोबाईल नंबर",
    mobilePlaceholder: "मोबाईल क्रमांक",
    emailLabel: "ई मेल आयडी",
    emailPlaceholder: "ई मेल आयडी",
    message: "संदेश",
    messagePlaceholder: "संदेश",
    submit: "पाठवा",
    errChar: "कृपया फक्त अक्षरे वापरा",
    errMobile: "कृपया वैध १० अंकी मोबाईल नंबर टाका",
    errEmail: "ईमेल फक्त .com, .in, किंवा .net असावा",
    errReq: "हे क्षेत्र अनिवार्य आहे",
    sentOk: "संदेश पाठवला! आम्ही लवकरच आपल्याशी संपर्क साधू.",
    sentFail: "संदेश पाठवण्यात अडचण आली. कृपया पुन्हा प्रयत्न करा.",
    sending: "पाठवत आहे...",
  },
  en: {
    pageTitle: "Contact",
    contact: "Contact",
    email: "Email",
    address: "Address",
    phone: "+91 1234567890",
    emailId: "info@yesajikanktrust.org",
    addressText: "Sarsena Pati Kank Wada, Bhutonde, Bhor, Pune",
    formTitle: "Send Message",
    firstName: "First Name",
    firstNamePlaceholder: "Your first name",
    lastName: "Last Name",
    lastNamePlaceholder: "Your last name",
    mobile: "Mobile Number",
    mobilePlaceholder: "Mobile number",
    emailLabel: "Email ID",
    emailPlaceholder: "Email ID",
    message: "Message",
    messagePlaceholder: "Your message",
    submit: "Send",
    errChar: "Please use characters only",
    errMobile: "Please enter a valid 10-digit mobile number",
    errEmail: "Email must end with .com, .in, or .net",
    errReq: "This field is required",
    sentOk: "Message sent! We will get in touch with you soon.",
    sentFail: "Unable to send message right now. Please try again.",
    sending: "Sending...",
  },
};

export default function ContactPage() {
  const { lang, textFontClass } = useLanguage();
  const t = lang === "en" ? content.en : content.mr;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let newErrors: any = {};
    const nameRegex = /^[A-Za-z\u0900-\u097F\s]+$/;
    const mobileRegex = /^[6-9][0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|net)$/;

    if (!formData.firstName) newErrors.firstName = t.errReq;
    else if (!nameRegex.test(formData.firstName))
      newErrors.firstName = t.errChar;
    if (!formData.lastName) newErrors.lastName = t.errReq;
    else if (!nameRegex.test(formData.lastName)) newErrors.lastName = t.errChar;
    if (!formData.mobile) newErrors.mobile = t.errReq;
    else if (!mobileRegex.test(formData.mobile)) newErrors.mobile = t.errMobile;
    if (!formData.email) newErrors.email = t.errReq;
    else if (!emailRegex.test(formData.email)) newErrors.email = t.errEmail;
    if (!formData.message) newErrors.message = t.errReq;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        setIsSubmitting(true);
        const backendUrl =
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

        const response = await fetch(`${backendUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, lang }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        alert(t.sentOk);
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          message: "",
        });
      } catch {
        alert(t.sentFail);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <main
      className={`relative min-h-screen overflow-hidden flex flex-col items-center px-4 pt-[70px] sm:pt-[100px] lg:pt-[35px] md:pt-[10px] pb-20 ${textFontClass}`}
      style={{
        background:
          "linear-gradient(168.07deg, #8B866B 2.31%, #E9D5B4 55.3%, #BBA98B 98.28%)",
      }}
    >
      <div className="relative flex flex-col items-center w-full max-w-[900px] lg:mt-1 sm:mt-16">
        <div className="relative w-full flex justify-center z-0 lg:w-[680px] lg:h-[480px] md:w-[500px]">
          <Image
            src={twoflags}
            alt="Two Flags"
            width={480}
            height={350}
            className="object-contain w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center pb-[20%] sm:pb-[15%] ">
            <Image
              src="/contact-text.svg"
              alt={t.pageTitle}
              width={560}
              height={500}
              className="object-contain w-[390px] sm:w-[140px] md:w-[390px] lg:w-[480px]"
            />
          </div>
        </div>
        <div className="relative z-20 mt-[-38%] sm:mt-[-22%] md:mt-[-30%] lg:mt-[-30%] w-[190px] h-[190px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[400px] lg:w-[300px]">
          <Image
            src="/main.svg"
            alt="Emblem"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative z-30 w-full max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 px-2 sm:px-4 font-devanagari">
        {[
          { title: t.contact, icon: "/phone.svg", value: t.phone },
          { title: t.email, icon: "/email.svg", value: t.emailId },
          { title: t.address, icon: "/location.svg", value: t.addressText },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center min-h-[220px] sm:h-[250px] w-full md:w-[250px] lg:w-[400px]  "
          >
            <Image
              src="/paper-card.png"
              alt="Card"
              fill
              className="object-fill sm:object-contain"
            />
            <div className="relative z-10 flex flex-col items-center text-center px-8 sm:px-10">
              <h2
                className={`text-xl sm:text-2xl font-bold text-[#3d2415] mb-2 ${idx === 2 ? "md:mt-[9px]" : ""}`}
              >
                {item.title}
              </h2>
              <div className="w-15 h-17 sm:w-14 sm:h-14 flex items-center justify-center mb-6">

                <Image
                  src={item.icon}
                  alt="Icon"
                  width={75}
                  height={72}
                  className=""
                />
              </div>
              <p className="text-[#3d2415] text-sm sm:text-base md:text-[16px] font-semibold leading-[1.5] text-center max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch w-full">
        <div className="w-full bg-white border border-[#C1C1C1] rounded-[14px] px-5 sm:px-10 py-8 sm:py-10 shadow-xl">
          <h2 className="text-center text-2xl sm:text-[28px] font-bold text-[#2D2D2D] mb-8">
            {t.formTitle}
          </h2>
          <form
            className="flex flex-col gap-5 sm:gap-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[14px] text-gray-500 font-devanagari">
                  {t.firstName}
                </label>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t.firstNamePlaceholder}
                  className={`w-full h-11 border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-md px-4 text-sm outline-none focus:border-[#C85D1F] font-devanagari`}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-[10px]">
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[14px] text-gray-500 font-devanagari">
                  {t.lastName}
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t.lastNamePlaceholder}
                  className={`w-full h-11 border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-md px-4 text-sm outline-none focus:border-[#C85D1F] font-devanagari`}
                />
                {errors.lastName && (
                  <span className="text-red-500 text-[10px]">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[14px] text-gray-500 font-devanagari">
                  {t.mobile}
                </label>
                <input
                  name="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder={t.mobilePlaceholder}
                  className={`w-full h-11 border ${errors.mobile ? "border-red-500" : "border-gray-300"} rounded-md px-4 text-sm outline-none focus:border-[#C85D1F] font-devanagari`}
                />
                {errors.mobile && (
                  <span className="text-red-500 text-[10px]">
                    {errors.mobile}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[14px] text-gray-500 font-devanagari">
                  {t.emailLabel}
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className={`w-full h-11 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md px-4 text-sm outline-none focus:border-[#C85D1F] font-devanagari`}
                />
                {errors.email && (
                  <span className="text-red-500 text-[10px]">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-[14px] text-gray-500 font-devanagari">
                {t.message}
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-sm outline-none resize-none focus:border-[#C85D1F] font-devanagari`}
              />
              {errors.message && (
                <span className="text-red-500 text-[10px]">
                  {errors.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-md bg-[#C85D1F] text-white text-lg font-bold hover:bg-[#a84d18] transition-colors shadow-md mt-2"
            >
              {isSubmitting ? t.sending : t.submit}
            </button>
          </form>
        </div>
        <div className="w-full flex justify-center h-[320px] lg:h-auto">
          <div className="relative w-full rounded-[14px] overflow-hidden">
            <Image
              src="/location-map.svg"
              alt="Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
