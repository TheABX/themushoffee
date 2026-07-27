"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does a Mushoffee taste like?",
    a: "The functional mushrooms in a Mushoffee, combined with our coffee extract, ceremonial cacao and cinnamon, provide a smooth, earthy taste that resembles a mocha latte with a hint of chai.",
  },
  {
    q: "Does Mushoffee contain caffeine?",
    a: "One cup of Mushoffee contains 97% less caffeine than a brewed cup of coffee — less than 2mg per cup, compared to 140mg+ in a traditional large coffee.",
  },
  {
    q: "Where are the ingredients sourced?",
    a: "Our ingredients aren't grown in Australia. While there are mushrooms that grow locally, most don't meet the standards of functional mushrooms sourced overseas. We only source from certified organic growers and traditional Di-Tao growing areas, formulated in Australian Certified GMP facilities free from GMOs, fillers or anything artificial.",
  },
  {
    q: "Are these the 'magic' type of mushrooms?",
    a: "No — our mushroom products are 100% legal and do not contain any psychoactive ingredients such as psilocybin. Functional mushrooms have their own benefits, but you won't experience anything psychedelic.",
  },
  {
    q: "How are your mushrooms extracted?",
    a: "Our mushrooms undergo a state-of-the-art extraction process using subcritical water extraction and supercritical CO₂ extraction, gently breaking down chitin to increase the potency and bioavailability of the beneficial compounds — unlike raw mycelium-on-grain powders, which contain non-significant quantities of active compounds.",
  },
  {
    q: "What can I expect after 30 days?",
    a: "People often report sharper focus, elevated energy, better rest and improved digestion after 30 days of consistent Mushoffee use. We're so confident you'll love it that once we're back in stock, we'll offer a 60-day love-it-or-it's-free guarantee.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="font-display text-balance text-3xl sm:text-4xl font-medium text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-ink/10 rounded-2xl ring-1 ring-ink/10 overflow-hidden">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="bg-cream/40">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 hover:bg-cream/70 transition-colors"
                >
                  <span className="font-medium text-sm sm:text-base text-ink">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 text-purple text-xl leading-none transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-sm text-ink-soft leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
