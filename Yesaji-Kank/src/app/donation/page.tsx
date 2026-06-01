"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const translations = {
  mr: {
    heroAlt: "देणगी",
    title: "देणगीसाठी तपशील",
    subtitle: "स्वराज्याप्रती कर्तव्याची देणगी",
    scroll: [
      {
        line1:
          "मराठा साम्राज्याचा इतिहास लिहिताना हिंदवी स्वराज्याचे सरनोबत 'येसाजी कंक' हे नाव अत्यंत",
        line2: "सन्मानाने आणि",
      },

      {
        line1:
          "आवर्जून घेतले जाते. त्यांचे शौर्य आणि पराक्रमाचे पोवाडे आजही गायले जातात.",
        line2: "",
      },

      {
        line1:
          "सरसेनापती येसाजी कंक ट्रस्ट मार्फत दरवर्षी ऐतिहासिक, सामाजिक, सांस्कृतिक, कृषी तसेच",
        line2: "क्रीडा क्षेत्रांमध्ये",
      },

      {
        line1: "विविध उपक्रम राबवले जातात.",
        line2: "",
      },

      {
        line1:
          "येसाजी कंक यांचा गौरवशाली इतिहास व स्वराज्यातील योगदान सर्वांपर्यंत पोहोचावा या",
        line2: "साठी कंक वाडा, भुतोंडे",
      },

      {
        line1:
          "या परिसरात 'सरनोबत येसाजी कंक' यांचे भव्य स्मारक उभे करण्याचे कार्य सुरू आहे.",
        line2: "",
      },

      {
        line1:
          "या पुण्य कार्यात आपल्याला योगदान करायची इच्छा असल्यास खालील माहितीचा आधार",
        line2: "घ्यावा.",
      },
    ],
    onlineTab: "ऑनलाइन देणगी फॉर्म",
    bankTab: "बँक तपशील",
    formTitle: "देणगी फॉर्म",
    personalInfo: "वैयक्तिक माहिती",
    fullName: "पूर्ण नाव *",
    fullNamePlac: "आपले पूर्ण नाव",
    mobile: "मोबाईल क्रमांक *",
    mobilePlac: "मोबाईल क्रमांक",
    email: "ईमेल आयडी *",
    emailPlac: "ईमेल आयडी",
    address: "पत्ता *",
    addressPlac: "पत्ता",
    donationDetails: "देणगी तपशील",
    amount: "देणगी रक्कम *",
    purpose: "देणगीचा उद्देश (ऐच्छिक)",
    select: "निवडा",
    purposes: [
      "स्मारक कार्य",
      "कृषी सहाय्य",
      "क्रीडा विकास",
      "सामाजिक कार्य",
      "सांस्कृतिक जतन",
    ],
    paymentMethod: "पेमेंट पद्धत *",
    upi: "Upi",
    card: "डेबिट/क्रेडिट कार्ड",
    netbanking: "नेट बँकिंग",
    terms: "दिलेली माहिती बरोबर आहे आणि ट्रस्टच्या नियमांशी सहमत आहे.",
    cancel: "रद्द",
    donate: "देणगी",
    bankTitle: "बँक खाते तपशील",
    bankInfo: "बँक खाते माहिती",
    bankName: "बँक नाव / Bank Name",
    accHolder: "खाते धारक / Account Holder",
    accNo: "खाते क्रमांक / Account Number",
    ifsc: "IFSC कोड / IFSC Code",
    branch: "शाखा / Branch",
    copy: "कॉपी करा",
    infoBox:
      "तुमचे योगदान सरसेनापती येसाजी कंक यांचा इतिहास आणि वारसा येणाऱ्या पिढ्यांसाठी जपण्यास मदत करेल",
    footer:
      "देणगीसंबंधी कोणत्याही प्रश्नासाठी कृपया ट्रस्ट कार्यालयाशी संपर्क साधा",
  },
  en: {
    heroAlt: "Donation",
    title: "Donation Details",
    subtitle: "Swarajyaprati Kartavyachi Denagi",
    scroll: [
      {
        line1: "The Gift of Duty towards Swarajya",
        line2: "",
      },
      {
        line1:
          "While chronicling the history of the Maratha Empire, the name of Hindavi",
        line2:
          " Swarajya's Commander-in-Chief, 'Yesaji Kank', is cited with the utmost ",
      },
      {
        line1: " respect and special importance. Songs about their bravery ",
        line2: "and heroic deeds are still sung today.",
      },
      {
        line1:
          "Every year, the Sarsenapati Yesaji Kank Trust carries out different projects ",
        line2:
          "in the historical, social, cultural, agricultural, and sports areas.",
      },
      {
        line1:
          "To make sure the great history of Yesaji Kank and his contributions",
        line2:
          " to the Swaraj reaches everyone, work is currently underway to build a grand memorial to 'Sarnobat Yesaji Kank'",
      },
      {
        line1: "near Kank Wada, Bhutonde.",
        line2: "",
      },
      {
        line1:
          "If you wish to contribute to this noble endeavor, please refer to the ",
        line2: "information provided below.",
      },
    ],
    onlineTab: "Online Donation Form",
    bankTab: "Bank Details",
    formTitle: "Donation Form",
    personalInfo: "Personal Information",
    fullName: "Full Name *",
    fullNamePlac: "Your Full Name",
    mobile: "Mobile Number *",
    mobilePlac: "Mobile Number",
    email: "Email ID *",
    emailPlac: "Email ID",
    address: "Address *",
    addressPlac: "Address",
    donationDetails: "Donation Details",
    amount: "Donation Amount *",
    purpose: "Purpose of Donation (Optional)",
    select: "Select",
    purposes: [
      "Memorial Work",
      "Agricultural Support",
      "Sports Development",
      "Social Work",
      "Cultural Preservation",
    ],
    paymentMethod: "Payment Method *",
    upi: "UPI",
    card: "Debit/Credit Card",
    netbanking: "Net Banking",
    terms:
      "I confirm that the information provided is correct and I agree to the trust's terms and conditions.",
    cancel: "Cancel",
    donate: "Donate",
    bankTitle: "Bank Account Details",
    bankInfo: "Bank Account Information",
    bankName: "Bank Name",
    accHolder: "Account Holder",
    accNo: "Account Number",
    ifsc: "IFSC Code / IFSC कोड",
    branch: "Branch / शाखा",
    copy: "Copy",
    infoBox:
      "Your donation will support the mission to preserve the history and legacy of Yesaji Kank.",
    footer:
      "For any donation related queries, please contact the trust office.",
  },
};

