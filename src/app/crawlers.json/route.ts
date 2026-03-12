import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";

/**
 * /crawlers.json - Cloudflare "always free to crawl" path.
 * Opt-in manifest for LLM crawlers. Points to our structured content endpoints.
 */
export function GET() {
  const manifest = {
    crawl: `${SITE_URL}/crawl`,
    llms: `${SITE_URL}/llms.txt`,
    sitemap: `${SITE_URL}/sitemap.xml`,
    robots: `${SITE_URL}/robots.txt`,
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
