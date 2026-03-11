const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/pages',
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(
    /className="border-sp-border-testimonial flex h-full flex-col rounded-3xl border bg-white p-8 md:p-10 lg:p-12 shadow-lg transition-transform duration-500 hover:-translate-y-2"/g,
    'className="border-sp-border-testimonial flex h-full flex-col rounded-[2rem] border bg-white p-12 shadow-lg transition-transform duration-500 hover:-translate-y-2"'
  );
  content = content.replace(
    /className="mb-6 md:mb-8 flex gap-1"/g,
    'className="mb-8 flex gap-1"'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Rolled back:', filePath);
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
