'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralWebDevProps {
  className?: string
  animated?: boolean
}

export function ProceduralWebDev({ className, animated = true }: ProceduralWebDevProps) {
  // A composition representing code, terminal windows, and server stacks building up
  const linesOfCode = [
    { w: '60%', c: 'bg-sp-surface-hover', delay: 0 },
    { w: '80%', c: 'bg-sp-accent/60', delay: 0.2 },
    { w: '40%', c: 'bg-sp-surface-subtle', delay: 0.4 },
    { w: '70%', c: 'bg-sp-surface-hover', delay: 0.6 },
    { w: '50%', c: 'bg-sp-accent/40', delay: 0.8 },
  ]

  return (
    <div
      className={cn(
        'bg-sp-bg-dark relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-10 mix-blend-overlay" />

      {/* Background glow */}
      <motion.div
        className="bg-sp-accent/20 absolute right-[-10%] bottom-[-10%] h-64 w-64 rounded-full blur-[60px]"
        animate={animated ? { opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] } : undefined}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Code Editor Window */}
      <motion.div
        className="border-sp-border-dark bg-sp-surface-elevated relative z-10 flex h-[65%] w-[60%] flex-col overflow-hidden rounded-xl border shadow-2xl"
        initial={animated ? { y: 20, opacity: 0 } : false}
        animate={animated ? { y: 0, opacity: 1 } : false}
        transition={{ duration: 0.6 }}
      >
        <div className="border-sp-border-dark bg-sp-surface-subtle flex h-6 w-full items-center justify-between border-b px-3">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500/80" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <div className="h-2 w-2 rounded-full bg-green-500/80" />
          </div>
          <div className="text-sp-text-muted text-[8px] tracking-widest">app.tsx</div>
        </div>
        <div className="flex flex-col gap-3 p-4">
          {linesOfCode.map((line, i) => (
            <motion.div
              key={i}
              className={cn('h-2 rounded-full', line.c)}
              style={{ width: line.w }}
              initial={animated ? { width: 0, opacity: 0 } : false}
              animate={animated ? { width: line.w, opacity: 1 } : false}
              transition={{ duration: 0.8, delay: 0.5 + line.delay, ease: 'easeOut' }}
            />
          ))}
          {animated && (
            <motion.div
              className="bg-sp-accent mt-1 h-3 w-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>
      </motion.div>

      {/* Floating Server Rack / Database Node 1 */}
      <motion.div
        className="border-sp-border-dark bg-sp-surface-elevated absolute bottom-[15%] left-[10%] z-20 flex h-16 w-32 flex-col justify-center gap-1 rounded-lg border p-2 shadow-xl"
        initial={animated ? { x: -20, opacity: 0 } : false}
        animate={animated ? { x: 0, opacity: 1 } : false}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <div className="bg-sp-surface-hover h-1.5 w-16 rounded-full" />
        </div>
        <div className="bg-sp-surface-subtle border-sp-border-dark h-1.5 w-full rounded-full border" />
        <div className="bg-sp-surface-subtle border-sp-border-dark h-1.5 w-3/4 rounded-full border" />
      </motion.div>

      {/* Floating Server Rack / Database Node 2 */}
      <motion.div
        className="border-sp-accent/30 bg-sp-accent/10 absolute top-[20%] right-[10%] z-0 flex h-20 w-24 flex-col items-center justify-center rounded-lg border shadow-xl"
        initial={animated ? { x: 20, opacity: 0 } : false}
        animate={animated ? { x: 0, opacity: 1 } : false}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-sp-accent mb-2"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
        <div className="bg-sp-accent/50 h-1 w-8 rounded-full" />
      </motion.div>

      {/* Connecting animated data line */}
      {animated && (
        <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full">
          <motion.path
            d="M 20% 85% C 40% 85%, 30% 60%, 50% 65%"
            fill="none"
            stroke="var(--sp-accent)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <motion.path
            d="M 80% 20% C 70% 20%, 75% 50%, 60% 35%"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </svg>
      )}
    </div>
  )
}
