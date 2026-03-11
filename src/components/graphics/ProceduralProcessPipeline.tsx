'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralProcessPipelineProps {
  className?: string
  steps?: number
  animated?: boolean
}

export function ProceduralProcessPipeline({ 
  className,
  steps = 4,
  animated = true 
}: ProceduralProcessPipelineProps) {
  
  const pipelineSteps = Array.from({ length: steps }).map((_, i) => i)

  return (
    <div className={cn('relative w-full h-full flex items-center justify-center p-8 bg-sp-bg-dark rounded-2xl border border-white/5 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-sp-accent/5 via-transparent to-sp-accent/10 opacity-50" />
      
      <div className="relative flex flex-col md:flex-row w-full h-full gap-4 md:gap-2 items-center justify-center">
        {pipelineSteps.map((step, index) => (
          <motion.div 
            key={step}
            className="relative flex-1 w-full md:w-auto h-20 md:h-24"
            initial={animated ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
          >
            {/* The chevron shape */}
            <div 
              className={cn(
                "absolute inset-0 bg-white/5 border border-white/10 flex items-center pl-6 pr-10",
                "transition-colors duration-300"
              )}
              style={{
                clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)'
              }}
            >
              {/* Animated highlight flowing through the shape */}
              {animated && (
                <motion.div 
                  className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sp-accent/30 to-transparent"
                  animate={{
                    x: ['-100%', '300%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.3
                  }}
                />
              )}
              
              <div className="relative z-10 flex flex-col gap-2 w-full ml-4">
                <div className="w-8 h-2 rounded-full bg-sp-accent/60" />
                <div className="w-16 h-2 rounded-full bg-white/20" />
              </div>
            </div>
            
            {/* Number Badge */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-sp-bg-dark border border-sp-accent flex items-center justify-center text-xs font-bold text-sp-accent z-10">
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
