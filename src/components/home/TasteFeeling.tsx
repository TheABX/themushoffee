import Image from "next/image";

export default function TasteFeeling() {
  return (
    <section className="gradient-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto">
            <Image
              src="/images/lifestyle-woman-coffee.png"
              alt="Enjoying a warm cup of Mushoffee"
              width={1024}
              height={1120}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-balance text-3xl sm:text-4xl font-medium text-ink">
            Clear calm focus.
            <br />
            Without the crash.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed max-w-lg">
            We kept everything you love about coffee, took out what you
            don&rsquo;t, and infused it with functional mushrooms and
            adaptogens to elevate your energy, focus, and well-being.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="font-display text-purple text-sm font-semibold w-16 shrink-0 pt-0.5">
                Taste
              </span>
              <p className="text-sm text-ink-soft leading-relaxed">
                Rich, smooth coffee with earthy undertones and a subtle hint
                of chocolate for a naturally satisfying finish.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="font-display text-purple text-sm font-semibold w-16 shrink-0 pt-0.5">
                Feeling
              </span>
              <p className="text-sm text-ink-soft leading-relaxed">
                Calm, focused energy with mental clarity. Stay productive and
                feel balanced throughout your day, without the crash.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
