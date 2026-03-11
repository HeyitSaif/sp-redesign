#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { dirname } from 'path';

const AGENT_TOOLS = '/Users/mac/.cursor/projects/Users-mac-Documents-Work-SP-sp-website-sp-redesign/agent-tools';
const OUT_DIR = '/Users/mac/Documents/Work/SP/sp-website/sp-redesign/docs/scraped';

function slugFromUrl(url) {
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/$/, '');
    const parts = path.split('/').filter(Boolean);
    if (parts[0] === 'de') parts.shift();
    return parts.join('/') || 'index';
  } catch {
    return 'unknown';
  }
}

function localeFromUrl(url) {
  return url.includes('/de/') ? 'de' : 'en';
}

function processFile(p) {
  try {
    const raw = readFileSync(p, 'utf8');
    const data = JSON.parse(raw);
    if (!data.metadata || !data.html) return null;
    const url = data.metadata?.sourceURL || data.metadata?.url || '';
    if (!url || !url.includes('solutionplus.io')) return null;
    const scrapedAt = data.metadata?.cachedAt || new Date().toISOString();
    const locale = localeFromUrl(url);
    const slug = slugFromUrl(url);
    const header = `<!--
source_url: ${url}
scraped_at: ${scrapedAt}
tool: firecrawl
-->
`;
    const outPath = `${OUT_DIR}/${locale}/${slug}.html`;
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, header + data.html, 'utf8');
    return { locale, slug };
  } catch {
    return null;
  }
}

function processData(data) {
  if (!data.metadata || !data.html) return null;
  const url = data.metadata?.sourceURL || data.metadata?.url || '';
  if (!url || !url.includes('solutionplus.io')) return null;
  const scrapedAt = data.metadata?.cachedAt || new Date().toISOString();
  const locale = localeFromUrl(url);
  const slug = slugFromUrl(url);
  const header = `<!--
source_url: ${url}
scraped_at: ${scrapedAt}
tool: firecrawl
-->
`;
  const outPath = `${OUT_DIR}/${locale}/${slug}.html`;
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, header + data.html, 'utf8');
  return { locale, slug };
}

const inputFiles = process.argv.slice(2);
if (inputFiles.length) {
  for (const p of inputFiles) {
    try {
      const raw = readFileSync(p, 'utf8');
      const r = processData(JSON.parse(raw));
      if (r) console.log('Wrote', `${r.locale}/${r.slug}.html`);
    } catch (e) {
      console.error('Skip', p, e.message);
    }
  }
} else {
  const files = readdirSync(AGENT_TOOLS).filter((f) => f.endsWith('.txt'));
  for (const f of files) {
    const r = processFile(`${AGENT_TOOLS}/${f}`);
    if (r) console.log('Wrote', `${r.locale}/${r.slug}.html`);
  }
}
