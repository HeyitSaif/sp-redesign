#!/usr/bin/env node
/**
 * Finds images in public/ that are not referenced in the codebase.
 * Run: node scripts/find-unused-images.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { USED_IMAGES } from './used-images.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')
const SRC = path.join(ROOT, 'src')

const IMAGE_EXT = /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i

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
const missing = Array.from(USED_IMAGES).filter((f) => {
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
