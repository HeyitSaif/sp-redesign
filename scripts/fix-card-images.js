const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/pages',
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Fix image/graphic placeholders inside cards to be more responsive on mobile
  content = content.replace(/h-32 w-full overflow-hidden rounded-2xl/g, 'h-32 w-full shrink-0 overflow-hidden rounded-xl md:h-40 md:rounded-2xl');
  content = content.replace(/aspect-\[16\/10\] min-h-\[200px\] w-full overflow-hidden rounded-2xl/g, 'aspect-[16/10] min-h-[160px] md:min-h-[200px] w-full shrink-0 overflow-hidden rounded-xl md:rounded-2xl');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Cleaned images Y:', filePath);
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

directories.forEach(walk);
