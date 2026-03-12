#!/usr/bin/env node
/**
 * Cloudflare Browser Rendering /crawl integration.
 * Crawls solutionplus.io via Cloudflare API and saves markdown for LLM consumption.
 *
 * Requires: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN (Browser Rendering - Edit)
 * Optional: CRAWL_URL (default: NEXT_PUBLIC_SITE_URL or https://solutionplus.io)
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "crawl");

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CRAWL_URL =
  process.env.CRAWL_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://solutionplus.io";

const BASE = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/browser-rendering/crawl`;
const POLL_INTERVAL_MS = 5000;
const MAX_POLL_ATTEMPTS = 120; // ~10 min

function slugFromUrl(url) {
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/$/, "");
    const parts = path.split("/").filter(Boolean);
    if (parts[0] === "de") parts.shift();
    return parts.join("/") || "index";
  } catch {
    return "unknown";
  }
}

function localeFromUrl(url) {
  return url.includes("/de/") ? "de" : "en";
}

async function postCrawl() {
  const res = await fetch(BASE, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: CRAWL_URL,
      limit: 200,
      depth: 5,
      formats: ["markdown"],
      render: false,
      source: "all",
      options: {
        includeExternalLinks: false,
        includeSubdomains: false,
      },
    }),
  });

  const data = await res.json();
  if (!data.success || !data.result) {
    throw new Error(
      `Crawl init failed: ${JSON.stringify(data.errors || data)}`
    );
  }
  return data.result;
}

async function getCrawlStatus(jobId, opts = {}) {
  const params = new URLSearchParams(opts).toString();
  const url = params ? `${BASE}/${jobId}?${params}` : `${BASE}/${jobId}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
  const data = await res.json();
  if (!data.success) {
    throw new Error(`Crawl status failed: ${JSON.stringify(data.errors)}`);
  }
  return data.result;
}

async function waitForCompletion(jobId) {
  for (let i = 0; i < MAX_POLL_ATTEMPTS; i++) {
    const result = await getCrawlStatus(jobId, { limit: 1 });
    const status = result.status;

    if (status === "completed") {
      return result;
    }
    if (
      status === "errored" ||
      status === "cancelled_by_user" ||
      status === "cancelled_due_to_limits" ||
      status === "cancelled_due_to_timeout"
    ) {
      throw new Error(`Crawl job ${status}: ${jobId}`);
    }

    process.stderr.write(
      `  [${i + 1}/${MAX_POLL_ATTEMPTS}] status=${status} (poll in ${POLL_INTERVAL_MS / 1000}s)\n`
    );
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
  }
  throw new Error("Crawl job did not complete within timeout");
}

async function fetchAllRecords(jobId) {
  const all = [];
  let cursor;
  do {
    const opts = {};
    if (cursor !== undefined) opts.cursor = cursor;
    else opts.limit = 100;
    const result = await getCrawlStatus(jobId, opts);
    const records = result.records || [];
    all.push(...records);
    cursor = result.cursor;
  } while (cursor !== undefined);
  return all;
}

function saveResults(records) {
  mkdirSync(OUT_DIR, { recursive: true });

  const pages = [];
  for (const r of records) {
    if (r.status !== "completed" || !r.markdown) continue;

    const url = r.url || r.metadata?.url || "";
    const title = r.metadata?.title || "";
    const locale = localeFromUrl(url);
    const slug = slugFromUrl(url);

    pages.push({
      url,
      title,
      slug,
      locale,
      markdown: r.markdown,
    });

    const pageDir = join(OUT_DIR, "pages", locale);
    mkdirSync(pageDir, { recursive: true });
    const ext = slug.includes("/") ? slug.replace(/\//g, "-") : slug;
    const mdPath = join(pageDir, `${ext || "index"}.md`);
    const header = `<!-- url: ${url} | title: ${title} -->\n\n`;
    writeFileSync(mdPath, header + r.markdown, "utf8");
  }

  const index = {
    crawledAt: new Date().toISOString(),
    sourceUrl: CRAWL_URL,
    totalPages: pages.length,
    pages: pages.map((p) => ({
      url: p.url,
      title: p.title,
      slug: p.slug,
      locale: p.locale,
    })),
  };
  writeFileSync(
    join(OUT_DIR, "site-index.json"),
    JSON.stringify(index, null, 2),
    "utf8"
  );

  const content = {
    crawledAt: index.crawledAt,
    sourceUrl: CRAWL_URL,
    pages,
  };
  writeFileSync(
    join(OUT_DIR, "content.json"),
    JSON.stringify(content, null, 2),
    "utf8"
  );

  return pages.length;
}

async function main() {
  if (!ACCOUNT_ID || !API_TOKEN) {
    console.error(
      "Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN. Create a token with Browser Rendering - Edit."
    );
    process.exit(1);
  }

  console.error(`Crawling ${CRAWL_URL} via Cloudflare Browser Rendering...`);
  const jobId = await postCrawl();
  console.error(`Job ID: ${jobId}`);

  console.error("Waiting for completion...");
  await waitForCompletion(jobId);

  console.error("Fetching all records...");
  const records = await fetchAllRecords(jobId);
  const count = saveResults(records);

  console.error(`Done. Saved ${count} pages to ${OUT_DIR}`);
  console.log(jobId);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
