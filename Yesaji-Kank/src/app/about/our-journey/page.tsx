import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey | Sarnobat Yesaji Kank Trust",
  description: "The journey of Sarnobat Yesaji Kank Trust — milestones and progress.",
};

export default function OurJourneyPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        आमचा प्रवास{" "}
        <span className="text-xl font-normal text-gray-500 ml-2">Our Journey</span>
      </h1>
      <div className="h-1 w-16 bg-orange-500 mb-8 rounded-full" />
      <p className="text-gray-600 leading-relaxed text-lg">
        {/* Add journey/timeline content here */}
        ट्रस्टचा प्रवास, महत्त्वाचे टप्पे आणि उपलब्धी येथे लिहा.
      </p>
    </main>
  );
}
