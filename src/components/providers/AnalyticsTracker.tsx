'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { trackPageView, trackEvent } from '@/lib/analytics'

const hasAnalytics =
  typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' ||
  typeof process.env.NEXT_PUBLIC_GTM_ID === 'string'

/**
 * Tracks page views on client-side navigation and handles
 * click events from elements with data-analytics-* attributes.
 */
export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!hasAnalytics) return
    if (pathname) {
      trackPageView(pathname, document.title)
    }
  }, [pathname])

  useEffect(() => {
    if (!hasAnalytics) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const element = target.closest<HTMLElement>('[data-analytics-event]')
      if (!element) return

      const eventName = element.getAttribute('data-analytics-event')
      if (!eventName) return

      const params: Record<string, string | undefined> = {}
      element.getAttributeNames().forEach((name) => {
        if (name.startsWith('data-analytics-') && name !== 'data-analytics-event') {
          const key = name.replace('data-analytics-', '').replace(/-/g, '_')
          params[key] = element.getAttribute(name) ?? undefined
        }
      })

      trackEvent(eventName, params as Record<string, string | number | boolean | undefined>)
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return null
}
