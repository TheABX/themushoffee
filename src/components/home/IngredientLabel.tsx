export default function IngredientLabel() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-purple">
          Read The Label
        </span>
        <h2 className="font-display text-balance mt-3 text-2xl sm:text-3xl font-medium text-ink">
          Full Ingredient List
        </h2>
        <div className="mt-8 rounded-3xl bg-white ring-1 ring-ink/10 shadow-sm p-8 sm:p-10 text-left">
          <p className="text-sm sm:text-base leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">
              Organic Mushoffee Mushroom Blend
            </span>{" "}
            (Lion&rsquo;s Mane, Chaga, Cordyceps, Reishi, Turkey Tail), Special
            Coffee Blend, Ceremonial Cacao, and a hint of Cinnamon.
          </p>
          <p className="mt-4 text-sm text-ink-soft">
            <span className="font-semibold text-ink">Other ingredients: </span>
            None.
          </p>
        </div>
      </div>
    </section>
  );
}
