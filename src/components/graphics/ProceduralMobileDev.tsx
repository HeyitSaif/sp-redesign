'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralMobileDevProps {
  className?: string
  animated?: boolean
}

export function ProceduralMobileDev({ className, animated = true }: ProceduralMobileDevProps) {
  // A composition representing a smartphone frame with app icons/components assembling
  return (
    <div
      className={cn(
        'bg-sp-bg-dark relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      {/* Background radial gradient */}
      <motion.div
        className="bg-sp-accent/10 absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[50px]"
        animate={animated ? { scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] } : undefined}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Smartphone Frame */}
      <motion.div
        className="border-sp-border-dark relative z-10 flex h-[85%] w-[45%] flex-col overflow-hidden rounded-2xl border-[4px] bg-[#121316] shadow-2xl"
        initial={animated ? { y: 30, opacity: 0 } : false}
        animate={animated ? { y: 0, opacity: 1 } : false}
        transition={{ duration: 0.7 }}
      >
        {/* Notch */}
        <div className="bg-sp-surface-hover border-sp-border-dark absolute top-0 left-1/2 flex h-4 w-16 -translate-x-1/2 items-center justify-center rounded-b-xl border-x border-b">
          <div className="bg-sp-bg-dark h-1 w-4 rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="flex flex-1 flex-col gap-3 p-3 pt-6">
          {/* Header Area */}
          <motion.div
            className="flex items-center gap-2"
            initial={animated ? { x: -10, opacity: 0 } : false}
            animate={animated ? { x: 0, opacity: 1 } : false}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-sp-accent/40 h-8 w-8 rounded-full" />
            <div className="flex flex-col gap-1">
              <div className="bg-sp-surface-hover h-2 w-16 rounded-full" />
              <div className="bg-sp-border-dark h-1.5 w-10 rounded-full" />
            </div>
          </motion.div>

          {/* Hero Banner */}
          <motion.div
            className="from-sp-accent/30 to-sp-accent-dark/10 h-24 w-full rounded-xl bg-gradient-to-br"
            initial={animated ? { scale: 0.9, opacity: 0 } : false}
            animate={animated ? { scale: 1, opacity: 1 } : false}
            transition={{ duration: 0.5, delay: 0.5 }}
          />

          {/* App Grid */}
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-sp-surface-subtle border-sp-border-dark flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border"
                initial={animated ? { y: 20, opacity: 0 } : false}
                animate={animated ? { y: 0, opacity: 1 } : false}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              >
                <div className="bg-sp-accent/50 h-6 w-6 rounded-md" />
                <div className="bg-sp-border-dark h-1 w-8 rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Nav Bar */}
          <motion.div
            className="bg-sp-surface-subtle border-sp-border-dark mt-auto flex h-10 w-full items-center justify-around rounded-2xl border px-2"
            initial={animated ? { y: 20, opacity: 0 } : false}
            animate={animated ? { y: 0, opacity: 1 } : false}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="bg-sp-accent h-1 w-6 rounded-full" />
            <div className="bg-sp-border-dark h-1 w-6 rounded-full" />
            <div className="bg-sp-border-dark h-1 w-6 rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating platform badges (iOS/Android abstract) */}
      <motion.div
        className="border-sp-border-dark bg-sp-surface-subtle absolute top-[30%] left-[15%] z-20 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg"
        animate={animated ? { y: [0, -15, 0], rotate: [0, 5, 0] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Apple-ish icon placeholder */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
      </motion.div>

      <motion.div
        className="border-sp-accent/30 bg-sp-accent/10 absolute right-[15%] bottom-[30%] z-20 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg"
        animate={animated ? { y: [0, 15, 0], rotate: [0, -5, 0] } : undefined}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        {/* Android-ish icon placeholder */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--sp-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 11v8" />
          <path d="M8 19v2" />
          <path d="M16 19v2" />
          <path d="M8 11v4" />
          <path d="M16 11v4" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          <path d="M6 11h12" />
          <path d="M10 4 L8 2" />
          <path d="M14 4 L16 2" />
        </svg>
      </motion.div>
    </div>
  )
}
