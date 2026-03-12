import { NextResponse } from "next/server";
import { buildCrawlPayload } from "@/lib/crawl";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solutionplus.io";

/**
 * /crawl - Open opt-in endpoint for LLM crawlers.
 * Serves structured site content. No Cloudflare API or credentials required.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") ?? "json";

  const content = await buildCrawlPayload();

  if (format === "markdown") {
    const md = content.pages
      .map(
        (p) =>
          `# ${p.title}\nURL: ${p.url}\n${p.description ? `\n${p.description}\n` : ""}\n${p.markdown || ""}\n\n---\n`
      )
      .join("\n");
    return new NextResponse(
      `# SolutionPlus – LLM-Optimized Content\nSource: ${content.sourceUrl}\nGenerated: ${content.generatedAt}\n\n${md}`,
      {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
      }
    );
  }

  if (format === "index") {
    return NextResponse.json(
      {
        sourceUrl: content.sourceUrl,
        generatedAt: content.generatedAt,
        totalPages: content.totalPages,
        pages: content.pages.map((p) => ({
          url: p.url,
          title: p.title,
          slug: p.slug,
          locale: p.locale,
          description: p.description,
        })),
      },
      {
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
      }
    );
  }

  return NextResponse.json(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
