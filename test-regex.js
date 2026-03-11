const fs = require('fs');
let content = fs.readFileSync('src/components/pages/AboutPage.tsx', 'utf8');

let newContent = content.replace(/<(Link|a)\s+([^>]*?)className=(["']|{`)([^"'{}]*?(?:bg-sp-accent|border-sp-border-dark)[^>]*?)\3([^>]*?)>(.*?)<\/\1>/gs, (match, tag, beforeClass, quote, classNameValue, afterClass, inner) => {
  let otherAttrs = `${beforeClass} ${afterClass}`.trim().replace(/\s+/g, ' ');
  let res = `<Button variant="primary" size="md" ${otherAttrs}>\n                ${inner}\n              </Button>`;
  if (classNameValue.includes('bg-sp-accent')) {
    console.log("REPLACING WITH:");
    console.log(res);
  }
  return res;
});
