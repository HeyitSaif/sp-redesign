import { getPageContent } from '@/lib/markdown'
import type { PageFrontmatter } from '@/lib/markdown'
import { MarkdownPage } from '@/components/sections/MarkdownPage'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schemas'
import { StartupPage } from '@/components/pages/StartupPage'
import { ScaleUpPage } from '@/components/pages/ScaleUpPage'
import { ContactPage } from '@/components/pages/ContactPage'
import { AboutPage } from '@/components/pages/AboutPage'
import { MvpSprintPage } from '@/components/pages/MvpSprintPage'
import { DedicatedTeamsPage } from '@/components/pages/DedicatedTeamsPage'
import { ServicesPage } from '@/components/pages/ServicesPage'
import { CareersPage } from '@/components/pages/CareersPage'
import { EntrepreneurPage } from '@/components/pages/EntrepreneurPage'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generatePageMetadata, getCanonicalUrl, getAlternateUrls } from '@/lib/seo'
import { getKeywordsForPage, extractKeywordsFromContent } from '@/lib/keywords'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params

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
]

function renderWithStructuredData(
  locale: string,
  slug: string,
  pageTitle: string,
  description: string,
  isService: boolean,
  children: ReactNode
) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'
  const pageUrl = `${SITE_URL}/${locale}/${slug}`
  const serviceSchema = isService ? generateServiceSchema(pageTitle, description, pageUrl) : null
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'SolutionPlus', url: `${SITE_URL}/${locale}` },
    { name: pageTitle, url: pageUrl },
  ])
  const schemas = [breadcrumbSchema, ...(serviceSchema ? [serviceSchema] : [])]
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
    ].includes(slug)
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
