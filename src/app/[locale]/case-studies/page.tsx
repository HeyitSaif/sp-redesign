import { CaseStudiesIndexPage } from '@/components/pages/CaseStudiesIndexPage'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (locale === 'de') return { title: 'Not Found' }

  return generatePageMetadata({
    title: 'Case Studies',
    description: 'Explore how we helped start-ups, scale-ups, and established enterprises turn their vision into reality.',
    keywords: ['case studies', 'success stories', 'portfolio', 'software development'],
    locale,
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/${locale}/case-studies`,
    alternateLocales: [
      { locale: 'de', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/de/fallstudien` }
    ]
  })
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'de') notFound() // Ensure English route only works for English

  return <CaseStudiesIndexPage locale={locale} />
}
