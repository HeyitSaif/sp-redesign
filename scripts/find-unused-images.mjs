#!/usr/bin/env node
/**
 * Finds images in public/ that are not referenced in the codebase.
 * Run: node scripts/find-unused-images.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')
const SRC = path.join(ROOT, 'src')

const IMAGE_EXT = /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i

const USED_IMAGES = new Set([
  'logo.png',
  'images/1-1-uai-848x1060.png',
  'images/2-1-uai-848x1060.png',
  'images/3-1-uai-848x1060.png',
  'images/Startups-building-their-first-product-1.png',
  'images/Scaling-tech-teams-that-need-reliability-1.png',
  'images/Companies-expanding-across-borders-2.png',
  'images/Calculate-you-MVP-investment-14-150x150.jpg',
  'images/1-150x150.png',
  'images/Careers-13-scaled-uai-1444x1444.jpg',
  'images/What-you-get-with-us-scaled.jpg',
  'images/Why-this-works-14-scaled-uai-2560x1706.jpg',
  'images/What-you-get-with-us-14-scaled-uai-2560x1706.jpg',
  'images/What-youll-ge-t-14-scaled-uai-2560x1706.jpg',
  'images/old-code-14-1-scaled-uai-2560x1706.jpg',
  'images/What-youll-ge-t-14-1-scaled-uai-2560x1706.jpg',
  'images/Scale-ups-1.png',
  'images/Start-ups-1.png',
  'images/Entrepreneur-with-an-Idea-1.png',
  'images/When-speed-matters-and-teams-are-stretched-getting-an-MVP-live-can-feel-impossible._E2_80_A8-12-scaled-uai-2560x1706.jpg',
  'images/Calculate-you-MVP-investment-14-uai-1460x973.jpg',
  'images/Calculate-your-team-setup-14-1-scaled-uai-2560x1706.jpg',
  'images/When-your-roadmap-moves-faster-than-hiring-can-keep-upt-load-scaled-uai-2560x1706.jpg',
  'images/What-youll-get-14-uai-1460x973.jpg',
  'images/Why-Scaleups-Work-With-Us-14-uai-1460x973.jpg',
  'images/3-Step-Visual-JPEG-03-scaled.jpg',
  'images/We-combine-German-discipline-with-top-tier-Pakistani-engineering-14-scaled.jpg',
  'images/Gradient-28-scaled.jpg',
  'images/FAVICON-01-120x120.png',
  'images/FAVICON-01-300x300.png',
  'images/Hero-Img-1-2-scaled.jpg',
  'images/Hero-Img-12-scaled.jpg',
  'images/Hero-Img-3-1-scaled.jpg',
  'images/Work-in-a-respectful-culture.-Stress-free-supportive-and-built-on-trust.png',
  'images/how-we-hire-scaled.jpg',
])

function walk(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const rel = path.join(base, e.name)
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      files.push(...walk(full, rel))
    } else if (IMAGE_EXT.test(e.name)) {
      files.push(rel.replace(/\\/g, '/'))
    }
  }
  return files
}

const allImages = walk(PUBLIC)
const unused = allImages.filter((f) => !USED_IMAGES.has(f))
const missing = [...USED_IMAGES].filter((f) => {
  const p = path.join(PUBLIC, f)
  return !fs.existsSync(p)
})

console.log('=== UNUSED IMAGES (safe to delete) ===')
unused.forEach((f) => console.log(f))
console.log('\nTotal unused:', unused.length)

if (missing.length) {
  console.log('\n=== REFERENCED BUT MISSING ===')
  missing.forEach((f) => console.log(f))
}

// Delete unused (pass --delete to actually remove)
if (process.argv.includes('--delete')) {
  let deleted = 0
  for (const f of unused) {
    const p = path.join(PUBLIC, f)
    if (fs.existsSync(p)) {
      fs.unlinkSync(p)
      deleted++
      console.log('Deleted:', f)
    }
  }
  console.log('\nDeleted', deleted, 'files')
}
