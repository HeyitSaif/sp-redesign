import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PageFrontmatter } from "@/lib/markdown";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";
const contentDir = path.join(process.cwd(), "src/content");

const EN_SLUGS = [
  "",
  "about-team",
  "dedicated-delivery-teams",
  "mvp-sprint-package",
  "product-modernization",
  "entrepreneur-with-an-idea",
  "careers",
  "contact-us",
  "scale-up",
  "startup",
  "terms-and-conditions",
  "privacy-policy",
];

const DE_SLUGS = [
  "",
  "ueber-solutionplus",
  "dedizierte-teams",
  "mvp-sprint-paket",
  "software-modernisierung",
  "gruender-idee-startup-partner",
  "karriere",
  "kontakt-solutionplus",
  "scaleups",
  "startups",
  "allgemeine-geschaeftsbedingungen-agb",
  "datenschutzerklaerung",
];

function getLastModified(locale: string, slug: string): Date {
  if (!slug) {
    const indexPath = path.join(contentDir, locale, "index.md");
    if (fs.existsSync(indexPath)) {
      const stat = fs.statSync(indexPath);
      const { data } = matter(fs.readFileSync(indexPath, "utf8"));
      const fm = data as PageFrontmatter;
      if (fm.publishedAt || fm.lastModified) {
        const d = new Date((fm.publishedAt || fm.lastModified) as string);
        if (!isNaN(d.getTime())) return d;
      }
      return stat.mtime;
    }
    return new Date();
  }
  const filePath = path.join(contentDir, locale, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    const { data } = matter(fs.readFileSync(filePath, "utf8"));
    const fm = data as PageFrontmatter;
    if (fm.publishedAt || fm.lastModified) {
      const d = new Date((fm.publishedAt || fm.lastModified) as string);
      if (!isNaN(d.getTime())) return d;
    }
    return stat.mtime;
  }
  return new Date();
}

function getPriority(slug: string): number {
  if (!slug) return 1;
  const main = ["about-team", "ueber-solutionplus", "contact-us", "kontakt-solutionplus"];
  if (main.some((s) => slug === s)) return 0.9;
  const legal = ["terms-and-conditions", "privacy-policy", "allgemeine-geschaeftsbedingungen-agb", "datenschutzerklaerung"];
  if (legal.some((s) => slug === s)) return 0.5;
  return 0.8;
}

function getChangeFrequency(slug: string): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" {
  if (!slug) return "weekly";
  const legal = ["terms-and-conditions", "privacy-policy", "allgemeine-geschaeftsbedingungen-agb", "datenschutzerklaerung"];
  if (legal.some((s) => slug === s)) return "yearly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  for (const slug of EN_SLUGS) {
    const urlPath = slug ? `/en/${slug}` : "/en";
    sitemap.push({
      url: `${baseUrl}${urlPath}`,
      lastModified: getLastModified("en", slug),
      changeFrequency: getChangeFrequency(slug),
      priority: getPriority(slug),
    });
  }

  for (const slug of DE_SLUGS) {
    const urlPath = slug ? `/de/${slug}` : "/de";
    sitemap.push({
      url: `${baseUrl}${urlPath}`,
      lastModified: getLastModified("de", slug),
      changeFrequency: getChangeFrequency(slug),
      priority: getPriority(slug),
    });
  }

  return sitemap;
}
