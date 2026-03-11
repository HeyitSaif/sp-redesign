const fs = require('fs')
const path = require('path')

const pagesDir = 'src/components/pages'

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  let original = content

  // Add Button import if not present, and we use Link for buttons typically.
  // Actually let's just insert it after 'lucide-react' or 'framer-motion'
  if (content.includes('bg-sp-accent') && !content.includes('import { Button }')) {
    content = content.replace(
      /(import { [^}]+ } from 'lucide-react'\n)/,
      "$1import { Button } from '@/components/ui/Button'\n"
    )
    // Fallback if lucide-react not found
    if (content === original) {
      content = content.replace(
        /(import Link from 'next\/link'\n)/,
        "$1import { Button } from '@/components/ui/Button'\n"
      )
    }
  }

  // Primary CTA (Link) px-8 py-4
  content = content.replace(
    /<Link\s+href=\{([^}]+)\}\s+className="[^"]*bg-sp-accent[^"]*px-8 py-4[^"]*"\s*>/g,
    '<Button href={$1} size="md" variant="primary">'
  )
  content = content.replace(
    /<Link\s+href="([^"]+)"\s+className="[^"]*bg-sp-accent[^"]*px-8 py-4[^"]*"\s*>/g,
    '<Button href="$1" size="md" variant="primary">'
  )

  // Primary CTA (Link) px-10 py-5
  content = content.replace(
    /<Link\s+href=\{([^}]+)\}\s+className="[^"]*bg-sp-accent[^"]*px-10 py-5[^"]*"\s*>/g,
    '<Button href={$1} size="lg" variant="primary">'
  )
  content = content.replace(
    /<Link\s+href="([^"]+)"\s+className="[^"]*bg-sp-accent[^"]*px-10 py-5[^"]*"\s*>/g,
    '<Button href="$1" size="lg" variant="primary">'
  )

  // Primary CTA (Link) px-16 py-8 (MarkdownPage)
  content = content.replace(
    /<Link\s+href="([^"]+)"\s+className="[^"]*bg-sp-accent[^"]*px-16 py-8[^"]*"\s*>/g,
    '<Button href="$1" size="lg" variant="primary" className="px-16 py-8 text-2xl">'
  )

  // Secondary CTA (Link) px-8 py-4
  content = content.replace(
    /<Link\s+href=\{([^}]+)\}\s+className="[^"]*border-sp-border-dark bg-sp-surface-subtle[^"]*px-8 py-4[^"]*"\s*>/g,
    '<Button href={$1} size="md" variant="secondary">'
  )
  content = content.replace(
    /<Link\s+href="([^"]+)"\s+className="[^"]*border-sp-border-dark bg-sp-surface-subtle[^"]*px-8 py-4[^"]*"\s*>/g,
    '<Button href="$1" size="md" variant="secondary">'
  )

  // Close tags for Link where Button is opened.
  // This is tricky using regex, we have to match the inner content.
  // Let's use a simpler regex that replaces the whole block if possible, or just manually fix the closing tag.
  // Actually, `<Button` requires `</Button>`.
  // To avoid breaking JSX, let's use a slightly more powerful regex.

  // For each replaced <Button... we need to replace the next </Link> with </Button>.
  // We can do this in a loop or just fix them via StrReplace in Cursor.
}

// Since doing this via AST/regex for tags is risky, I will execute a shell command to just do a precise sed on known files or use standard perl.
