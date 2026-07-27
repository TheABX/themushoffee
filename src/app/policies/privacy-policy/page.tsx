import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        This Privacy Policy describes how The Mushoffee (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects, uses and discloses your personal
        information when you visit themushoffee.com.au (the
        &ldquo;Site&rdquo;).
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Information we collect
      </h2>
      <p>
        While the Site is not currently taking orders, we collect the email
        address you provide when joining our restock waitlist, and any
        details you submit through our contact form. We may also collect
        standard technical information such as browser type, device type
        and pages visited, via cookies and analytics tools, to help us
        understand how the Site is used.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        How we use your information
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>To notify you when Mushoffee is back in stock.</li>
        <li>To respond to enquiries you send us.</li>
        <li>To improve the Site&rsquo;s content, layout and performance.</li>
      </ul>
      <p>
        We do not sell your personal information to third parties. We will
        never ask for or store payment details on this Site while it is not
        processing orders.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Third-party services
      </h2>
      <p>
        We use trusted third-party providers (such as our email delivery
        provider and hosting provider) to operate the waitlist and contact
        form. These providers only receive the information necessary to
        perform their service and are bound by their own privacy
        obligations.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Your rights
      </h2>
      <p>
        You can ask us to access, correct or delete the personal
        information we hold about you, or unsubscribe from the waitlist at
        any time, by emailing{" "}
        <a href="mailto:support@themushoffee.com" className="text-purple underline">
          support@themushoffee.com
        </a>
        .
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Changes to this policy
      </h2>
      <p>
        We may update this policy from time to time. Changes will be posted
        on this page with an updated revision date.
      </p>
    </LegalPage>
  );
}
