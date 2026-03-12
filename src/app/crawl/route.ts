import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CRAWL_DIR = path.join(process.cwd(), "public", "crawl");
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") ?? "json";

  const contentPath = path.join(CRAWL_DIR, "content.json");
  const indexPath = path.join(CRAWL_DIR, "site-index.json");

  if (!fs.existsSync(contentPath)) {
    return NextResponse.json(
      {
        error: "Crawl data not yet available",
        hint: "Run `npm run crawl` to populate. Requires CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.",
        fallback: `${SITE_URL}/llms.txt`,
      },
      { status: 503 }
    );
  }

  const content = JSON.parse(
    fs.readFileSync(contentPath, "utf8")
  ) as CrawlContent;

  if (format === "markdown") {
    const md = content.pages
      .map(
        (p) =>
          `# ${p.title}\nURL: ${p.url}\n\n${p.markdown}\n\n---\n`
      )
      .join("\n");
    return new NextResponse(
      `# SolutionPlus – Crawled Content\nSource: ${content.sourceUrl}\nCrawled: ${content.crawledAt}\n\n${md}`,
      {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
      }
    );
  }

  if (format === "index") {
    const index = fs.existsSync(indexPath)
      ? JSON.parse(fs.readFileSync(indexPath, "utf8"))
      : {
          crawledAt: content.crawledAt,
          sourceUrl: content.sourceUrl,
          totalPages: content.pages.length,
          pages: content.pages.map((p) => ({
            url: p.url,
            title: p.title,
            slug: p.slug,
            locale: p.locale,
          })),
        };
    return NextResponse.json(index, {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  }

  return NextResponse.json(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

interface CrawlContent {
  crawledAt: string;
  sourceUrl: string;
  pages: Array<{
    url: string;
    title: string;
    slug: string;
    locale: string;
    markdown: string;
  }>;
}
