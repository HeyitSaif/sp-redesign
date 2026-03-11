const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/pages',
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // DedicatedTeamsPage, MvpSprintPage, ServicesPage changes 
  content = content.replace(
    /className="bg-sp-bg-medium group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black\/5 p-6 md:p-6 lg:p-8 transition-all duration-300 hover:border-black\/20"/g,
    'className="bg-sp-bg-medium group relative h-full overflow-hidden rounded-3xl border border-black/5 p-8 transition-all duration-300 hover:border-black/20"'
  );

  content = content.replace(
    /className="bg-sp-bg-dark relative mb-6 h-32 md:h-40 lg:h-32 w-full overflow-hidden rounded-2xl border border-white\/5 shrink-0"/g,
    'className="bg-sp-bg-dark relative mb-6 h-32 w-full overflow-hidden rounded-2xl border border-white/5"'
  );

  content = content.replace(
    /<div className="flex flex-col flex-1">\s*<h3 className="text-sp-text-dark relative z-20 mb-4 text-xl font-bold">\s*\{feature\.title\}\s*<\/h3>\s*<p className="text-sp-text-on-light relative z-20 leading-relaxed">\s*\{feature\.desc\}\s*<\/p>\s*<\/div>/g,
    `<h3 className="text-sp-text-dark relative z-20 mb-4 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-sp-text-on-light relative z-20 leading-relaxed">
                    {feature.desc}
                  </p>`
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
