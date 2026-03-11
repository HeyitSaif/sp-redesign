const fs = require('fs')
const path = require('path')

const directories = [
  'src/components/pages',
  'src/components/sections',
  'src/components/ui',
  'src/components/graphics',
]

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  let original = content

  // Border radius
  content = content.replace(/rounded-\[1\.75rem\]/g, 'rounded-2xl')
  content = content.replace(/rounded-\[2rem\]/g, 'rounded-2xl')
  content = content.replace(/rounded-\[2\.5rem\]/g, 'rounded-3xl')
  content = content.replace(/rounded-\[3rem\]/g, 'rounded-3xl')

  // Hover borders
  content = content.replace(/hover:border-sp-accent\/30/g, 'hover:border-sp-accent/40')
  content = content.replace(/hover:border-sp-accent\/50/g, 'hover:border-sp-accent/40')
  content = content.replace(/hover:border-black\/20/g, 'hover:border-black/10')

  // Blurs
  content = content.replace(/blur-\[80px\]/g, 'blur-[120px]')
  content = content.replace(/blur-\[100px\]/g, 'blur-[120px]')
  content = content.replace(/blur-\[200px\]/g, 'blur-[150px]')
  content = content.replace(/blur-3xl/g, 'blur-[120px]')

  // Opacities
  content = content.replace(/bg-sp-accent\/6\b/g, 'bg-sp-accent/10')
  content = content.replace(/bg-sp-accent\/8\b/g, 'bg-sp-accent/10')
  content = content.replace(/bg-sp-accent\/\[0\.07\]/g, 'bg-sp-accent/10')

  if (content !== original) {
    fs.writeFileSync(filePath, content)
    console.log('Updated:', filePath)
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath)
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath)
    }
  }
}

directories.forEach(walk)
