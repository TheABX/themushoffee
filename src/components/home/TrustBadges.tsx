import Image from "next/image";

const badges = [
  {
    icon: "/images/icon-refund.png",
    title: "60 Day Guarantee",
    copy: "Love it or receive a full refund",
  },
  {
    icon: "/images/icon-truck.png",
    title: "Fast & Free Shipping",
    copy: "Free delivery, once we're back in stock",
  },
  {
    icon: "/images/icon-laurel.png",
    title: "Australian Owned",
    copy: "Small batch, GMP-certified facility",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {badges.map((badge) => (
          <div key={badge.title} className="flex items-center gap-4">
            <Image
              src={badge.icon}
              alt=""
              width={44}
              height={44}
              className="w-10 h-10 shrink-0 opacity-80"
            />
            <div>
              <p className="font-semibold text-sm text-ink">{badge.title}</p>
              <p className="text-xs text-ink-soft mt-0.5">{badge.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
