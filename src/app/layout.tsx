import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themushoffee.com.au"),
  title: {
    default: "The Mushoffee | A Coffee Alternative",
    template: "%s | The Mushoffee",
  },
  description:
    "Mushoffee is a coffee alternative packed with functional mushrooms and nootropics — Lion's Mane, Chaga, Cordyceps, Reishi and Turkey Tail — for sharper focus, better mood and sustained energy without the crash.",
  openGraph: {
    title: "The Mushoffee | A Coffee Alternative",
    description:
      "Clear, calm focus without the crash. Functional mushrooms + adaptogens, no jitters, no crash.",
    url: "https://themushoffee.com.au",
    siteName: "The Mushoffee",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
