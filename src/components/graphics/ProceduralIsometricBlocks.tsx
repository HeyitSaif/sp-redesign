'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralIsometricBlocksProps {
  className?: string
  layers?: number
  animated?: boolean
}

export function ProceduralIsometricBlocks({
  className,
  layers = 3,
  animated = true,
}: ProceduralIsometricBlocksProps) {
  const showMiddle = layers >= 3

  return (
    <div
      className={cn(
        'bg-sp-bg-dark border-sp-border-dark relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border p-6 sm:gap-6 sm:p-8',
        className
      )}
    >
      <div className="from-sp-accent/5 absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent" />

      {/* Vertical Connector Line */}
      <div className="absolute inset-y-12 left-1/2 z-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-sp-border-dark to-transparent" />

      {animated && (
        <motion.div
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="via-sp-accent absolute left-1/2 z-0 h-24 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent to-transparent shadow-[0_0_8px_rgba(255,112,67,0.5)]"
        />
      )}

      {/* Top Layer: UI/Experience */}
      <motion.div
        initial={animated ? { opacity: 0, y: 30 } : false}
        animate={animated ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        className="bg-sp-surface-elevated border-sp-border-dark relative z-30 flex h-20 w-10/12 max-w-[20rem] items-center overflow-hidden rounded-xl border p-4 shadow-lg sm:h-24"
      >
        <div className="flex w-full items-center gap-4">
          <div className="bg-sp-surface-subtle border-sp-border-dark flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
            <div className="bg-sp-accent/20 border-sp-accent/50 relative h-3 w-3 rounded-full border">
              {animated && (
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="bg-sp-accent/40 absolute inset-0 rounded-full blur-[2px]"
                />
              )}
            </div>
          </div>
          <div className="flex grow flex-col gap-2.5">
            <div className="bg-sp-surface-subtle h-2.5 w-1/3 rounded-full" />
            <div className="bg-sp-border-dark h-1.5 w-3/4 rounded-full" />
            <div className="bg-sp-border-dark h-1.5 w-1/2 rounded-full" />
          </div>
        </div>

        {/* Subtle glass reflection sweep */}
        {animated && (
          <motion.div
            animate={{ left: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }}
            className="via-sp-accent/5 absolute top-0 bottom-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-transparent"
          />
        )}
      </motion.div>

      {/* Middle Layer: Logic/API */}
      {showMiddle && (
        <motion.div
          initial={animated ? { opacity: 0, y: 30 } : false}
          animate={animated ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="bg-sp-surface-elevated border-sp-border-dark relative z-20 flex h-20 w-11/12 max-w-[22rem] items-center justify-between overflow-hidden rounded-xl border p-4 shadow-lg sm:h-24"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
            <div className="bg-sp-border-dark relative h-[1px] w-full">
              {animated && (
                <motion.div
                  animate={{ left: ['0%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  className="bg-sp-accent absolute top-1/2 h-[1px] w-12 -translate-y-1/2 shadow-[0_0_8px_rgba(255,112,67,0.8)]"
                />
              )}
            </div>
          </div>
          <div className="bg-sp-surface-subtle border-sp-border-dark z-10 flex h-8 w-8 items-center justify-center rounded-lg border">
            <div className="bg-sp-text-muted h-1.5 w-1.5 rounded-full" />
          </div>
          <div className="bg-sp-bg-dark border-sp-accent/30 z-10 relative flex h-10 w-10 items-center justify-center rounded-lg border shadow-[0_0_15px_rgba(255,112,67,0.15)]">
            {animated && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="border-sp-accent/40 absolute inset-0 rounded-lg border border-dashed"
              />
            )}
            <div className="bg-sp-accent h-2.5 w-2.5 rounded-sm" />
          </div>
          <div className="bg-sp-surface-subtle border-sp-border-dark z-10 flex h-8 w-8 items-center justify-center rounded-lg border">
            <div className="bg-sp-text-muted h-1.5 w-1.5 rounded-full" />
          </div>
        </motion.div>
      )}

      {/* Bottom Layer: Infrastructure/Data */}
      <motion.div
        initial={animated ? { opacity: 0, y: 30 } : false}
        animate={animated ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.7, delay: 0, ease: 'easeOut' }}
        className="bg-sp-surface-elevated border-sp-border-dark relative z-10 flex h-20 w-full max-w-sm items-end justify-center overflow-hidden rounded-xl border px-3 pt-4 shadow-lg sm:h-24"
      >
        <div className="flex h-full w-full items-end justify-between gap-1 sm:gap-2">
          {[40, 70, 50, 90, 60, 30, 80].map((h, i) => (
            <div
              key={i}
              className="bg-sp-surface-subtle border-sp-border-dark relative flex-1 overflow-hidden rounded-t-md border-x border-t"
              style={{ height: `${h}%` }}
            >
              {animated && (
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: ['100%', '-100%'] }}
                  transition={{
                    duration: 1.5 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'linear',
                  }}
                  className="via-sp-accent/30 absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-transparent to-transparent"
                />
              )}
            </div>
          ))}
        </div>
        <div className="from-sp-bg-dark/90 pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t to-transparent" />
      </motion.div>
    </div>
  )
}
