# The Mushoffee — website

A from-scratch rebuild of [themushoffee.com.au](https://themushoffee.com.au), migrated off Shopify onto a lightweight, self-hosted Next.js site. Since the store isn't currently taking orders, there's no cart/checkout/payment processing — instead, the "Currently Out of Stock" product section collects emails for a restock waitlist.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4**
- Deployed on **Vercel**
- No database — waitlist/contact submissions are emailed via **Resend** (optional; the site works and builds fine without it, it just won't deliver notifications until configured)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Configuring the waitlist / contact form emails

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

- `RESEND_API_KEY` — free at [resend.com](https://resend.com). Create an API key.
- `NOTIFY_EMAIL_TO` — the inbox that should receive waitlist signups and contact messages (e.g. `support@themushoffee.com`).
- `NOTIFY_EMAIL_FROM` — optional. Defaults to Resend's shared test sender. For production, verify your own domain in Resend and use something like `Mushoffee <hello@themushoffee.com.au>`.

Without these env vars set, the forms still work (no errors shown to visitors) but submissions are only written to a local `.data/waitlist.log` file for development — nothing gets emailed. Set the env vars in Vercel's project settings before going live.

## Deploying to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Import the repo in [vercel.com/new](https://vercel.com/new) — no build config needed, Vercel auto-detects Next.js.
3. Add the environment variables above under **Project Settings → Environment Variables**.
4. Once deployed, point `themushoffee.com.au`'s DNS at Vercel (**Project Settings → Domains**) when you're ready to cut over from Shopify.

## Content & structure

- `src/app/page.tsx` — homepage, assembled from section components in `src/components/home/`.
- `src/app/policies/*` — Refund, Privacy, Terms and Shipping policy pages.
- `src/app/contact` — simple contact form.
- `src/app/api/notify` and `src/app/api/contact` — serverless routes that validate input and (optionally) email via Resend.
- `public/images/` — real product photography, ingredient photos and icons pulled from the original site's asset CDN.

## Bringing the shop back online later

When you're ready to sell again, the natural next step is to swap the `NotifyForm` component's static "out of stock" card for real checkout — either by adding Shopify back as a **headless backend** (Storefront API) so you keep your existing payment/Afterpay/inventory setup, or by wiring up Stripe directly. Everything else on the site (content, design, SEO) carries over unchanged.
