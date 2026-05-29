import type { Metadata } from "next";
import Features from "@/components/sections/Features";

export const metadata: Metadata = {
  title: "Services | Yesaji",
  description: "Explore what Yesaji offers.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-24 text-white">
      <Features />
    </main>
  );
}
