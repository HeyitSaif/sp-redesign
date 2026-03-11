import { getPageContent } from '@/lib/markdown'
import type { PageFrontmatter } from '@/lib/markdown'
import { MarkdownPage } from '@/components/sections/MarkdownPage'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schemas'
import { StartupPage } from '@/components/pages/StartupPage'
import { ScaleUpPage } from '@/components/pages/ScaleUpPage'
import { ContactPage } from '@/components/pages/ContactPage'
import { AboutPage } from '@/components/pages/AboutPage'
import { MvpSprintPage } from '@/components/pages/MvpSprintPage'
import { DedicatedTeamsPage } from '@/components/pages/DedicatedTeamsPage'
import { ServicesPage } from '@/components/pages/ServicesPage'
import { CareersPage } from '@/components/pages/CareersPage'
import { EntrepreneurPage } from '@/components/pages/EntrepreneurPage'
import { ServiceDetailPage } from '@/components/pages/ServiceDetailPage'
import { ServicesIndexPage } from '@/components/pages/ServicesIndexPage'
import { servicesData } from '@/data/services-content'
import type { ReactNode } from 'react'
import type { StructuredDataSchema } from '@/types/seo'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generatePageMetadata, getCanonicalUrl, getAlternateUrls } from '@/lib/seo'
import { getKeywordsForPage, extractKeywordsFromContent } from '@/lib/keywords'

/** Custom pages without markdown: title and description per locale */
const CUSTOM_PAGE_METADATA: Record<
  string,
  { title: { en: string; de: string }; description: { en: string; de: string } }
