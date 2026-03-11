'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMemo } from 'react'

interface ProceduralDataGridProps {
  className?: string
  animated?: boolean
  compact?: boolean
}

export function ProceduralDataGrid({
  className,
  animated = true,
  compact = false,
}: ProceduralDataGridProps) {
  const columns = compact ? 4 : 6
  const dataPointCount = compact ? 2 : 4

  const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
  }

  const bars = useMemo(() => {
    return Array.from({ length: columns }).map((_, i) => ({
      id: i,
      height: 30 + pseudoRandom(i * 10) * 60, // %
      delay: i * 0.1,
      targetHeightOffset: pseudoRandom(i * 10 + 1) * 20 - 10,
      animDuration: 3 + pseudoRandom(i * 10 + 2) * 2,
    }))
  }, [columns])

  const dataPoints = useMemo(() => {
    return Array.from({ length: dataPointCount }).map((_, i) => ({
      id: i,
      width: 40 + pseudoRandom(i * 10 + 3) * 40, // %
      delay: i * 0.15,
      animDuration: 2 + pseudoRandom(i * 10 + 4) * 2,
    }))
  }, [dataPointCount])

  return (
    <div
      className={cn(
        'bg-sp-bg-dark border-sp-border-dark relative flex h-full w-full flex-col overflow-hidden rounded-2xl border',
        compact ? 'gap-3 p-3' : 'gap-6 p-6',
        className
      )}
    >
      {/* Background Grid Lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
      />

      {/* Top Header Mockup */}
      <div
        className={cn(
          'border-sp-border-dark relative z-10 flex items-center justify-between border-b',
          compact ? 'pb-2' : 'pb-4'
        )}
      >
        <div className="flex gap-2">
          <div className="bg-sp-accent/40 h-3 w-10 rounded-full" />
          <div className="bg-sp-border-dark h-3 w-20 rounded-full" />
        </div>
        <div className="border-sp-accent/50 bg-sp-accent/10 flex h-8 w-8 items-center justify-center rounded-full border">
          <div className="bg-sp-accent h-3 w-3 animate-pulse rounded-full" />
        </div>
      </div>

      <div
        className={cn('relative z-10 grid min-h-0 flex-1 grid-cols-2', compact ? 'gap-3' : 'gap-6')}
      >
        {/* Left Column - Bar Chart */}
        <div
          className={cn(
            'border-sp-border-dark bg-sp-surface-subtle flex h-full items-end rounded-xl border',
            compact ? 'gap-1 p-2' : 'gap-2 p-4'
          )}
        >
          {bars.map((bar) => (
            <div
              key={bar.id}
              className="bg-sp-surface-subtle group relative min-w-0 flex-1 rounded-t-sm"
            >
              <motion.div
                className="bg-sp-accent absolute bottom-0 w-full rounded-t-sm shadow-[0_0_10px_rgba(255,112,67,0.3)]"
                initial={animated ? { height: '0%' } : { height: `${bar.height}%` }}
                animate={
                  animated
                    ? {
                        height: [
                          `${bar.height}%`,
                          `${bar.height + bar.targetHeightOffset}%`,
                          `${bar.height}%`,
                        ],
                      }
                    : {}
                }
                transition={
                  animated
                    ? {
                        duration: bar.animDuration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: bar.delay,
                      }
                    : {}
                }
              />
            </div>
          ))}
        </div>

        {/* Right Column - Data List */}
        <div className={cn('flex h-full min-h-0 flex-col', compact ? 'gap-1' : 'gap-3')}>
          {dataPoints.map((point) => (
            <div
              key={point.id}
              className={cn(
                'bg-sp-surface-subtle border-sp-border-dark flex min-h-0 flex-1 flex-col justify-center rounded-xl border',
                compact ? 'gap-1 p-2' : 'gap-2 p-4'
              )}
            >
              <div className="mb-1 flex w-full items-center justify-between">
                <div className="bg-sp-border-dark h-2 w-12 rounded-full" />
                <div className="bg-sp-accent/50 h-2 w-8 rounded-full" />
              </div>
              <motion.div className="bg-sp-surface-hover h-1.5 overflow-hidden rounded-full">
                <motion.div
                  className="bg-sp-accent h-full"
                  initial={animated ? { width: '0%' } : { width: `${point.width}%` }}
                  animate={animated ? { width: `${point.width}%` } : {}}
                  transition={{ duration: 1, delay: point.delay, ease: 'easeOut' }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
