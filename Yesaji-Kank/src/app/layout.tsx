import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Hind,
  Noto_Sans_Devanagari,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { LanguageProvider } from "@/context/LanguageContext";

const hind = Hind({
  variable: "--font-hind",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
    icons: {
    icon: "/main_logo.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mr"
      className={`${geistSans.variable} ${geistMono.variable} ${devanagari.variable} ${poppins.variable} ${hind.variable} h-full antialiased`}
    >
      <body>
        <LanguageProvider >
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>

    </html>
  );
}
