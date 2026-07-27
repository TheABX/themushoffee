import type { MetadataRoute } from "next";

const routes = [
  "",
  "/contact",
  "/policies/refund-policy",
  "/policies/shipping-policy",
  "/policies/privacy-policy",
  "/policies/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://themushoffee.com.au";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
