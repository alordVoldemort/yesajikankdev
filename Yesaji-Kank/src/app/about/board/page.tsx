import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board of Trustees | Sarnobat Yesaji Kank Trust",
  description: "Meet the board of trustees of Sarnobat Yesaji Kank Trust.",
};

export default function BoardPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        विश्वास मंडळ{" "}
        <span className="text-xl font-normal text-gray-500 ml-2">Board of Trustees</span>
      </h1>
      <div className="h-1 w-16 bg-orange-500 mb-8 rounded-full" />
      <p className="text-gray-600 leading-relaxed text-lg">
        {/* Add board members content here */}
        विश्वास मंडळातील सदस्यांची माहिती येथे लिहा.
      </p>
    </main>
  );
}
