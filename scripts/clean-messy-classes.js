const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/pages',
  'src/components/sections',
  'src/app/[locale]',
  'src/components/ui'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Cleanup duplicates from overzealous regex
  const cleanupPatterns = [
    [/px-5 md:px-6 py-3/g, 'px-5 py-3 md:px-6'],
    [/px-5 md:px-10 py-12 md:py-16 md:py-24 md:px-20 md:py-12 md:py-16 md:py-20 md:py-32 lg:px-32 lg:py-40/g, 'px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-24'],
    [/px-4 pt-4 md:px-8 lg:px-5 md:px-10/g, 'px-4 pt-4 md:px-8 lg:px-10'],
    [/md:px-5 md:px-6/g, 'md:px-6'],
    [/px-5 md:px-10 md:px-20 lg:px-32/g, 'px-5 md:px-10 lg:px-20 xl:px-32'],
    [/px-5 md:px-10 py-12 md:py-16 md:py-20 md:py-32 md:px-20 md:py-48 lg:px-32 lg:py-64/g, 'px-5 py-12 md:px-10 md:py-20 lg:px-20 lg:py-32'],
    [/px-5 md:px-6 py-12 md:py-16 md:py-24 md:px-12 md:py-0 lg:grid-cols-12 lg:gap-24/g, 'px-5 py-12 md:px-12 md:py-16 lg:grid-cols-12 lg:gap-24'],
    [/px-5 md:px-6 py-3/g, 'px-5 py-3 md:px-6'],
    [/px-5 md:px-6 text-center md:px-12/g, 'px-5 text-center md:px-12'],
    [/px-5 md:px-6 py-12 md:py-16 md:px-12/g, 'px-5 py-12 md:px-12 md:py-16'],
    [/px-5 md:px-6 pb-24 md:px-12/g, 'px-5 pb-16 md:px-12 md:pb-24'],
    [/px-5 md:px-6 py-12 md:py-16 md:py-24 text-center md:px-12 lg:py-12 md:py-16 md:py-20 md:py-32/g, 'px-5 py-16 text-center md:px-12 md:py-24 lg:py-32'],
    [/px-5 md:px-6 py-12 md:py-16 md:px-12 lg:py-12 md:py-16 md:py-24/g, 'px-5 py-12 md:px-12 md:py-16 lg:py-24'],
  ];

  cleanupPatterns.forEach(([pattern, replacement]) => {
    content = content.replace(pattern, replacement);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Cleaned:', filePath);
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
