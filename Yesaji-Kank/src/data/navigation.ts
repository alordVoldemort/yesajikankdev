import type { NavItem } from "@/types";

export const navLinks: Record<"mr" | "en", NavItem[]> = {
  mr: [
    {
      label: "आमच्याबद्दल",
      href: "/about",
      children: [
        { label: "कंक घराणे", href: "/about/kank-family" },
        { label: "येसाजी कंकांबद्दल", href: "/about/yesaji-kank" },
        { label: "सरनोबत येसाजी कंक वाडा, भुतोंडे", href: "/about/kank-wada" },
        { label: "सरनोबत येसाजी कंक ट्रस्ट", href: "/about/trust" },
        { label: "आमचा प्रवास", href: "/about/our-journey" },
        { label: "विश्वस्त मंडळ", href: "/about/board" },
      ],
    },
    { label: "स्वराज्य योगदान", href: "/swarajya_contribution" },
    { label: "गॅलरी", href: "/gallery" },
    { label: "देणगी", href: "/donation" },
    { label: "संपर्क", href: "/contact" },
  ],
  en: [
    {
      label: "About Trust",
      href: "/about",
      children: [
        { label: "Kank Family", href: "/about/kank-family" },
        { label: "About Yesaji Kank", href: "/about/yesaji-kank" },
        { label: "Sarnobat Yesaji Kank Wada", href: "/about/kank-wada" },
        { label: "Sarnobat Yesaji Kank Trust", href: "/about/trust" },
        { label: "Our Journey", href: "/about/our-journey" },
        { label: "Board of Trustees", href: "/about/board" },
      ],
    },
    { label: "Swarajya Contribution", href: "/swarajya_contribution" },
    { label: "Gallery", href: "/gallery" },
    { label: "Donation", href: "/donation" },
    { label: "Contact", href: "/contact" },
  ],
};
