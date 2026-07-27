import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="font-display text-3xl sm:text-4xl font-medium text-ink">
          Get in touch
        </h1>
        <p className="mt-3 text-ink-soft leading-relaxed">
          Got a question about Mushoffee or when we&rsquo;ll be back in
          stock? Send us a message and we&rsquo;ll get back to you as soon
          as we can.
        </p>
        <div className="mt-10 rounded-3xl bg-white ring-1 ring-ink/10 p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
