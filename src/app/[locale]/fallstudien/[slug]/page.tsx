import { CaseStudyPage } from '@/components/pages/CaseStudyPage'
import { caseStudies } from '@/data/case-studies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (locale === 'en') return { title: 'Not Found' }

  const cs = caseStudies.de.find(c => c.slug === slug)
  if (!cs) return { title: 'Not Found' }

  return generatePageMetadata({
    title: cs.title,
    description: typeof cs.intro === 'string' ? cs.intro.slice(0, 160) + '...' : cs.intro[0].slice(0, 160) + '...',
    keywords: ['fallstudie', cs.clientName, cs.industryBadge, 'softwareentwicklung'],
    locale,
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/${locale}/fallstudien/${slug}`,
    alternateLocales: [
      { locale: 'en', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/en/case-studies/${slug}` }
    ]
  })
}

export default async function FallstudieRoute({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  if (locale === 'en') notFound()

  const cs = caseStudies.de.find(c => c.slug === slug)
  if (!cs) notFound()

  return <CaseStudyPage locale={locale} data={cs} />
}

export function generateStaticParams() {
  return caseStudies.de.map(cs => ({ slug: cs.slug }))
}
