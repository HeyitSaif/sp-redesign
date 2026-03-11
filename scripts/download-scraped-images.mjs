#!/usr/bin/env node
/**
 * Downloads all images referenced in docs/scraped content.
 * Extracts URLs from HTML, MD, TXT, and .aspx files.
 * Organizes images by folder: docs/images/en/, docs/images/de/, docs/images/root/
 * Creates manifest.json per folder listing all images.
 *
 * Run from project root: node scripts/download-scraped-images.mjs
 * Options: --skip-existing  Skip download if file already exists in any target folder
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SCRAPED_DIR = path.join(ROOT, 'docs', 'scraped')
const IMAGES_DIR = path.join(ROOT, 'docs', 'images')

const IMAGE_EXT = /\.(jpg|jpeg|png|gif|webp|svg)(?:\?|$)/i
const SOLUTIONPLUS_ORIGIN = 'https://solutionplus.io'

// Patterns to extract image URLs (only solutionplus.io uploads, image extensions)
const URL_PATTERNS = [
  /src=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^"']*)?)["']/gi,
  /url\(["']?([^"')]+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^"')]*)?)["']?\)/gi,
  /(?:data-background-image|data-guid|data-mobile-background-image|content|contentUrl)["']?\s*[:=]\s*["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^"']*)?)["']/gi,
  /background-image:\s*url\(["']?([^"')]+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^"')]*)?)["']?\)/gi,
  /!\[[^\]]*\]\(([^)]+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^)]*)?)\)/gi,
  /href=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^"']*)?)["']/gi,
  /(?:og:image|twitter:image)[^>]+content=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^"']*)?)["']/gi,
  /(?:rel=["'](?:icon|apple-touch-icon)["'][^>]+href|content)=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg)(?:\?[^"']*)?)["']/gi,
]

function extractImageUrls(text) {
  const urls = new Set()
  for (const re of URL_PATTERNS) {
    let m
    re.lastIndex = 0
    while ((m = re.exec(text)) !== null) {
      let url = m[1].trim()
      if (url.startsWith('//')) url = 'https:' + url
      if (url.startsWith('/')) url = SOLUTIONPLUS_ORIGIN + url
      if (
        url.startsWith(SOLUTIONPLUS_ORIGIN) &&
        IMAGE_EXT.test(url) &&
        !url.includes('/plugins/') &&
        !url.includes('/themes/')
      ) {
        urls.add(url.split('?')[0])
      }
    }
  }
  return [...urls]
}

function getFolderFromFilePath(filePath) {
  const rel = path.relative(SCRAPED_DIR, filePath)
  if (rel.startsWith('en' + path.sep) || rel === 'en') return 'en'
  if (rel.startsWith('de' + path.sep) || rel === 'de') return 'de'
  return 'root'
}

function sanitizeFilename(url) {
  const u = new URL(url)
  const base = path.basename(u.pathname)
  return base.replace(/[^a-zA-Z0-9._-]/g, '_')
}

async function downloadImage(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'SolutionPlus-Image-Downloader/1.0' },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`)
  return Buffer.from(await res.arrayBuffer())
}

async function main() {
  const skipExisting = process.argv.includes('--skip-existing')
  const folderToUrls = { en: new Set(), de: new Set(), root: new Set() }
  const extensions = ['.html', '.md', '.txt', '.aspx']

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) {
        walk(full)
      } else if (extensions.some((ext) => e.name.toLowerCase().endsWith(ext))) {
        const content = fs.readFileSync(full, 'utf8')
        const urls = extractImageUrls(content)
        const folder = getFolderFromFilePath(full)
        for (const u of urls) folderToUrls[folder].add(u)
      }
    }
  }

  walk(SCRAPED_DIR)

  const allUrls = new Map()
  for (const [folder, urls] of Object.entries(folderToUrls)) {
    for (const u of urls) {
      if (!allUrls.has(u)) allUrls.set(u, [])
      allUrls.get(u).push(folder)
    }
  }

  fs.mkdirSync(path.join(IMAGES_DIR, 'en'), { recursive: true })
  fs.mkdirSync(path.join(IMAGES_DIR, 'de'), { recursive: true })
  fs.mkdirSync(path.join(IMAGES_DIR, 'root'), { recursive: true })

  const manifest = { en: [], de: [], root: [] }
  const downloaded = new Map()
  const urlList = [...allUrls.keys()]
  let ok = 0
  let fail = 0

  for (let i = 0; i < urlList.length; i++) {
    const url = urlList[i]
    const folders = allUrls.get(url)
    const filename = sanitizeFilename(url)

    try {
      const existsInFolder = folders.some((f) => fs.existsSync(path.join(IMAGES_DIR, f, filename)))
      if (skipExisting && existsInFolder) {
        for (const folder of folders) {
          const entry = { url, filename }
          if (!manifest[folder].some((e) => e.filename === filename)) {
            manifest[folder].push(entry)
          }
        }
        continue
      }

      let buf
      if (downloaded.has(url)) {
        buf = downloaded.get(url)
      } else {
        process.stdout.write(`[${i + 1}/${urlList.length}] ${filename} ... `)
        buf = await downloadImage(url)
        downloaded.set(url, buf)
        ok++
        console.log('OK')
      }

      for (const folder of folders) {
        const outPath = path.join(IMAGES_DIR, folder, filename)
        if (!fs.existsSync(outPath) || fs.statSync(outPath).size !== buf.length) {
          fs.writeFileSync(outPath, buf)
        }
        const entry = { url, filename }
        if (!manifest[folder].some((e) => e.filename === filename)) {
          manifest[folder].push(entry)
        }
      }
    } catch (err) {
      fail++
      console.error(`FAIL: ${err.message}`)
    }
  }

  for (const folder of ['en', 'de', 'root']) {
    const manifestPath = path.join(IMAGES_DIR, folder, 'manifest.json')
    fs.writeFileSync(manifestPath, JSON.stringify(manifest[folder], null, 2))
  }

  const summaryPath = path.join(IMAGES_DIR, 'manifest.json')
  fs.writeFileSync(
    summaryPath,
    JSON.stringify(
      {
        downloaded: ok,
        failed: fail,
        totalUrls: urlList.length,
        byFolder: {
          en: manifest.en.length,
          de: manifest.de.length,
          root: manifest.root.length,
        },
      },
      null,
      2
    )
  )

  console.log('\nDone.')
  console.log(`Downloaded: ${ok}, Failed: ${fail}`)
  console.log(
    `Images: en=${manifest.en.length}, de=${manifest.de.length}, root=${manifest.root.length}`
  )
  console.log(`Output: ${IMAGES_DIR}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