> = {
  services: {
    title: { en: 'Services', de: 'Leistungen' },
    description: {
      en: 'Discover our services.',
      de: 'Entdecken Sie unsere Dienstleistungen.',
    },
  },
  leistungen: {
    title: { en: 'Services', de: 'Leistungen' },
    description: {
      en: 'Discover our services.',
      de: 'Entdecken Sie unsere Dienstleistungen.',
    },
  },
  startup: {
    title: { en: 'Startup', de: 'Startup' },
    description: {
      en: 'Launch fast with a risk-free MVP or feature build.',
      de: 'Starten Sie schnell mit einem risikofreien MVP oder Feature-Build.',
    },
  },
  startups: {
    title: { en: 'Startup', de: 'Startup' },
    description: {
      en: 'Launch fast with a risk-free MVP or feature build.',
      de: 'Starten Sie schnell mit einem risikofreien MVP oder Feature-Build.',
    },
  },
  'scale-up': {
    title: { en: 'Scale-up', de: 'Scale-up' },
    description: {
      en: 'Build-operate-transfer (BOT) teams for growth-stage companies.',
      de: 'Build-Operate-Transfer (BOT) Teams für wachsende Unternehmen.',
    },
  },
  scaleups: {
    title: { en: 'Scale-up', de: 'Scale-up' },
    description: {
      en: 'Build-operate-transfer (BOT) teams for growth-stage companies.',
      de: 'Build-Operate-Transfer (BOT) Teams für wachsende Unternehmen.',
    },
  },
  'contact-us': {
    title: { en: 'Contact Us', de: 'Kontakt' },
    description: {
      en: 'Get in touch with SolutionPlus. Book a call or send your project details.',
      de: 'Kontaktieren Sie SolutionPlus. Buchen Sie einen Call oder senden Sie Ihre Projektinfos.',
    },
  },
  'kontakt-solutionplus': {
    title: { en: 'Contact Us', de: 'Kontakt' },
    description: {
      en: 'Get in touch with SolutionPlus. Book a call or send your project details.',
      de: 'Kontaktieren Sie SolutionPlus. Buchen Sie einen Call oder senden Sie Ihre Projektinfos.',
    },
  },
  'about-team': {
    title: { en: 'About Us', de: 'Über uns' },
    description: {
      en: 'Meet the SolutionPlus team. German leadership meets Pakistani engineering.',
      de: 'Lernen Sie das SolutionPlus-Team kennen. Deutsche Führung trifft pakistanische Ingenieurskunst.',
    },
  },
  'ueber-solutionplus': {
    title: { en: 'About Us', de: 'Über uns' },
    description: {
      en: 'Meet the SolutionPlus team. German leadership meets Pakistani engineering.',
      de: 'Lernen Sie das SolutionPlus-Team kennen. Deutsche Führung trifft pakistanische Ingenieurskunst.',
    },
  },
  'mvp-sprint-package': {
    title: { en: 'MVP Sprint Package', de: 'MVP-Sprint-Paket' },
    description: {
      en: 'Fixed-scope MVP in 6 weeks. Fully managed, investor-ready.',
      de: 'Festumfangs-MVP in 6 Wochen. Vollständig gemanagt, investorenbereit.',
    },
  },
  'mvp-sprint-paket': {
    title: { en: 'MVP Sprint Package', de: 'MVP-Sprint-Paket' },
    description: {
      en: 'Fixed-scope MVP in 6 weeks. Fully managed, investor-ready.',
      de: 'Festumfangs-MVP in 6 Wochen. Vollständig gemanagt, investorenbereit.',
    },
  },
  'dedicated-delivery-teams': {
    title: { en: 'Dedicated Delivery Teams', de: 'Dedizierte Teams' },
    description: {
      en: 'Build-operate-transfer teams aligned to your workflow. Scale without lock-in.',
      de: 'Build-Operate-Transfer Teams abgestimmt auf Ihren Workflow. Skalieren ohne Lock-in.',
    },
  },
  'dedizierte-teams': {
    title: { en: 'Dedicated Delivery Teams', de: 'Dedizierte Teams' },
    description: {
      en: 'Build-operate-transfer teams aligned to your workflow. Scale without lock-in.',
      de: 'Build-Operate-Transfer Teams abgestimmt auf Ihren Workflow. Skalieren ohne Lock-in.',
    },
  },
  'product-modernization': {
    title: { en: 'Product Modernization', de: 'Software-Modernisierung' },
    description: {
      en: 'Legacy code upgrade, tech debt reduction, and software migration.',
      de: 'Legacy-Code-Upgrade, Tech-Debt-Reduktion und Software-Migration.',
    },
  },
  'software-modernisierung': {
    title: { en: 'Product Modernization', de: 'Software-Modernisierung' },
    description: {
      en: 'Legacy code upgrade, tech debt reduction, and software migration.',
      de: 'Legacy-Code-Upgrade, Tech-Debt-Reduktion und Software-Migration.',
    },
  },
  careers: {
    title: { en: 'Careers', de: 'Karriere' },
    description: {
      en: 'Join the SolutionPlus team. Remote engineering and product development careers.',
      de: 'Werden Sie Teil des SolutionPlus-Teams. Remote-Engineering und Produktentwicklung.',
    },
  },
  karriere: {
    title: { en: 'Careers', de: 'Karriere' },
    description: {
      en: 'Join the SolutionPlus team. Remote engineering and product development careers.',
      de: 'Werden Sie Teil des SolutionPlus-Teams. Remote-Engineering und Produktentwicklung.',
    },
  },
  'entrepreneur-with-an-idea': {
    title: { en: 'Entrepreneur with an Idea', de: 'Gründer mit Idee' },
    description: {
      en: 'Turn your idea into a product. No-code alternative with full ownership.',
      de: 'Verwandeln Sie Ihre Idee in ein Produkt. No-Code-Alternative mit vollem Eigentum.',
    },
  },
  'gruender-idee-startup-partner': {
    title: { en: 'Entrepreneur with an Idea', de: 'Gründer mit Idee' },
    description: {
      en: 'Turn your idea into a product. No-code alternative with full ownership.',
      de: 'Verwandeln Sie Ihre Idee in ein Produkt. No-Code-Alternative mit vollem Eigentum.',
    },
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params

  // Custom pages without markdown – provide metadata directly
  const customMeta = CUSTOM_PAGE_METADATA[slug]
  if (customMeta) {
    const isDe = locale === 'de'
    const title = customMeta.title[isDe ? 'de' : 'en']
    const description = customMeta.description[isDe ? 'de' : 'en']
    const { primary, secondary } = getKeywordsForPage(slug)
    const keywords = [...primary, ...secondary]
    return generatePageMetadata({
      title,
      description,
      keywords,
      canonicalUrl: getCanonicalUrl(locale, slug),
      alternateLocales: getAlternateUrls(locale, slug),
      locale,
    })
  }

  // Service detail pages (from servicesData)
  if (
    [
      'ai-automation',
      'ki-automatisierung',
      'ui-ux-design',
      'web-app-development',
      'web-entwicklung',
      'mobile-app-development',
      'mobile-app-entwicklung',
    ].includes(slug)
  ) {
    const serviceKey =
      {
        'ki-automatisierung': 'ai-automation',
        'web-entwicklung': 'web-app-development',
        'mobile-app-entwicklung': 'mobile-app-development',
      }[slug] || slug

    const data = servicesData[serviceKey]
    if (data) {
      const isDe = locale === 'de'
      const title = data.title[isDe ? 'de' : 'en']
      const description = data.heroDescription[isDe ? 'de' : 'en']
      const { primary, secondary } = getKeywordsForPage(serviceKey)
      const keywords = [...primary, ...secondary]
      return generatePageMetadata({
        title,
        description,
        keywords,
        canonicalUrl: getCanonicalUrl(locale, slug),
        alternateLocales: getAlternateUrls(locale, slug),
        locale,
      })
    }
  }

  try {
    const { frontmatter, content } = await getPageContent(locale, slug)
    const fm = frontmatter as PageFrontmatter

    const title = fm.title || slug
    const description =
      fm.description ||
      (content
        ? content.slice(0, 160).replace(/#+\s+/g, '').trim() + '...'
        : `Read about ${slug} on SolutionPlus.`)

    const contentKeywords = content ? extractKeywordsFromContent(content, 3) : []
    const { primary, secondary } = getKeywordsForPage(slug, contentKeywords)
    const keywords = [...primary, ...secondary]

    return generatePageMetadata({
      title,
      description,
      keywords,
      ogImage: fm.ogImage,
      ogImageAlt: fm.title,
      canonicalUrl: getCanonicalUrl(locale, slug),
      alternateLocales: getAlternateUrls(locale, slug),
      locale,
    })
  } catch {
    return {
      title: 'Page Not Found',
    }
  }
}

const CUSTOM_PAGE_SLUGS = [
  'startup',
  'startups',
  'scale-up',
  'scaleups',
  'contact-us',
  'kontakt-solutionplus',
  'about-team',
  'ueber-solutionplus',
  'mvp-sprint-package',
  'mvp-sprint-paket',
  'dedicated-delivery-teams',
  'dedizierte-teams',
  'product-modernization',
  'software-modernisierung',
  'careers',
  'karriere',
  'entrepreneur-with-an-idea',
  'gruender-idee-startup-partner',
  'ai-automation',
  'ki-automatisierung',
  'ui-ux-design',
  'web-app-development',
  'web-entwicklung',
  'mobile-app-development',
  'mobile-app-entwicklung',
  'services',
  'leistungen',
]

function renderWithStructuredData(
  locale: string,
  slug: string,
  pageTitle: string,
  description: string,
  isService: boolean,
  children: ReactNode,
  extraSchemas?: StructuredDataSchema[]
) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'
  const pageUrl = `${SITE_URL}/${locale}/${slug}`
  const serviceSchema = isService ? generateServiceSchema(pageTitle, description, pageUrl) : null
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'SolutionPlus', url: `${SITE_URL}/${locale}` },
    { name: pageTitle, url: pageUrl },
  ])
  const schemas = [
    breadcrumbSchema,
    ...(serviceSchema ? [serviceSchema] : []),
    ...(extraSchemas ?? []),
  ]
  return (
    <>
      <StructuredData data={schemas} />
      {children}
    </>
  )
}

