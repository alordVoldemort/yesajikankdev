import type { Metadata } from "next";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us | Yesaji",
  description: "Learn more about Yesaji and our mission.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-24 text-white">
      <section className="max-w-3xl w-full space-y-8">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          We are Yesaji — a team passionate about building great experiences.
          Write your story here: who you are, what you do, and what you stand for.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <Card className="space-y-2">
            <h3 className="font-semibold text-white">Our Mission</h3>
            <p className="text-sm text-white/60">
              Describe your mission or core purpose here.
            </p>
          </Card>
          <Card className="space-y-2">
            <h3 className="font-semibold text-white">Our Vision</h3>
            <p className="text-sm text-white/60">
              Describe your long-term vision here.
            </p>
          </Card>
          <Card className="space-y-2">
            <h3 className="font-semibold text-white">Our Values</h3>
            <p className="text-sm text-white/60">
              List the values that guide your work.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
