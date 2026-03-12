'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Background Orbs */}
      <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[120px]" />
      <div className="bg-sp-accent/10 pointer-events-none absolute top-1/2 right-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay" />

      <div className="relative z-10 container mx-auto flex max-w-2xl flex-col items-center px-6 text-center md:px-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <div className="bg-gradient-to-b from-white to-white/10 bg-clip-text text-[150px] leading-none font-bold tracking-tighter text-transparent select-none md:text-[200px]">
            404
          </div>
          <div className="from-sp-accent/30 to-sp-accent/30 absolute inset-0 -z-10 scale-50 rounded-full bg-gradient-to-tr blur-2xl" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-3xl font-bold md:text-5xl"
        >
          Page not found
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-foreground/60 mb-12 text-lg leading-relaxed"
        >
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable. Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="bg-sp-accent hover:bg-sp-accent/90 flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-[0_0_20px_var(--sp-accent-dark)] transition-all hover:shadow-[0_0_30px_rgba(255,112,67,0.5)]"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-sp-surface-subtle border-sp-border-dark hover:bg-sp-surface-hover flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-medium text-white transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  )
}
