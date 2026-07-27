import Image from "next/image";

const features = [
  {
    icon: "/images/icon-mushroom.png",
    title: "100% Fruiting",
    copy: "No grains or fillers",
  },
  {
    icon: "/images/icon-coffee.png",
    title: "Low Caffeine",
    copy: "Less than 2mg per cup",
  },
  {
    icon: "/images/icon-leaves.png",
    title: "Plant Based",
    copy: "100% natural",
  },
  {
    icon: "/images/icon-nosugar.png",
    title: "No Sugar",
    copy: "Or artificial sweeteners",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-white border-y border-ink/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <Image
              src={feature.icon}
              alt=""
              width={36}
              height={36}
              className="w-8 h-8 mx-auto mb-3 opacity-80"
            />
            <p className="font-semibold text-sm text-ink">{feature.title}</p>
            <p className="text-xs text-ink-soft mt-1">{feature.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
