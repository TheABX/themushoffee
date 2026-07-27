import Image from "next/image";

const pillars = [
  {
    icon: "/images/icon-molecule.png",
    title: "Fix The Root Cause",
    copy: "We don't just offer another band-aid solution. Mushoffee is formulated to target the root cause of energy dips and brain fog, providing long-lasting focus, calm energy, and mood support without the crash.",
  },
  {
    icon: "/images/icon-energy.png",
    title: "Scientifically Proven",
    copy: "Formulated with rigorously tested adaptogenic mushrooms, backed by research to enhance focus, energy, and mood — without the jitters or crash.",
  },
  {
    icon: "/images/icon-wellbeing.png",
    title: "7 Natural Ingredients",
    copy: "Crafted with all-natural, high-quality ingredients like organic mushrooms and adaptogens, designed to support your focus, energy, and well-being naturally.",
  },
];

export default function RootCause() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-balance text-3xl sm:text-4xl font-medium text-ink">
            We&rsquo;re on a mission to help you feel more energised, focused,
            and balanced — inside and out.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center sm:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-soft mb-5">
                <Image
                  src={pillar.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
