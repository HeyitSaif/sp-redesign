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
  const blocks = Array.from({ length: layers }).map((_, i) => i)

  return (
    <div
      className={cn(
        'bg-sp-bg-dark relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5',
        className
      )}
    >
      <div className="from-sp-accent/5 absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] via-transparent to-transparent" />

      <div
        className="transform-style-3d relative perspective-[1000px]"
        style={{
          transform: 'rotateX(60deg) rotateZ(-45deg)',
        }}
      >
        {blocks.map((layer, index) => {
          const isTop = index === layers - 1
          const yOffset = index * 40

          return (
            <motion.div
              key={layer}
              className="absolute top-1/2 left-1/2"
              initial={
                animated
                  ? {
                      x: '-50%',
                      y: '-50%',
                      translateZ: 0,
                      opacity: 0,
                    }
                  : {
                      x: '-50%',
                      y: '-50%',
                      translateZ: yOffset,
                      opacity: 1,
                    }
              }
              animate={
                animated
                  ? {
                      translateZ: yOffset,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
            >
              {/* The Block */}
              <motion.div
                className="relative h-48 w-48 sm:h-64 sm:w-64"
                animate={
                  animated
                    ? {
                        translateZ: [yOffset, yOffset + 10, yOffset],
                      }
                    : {}
                }
                transition={
                  animated
                    ? {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }
                    : {}
                }
              >
                {/* Top face */}
                <div
                  className={cn(
                    'absolute inset-0 border transition-colors duration-500',
                    isTop
                      ? 'bg-sp-accent/20 border-sp-accent/50 shadow-[inset_0_0_20px_rgba(255,112,67,0.2)]'
                      : 'bg-sp-surface-subtle border-sp-border-dark'
                  )}
                >
                  {/* Decorative internal lines on top layer */}
                  {isTop && (
                    <div className="border-sp-accent/30 absolute inset-4 grid grid-cols-2 grid-rows-2 gap-4 border p-4">
                      <div className="bg-sp-accent/40 rounded-sm"></div>
                      <div className="bg-sp-accent/20 rounded-sm"></div>
                      <div className="bg-sp-accent/10 rounded-sm"></div>
                      <div className="bg-sp-accent/30 rounded-sm"></div>
                    </div>
                  )}
                </div>

                {/* 3D depth shadows (fake sides since we are just stacking 2D planes in 3D space) */}
                <div className="absolute top-full left-0 h-8 w-full origin-top skew-x-[-45deg] bg-gradient-to-b from-white/10 to-transparent opacity-50" />
                <div className="absolute top-0 left-full h-full w-8 origin-left skew-y-[-45deg] bg-gradient-to-r from-white/10 to-transparent opacity-50" />
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
