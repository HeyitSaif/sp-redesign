const LOCALES = ['en', 'de'] as const

/** Maps EN slugs to DE slugs and vice versa */
const SLUG_MAP: Record<string, string> = {
  'contact-us': 'kontakt-solutionplus',
  'kontakt-solutionplus': 'contact-us',
  'about-team': 'ueber-solutionplus',
  'ueber-solutionplus': 'about-team',
  'mvp-sprint-package': 'mvp-sprint-paket',
  'mvp-sprint-paket': 'mvp-sprint-package',
  'dedicated-delivery-teams': 'dedizierte-teams',
  'dedizierte-teams': 'dedicated-delivery-teams',
  'case-studies': 'fallstudien',
  fallstudien: 'case-studies',
  services: 'leistungen',
  leistungen: 'services',
  startup: 'startups',
  startups: 'startup',
  'scale-up': 'scaleups',
  scaleups: 'scale-up',
  'product-modernization': 'software-modernisierung',
  'software-modernisierung': 'product-modernization',
  careers: 'karriere',
  karriere: 'careers',
  'entrepreneur-with-an-idea': 'gruender-idee-startup-partner',
  'gruender-idee-startup-partner': 'entrepreneur-with-an-idea',
  'ai-automation': 'ki-automatisierung',
  'ki-automatisierung': 'ai-automation',
  'ui-ux-design': 'ui-ux-design',
  'web-app-development': 'web-entwicklung',
  'web-entwicklung': 'web-app-development',
  'mobile-app-development': 'mobile-app-entwicklung',
  'mobile-app-entwicklung': 'mobile-app-development',
}

/**
 * Returns the equivalent path for the target locale.
 * Handles home, [slug] pages, case-studies/fallstudien, and nested slugs.
 */
export function getLocalizedPath(targetLocale: string, pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return `/${targetLocale}`

  const currentLocale = segments[0]
  if (!LOCALES.includes(currentLocale as (typeof LOCALES)[number])) {
    return `/${targetLocale}`
  }

  const pathSegments = segments.slice(1)
  if (pathSegments.length === 0) return `/${targetLocale}`

  const mappedSegments = pathSegments.map((seg) => SLUG_MAP[seg] ?? seg)
  return `/${targetLocale}/${mappedSegments.join('/')}`
}

export { LOCALES }
