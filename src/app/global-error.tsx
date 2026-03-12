'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body className="bg-sp-bg-dark flex min-h-dvh items-center justify-center p-8 text-white">
        <div className="max-w-md text-center">
          <h1 className="mb-2 text-xl font-semibold">Something went wrong</h1>
          <p className="text-sp-text-muted text-sm">
            We&apos;ve been notified and are working on it. Please try again later.
          </p>
        </div>
      </body>
    </html>
  )
}
