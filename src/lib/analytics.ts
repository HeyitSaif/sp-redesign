/**
 * Analytics event helpers. Pushes to dataLayer for GA4 and GTM.
 * Works with both NEXT_PUBLIC_GA_MEASUREMENT_ID and NEXT_PUBLIC_GTM_ID.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  CTA_CLICK: 'cta_click',
  LINK_CLICK: 'link_click',
  FORM_SUBMIT: 'form_submit',
  FORM_SUCCESS: 'form_success',
  FORM_ERROR: 'form_error',
  LANGUAGE_SWITCH: 'language_switch',
  SOCIAL_CLICK: 'social_click',
  NAV_CLICK: 'nav_click',
  ACCORDION_OPEN: 'accordion_open',
} as const

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]

export interface AnalyticsParams {
  event_category?: string
  event_label?: string
  page_path?: string
  page_title?: string
  link_url?: string
  link_text?: string
  button_label?: string
  location?: string
  destination?: string
  form_name?: string
  success?: boolean
  error?: string
  [key: string]: string | number | boolean | undefined
}

function pushToDataLayer(eventName: string, params?: AnalyticsParams) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...params,
  })
}

/**
 * Track a custom event. Works with GA4 (gtag) and GTM (dataLayer).
 */
export function trackEvent(eventName: string, params?: AnalyticsParams) {
  pushToDataLayer(eventName, params)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

/**
 * Track a virtual page view (for client-side navigation).
 */
export function trackPageView(path: string, title?: string) {
  pushToDataLayer(ANALYTICS_EVENTS.PAGE_VIEW, {
    page_path: path,
    page_title: title,
  })
  if (typeof window !== 'undefined' && window.gtag) {
    const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (GA_ID) {
      window.gtag('config', GA_ID, {
        page_path: path,
        page_title: title,
      })
    }
  }
}

/**
 * Track CTA / button click.
 */
export function trackCtaClick(params: {
  label: string
  location: string
  destination?: string
  variant?: string
}) {
  trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
    event_category: 'engagement',
    event_label: params.label,
    button_label: params.label,
    location: params.location,
    destination: params.destination,
    link_url: params.destination,
    ...(params.variant && { variant: params.variant }),
  })
}

/**
 * Track link click (nav, footer, in-content).
 */
export function trackLinkClick(params: {
  label: string
  url: string
  location: string
}) {
  trackEvent(ANALYTICS_EVENTS.LINK_CLICK, {
    event_category: 'engagement',
    event_label: params.label,
    link_text: params.label,
    link_url: params.url,
    location: params.location,
  })
}

/**
 * Track contact form submission result.
 */
export function trackFormResult(params: {
  success: boolean
  error?: string
  form_name?: string
}) {
  const eventName = params.success ? ANALYTICS_EVENTS.FORM_SUCCESS : ANALYTICS_EVENTS.FORM_ERROR
  trackEvent(eventName, {
    event_category: 'conversion',
    form_name: params.form_name ?? 'contact',
    success: params.success,
    ...(params.error && { error: params.error }),
  })
}

/**
 * Track language switch.
 */
export function trackLanguageSwitch(params: { from: string; to: string }) {
  trackEvent(ANALYTICS_EVENTS.LANGUAGE_SWITCH, {
    event_category: 'engagement',
    event_label: `${params.from} -> ${params.to}`,
    ...params,
  })
}

/**
 * Track social link click.
 */
export function trackSocialClick(params: { platform: string; url: string }) {
  trackEvent(ANALYTICS_EVENTS.SOCIAL_CLICK, {
    event_category: 'social',
    event_label: params.platform,
    link_url: params.url,
    ...params,
  })
}
