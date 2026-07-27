import Image from "next/image";

const ingredients = [
  {
    name: "Lion's Mane",
    latin: "Hericium erinaceus",
    image: "/images/mushroom-lions-mane.png",
    copy: "Your mind's BFF. Lion's Mane has been utilised in traditional medicine for centuries, boasting a broad spectrum of bioactive compounds including polysaccharides and beta-glucans.",
  },
  {
    name: "Cordyceps",
    latin: "Cordyceps sinensis",
    image: "/images/mushroom-cordyceps.png",
    copy: "A medicinal fungus with a rich history in traditional medicine, containing compounds such as polysaccharides, cordycepin, and ergosterols.",
  },
  {
    name: "Chaga",
    latin: "Inonotus obliquus",
    image: "/images/mushroom-chaga.png",
    copy: "Known for its high antioxidant content, Chaga contains beneficial compounds such as polysaccharides, betulinic acid, and triterpenoids.",
  },
  {
    name: "Reishi",
    latin: "Ganoderma lucidum",
    image: "/images/mushroom-reishi.png",
    copy: "A medicinal fungus with a rich history in traditional medicine, containing active compounds like polysaccharides, triterpenoids, and ganoderic acids.",
  },
  {
    name: "Turkey Tail",
    latin: "Trametes versicolor",
    image: null,
    copy: "Renowned for its medicinal properties, Turkey Tail is rich in bioactive compounds including polysaccharides, triterpenoids, and beta-glucans.",
  },
  {
    name: "Cacao & Cinnamon",
    latin: "Single origin, roasted",
    image: "/images/cacao-pods.png",
    copy: "Ceremonial cacao and a hint of cinnamon, blended with naturally decaffeinated coffee extract for a smooth, chocolatey finish.",
  },
];

export default function WhatsInside() {
  return (
    <section id="ingredients" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple">
            It&rsquo;s What&rsquo;s Inside That Counts
          </span>
          <h2 className="font-display text-balance mt-3 text-3xl sm:text-4xl font-medium text-ink">
            5 functional mushrooms. Same great coffee taste.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Mushoffee&rsquo;s blend of organic adaptogens fuels your mind
            naturally, nourishing cognitive function instead of
            overstimulating it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="rounded-3xl bg-cream ring-1 ring-ink/5 p-6 flex flex-col"
            >
              <div className="w-full h-36 flex items-center justify-center mb-4">
                {ingredient.image ? (
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    width={300}
                    height={300}
                    className="h-32 w-auto object-contain"
                  />
                ) : (
                  <Image
                    src="/images/icon-mushroom.png"
                    alt={ingredient.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 opacity-70"
                  />
                )}
              </div>
              <h3 className="font-display font-semibold text-ink">
                {ingredient.name}
              </h3>
              <p className="text-xs text-ink-soft/70 italic mb-2">
                {ingredient.latin}
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">
                {ingredient.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
