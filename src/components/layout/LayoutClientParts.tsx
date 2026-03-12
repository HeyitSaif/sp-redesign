'use client'

import dynamic from 'next/dynamic'

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
      <ParticleBackground />
      <ScrollToTop />
    </>
  )
}
