import { CaseStudyPage } from '@/components/pages/CaseStudyPage'
import { caseStudies } from '@/data/case-studies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schemas'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (locale === 'en') return { title: 'Not Found' }

  const cs = caseStudies.de.find((c) => c.slug === slug)
  if (!cs) return { title: 'Not Found' }

  return generatePageMetadata({
    title: cs.title,
    description:
      typeof cs.intro === 'string'
        ? cs.intro.slice(0, 160) + '...'
        : cs.intro[0].slice(0, 160) + '...',
    keywords: ['fallstudie', cs.clientName, cs.industryBadge, 'softwareentwicklung'],
    locale,
    ogType: 'article',
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/${locale}/fallstudien/${slug}`,
    alternateLocales: [
      {
        locale: 'en',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/en/case-studies/${slug}`,
      },
    ],
  })
}

export default async function FallstudieRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (locale === 'en') notFound()

  const cs = caseStudies.de.find((c) => c.slug === slug)
  if (!cs) notFound()

  const pageUrl = `${SITE_URL}/${locale}/fallstudien/${slug}`
  const description =
    typeof cs.intro === 'string'
      ? cs.intro.slice(0, 160) + '...'
      : cs.intro[0].slice(0, 160) + '...'
  const articleSchema = generateArticleSchema(cs.title, description, pageUrl)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'SolutionPlus', url: `${SITE_URL}/${locale}` },
    { name: 'Fallstudien', url: `${SITE_URL}/${locale}/fallstudien` },
    { name: cs.title, url: pageUrl },
  ])

  return (
    <>
      <StructuredData data={[articleSchema, breadcrumbSchema]} />
      <CaseStudyPage locale={locale} data={cs} />
    </>
  )
}

export function generateStaticParams() {
  return caseStudies.de.map((cs) => ({ slug: cs.slug }))
}
