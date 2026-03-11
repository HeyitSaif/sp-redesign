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

  // Global page wrappers
  content = content.replace(/\bpt-32 pb-24\b/g, 'pt-24 pb-16 md:pt-32 md:pb-24');
  content = content.replace(/\bpt-28 pb-24\b/g, 'pt-24 pb-16 md:pt-28 md:pb-24');
  
  // Padding Y
  content = content.replace(/\bpy-32\b/g, 'py-20 md:py-32');
  content = content.replace(/\bpy-24\b/g, 'py-16 md:py-24');
  content = content.replace(/\bpy-20\b/g, 'py-16 md:py-20');
  content = content.replace(/\bpy-16\b/g, 'py-12 md:py-16');
  
  // Margins
  content = content.replace(/\bmy-24\b/g, 'my-16 md:my-24');
  content = content.replace(/\bmt-24\b/g, 'mt-16 md:mt-24');
  content = content.replace(/\bmb-24\b/g, 'mb-16 md:mb-24');
  content = content.replace(/\bmt-16\b/g, 'mt-10 md:mt-16');
  content = content.replace(/\bmb-16\b/g, 'mb-10 md:mb-16');
  content = content.replace(/\bmt-12\b/g, 'mt-8 md:mt-12');
  content = content.replace(/\bmb-12\b/g, 'mb-8 md:mb-12');
  content = content.replace(/\bgap-16\b/g, 'gap-10 md:gap-16');
  content = content.replace(/\bgap-12\b/g, 'gap-8 md:gap-12');
  content = content.replace(/\bgap-8\b/g, 'gap-6 md:gap-8');
  
  // Padding all
  content = content.replace(/\bp-16\b/g, 'p-8 md:p-16');
  content = content.replace(/\bp-12\b/g, 'p-8 md:p-12');
  content = content.replace(/\bp-10\b/g, 'p-6 md:p-10');
  content = content.replace(/\bp-8\b/g, 'p-6 md:p-8');
  
  // Padding X
  content = content.replace(/\bpx-10\b/g, 'px-5 md:px-10');
  content = content.replace(/\bpx-6 md:px-12\b/g, 'px-5 md:px-8 lg:px-12');
  content = content.replace(/\bpx-6\b/g, 'px-5 md:px-6');

  // Text Sizes
  content = content.replace(/\btext-6xl\b/g, 'text-5xl md:text-6xl');
  content = content.replace(/\btext-5xl\b/g, 'text-4xl md:text-5xl');
  content = content.replace(/\btext-4xl\b/g, 'text-3xl md:text-4xl');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated:', filePath);
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
