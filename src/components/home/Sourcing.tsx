import Image from "next/image";

export default function Sourcing() {
  return (
    <section id="quality" className="bg-coffee-dark text-cream scroll-mt-24 relative overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-24 sm:h-32 opacity-[0.15] pointer-events-none"
        aria-hidden
      >
        <Image
          src="/images/mountain-silhouette.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 relative">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Our Quality
          </span>
          <h2 className="font-display text-balance mt-3 text-3xl sm:text-4xl font-medium">
            The highest quality mushrooms, always.
          </h2>
          <p className="mt-4 text-cream/70 leading-relaxed">
            100% pure, organic mushrooms with beta-glucans and
            polysaccharides. Free from harmful pesticides and heavy metals,
            expertly extracted for optimal bioavailability.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mb-4">
              <Image src="/images/icon-laurel.png" alt="" width={26} height={26} className="w-6 h-6 opacity-90" />
            </div>
            <h3 className="font-display font-semibold text-lg">
              Organically Di-Tao Grown
            </h3>
            <p className="mt-2.5 text-sm text-cream/65 leading-relaxed">
              Our mushrooms are organically farmed using traditional Di-Tao
              methods in the highlands of Longquan, Zhejiang Province — a
              region renowned for thousands of years of mushroom
              cultivation.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mb-4">
              <Image src="/images/icon-extraction.png" alt="" width={26} height={26} className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg">
              Advanced Extraction
            </h3>
            <p className="mt-2.5 text-sm text-cream/65 leading-relaxed">
              Our mushrooms undergo subcritical water and supercritical CO₂
              extraction, gently breaking down chitin to increase potency
              and bioavailability — retaining the full spectrum of beta-
              glucans and polysaccharides.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center mb-4">
              <Image src="/images/icon-molecule.png" alt="" width={26} height={26} className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg">
              Strict Quality Control
            </h3>
            <p className="mt-2.5 text-sm text-cream/65 leading-relaxed">
              Formulated in Australian Certified GMP facilities, free from
              GMOs, fillers or anything artificial — every batch is tested
              before it reaches you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
