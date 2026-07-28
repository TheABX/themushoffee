import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-purple-dark ring-1 ring-purple/20 mb-6">
            🍄 5 Functional Mushrooms · Naturally Low Caffeine
          </span>
          <h1 className="font-display text-balance text-4xl sm:text-5xl lg:text-[3.4rem] font-medium leading-[1.08] text-ink">
            Coffee, upgraded.
            <br />
            Your daily focus, without the crash.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink-soft max-w-lg leading-relaxed">
            Mushoffee combines organic mushrooms and adaptogens to support
            focus, energy and mood — with no jitters or crash. Enjoy smooth,
            sustained energy with a fraction of the caffeine of regular
            coffee.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex text-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-ink-soft">
              Australia&rsquo;s favourite coffee alternative
            </span>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="#notify"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-purple px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple/20 hover:bg-purple-dark transition-colors"
            >
              Join the Waitlist
            </Link>
            <p className="text-sm text-ink-soft">
              Currently out of stock —{" "}
              <span className="font-medium text-ink">
                be first to know when we&rsquo;re back.
              </span>
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            <div>
              <dt className="font-display text-2xl sm:text-3xl text-ink">&lt;2mg</dt>
              <dd className="text-xs text-ink-soft mt-1">Caffeine per cup</dd>
            </div>
            <div>
              <dt className="font-display text-2xl sm:text-3xl text-ink">5</dt>
              <dd className="text-xs text-ink-soft mt-1">Functional mushrooms</dd>
            </div>
            <div>
              <dt className="font-display text-2xl sm:text-3xl text-ink">100%</dt>
              <dd className="text-xs text-ink-soft mt-1">Fruiting body</dd>
            </div>
          </dl>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative mx-auto max-w-md lg:max-w-lg rounded-[1.75rem] overflow-hidden shadow-2xl shadow-purple/20 ring-1 ring-ink/5">
            <Image
              src="/images/hero-visual.png"
              alt="Iced Mushoffee splashing beside a pouch of mushroom coffee"
              width={648}
              height={538}
              priority
              className="w-full h-auto"
            />
            <span className="absolute top-4 right-4 rounded-full bg-ink text-cream text-xs font-semibold px-4 py-2 shadow-lg whitespace-nowrap">
              Currently Out of Stock
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
