import { ImageResponse } from 'next/og'

export const alt = 'SolutionPlus | Build, Launch, and Scale Software'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDe = locale === 'de'

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
          gap: 24,
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
          {isDe
            ? 'Software entwickeln & skalieren mit SolutionPlus'
            : 'Build, Launch, and Scale Software with SolutionPlus'}
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            maxWidth: 700,
          }}
        >
          {isDe
            ? 'Von MVP-Sprints bis Code-Modernisierung – Engineering, das skaliert.'
            : 'From MVP sprints to legacy modernization. Engineering that scales.'}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 24,
          }}
        >
          <span
            style={{
              padding: '8px 24px',
              borderRadius: 999,
              background: 'rgba(92, 107, 192, 0.3)',
              color: '#8b9cf5',
              fontSize: 18,
            }}
          >
            MVP Sprint
          </span>
          <span
            style={{
              padding: '8px 24px',
              borderRadius: 999,
              background: 'rgba(92, 107, 192, 0.3)',
              color: '#8b9cf5',
              fontSize: 18,
            }}
          >
            Dedicated Teams
          </span>
          <span
            style={{
              padding: '8px 24px',
              borderRadius: 999,
              background: 'rgba(92, 107, 192, 0.3)',
              color: '#8b9cf5',
              fontSize: 18,
            }}
          >
            Modernization
          </span>
        </div>
      </div>
    </div>,
    { ...size }
  )
}
