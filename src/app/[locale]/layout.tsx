import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ParticleBackground } from '@/components/animations/ParticleBackground'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schemas'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isDe = locale === 'de'

  const title = 'SolutionPlus | Build, Launch, and Scale Software'
  const description = isDe
    ? 'SolutionPlus hilft Startups & Scale-ups, bessere Produkte schneller zu bauen – von MVP-Sprints bis Code-Modernisierung, Engineering das skaliert.'
    : 'Get dependable dev team without draining time, budget, or momentum. From MVPs to scale, we design high-performing tech solutions.'

  const basePath = locale === 'de' ? '/de' : '/en'
  const canonical = `${SITE_URL}${basePath}`

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: '%s | SolutionPlus',
    },
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'SolutionPlus',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      alternateLocale: locale === 'de' ? ['en_US'] : ['de_DE'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@SolutionPlus_io',
      creator: '@SolutionPlus_io',
    },
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en`,
        de: `${SITE_URL}/de`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const orgSchema = generateOrganizationSchema()
  const siteSchema = generateWebSiteSchema(locale)

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-foreground bg-background selection:bg-primary/30 relative flex min-h-screen flex-col antialiased selection:text-white`}
      >
        <StructuredData data={[orgSchema, siteSchema]} />
        <ParticleBackground />
        <Header locale={locale} />
        <main className="relative z-10 flex-grow">{children}</main>
        <Footer locale={locale} />
        <ScrollToTop />
      </body>
    </html>
  )
}
