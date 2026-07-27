import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#ingredients", label: "Ingredients" },
  { href: "/#quality", label: "Our Quality" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-ink text-cream text-center text-[11px] sm:text-xs tracking-wide py-2 px-4 overflow-hidden">
        <p className="truncate">
          Currently restocking — join the waitlist to be first in line, no
          payment required.
        </p>
      </div>
      <header className="bg-cream/95 backdrop-blur border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center justify-center bg-ink rounded-lg px-2.5 py-2">
              <Image
                src="/images/logo-mark.png"
                alt="The Mushoffee"
                width={140}
                height={62}
                className="h-6 sm:h-7 w-auto"
                priority
              />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-purple transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#notify"
            className="inline-flex items-center rounded-full bg-purple px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-purple-dark transition-colors shrink-0"
          >
            Join Waitlist
          </Link>
        </div>
        <nav className="md:hidden flex items-center gap-5 overflow-x-auto px-4 pb-3 text-xs font-medium text-ink-soft">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:text-purple transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