export default function DonationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    amount: "",
    purpose: "",
    paymentMethod: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    amount: "",
    paymentMethod: "",
    acceptTerms: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { lang, textFontClass } = useLanguage();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState("donation");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [copiedField, setCopiedField] = useState<number | null>(null);

  const handleSelectPurpose = (val: string) => {
    setFormData((prev) => ({ ...prev, purpose: val }));
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name === "fullName") {
      setFormData((prev) => ({
        ...prev,
        fullName: value.replace(/[^A-Za-z\s]/g, ""),
      }));
      return;
    }
    if (name === "mobile") {
      const onlyNums = value.replace(/\D/g, "");
      if (onlyNums.length > 10) return;
      setFormData((prev) => ({ ...prev, mobile: onlyNums }));
      return;
    }
    if (name === "amount") {
      const onlyNums = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        amount: onlyNums,
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors = {
      fullName: "",
      mobile: "",
      email: "",
      city: "",
      amount: "",
      paymentMethod: "",
      acceptTerms: "",
    };
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(formData.fullName.trim()))
      newErrors.fullName =
        lang === "mr"
          ? "नावात फक्त अक्षरे असावीत"
          : "Name should contain only letters";
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile))
      newErrors.mobile =
        lang === "mr"
          ? "मोबाईल क्रमांक 10 अंकांचा असावा"
          : "Mobile number must be exactly 10 digits";
    if (!formData.amount) {
      newErrors.amount =
        lang === "mr" ? "कृपया रकम टाका" : "Please enter an amount";
    }
    if (!formData.paymentMethod)
      newErrors.paymentMethod =
        lang === "mr"
          ? "कृपया पेमेंट पद्धत निवडा"
          : "Please select a payment method";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net)$/;
    if (!emailRegex.test(formData.email))
      newErrors.email =
        lang === "mr"
          ? "वैध ईमेल पत्ता टाका (.com, .in किंवा .net)"
          : "Enter a valid email ending with .com, .in or .net";

    if (!formData.city.trim())
      newErrors.city =
        lang === "mr" ? "कृपया पत्ता टाका" : "Address is required";
    if (!formData.acceptTerms)
      newErrors.acceptTerms =
        lang === "mr"
          ? "कृपया अटी स्वीकारा"
          : "Please accept the terms and conditions";
    setErrors(newErrors);
    if (
      newErrors.fullName ||
      newErrors.mobile ||
      newErrors.email ||
      newErrors.city ||
      newErrors.amount ||
      newErrors.paymentMethod ||
      newErrors.acceptTerms
    )
      return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    router.push("/donation/donation-success");
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main
      className={`relative w-full overflow-hidden bg-[linear-gradient(168.07deg,_#838366_2.31%,_#EED5B1_50.3%,_#7E868E_98.28%)] pt-[64px] ${textFontClass}`}
    >
      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[240px] sm:h-[520px] md:h-[650px] lg:h-[788px]"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src="/donation-hero.svg"
            alt="Donation Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#D9D9D96E]" />
        <div className="absolute inset-0 flex flex-col items-center ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-[180px] min-[375px]:w-[220px] sm:w-[360px] md:w-[520px] lg:w-[800px] h-[100px] sm:h-[180px] md:h-[150px] lg:h-[150px]"
          >
            <Image
              src="/donation-text.svg"
              alt={t.heroAlt}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SCROLL SECTION ================= */}
      <section className="relative bg-transparent pt-2 md:pt-6 pb-6 md:pb-10 px-2 sm:px-4 flex flex-col items-center overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className="text-[28px] min-[390px]:text-[34px] sm:text-[40px] md:text-[64px] font-bold text-black leading-tight text-center px-2"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 0px 10px rgba(0,0,0,0.1)",
                "0px 0px 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            {t.title}
          </motion.h2>

          <motion.p
            className="text-[13px] min-[390px]:text-[15px] sm:text-[16px] md:text-[22px] text-[#4b2d18] mt-3 mb-4 md:mb-10 text-center px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Scroll Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="
      relative
      w-full
      flex
      items-center
      justify-center

      h-[340px]
      min-[360px]:h-[390px]
      min-[390px]:h-[430px]

      sm:h-[460px]
      md:h-[560px]
      lg:h-[660px]

      overflow-hidden
    "
        >
          {/* Scroll Image */}
          <div
            className="
        relative

        w-[500px]
        min-[360px]:w-[580px]
        min-[390px]:w-[680px]

        sm:w-[520px]
        md:w-[620px]
        lg:w-[700px]

        h-[920px]
        min-[360px]:h-[1040px]
        min-[390px]:h-[1180px]

        sm:h-[900px]
        md:h-[1080px]
        lg:h-[1220px]

        rotate-90
      "
          >
            <Image
              src="/scroll.png"
              alt="Scroll"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div
            className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        pt-[8px]
        min-[390px]:pt-[12px]

        px-4
        min-[390px]:px-6
        sm:px-8
      "
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className={`
          text-center
          text-white
            font-normal

          leading-[1.45]

          space-y-[2px]

          break-words
          overflow-hidden
          w-full

          ${
            lang === "mr"
              ? `
                max-w-[220px]
                min-[360px]:max-w-[255px]
                min-[390px]:max-w-[285px]

                sm:max-w-[420px]
                md:max-w-[500px]
                lg:max-w-[900px]
              `
              : `
                max-w-[220px]
                min-[360px]:max-w-[255px]
                min-[390px]:max-w-[285px]

                sm:max-w-[420px]
                md:max-w-[500px]
                lg:max-w-[700px]
              `
          }
        `}
            >
              {t.scroll.map((para, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <p
                    className={`
                ${
                  lang === "mr"
                    ? `
                        text-[8px]
                        min-[360px]:text-[9px]
                        min-[390px]:text-[10px]

                        sm:text-[12px]
                        md:text-[16px]
                        lg:text-[18px]
                      `
                    : `
                        text-[7px]
                        min-[360px]:text-[7.5px]
                        min-[390px]:text-[8px]

                        sm:text-[11px]
                        md:text-[16px]
                        lg:text-[17px]
                      `
                }

                leading-[1.30]
                tracking-[0.2px]
                text-center
                break-words
                overflow-wrap-anywhere
              `}
                  >
                    {para.line1}
                  </p>

                  {para.line2 && (
                    <p
                      className={`
                  ${
                    lang === "mr"
                      ? `
                          text-[8px]
                          min-[360px]:text-[9px]
                          min-[390px]:text-[10px]

                          sm:text-[12px]
                          md:text-[16px]
                          lg:text-[18px]
                        `
                      : `
                          text-[7px]
                          min-[360px]:text-[7.5px]
                          min-[390px]:text-[8px]

                          sm:text-[11px]
                          md:text-[15px]
                          lg:text-[17px]
                        `
                  }

                  leading-[1.30]
                  tracking-[0.2px]
                  text-center
                  break-words
                  overflow-wrap-anywhere
                `}
                    >
                      {para.line2}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tabs */}
      <motion.div
        className="flex flex-col items-center mt-5 md:mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-10 md:gap-16">
          {/* Donation Tab */}
          <motion.button
            onClick={() => setActiveTab("donation")}
            className="flex items-center gap-3 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
              animate={{ rotate: activeTab === "donation" ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={
                  activeTab === "donation"
                    ? "/donation-orange.svg"
                    : "/ऑनलाइन देणगी फॉर्म.svg"
                }
                alt="icon"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            <span
              className={`text-[15px] md:text-[18px] font-medium transition cursor-pointer ${
                activeTab === "donation" ? "text-[#e17843]" : "text-[#2e2417]"
              }`}
            >
              {t.onlineTab}
            </span>

            {activeTab === "donation" && (
              <motion.div
                layoutId="tab-line"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#e17843]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>

          {/* Bank Tab */}
          <motion.button
            onClick={() => setActiveTab("bank")}
            className="flex items-center gap-3 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
              animate={{ rotate: activeTab === "bank" ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={
                  activeTab === "bank" ? "/bank-orange.svg" : "/बँक तपशील.svg"
                }
                alt="icon"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            <span
              className={`text-[15px] md:text-[18px] font-medium transition cursor-pointer ${
                activeTab === "bank" ? "text-[#e17843]" : "text-[#2e2417]"
              }`}
            >
              {t.bankTab}
            </span>

            {activeTab === "bank" && (
              <motion.div
                layoutId="tab-line"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#e17843]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        </div>

        {/* Bottom Line */}
        <motion.div
          className="w-[320px] md:w-[560px] h-[1px] bg-[#3d2b1f] mt-[14px]"
          initial={{ width: 0 }}
          whileInView={{ width: "320px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </motion.div>

      {/* ================= CONTENT AREA ================= */}
      <AnimatePresence mode="wait">
        {activeTab === "donation" && (
          <motion.section
            key="donation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent px-4 pb-24 mt-10 md:mt-14"
          >
            <motion.div
              className="max-w-[760px] mx-auto bg-[#f7f7f7] rounded-[18px] border border-[#d9d9d9] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-6 md:px-14 py-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2
                  className="text-[28px] md:text-[36px] font-medium text-[#222]"
                  variants={itemVariants}
                >
                  {t.formTitle}
                </motion.h2>
                <motion.p
                  className="text-[#555] mt-6 text-[17px]"
                  variants={itemVariants}
                >
                  {t.personalInfo}
                </motion.p>
              </motion.div>

              <form onSubmit={handleSubmit} className="mt-10">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <label className="text-[15px] text-[#333] font-medium">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t.fullNamePlac}
                      className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px] focus:border-[#C05621] transition-colors duration-300"
                    />
                    {errors.fullName && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.fullName}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="text-[15px] text-[#333] font-medium font-devanagari">
                      {t.mobile}
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder={t.mobilePlac}
                      className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px] focus:border-[#C05621] transition-colors duration-300 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-devanagari"
                    />

                    {errors.mobile && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.mobile}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="text-[15px] text-[#333] font-medium font-devanagari">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlac}
                      className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px] focus:border-[#C05621] transition-colors duration-300 font-devanagari"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1 font-devanagari"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="text-[15px] text-[#333] font-medium">
                      {t.address}
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder={t.addressPlac}
                      className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px] focus:border-[#C05621] transition-colors duration-300"
                    />

                    {errors.city && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.city}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="border-t border-[#e5cba8] my-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />

                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-[22px] text-[#333] font-medium">
                    {t.donationDetails}
                  </h3>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <label className="text-[15px] text-[#333] font-medium flex items-center gap-2">
                      <span>{t.amount}</span>
                      <Image
                        src="/rupee.svg"
                        alt="Rupee"
                        width={12}
                        height={12}
                      />
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      placeholder={lang === "mr" ? "देणगी रक्कम" : "Donation ₹"}
                      onChange={handleChange}
                      className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px] focus:border-[#C05621] transition-colors duration-300"
                    />
                    {errors.amount && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.amount}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="relative"
                    ref={dropdownRef}
                  >
                    <label className="text-[15px] text-[#333] font-medium">
                      {t.purpose}
                    </label>

                    {/* Dropdown Trigger Box */}
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent flex items-center justify-between cursor-pointer hover:border-[#C05621] transition-all"
                    >
                      <span
                        className={`text-[14px] ${!formData.purpose ? "text-[#757575]" : "text-black"}`}
                      >
                        {formData.purpose || t.select}
                      </span>
                      {/* Black Triangle Icon from your image */}
                      <motion.span
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[14px] text-black"
                      >
                        ▼
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-50 left-0 right-0 mt-1 bg-white border border-[#bdbdbd] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden"
                        >
                          {/* Placeholder / Default Option */}
                          <div className="px-5 py-3 text-[15px] text-[#757575] border-b border-[#f0f0f0]">
                            {t.select}
                          </div>

                          {/* List of Purposes */}
                          {t.purposes.map((option, index) => (
                            <div
                              key={index}
                              onClick={() => handleSelectPurpose(option)}
                              className="px-5 py-3 text-[15px] text-[#333] hover:bg-[#f8f8f8] cursor-pointer transition-colors border-b last:border-none border-[#f0f0f0] font-devanagari"
                            >
                              {option}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="text-[15px] text-[#333] font-medium">
                    {t.paymentMethod}
                  </label>
                  <div className="flex flex-col md:flex-row gap-4 mt-5">
                    {["upi", "card", "netbanking"].map((m, idx) => (
                      <motion.label
                        key={m}
                        className="flex-1 flex items-center justify-center gap-2 min-h-[48px] border border-[#f0a47d] rounded-[8px] text-[13px] md:text-[14px] text-[#444] cursor-pointer px-3 text-center hover:bg-[#f0a47d] hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={m}
                          checked={formData.paymentMethod === m}
                          onChange={handleChange}
                          className="accent-[#E17843] w-[18px] h-[18px]"
                        />
                        <span className="text-[16px] font-medium text-[#4A4037] font-devanagari">
                          {m === "upi"
                            ? t.upi
                            : m === "card"
                              ? t.card
                              : t.netbanking}{" "}
                        </span>
                      </motion.label>
                    ))}
                  </div>
                  {errors.paymentMethod && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.paymentMethod}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  className="border-t border-[#e5cba8] my-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />

                <motion.label
                  className="flex items-center gap-3 text-[14px] text-[#555] cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  {t.terms}
                </motion.label>

                {errors.acceptTerms && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.acceptTerms}
                  </motion.p>
                )}

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {/* Cancel Button */}
                  <motion.button
                    type="button"
                    onClick={() => {
                      setFormData({
                        fullName: "",
                        mobile: "",
                        email: "",
                        city: "",
                        amount: "",
                        purpose: "",
                        paymentMethod: "",
                        acceptTerms: false,
                      });

                      setErrors({
                        fullName: "",
                        mobile: "",
                        email: "",
                        city: "",
                        amount: "",
                        paymentMethod: "",
                        acceptTerms: "",
                      });
                    }}
                    className="w-[120px] h-[44px] border border-[#444] rounded-[8px] text-[#333] text-[15px] flex items-center justify-center gap-2 bg-white cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative w-[18px] h-[18px]">
                      <Image
                        src="/रद्द.svg"
                        alt="icon"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <span>{t.cancel}</span>
                  </motion.button>

                  {/* Donate Button */}
                  <motion.button
                    type="submit"
                    className="w-[120px] h-[44px] bg-[#C05621] hover:bg-[#9f4b1c] rounded-[8px] text-white text-[15px] flex items-center justify-center gap-2 transition shadow-md disabled:opacity-50 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                  >
                    <div className="relative w-[18px] h-[18px]">
                      <Image
                        src="/देणगी.svg"
                        alt="icon"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <span>
                      {isSubmitting
                        ? lang === "mr"
                          ? "प्रक्रिया..."
                          : "Processing..."
                        : t.donate}
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.section>
        )}

        {activeTab === "bank" && (
          <motion.section
            key="bank"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent px-4 pb-24 mt-10 md:mt-14"
          >
            <motion.div
              className="max-w-[760px] mx-auto bg-[#f7f7f7] rounded-[18px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-6 md:px-14 py-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.h2
                  className="text-[32px] font-medium text-[#222]"
                  animate={{
                    color: ["#222", "#C05621", "#222"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                >
                  {t.bankTitle}
                </motion.h2>
                <p className="text-[#555] mt-5 text-[17px]">{t.bankInfo}</p>
              </motion.div>

              <div className="mt-10 flex flex-col gap-6">
                {[
                  { label: t.bankName, value: "State Bank of India" },
                  {
                    label: t.accHolder,
                    value: "Sarsenapati Yesaji Kank Trust",
                  },
                  { label: t.accNo, value: "1234567890" },
                  { label: t.ifsc, value: "SBIN0001234" },
                  { label: t.branch, value: "Bhutonde Branch" },
                ].map((field, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="text-[13px] text-[#666]">
                      {field.label}
                    </label>
                    <div className="mt-2 flex items-center justify-between border border-[#cfcfcf] rounded-[8px] overflow-hidden bg-white">
                      <input
                        type="text"
                        value={field.value}
                        readOnly
                        className="w-full px-4 h-[48px] outline-none text-[15px] bg-transparent"
                      />
                      <motion.button
                        className="w-[99px] h-[36px] bg-[#C05621] hover:bg-[#9f4b1c] rounded-[4px] flex items-center justify-center p-[10px] text-white text-[13px] font-medium mr-2 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          navigator.clipboard.writeText(field.value);
                          setCopiedField(idx);

                          setTimeout(() => {
                            setCopiedField(null);
                          }, 2000);
                        }}
                      >
                        {copiedField === idx
                          ? lang === "mr"
                            ? "कॉपी झाले ✓"
                            : "Copied ✓"
                          : t.copy}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10 bg-[#F2D3C1] border-l-[5px] border-[#FF5C00] rounded-[14px] px-6 py-6 text-[16px] text-[#3B2A1F] font-medium leading-[150%] font-devanagari"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {t.infoBox}
              </motion.div>

              <motion.div
                className="mt-12 text-center text-[15px] md:text-[16px] text-[#5B4A3F] font-medium leading-[150%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {t.footer}
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
