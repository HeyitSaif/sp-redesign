import { PAGE_KEYWORDS } from "@/data/keywords";
import { SLUG_LOCALE_MAP } from "@/lib/seo";
import type { KeywordData } from "@/types/seo";

/** Get canonical slug for keyword lookup */
function getCanonicalSlug(slug: string): string {
  const entry = Object.entries(SLUG_LOCALE_MAP).find(
    ([_, v]) => v.en === slug || v.de === slug
  );
  return entry ? entry[0] : slug;
}

/** Extract simple keywords from markdown content (headings, first paragraph) */
export function extractKeywordsFromContent(
  content: string,
  maxKeywords = 5
): string[] {
  const words = content
    .replace(/^#+\s+/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/[*_`#]/g, " ")
    .split(/\s+/)
    .map((w) => w.toLowerCase().replace(/[^a-z0-9-]/g, ""))
    .filter((w) => w.length > 3);

  const stopWords = new Set([
    "that", "this", "with", "from", "have", "been", "were", "their",
    "what", "when", "where", "which", "while", "would", "could",
    "about", "into", "more", "other", "some", "than", "them", "then",
    "your", "will", "just", "also", "only", "very", "such", "each",
  ]);

  const freq: Record<string, number> = {};
  for (const w of words) {
    if (stopWords.has(w)) continue;
    freq[w] = (freq[w] ?? 0) + 1;
  }

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([k]) => k);
}

/** Get keywords for a page: predefined + optional content extraction */
export function getKeywordsForPage(
  slug: string,
  contentKeywords?: string[]
): KeywordData {
  const canonical = getCanonicalSlug(slug);
  const predefined = PAGE_KEYWORDS[canonical] ?? {
    primary: [slug],
    secondary: [],
  };

  const primary = [...predefined.primary];
  const secondary = [
    ...predefined.secondary,
    ...(contentKeywords ?? []).slice(0, 3),
  ];

  return {
    primary,
    secondary: [...new Set(secondary)],
  };
}
