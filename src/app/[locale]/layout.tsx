import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

const ParticleBackground = dynamic(
  () =>
    import('@/components/animations/ParticleBackground').then((m) => ({
      default: m.ParticleBackground,
    })),
  { ssr: false }
)

const ScrollToTop = dynamic(
  () => import('@/components/ui/ScrollToTop').then((m) => ({ default: m.ScrollToTop })),
  { ssr: false }
)
import { Analytics } from '@/components/providers/Analytics'
import { GoogleTagManagerNoScript } from '@/components/providers/GoogleTagManagerNoScript'
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schemas'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://solutionplus.io'

export const viewport = {
  themeColor: '#0a0b0d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

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
    icons: {
      icon: '/images/FAVICON-01-120x120.png',
      apple: '/images/FAVICON-01-300x300.png',
    },
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
      images: [
        {
          url: `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description.slice(0, 200))}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description.slice(0, 200))}`,
      ],
      site: '@SolutionPlus_io',
      creator: '@SolutionPlus_io',
    },
    alternates: {
      canonical,
      languages: {
        'en-US': `${SITE_URL}/en`,
        'de-DE': `${SITE_URL}/de`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
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
      <Analytics />
      <GoogleTagManagerNoScript />
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-foreground bg-background selection:bg-sp-accent/30 relative flex min-h-[100dvh] flex-col overflow-x-clip antialiased selection:text-white`}
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
