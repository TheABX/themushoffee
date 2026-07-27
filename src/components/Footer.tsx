import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-cream/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <span className="inline-flex items-center justify-center bg-cream rounded-lg px-2.5 py-2 mb-4">
              <Image
                src="/images/logo-mark.png"
                alt="The Mushoffee"
                width={140}
                height={62}
                className="h-6 w-auto"
              />
            </span>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              A coffee alternative packed with functional mushrooms and
              nootropics — for focus, mood and sustained energy without the
              crash.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-cream mb-4 tracking-wide uppercase">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/60">
              <li>
                <Link href="/#ingredients" className="hover:text-cream transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="/#quality" className="hover:text-cream transition-colors">
                  Our Quality
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-cream transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-cream transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#notify" className="hover:text-cream transition-colors">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-cream mb-4 tracking-wide uppercase">
              Policies
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/60">
              <li>
                <Link href="/policies/refund-policy" className="hover:text-cream transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy-policy" className="hover:text-cream transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-of-service" className="hover:text-cream transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policies/shipping-policy" className="hover:text-cream transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-cream mb-4 tracking-wide uppercase">
              Get in touch
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/60">
              <li>
                <a href="mailto:support@themushoffee.com" className="hover:text-cream transition-colors">
                  support@themushoffee.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream transition-colors">
                  Contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            © {year} The Mushoffee. All rights reserved. ABN available on
            request.
          </p>
          <p className="text-xs text-cream/40 max-w-xl">
            These statements have not been evaluated by the FDA or TGA. Our
            products are not intended to diagnose, treat, cure, or prevent
            any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
