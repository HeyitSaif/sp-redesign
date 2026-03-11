const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/pages',
  'src/components/sections'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Cleanup tight mobile paddings for cards across the whole project
  content = content.replace(/\bp-6\b/g, 'p-5 md:p-6');
  
  // Specifically fix any overlapping/redundant padding rules we just created
  content = content.replace(/p-5 md:p-5 md:p-6/g, 'p-5 md:p-6');
  content = content.replace(/p-5 md:p-6 md:p-8/g, 'p-5 md:p-8');
  content = content.replace(/p-5 md:p-6 md:p-10/g, 'p-5 md:p-10');

  // Same for specific gaps
  content = content.replace(/\bgap-6\b/g, 'gap-5 md:gap-6');
  content = content.replace(/gap-5 md:gap-5 md:gap-6/g, 'gap-5 md:gap-6');
  content = content.replace(/gap-5 md:gap-6 md:gap-8/g, 'gap-5 md:gap-8');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Cleaned Y:', filePath);
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
