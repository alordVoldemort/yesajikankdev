import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarnobat Yesaji Kank Trust | About",
  description: "About the Sarnobat Yesaji Kank Trust — its founding, purpose and activities.",
};

export default function TrustPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        सरनोबत येसाजी कंक ट्रस्ट{" "}
        <span className="text-xl font-normal text-gray-500 ml-2">Sarnobat Yesaji Kank Trust</span>
      </h1>
      <div className="h-1 w-16 bg-orange-500 mb-8 rounded-full" />
      <p className="text-gray-600 leading-relaxed text-lg">
        {/* Add content about the Trust here */}
        ट्रस्टची स्थापना, उद्दिष्टे आणि उपक्रम येथे लिहा.
      </p>
    </main>
  );
}
