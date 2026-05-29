import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shivaji Era Heritage | Yesaji",
  description: "Celebrating the customs, arts, and valor of the Shivaji era.",
};

export default function ShivajiEraPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-24 text-white">
      <section className="max-w-3xl w-full space-y-8">
        <h1 className="text-5xl font-bold font-devanagari">शिवकालीन वारसा</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          Celebrating the customs, arts, and valor of the Shivaji era.
        </p>
      </section>
    </main>
  );
}
