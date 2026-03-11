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
  if (locale === 'en') notFound()

  return generatePageMetadata({
    title: 'Fallstudien',
    description:
      'Erfahren Sie, wie wir Start-ups, Scale-ups und etablierten Unternehmen geholfen haben, ihre Visionen durch strukturiertes Engineering umzusetzen.',
    keywords: ['fallstudien', 'erfolgsgeschichten', 'portfolio', 'softwareentwicklung'],
    locale,
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/${locale}/fallstudien`,
    alternateLocales: [
      {
        locale: 'en',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'}/en/case-studies`,
      },
    ],
  })
}

export default async function FallstudienPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale === 'en') notFound()

  return <CaseStudiesIndexPage locale={locale} />
}
