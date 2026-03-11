const fs = require('fs')
const path = require('path')

const pagesDir = 'src/components/pages'
const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.tsx'))

files.forEach((file) => {
  const filePath = path.join(pagesDir, file)
  let content = fs.readFileSync(filePath, 'utf8')
  let original = content

  // Fix borders
  content = content.replace(/border-white\/5/g, 'border-sp-border-dark')
  content = content.replace(/border-white\/10/g, 'border-sp-border-dark')

  // Replace bg-black/60 inside those specific cards (they are inside a dark section)
  // "bg-black/60 transition-colors duration-500 group-hover:bg-black/50" -> "bg-sp-surface-elevated/80 transition-colors duration-500 group-hover:bg-sp-surface-elevated"
  // Actually, wait, these are overlays on graphics. Let's make it simpler:
  content = content.replace(/bg-black\/60/g, 'bg-sp-bg-dark/60')
  content = content.replace(/group-hover:bg-black\/50/g, 'group-hover:bg-sp-bg-dark/40')

  if (content !== original) {
    fs.writeFileSync(filePath, content)
    console.log(`Updated ${file}`)
  }
})
