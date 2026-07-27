"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("You're on the list! We'll email you the moment we're back.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="notify" className="bg-ink scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-coffee-dark to-ink ring-1 ring-white/10 p-6 sm:p-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          <Image
            src="/images/product-bag-single.png"
            alt="The Mushoffee, 30 servings"
            width={280}
            height={280}
            className="w-36 sm:w-44 md:w-56 mx-auto drop-shadow-2xl"
          />

          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 text-cream text-xs font-semibold px-3 py-1.5 mb-4">
              Currently Out of Stock
            </span>
            <h2 className="font-display text-balance text-2xl sm:text-3xl font-medium text-cream">
              The Mushoffee — 30 Servings
            </h2>
            <p className="mt-3 text-sm sm:text-base text-cream/60 leading-relaxed max-w-lg">
              We&rsquo;re between batches while we source the next round of
              high-quality, Di-Tao grown mushrooms. Leave your email and
              we&rsquo;ll let you know the moment it&rsquo;s ready to ship —
              no payment, no obligation.
            </p>

            {status === "success" ? (
              <p className="mt-6 text-sm font-medium text-gold">{message}</p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <label htmlFor="notify-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="notify-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-full bg-white/95 px-5 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-purple"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-full bg-purple px-6 py-3 text-sm font-semibold text-white hover:bg-purple-dark transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Joining…" : "Notify Me"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-400">{message}</p>
            )}
            <p className="mt-4 text-xs text-cream/40">
              We&rsquo;ll only email you about restocks. No spam, unsubscribe
              anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
