import { MetadataRoute } from "next";
import { branches } from "@/lib/branches";

const SITE_URL = "https://www.asbfashion.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static routes
  const routes = ["", "/about", "/branches", "/contact"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic branch routes generated safely from branch names
  const branchRoutes = branches.map((branch) => ({
    url: `${SITE_URL}/branches/${encodeURIComponent(
      branch.name.toLowerCase().trim().replace(/\s+/g, "-")
    )}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...branchRoutes];
}