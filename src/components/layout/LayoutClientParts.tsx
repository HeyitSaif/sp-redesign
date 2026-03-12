'use client'

import dynamic from 'next/dynamic'
import { AnalyticsTracker } from '@/components/providers/AnalyticsTracker'

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

export function LayoutClientParts() {
  return (
    <>
      <AnalyticsTracker />
      <ParticleBackground />
      <ScrollToTop />
    </>
  )
}
