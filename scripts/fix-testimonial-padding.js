const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/pages',
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Cleanup tight mobile paddings for testimonials
  content = content.replace(/rounded-\[2rem\] border bg-white p-12/g, 'rounded-3xl border bg-white p-8 md:p-10 lg:p-12');
  
  // Specifically fix any overlapping/redundant padding rules we just created
  content = content.replace(/mb-8 flex gap-1/g, 'mb-6 md:mb-8 flex gap-1');

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
