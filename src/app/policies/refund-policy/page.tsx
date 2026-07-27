import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy">
      <p>
        We currently have Mushoffee out of stock while we source our next
        batch. The policy below will apply once orders reopen.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        60 Day Money Back Guarantee
      </h2>
      <p>
        We have a 60-day return policy, which means you have 60 days after
        receiving your item to request a return. To be eligible for a
        return, your item must be in the same condition that you received
        it, unworn or unused, with tags, and in its original packaging.
        You&rsquo;ll also need the receipt or proof of purchase. To start a
        return, contact us at{" "}
        <a href="mailto:support@themushoffee.com" className="text-purple underline">
          support@themushoffee.com
        </a>
        .
      </p>
      <p>
        If your return is accepted, we&rsquo;ll send you a return shipping
        label along with instructions on how and where to send your
        package. Items sent back to us without first requesting a return
        will not be accepted.
      </p>
      <p>
        In the event of a return under our 60-day money back guarantee, the
        customer is responsible for the cost of returning any additional
        packets purchased, and for ensuring goods are properly packaged and
        shipped. Failure to comply with these conditions may result in a
        partial refund or no refund, depending on the condition of the
        returned items.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Damages and issues
      </h2>
      <p>
        Please inspect your order upon reception and contact us immediately
        if the item is defective, damaged, or if you receive the wrong
        item, so we can evaluate the issue and make it right.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        Exceptions / non-returnable items
      </h2>
      <p>
        Certain types of items cannot be returned, like perishable goods
        (such as food), custom or personalised products, and personal care
        goods. We also do not accept returns on sale items or gift cards.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">
        European Union 14 day cooling off period
      </h2>
      <p>
        Notwithstanding the above, if merchandise is shipped into the
        European Union, you have the right to cancel or return your order
        within 14 days, for any reason and without justification. Your item
        must be in the same condition that you received it, unworn or
        unused, with tags, and in its original packaging.
      </p>

      <h2 className="font-display text-lg font-semibold text-ink">Refunds</h2>
      <p>
        We will notify you once we&rsquo;ve received and inspected your
        return, and let you know if the refund was approved. If approved,
        you&rsquo;ll be automatically refunded on your original payment
        method within 10 business days.
      </p>
    </LegalPage>
  );
}
