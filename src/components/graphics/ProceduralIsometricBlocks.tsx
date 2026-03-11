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
  animated = true
}: ProceduralIsometricBlocksProps) {

  const blocks = Array.from({ length: layers }).map((_, i) => i)

  return (
    <div className={cn('relative w-full h-full flex items-center justify-center bg-sp-bg-dark rounded-2xl overflow-hidden border border-white/5', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-sp-accent/5 via-transparent to-transparent" />
      
      <div 
        className="relative perspective-[1000px] transform-style-3d"
        style={{
          transform: 'rotateX(60deg) rotateZ(-45deg)'
        }}
      >
        {blocks.map((layer, index) => {
          const isTop = index === layers - 1
          const yOffset = index * 40
          
          return (
            <motion.div
              key={layer}
              className="absolute left-1/2 top-1/2"
              initial={animated ? { 
                x: '-50%', 
                y: '-50%', 
                translateZ: 0,
                opacity: 0
              } : {
                x: '-50%', 
                y: '-50%', 
                translateZ: yOffset,
                opacity: 1
              }}
              animate={animated ? { 
                translateZ: yOffset,
                opacity: 1
              } : {}}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              {/* The Block */}
              <motion.div 
                className="relative w-48 h-48 sm:w-64 sm:h-64"
                animate={animated ? {
                  translateZ: [yOffset, yOffset + 10, yOffset]
                } : {}}
                transition={animated ? {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                } : {}}
              >
                {/* Top face */}
                <div className={cn(
                  "absolute inset-0 border border-white/20 transition-colors duration-500",
                  isTop ? "bg-sp-accent/20 border-sp-accent/50 shadow-[inset_0_0_20px_rgba(255,112,67,0.2)]" : "bg-white/5",
                  "backdrop-blur-sm"
                )}>
                  {/* Decorative internal lines on top layer */}
                  {isTop && (
                    <div className="absolute inset-4 border border-sp-accent/30 grid grid-cols-2 grid-rows-2 gap-4 p-4">
                      <div className="bg-sp-accent/40 rounded-sm"></div>
                      <div className="bg-sp-accent/20 rounded-sm"></div>
                      <div className="bg-sp-accent/10 rounded-sm"></div>
                      <div className="bg-sp-accent/30 rounded-sm"></div>
                    </div>
                  )}
                </div>
                
                {/* 3D depth shadows (fake sides since we are just stacking 2D planes in 3D space) */}
                <div className="absolute top-full left-0 w-full h-8 bg-gradient-to-b from-white/10 to-transparent skew-x-[-45deg] origin-top opacity-50" />
                <div className="absolute top-0 left-full w-8 h-full bg-gradient-to-r from-white/10 to-transparent skew-y-[-45deg] origin-left opacity-50" />
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
