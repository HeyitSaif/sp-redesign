const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/pages',
  'src/components/sections',
  'src/app/[locale]'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Cleanup duplicates from overzealous regex
  const cleanupPatterns = [
    [/py-12 md:py-16 md:py-12 md:py-16 md:py-24 lg:py-12 md:py-16 md:py-20 md:py-32/g, 'py-12 md:py-16 lg:py-24'],
    [/py-12 md:py-16 md:py-12 md:py-16 md:py-24/g, 'py-12 md:py-16 lg:py-24'],
    [/py-12 md:py-16 md:py-24 md:py-12 md:py-16 md:py-20 md:py-32 lg:py-40/g, 'py-12 md:py-16 lg:py-24 xl:py-32'],
    [/py-12 md:py-16 md:py-24 md:py-12 md:py-16 md:py-20 md:py-32/g, 'py-12 md:py-16 lg:py-24'],
    [/py-12 md:py-16 md:py-20 md:py-32 md:py-48 lg:py-64/g, 'py-12 md:py-16 lg:py-24 xl:py-32'],
    [/md:py-12 md:py-16 md:py-20/g, 'md:py-16 lg:py-20'],
    [/py-12 md:py-16 md:py-24/g, 'py-12 md:py-16 lg:py-24'],
    [/py-12 md:py-16 md:py-20 md:py-32/g, 'py-12 md:py-16 lg:py-24'],
    [/py-12 md:py-16 lg:py-12 md:py-16 md:py-24/g, 'py-12 md:py-16 lg:py-24'],
    [/py-12 md:py-16 md:py-20/g, 'py-12 md:py-16 lg:py-20'],
  ];

  cleanupPatterns.forEach(([pattern, replacement]) => {
    content = content.replace(pattern, replacement);
  });

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
