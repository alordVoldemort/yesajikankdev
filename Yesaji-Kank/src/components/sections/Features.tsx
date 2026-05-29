import type { Feature } from "@/types";

const features: Feature[] = [
  {
    title: "ऐतिहासिक वारसा",
    titleEn: "Historical Heritage",
    description: "Preserving the rich legacy of Maratha warriors and their traditions.",
  },
  {
    title: "शस्त्र प्रदर्शन",
    titleEn: "Weapons Exhibition",
    description: "An extensive collection of authentic Maratha-era weapons on display.",
  },
  {
    title: "शिवकालीन संस्कृती",
    titleEn: "Shivaji Era Culture",
    description: "Celebrating the customs, arts, and valor of the Shivaji era.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Our Heritage
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.titleEn}
            className="rounded-xl border border-white/10 p-6 space-y-3 bg-white/5 backdrop-blur-sm"
          >
            <h3 className="font-semibold text-lg text-white font-devanagari">
              {feature.title}
            </h3>
            <p className="text-sm text-white/60">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
