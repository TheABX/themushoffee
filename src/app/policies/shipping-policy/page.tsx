import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPolicyPage() {
  return (
    <LegalPage title="Shipping Policy">
      <p>
        Mushoffee is currently out of stock while we source our next batch
        of high-quality, Di-Tao grown mushrooms — so no orders are being
        shipped at the moment. Join the waitlist and we&rsquo;ll email you
        the moment we&rsquo;re back.
      </p>
      <p>
        Once orders reopen, our goal is to ensure you receive your order
        promptly and reliably, with fast and free shipping across
        Australia. We&rsquo;ll keep this page updated with current
        processing and delivery timeframes.
      </p>
      <p>
        If you have any questions in the meantime, reach out to us at{" "}
        <a href="mailto:support@themushoffee.com" className="text-purple underline">
          support@themushoffee.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
