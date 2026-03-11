'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralUIDesignProps {
  className?: string
  animated?: boolean
}

export function ProceduralUIDesign({ className, animated = true }: ProceduralUIDesignProps) {
  // A composition representing wireframes, layout grids, and visual elements assembling
  return (
    <div
      className={cn(
        'bg-sp-bg-dark relative flex h-full w-full items-center justify-center overflow-hidden',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Abstract UI Framework Container */}
      <div className="border-sp-border-dark bg-sp-surface-elevated relative flex h-[70%] w-[70%] flex-col overflow-hidden rounded-xl border shadow-2xl">
        {/* Header bar */}
        <div className="flex h-8 w-full items-center gap-1.5 border-b border-white/10 bg-white/5 px-3">
          <div className="h-2 w-2 rounded-full bg-red-500/80" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <div className="h-2 w-2 rounded-full bg-green-500/80" />
        </div>

        {/* Content Area */}
        <div className="flex flex-1 gap-4 p-4">
          {/* Sidebar */}
          <motion.div
            className="flex h-full w-1/4 flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-2"
            initial={animated ? { x: -20, opacity: 0 } : false}
            animate={animated ? { x: 0, opacity: 1 } : false}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-4 w-3/4 rounded-md bg-white/20" />
            <div className="h-3 w-1/2 rounded-md bg-white/10" />
            <div className="h-3 w-2/3 rounded-md bg-white/10" />
            <div className="h-3 w-5/6 rounded-md bg-white/10" />
          </motion.div>

          {/* Main content grid */}
          <div className="flex flex-1 flex-col gap-4">
            <motion.div
              className="border-sp-accent/50 bg-sp-accent/20 h-24 w-full rounded-lg border"
              initial={animated ? { y: -20, opacity: 0 } : false}
              animate={animated ? { y: 0, opacity: 1 } : false}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <div className="grid flex-1 grid-cols-2 gap-4">
              <motion.div
                className="h-full w-full rounded-lg border border-white/10 bg-white/5"
                initial={animated ? { scale: 0.8, opacity: 0 } : false}
                animate={animated ? { scale: 1, opacity: 1 } : false}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.div
                className="h-full w-full rounded-lg border border-white/10 bg-white/5"
                initial={animated ? { scale: 0.8, opacity: 0 } : false}
                animate={animated ? { scale: 1, opacity: 1 } : false}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI Elements / Cursors */}
      {animated && (
        <>
          <motion.div
            className="absolute z-20 flex flex-col items-center drop-shadow-xl"
            animate={{
              x: [0, 60, -30, 0],
              y: [0, -40, 50, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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
              className="text-white drop-shadow-md"
            >
              <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              <path d="m13 13 6 6" />
            </svg>
            <div className="bg-sp-accent mt-1 rounded-full px-2 py-0.5 text-[8px] font-bold text-white shadow-lg">
              Designing...
            </div>
          </motion.div>

          <motion.div
            className="bg-sp-accent/30 absolute top-1/4 right-1/4 z-20 h-16 w-16 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </>
      )}
    </div>
  )
}
