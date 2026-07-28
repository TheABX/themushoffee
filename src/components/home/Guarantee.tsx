import Image from "next/image";
import Link from "next/link";

export default function Guarantee() {
  return (
    <section className="bg-purple-soft">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
        <Image
          src="/images/icon-laurel.png"
          alt=""
          width={56}
          height={56}
          className="w-12 h-12 mx-auto mb-5 opacity-80"
        />
        <span className="text-xs font-semibold tracking-widest uppercase text-purple-dark">
          Our &ldquo;Call Us Crazy&rdquo; Guarantee
        </span>
        <h2 className="font-display text-balance mt-3 text-3xl sm:text-4xl font-medium text-ink">
          Love it, or it&rsquo;s free.
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed max-w-xl mx-auto">
          You don&rsquo;t have to make up your mind just yet. Once
          we&rsquo;re back in stock, try Mushoffee for 60 days and get a full
          refund if it&rsquo;s not for you — no hassle, no questions asked.
        </p>
        <div className="mt-8">
          <Link
            href="#notify"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-coffee-dark transition-colors"
          >
            Notify Me When It&rsquo;s Back
          </Link>
        </div>
      </div>
    </section>
  );
}
