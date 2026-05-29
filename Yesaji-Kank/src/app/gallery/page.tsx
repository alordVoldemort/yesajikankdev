import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Yesaji",
  description: "Photo gallery of Yesaji Trust events and heritage.",
};

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-24 text-white">
      <section className="max-w-5xl w-full space-y-8">
        <h1 className="text-5xl font-bold font-devanagari">छायाचित्रे</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          Explore our collection of photographs from events and heritage sites.
        </p>
      </section>
    </main>
  );
}
