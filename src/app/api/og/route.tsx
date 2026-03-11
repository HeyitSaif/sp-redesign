import { ImageResponse } from 'next/og'
import { checkRateLimit, RATE_LIMITS } from '@/lib/rate-limit'

export const runtime = 'edge'

const SOCIAL_CRAWLERS = [
  'facebookexternalhit',
  'Facebot',
  'Twitterbot',
  'LinkedInBot',
  'Pinterest',
  'Slackbot',
  'WhatsApp',
  'TelegramBot',
  'Discordbot',
]

function isSocialCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false
  const ua = userAgent.toLowerCase()
  return SOCIAL_CRAWLERS.some((bot) => ua.includes(bot.toLowerCase()))
}

export async function GET(request: Request) {
  const userAgent = request.headers.get('user-agent')
  const skipRateLimit = isSocialCrawler(userAgent)

  if (!skipRateLimit) {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown'
    const { allowed, retryAfter } = checkRateLimit(`og:${ip}`, RATE_LIMITS.og)
    if (!allowed) {
      return new Response('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': String(retryAfter ?? 60),
        },
      })
    }
  }

  const { searchParams } = new URL(request.url)
  const title = String(searchParams.get('title') ?? 'SolutionPlus').slice(0, 200)
  const description = String(
    searchParams.get('description') ?? 'Build, Launch, and Scale Software with SolutionPlus'
  ).slice(0, 500)

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0b0c 0%, #141618 50%, #0a0b0c 100%)',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            maxWidth: 700,
          }}
        >
          {description}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
      },
    }
  )
}
