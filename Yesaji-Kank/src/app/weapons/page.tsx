import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weapons Exhibition | Yesaji",
  description: "An extensive collection of authentic Maratha-era weapons on display.",
};

export default function WeaponsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-24 text-white">
      <section className="max-w-3xl w-full space-y-8">
        <h1 className="text-5xl font-bold font-devanagari">शस्त्र प्रदर्शन</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          An extensive collection of authentic Maratha-era weapons on display.
        </p>
      </section>
    </main>
  );
}
