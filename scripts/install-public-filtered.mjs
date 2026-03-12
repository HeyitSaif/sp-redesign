#!/usr/bin/env node
/**
 * Copies only used images from public/ to .next/standalone/public/.
 * Run after `next build` when using output: "standalone".
 * Keeps build output small by excluding unused images.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { USED_IMAGES } from './used-images.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')
const STANDALONE_PUBLIC = path.join(ROOT, '.next', 'standalone', 'public')

if (!fs.existsSync(path.join(ROOT, '.next', 'standalone'))) {
  console.warn('install-public-filtered: .next/standalone not found (run `next build` first). Skipping.')
  process.exit(0)
}

fs.mkdirSync(STANDALONE_PUBLIC, { recursive: true })

let copied = 0
for (const rel of USED_IMAGES) {
  const src = path.join(PUBLIC, rel)
  const dest = path.join(STANDALONE_PUBLIC, rel)
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(src, dest)
    copied++
  } else {
    console.warn('install-public-filtered: missing', rel)
  }
}

console.log('install-public-filtered: copied', copied, 'files to .next/standalone/public/')
