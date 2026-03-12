import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PageFrontmatter } from "@/lib/markdown";
import { SLUG_LOCALE_MAP } from "@/lib/seo";
import { caseStudies } from "@/data/case-studies";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";
const contentDir = path.join(process.cwd(), "src/content");

/** Build all sitemap slugs from SLUG_LOCALE_MAP + case study data (single source of truth) */
function getSitemapSlugs(): { en: string[]; de: string[] } {
  const enSlugs: string[] = [];
  const deSlugs: string[] = [];

  for (const [key, mapping] of Object.entries(SLUG_LOCALE_MAP)) {
    if (key.startsWith("case-studies/")) continue;
    if (mapping.en) enSlugs.push(mapping.en);
    if (mapping.de) deSlugs.push(mapping.de);
  }

  for (const c of caseStudies.en) {
    enSlugs.push(`case-studies/${c.slug}`);
  }
  for (const c of caseStudies.de) {
    deSlugs.push(`fallstudien/${c.slug}`);
  }

  return {
    en: ["", ...new Set(enSlugs)],
    de: ["", ...new Set(deSlugs)],
  };
}

const { en: EN_SLUGS, de: DE_SLUGS } = getSitemapSlugs();

function getLastModified(locale: string, slug: string): Date {
  if (!fs.existsSync(contentDir)) return new Date();

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
  const main = [
    "about-team",
    "ueber-solutionplus",
    "contact-us",
    "kontakt-solutionplus",
    "services",
    "leistungen",
  ];
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

function getAlternateSlug(slug: string, fromLocale: "en" | "de"): string | undefined {
  const key = slug || "index";
  let mapping = SLUG_LOCALE_MAP[key];
  if (!mapping) {
    const entry = Object.entries(SLUG_LOCALE_MAP).find(
      ([_, v]) => v.en === slug || v.de === slug
    );
    mapping = entry?.[1];
  }
  if (!mapping) return undefined;
  return fromLocale === "en" ? mapping.de : mapping.en;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  for (const slug of EN_SLUGS) {
    const urlPath = slug ? `/en/${slug}` : "/en";
    const deSlug = getAlternateSlug(slug || "index", "en");
    const dePath = deSlug ? `/de/${deSlug}` : "/de";
    sitemap.push({
      url: `${baseUrl}${urlPath}`,
      lastModified: getLastModified("en", slug),
      changeFrequency: getChangeFrequency(slug),
      priority: getPriority(slug),
      alternates: deSlug !== undefined
        ? {
          languages: {
            "en-US": `${baseUrl}${urlPath}`,
            "de-DE": `${baseUrl}${dePath}`,
            "x-default": `${baseUrl}${urlPath}`,
          },
        }
        : undefined,
    });
  }

  for (const slug of DE_SLUGS) {
    const urlPath = slug ? `/de/${slug}` : "/de";
    const enSlug = getAlternateSlug(slug || "index", "de");
    const enPath = enSlug ? `/en/${enSlug}` : "/en";
    sitemap.push({
      url: `${baseUrl}${urlPath}`,
      lastModified: getLastModified("de", slug),
      changeFrequency: getChangeFrequency(slug),
      priority: getPriority(slug),
      alternates: enSlug !== undefined
        ? {
          languages: {
            "en-US": `${baseUrl}${enPath}`,
            "de-DE": `${baseUrl}${urlPath}`,
            "x-default": `${baseUrl}${enPath}`,
          },
        }
        : undefined,
    });
  }

  return sitemap;
}
