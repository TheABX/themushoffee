import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" updated="July 2026">
      <p>
        By accessing themushoffee.com.au (the &ldquo;Site&rdquo;), you agree
        to be bound by these Terms of Service. Please read them carefully.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Current availability
      </h2>
      <p>
        Mushoffee is currently out of stock and the Site is not processing
        orders or payments. Joining our waitlist does not create any
        obligation to purchase, and does not reserve stock or guarantee
        availability.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Health disclaimer
      </h2>
      <p>
        The statements made on this Site have not been evaluated by the FDA
        or the TGA. Our products are not intended to diagnose, treat, cure,
        or prevent any disease. The information provided on this Site is
        not a substitute for a face-to-face consultation with your
        physician and should not be construed as individual medical advice.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Intellectual property
      </h2>
      <p>
        All content on this Site, including text, graphics, logos and
        images, is the property of The Mushoffee and may not be reproduced
        without permission.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Limitation of liability
      </h2>
      <p>
        The Site is provided on an &ldquo;as is&rdquo; basis. We make no
        warranties, express or implied, regarding the accuracy or
        completeness of the content on this Site.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Contact
      </h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:support@themushoffee.com" className="text-purple underline">
          support@themushoffee.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
