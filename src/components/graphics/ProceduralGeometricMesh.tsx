'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralGeometricMeshProps {
  className?: string
  variant?: 'circle' | 'square' | 'mixed'
  animated?: boolean
}

export function ProceduralGeometricMesh({ 
  className,
  variant = 'mixed',
  animated = true 
}: ProceduralGeometricMeshProps) {
  
  return (
    <div className={cn('relative w-full h-full bg-sp-bg-dark rounded-2xl overflow-hidden border border-white/5', className)}>
      {/* Base Grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {/* Glow 1 */}
        <motion.div 
          className="absolute w-64 h-64 bg-sp-accent/20 rounded-full blur-[60px]"
          animate={animated ? { 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          } : {}}
          transition={animated ? { duration: 8, repeat: Infinity, ease: "easeInOut" } : {}}
        />
        
        {/* Glow 2 */}
        <motion.div 
          className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]"
          animate={animated ? { 
            scale: [1, 1.5, 1],
            x: [0, -60, 0],
            y: [0, 40, 0]
          } : {}}
          transition={animated ? { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 } : {}}
        />

        {/* Geometric Shapes based on variant */}
        {(variant === 'circle' || variant === 'mixed') && (
          <motion.div 
            className="absolute w-40 h-40 border-[1px] border-sp-accent/40 rounded-full"
            animate={animated ? { rotate: 360, scale: [1, 1.05, 1] } : {}}
            transition={animated ? { duration: 20, repeat: Infinity, ease: "linear" } : {}}
          />
        )}

        {(variant === 'square' || variant === 'mixed') && (
          <motion.div 
            className="absolute w-48 h-48 border-[1px] border-white/10 rounded-3xl"
            animate={animated ? { rotate: -360 } : {}}
            transition={animated ? { duration: 25, repeat: Infinity, ease: "linear" } : {}}
            style={{
              backdropFilter: 'blur(2px)'
            }}
          />
        )}
        
        {(variant === 'mixed') && (
          <motion.div 
            className="absolute w-32 h-32 border-[2px] border-dashed border-sp-accent/30 rounded-full"
            animate={animated ? { rotate: 360 } : {}}
            transition={animated ? { duration: 15, repeat: Infinity, ease: "linear" } : {}}
          />
        )}

        {/* Small floating dots */}
        {animated && Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/50"
            initial={{ 
              x: (Math.random() - 0.5) * 200, 
              y: (Math.random() - 0.5) * 200 
            }}
            animate={{ 
              y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200 - 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  )
}
