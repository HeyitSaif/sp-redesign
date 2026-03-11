'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralProcessPipelineProps {
  className?: string
  steps?: number
  animated?: boolean
  compact?: boolean
}

export function ProceduralProcessPipeline({
  className,
  steps = 4,
  animated = true,
  compact = false,
}: ProceduralProcessPipelineProps) {
  const stepCount = compact ? 3 : steps
  const pipelineSteps = Array.from({ length: stepCount }).map((_, i) => i)

  return (
    <div
      className={cn(
        'bg-sp-bg-dark border-sp-border-dark relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border',
        compact ? 'p-3' : 'p-8',
        className
      )}
    >
      <div className="from-sp-accent/5 to-sp-accent/10 absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] via-transparent opacity-50" />

      <div
        className={cn(
          'relative flex h-full w-full items-center justify-center',
          compact ? 'flex-row gap-1' : 'flex-col gap-4 md:flex-row md:gap-2'
        )}
      >
        {pipelineSteps.map((step, index) => (
          <motion.div
            key={step}
            className={cn(
              'relative flex-1',
              compact ? 'h-10 min-w-[60px]' : 'h-20 w-full md:h-24 md:w-auto'
            )}
            initial={animated ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
          >
            {/* The chevron shape */}
            <div
              className={cn(
                'absolute inset-0 flex items-center transition-colors duration-300',
                compact
                  ? 'bg-sp-surface-subtle border-sp-border-dark border pr-6 pl-4'
                  : 'bg-sp-surface-subtle border-sp-border-dark border pr-10 pl-6'
              )}
              style={{
                clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)',
              }}
            >
              {/* Animated highlight flowing through the shape */}
              {animated && (
                <motion.div
                  className="via-sp-accent/30 absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent to-transparent"
                  animate={{
                    x: ['-100%', '300%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.3,
                  }}
                />
              )}

              <div
                className={cn(
                  'relative z-10 flex w-full flex-col',
                  compact ? 'ml-2 gap-0.5' : 'ml-4 gap-2'
                )}
              >
                <div
                  className={cn('bg-sp-accent/60 rounded-full', compact ? 'h-1 w-4' : 'h-2 w-8')}
                />
                <div
                  className={cn(
                    'bg-sp-text-muted/40 rounded-full',
                    compact ? 'h-1 w-8' : 'h-2 w-16'
                  )}
                />
              </div>
            </div>

            {/* Number Badge */}
            <div
              className={cn(
                'bg-sp-bg-dark border-sp-accent text-sp-accent absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border font-bold',
                compact ? 'left-1.5 h-4 w-4 text-[8px]' : 'left-4 h-6 w-6 text-xs'
              )}
            >
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
