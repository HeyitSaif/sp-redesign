'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralAIAutomationProps {
  className?: string
  animated?: boolean
}

export function ProceduralAIAutomation({
  className,
  animated = true,
}: ProceduralAIAutomationProps) {
  return (
    <div
      className={cn(
        'bg-sp-bg-dark relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      {/* Ambient blur orbs per design patterns */}
      <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <div className="bg-sp-accent/5 absolute top-[20%] left-[10%] h-[35%] w-[35%] rounded-full blur-[120px]" />
        <div className="bg-sp-accent/10 absolute right-[10%] bottom-[20%] h-[30%] w-[30%] rounded-full blur-[120px]" />
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="from-sp-accent/5 to-sp-accent/5 absolute inset-0 bg-linear-to-r via-transparent opacity-60"
        aria-hidden
      />

      {/* Flow pipeline: Input → AI Core → Output */}
      <div className="relative z-10 flex w-full max-w-[90%] items-center justify-between gap-1 sm:gap-3">
        {/* Input node: document/data stack */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={animated ? { opacity: 0, x: -12 } : undefined}
          animate={animated ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0, ease: 'easeOut' }}
        >
          <div className="border-sp-border-dark bg-sp-surface-subtle flex h-14 w-14 items-center justify-center rounded-xl border">
            <div className="flex flex-col gap-0.5">
              <div className="bg-sp-surface-hover h-2 w-6 rounded-sm" />
              <div className="bg-sp-border-dark h-2 w-5 rounded-sm" />
              <div className="bg-sp-border-dark h-2 w-4 rounded-sm" />
            </div>
          </div>
        </motion.div>

        {/* Connector + flowing particles */}
        <div className="relative max-w-[20%] min-w-[12%] flex-1">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="ai-flow-in" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--sp-accent)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--sp-accent)" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="ai-flow-out" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--sp-accent)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--sp-accent)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line
              x1="0"
              y1="25"
              x2="100"
              y2="25"
              stroke="url(#ai-flow-in)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          </svg>
          {animated && (
            <motion.div
              className="bg-sp-accent/60 absolute top-1/2 left-0 h-1 w-6 -translate-y-1/2 rounded-full"
              animate={{ x: ['0%', '600%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>

        {/* AI Core node: neural/processing center */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={animated ? { opacity: 0, scale: 0.9 } : undefined}
          animate={animated ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="border-sp-accent/50 bg-sp-accent/10 relative flex h-16 w-16 items-center justify-center rounded-2xl border shadow-[0_0_24px_rgba(255,112,67,0.15)]">
            {animated && (
              <motion.div
                className="border-sp-accent/20 absolute inset-0 rounded-2xl border"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            {/* Neural node icon: connected dots */}
            <svg viewBox="0 0 32 32" className="text-sp-accent h-8 w-8" aria-hidden>
              <circle cx="16" cy="16" r="3" fill="currentColor" />
              <circle cx="8" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
              <circle cx="24" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
              <circle cx="8" cy="22" r="1.5" fill="currentColor" opacity="0.6" />
              <circle cx="24" cy="22" r="1.5" fill="currentColor" opacity="0.6" />
              <line
                x1="16"
                y1="16"
                x2="8"
                y2="10"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.4"
              />
              <line
                x1="16"
                y1="16"
                x2="24"
                y2="10"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.4"
              />
              <line
                x1="16"
                y1="16"
                x2="8"
                y2="22"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.4"
              />
              <line
                x1="16"
                y1="16"
                x2="24"
                y2="22"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.4"
              />
            </svg>
          </div>
        </motion.div>

        {/* Connector + flowing particles (AI → Output) */}
        <div className="relative max-w-[20%] min-w-[12%] flex-1">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line
              x1="0"
              y1="25"
              x2="100"
              y2="25"
              stroke="url(#ai-flow-out)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          </svg>
          {animated && (
            <motion.div
              className="bg-sp-accent/60 absolute top-1/2 left-0 h-1 w-6 -translate-y-1/2 rounded-full"
              animate={{ x: ['0%', '600%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.75 }}
            />
          )}
        </div>

        {/* Output node: automation/check */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={animated ? { opacity: 0, x: 12 } : undefined}
          animate={animated ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="border-sp-border-dark bg-sp-surface-subtle flex h-14 w-14 items-center justify-center rounded-xl border">
            <svg viewBox="0 0 24 24" className="text-sp-accent h-7 w-7" aria-hidden>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12l4 4 10-10"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
