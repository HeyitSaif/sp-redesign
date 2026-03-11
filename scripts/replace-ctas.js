const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components/pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  content = content.replace(/<(Link|a)\s+([^>]*?)className=(["']|{`)([^"'{}]*?(?:bg-sp-accent|border-sp-border-dark)[^>]*?)\3([^>]*?)>(.*?)<\/\1>/gs, (match, tag, beforeClass, quote, classNameValue, afterClass, inner) => {
    let variant = 'primary';
    let size = 'md';

    // Check size FIRST to enforce strict matching
    let hasLg = classNameValue.includes('px-10') && classNameValue.includes('py-5');
    let hasMd = classNameValue.includes('px-8') && classNameValue.includes('py-4');

    if (!hasLg && !hasMd) {
      return match;
    }

    size = hasLg ? 'lg' : 'md';

    if (classNameValue.includes('bg-sp-accent')) {
      variant = 'primary';
    } else if (classNameValue.includes('border-sp-border-dark') && classNameValue.includes('bg-sp-surface-subtle')) {
      variant = 'secondary';
    } else {
      return match;
    }

    // Extract href if it's there
    let otherAttrs = `${beforeClass} ${afterClass}`.trim().replace(/\s+/g, ' ');

    // Remove shimmer
    inner = inner.replace(/<div[^>]*?shimmer[^>]*?\/>/s, '');
    
    // Trim loosely
    inner = inner.replace(/^\s+|\s+$/g, '');

    return `<Button variant="${variant}" size="${size}" ${otherAttrs}>\n                ${inner}\n              </Button>`;
  });

  // Ensure Button is imported
  if (content !== originalContent) {
    if (content.includes('<Button') && !content.includes('import { Button }')) {
      content = content.replace(/(import .*?\n)(?!import )/, `$1import { Button } from '@/components/ui/Button'\n`);
    }

    // Remove Link if unused
    if (!content.includes('<Link') && content.includes('import Link from')) {
      content = content.replace(/import Link from ['"]next\/link['"];?\n?/, '');
    }
  }

  // Fix overflow-hidden on rounded-2xl containers
  content = content.replace(/className="([^"]*?)rounded-2xl([^"]*?)"/g, (match, p1, p2) => {
    if (!p1.includes('overflow-hidden') && !p2.includes('overflow-hidden') && !p1.includes('overflow-visible') && !p2.includes('overflow-visible')) {
      return `className="${p1}rounded-2xl overflow-hidden${p2}"`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Done!');
