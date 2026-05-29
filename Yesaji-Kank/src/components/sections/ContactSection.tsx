import Input from "@/components/ui/Input";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
      <form className="space-y-5">
        <Input id="name" label="Name" type="text" placeholder="Your name" />
        <Input id="email" label="Email" type="email" placeholder="you@example.com" />

        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Your message..."
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