export default async function GenericPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  const isCustomPage = CUSTOM_PAGE_SLUGS.includes(slug)
  let pageTitle = slug
  let description = ''
  let isServicePage = false

  if (isCustomPage) {
    try {
      const { frontmatter, content } = await getPageContent(locale, slug)
      const fm = frontmatter as PageFrontmatter
      pageTitle = fm.title || slug
      description =
        fm.description ||
        (content ? content.slice(0, 160).replace(/#+\s+/g, '').trim() + '...' : '')
    } catch {
      // fallback
    }
    isServicePage = [
      'mvp-sprint-package',
      'mvp-sprint-paket',
      'dedicated-delivery-teams',
      'dedizierte-teams',
      'product-modernization',
      'software-modernisierung',
      'ai-automation',
      'ki-automatisierung',
      'ui-ux-design',
      'web-app-development',
      'web-entwicklung',
      'mobile-app-development',
      'mobile-app-entwicklung',
    ].includes(slug)

    if (servicesData[slug]) {
      pageTitle = servicesData[slug].title[locale === 'de' ? 'de' : 'en']
      description = servicesData[slug].heroDescription[locale === 'de' ? 'de' : 'en']
    } else {
      const deToEnMap: Record<string, string> = {
        'ki-automatisierung': 'ai-automation',
        'web-entwicklung': 'web-app-development',
        'mobile-app-entwicklung': 'mobile-app-development',
      }
      const mappedSlug = deToEnMap[slug]
      if (mappedSlug && servicesData[mappedSlug]) {
        pageTitle = servicesData[mappedSlug].title[locale === 'de' ? 'de' : 'en']
        description = servicesData[mappedSlug].heroDescription[locale === 'de' ? 'de' : 'en']
      }
    }
  }

  if (slug === 'startup' || slug === 'startups')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      false,
      <StartupPage locale={locale} />
    )
  if (slug === 'scale-up' || slug === 'scaleups')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      false,
      <ScaleUpPage locale={locale} />
    )
  if (slug === 'contact-us' || slug === 'kontakt-solutionplus')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      false,
      <ContactPage locale={locale} />
    )
  if (slug === 'about-team' || slug === 'ueber-solutionplus')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      false,
      <AboutPage locale={locale} />
    )
  if (slug === 'mvp-sprint-package' || slug === 'mvp-sprint-paket')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      true,
      <MvpSprintPage locale={locale} />
    )
  if (slug === 'dedicated-delivery-teams' || slug === 'dedizierte-teams')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      true,
      <DedicatedTeamsPage locale={locale} />
    )
  if (slug === 'product-modernization' || slug === 'software-modernisierung')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      true,
      <ServicesPage locale={locale} />
    )
  if (slug === 'careers' || slug === 'karriere')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      false,
      <CareersPage locale={locale} />
    )
  if (slug === 'entrepreneur-with-an-idea' || slug === 'gruender-idee-startup-partner')
    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      false,
      <EntrepreneurPage locale={locale} />
    )

  if (slug === 'services' || slug === 'leistungen') {
    return renderWithStructuredData(
      locale,
      slug,
      locale === 'de' ? 'Leistungen' : 'Services',
      locale === 'de' ? 'Entdecken Sie unsere Dienstleistungen.' : 'Discover our services.',
      false,
      <ServicesIndexPage locale={locale} />
    )
  }

  if (
    [
      'ai-automation',
      'ki-automatisierung',
      'ui-ux-design',
      'web-app-development',
      'web-entwicklung',
      'mobile-app-development',
      'mobile-app-entwicklung',
    ].includes(slug)
  ) {
    const serviceKey =
      {
        'ki-automatisierung': 'ai-automation',
        'web-entwicklung': 'web-app-development',
        'mobile-app-entwicklung': 'mobile-app-development',
      }[slug] || slug

    const serviceData = servicesData[serviceKey]
    const faqSchema =
      serviceData?.faqs?.length &&
      generateFAQSchema(
        serviceData.faqs.map((f) => ({
          question: f.q[locale === 'de' ? 'de' : 'en'],
          answer: f.a[locale === 'de' ? 'de' : 'en'],
        }))
      )

    return renderWithStructuredData(
      locale,
      slug,
      pageTitle,
      description,
      true,
      <ServiceDetailPage locale={locale} serviceKey={serviceKey} />,
      faqSchema ? [faqSchema] : undefined
    )
  }

  let content = ''
  let frontmatter: PageFrontmatter = {} as PageFrontmatter

  try {
    const pageData = await getPageContent(locale, slug)
    content = pageData.content
    frontmatter = pageData.frontmatter
    pageTitle = (pageData.frontmatter as PageFrontmatter).title || slug
    description =
      (pageData.frontmatter as PageFrontmatter).description ||
      content.slice(0, 160).replace(/#+\s+/g, '').trim() + '...'
    isServicePage = [
      'mvp-sprint-package',
      'mvp-sprint-paket',
      'dedicated-delivery-teams',
      'dedizierte-teams',
      'product-modernization',
      'software-modernisierung',
    ].includes(slug)
  } catch {
    notFound()
  }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'
  const pageUrl = `${SITE_URL}/${locale}/${slug}`

  const serviceSchema = isServicePage
    ? generateServiceSchema(pageTitle, description, pageUrl)
    : null
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'SolutionPlus', url: `${SITE_URL}/${locale}` },
    { name: pageTitle, url: pageUrl },
  ])

  const schemas = [breadcrumbSchema, ...(serviceSchema ? [serviceSchema] : [])]

  return (
    <>
      <StructuredData data={schemas} />
      <MarkdownPage
        content={content}
        frontmatter={frontmatter as Record<string, string>}
        locale={locale}
      />
    </>
  )
}
