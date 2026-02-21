import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export interface PageFrontmatter {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  author?: string;
  publishedAt?: string;
  lastModified?: string;
  category?: string;
  url?: string;
  scraped_at?: string;
  [key: string]: unknown;
}

/** Extract first ~160 chars of plain text from markdown for description fallback */
function extractDescriptionFromContent(content: string, maxLen = 160): string {
  const plain = content
    .replace(/^#+\s+/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/[*_`#]/g, "")
    .replace(/\n+/g, " ")
    .trim();
  return plain.length > maxLen ? plain.slice(0, maxLen - 3) + "..." : plain;
}

export async function getPageContent(locale: string, slug: string) {
  const directPath = path.join(contentDir, locale, `${slug}.md`);
  let fullPath = directPath;

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(contentDir, locale, slug, "index.md");
  }

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Content not found for ${slug} in locale ${locale}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as PageFrontmatter;

  if (!frontmatter.description && content) {
    frontmatter.description = extractDescriptionFromContent(content);
  }

  if (frontmatter.keywords && typeof frontmatter.keywords === "string") {
    frontmatter.keywords = (frontmatter.keywords as string)
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
  }

  return {
    frontmatter,
    content,
  };
}

/** List all content slugs for a locale (for sitemap) */
export function getAllContentSlugs(locale: string): string[] {
  const localeDir = path.join(contentDir, locale);
  if (!fs.existsSync(localeDir)) return [];

  return fs
    .readdirSync(localeDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
