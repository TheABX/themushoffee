const reviews = [
  {
    name: "Matthew S.",
    text: "I've been having a morning Mushoffee in lieu of an early coffee for over a year now, and I'm absolutely loving it.",
  },
  {
    name: "Christie G.",
    text: "For the first time as I cut out my morning coffee I had no withdrawals. I love starting my days now with my Mushoffee — I ran out once and got a mushroom powder mix to add to our decaf and it was terrible! Now I order 3 packs at a time.",
  },
  {
    name: "Simona E.",
    text: "I've been coffee free for over a year now. But since I received my Mushoffee, I got my morning ritual back. It tastes good and it's healthy — it gives me that kick start, without harming my body. Highly recommended.",
  },
  {
    name: "David V.",
    text: "Best tasting one out of all the mushroom coffee options I've tried.",
  },
  {
    name: "Carley Y.",
    text: "Makes me feel great in the morning, love the taste and such a good alternative to coffee.",
  },
  {
    name: "Ross G.",
    text: "The Mushoffee is how I start my day, every day.",
  },
  {
    name: "Neil C.",
    text: "Tastes decent. I have a coffee first thing in the morning then have Mushoffee for my afternoon cuppa. A good balance.",
  },
  {
    name: "Uma V.",
    text: "I love my Mushoffee as much as my guinea piggies!",
  },
  {
    name: "Linda H.",
    text: "Great experience ❤",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-balance text-3xl sm:text-4xl font-medium text-ink">
            Here&rsquo;s what our customers are saying
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <figure
              key={review.name + review.text.slice(0, 8)}
              className="rounded-2xl bg-white ring-1 ring-ink/5 p-6 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
