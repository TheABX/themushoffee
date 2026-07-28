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
            Clear, calm focus.
            <br />
            Without the crash.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink-soft max-w-lg leading-relaxed">
            Mushoffee is the fast-growing coffee alternative packed with
            functional mushrooms and nootropics — Lion&rsquo;s Mane, Chaga,
            Cordyceps, Reishi and Turkey Tail — for sharper focus, a lifted
            mood and sustained energy throughout the day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
          <div className="relative mx-auto max-w-sm lg:max-w-md">
            <Image
              src="/images/product-bag-double.png"
              alt="The Mushoffee mushroom coffee pouches"
              width={1080}
              height={1080}
              priority
              className="w-full h-auto drop-shadow-2xl"
            />
            <span className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-6 sm:left-auto sm:right-2 sm:translate-x-0 rounded-full bg-ink text-cream text-xs font-semibold px-4 py-2 shadow-lg whitespace-nowrap">
              Currently Out of Stock
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
