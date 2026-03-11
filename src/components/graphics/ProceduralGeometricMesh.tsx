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
  animated = true,
}: ProceduralGeometricMeshProps) {
  let coreShape = 'rounded-[2rem]'
  let CoreIcon = NeuralIcon

  if (variant === 'square') {
    coreShape = 'rounded-2xl'
    CoreIcon = ChipIcon
  } else if (variant === 'circle') {
    coreShape = 'rounded-full'
    CoreIcon = CoreCircleIcon
  }

  const nodes = [
    {
      id: 'db',
      x: '22%',
      y: '22%',
      flow: -20, // towards center
      delay: 0.2,
      icon: (
        <svg viewBox="0 0 24 24" className="text-sp-accent/80 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      shape: 'rounded-xl',
    },
    {
      id: 'chart',
      x: '78%',
      y: '28%',
      flow: 20, // away from center
      delay: 0.3,
      icon: (
        <svg viewBox="0 0 24 24" className="text-sp-accent/80 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      shape: 'rounded-full',
    },
    {
      id: 'logic',
      x: '26%',
      y: '76%',
      flow: -20, // towards center
      delay: 0.4,
      icon: (
        <svg viewBox="0 0 24 24" className="text-sp-accent/80 h-5 w-5 -rotate-45" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      shape: 'rounded-lg rotate-45',
    },
    {
      id: 'security',
      x: '76%',
      y: '72%',
      flow: 20, // away from center
      delay: 0.5,
      icon: (
        <svg viewBox="0 0 24 24" className="text-sp-accent/80 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      shape: 'rounded-xl',
    },
  ]

  return (
    <div
      className={cn(
        'bg-sp-bg-dark border-sp-border-dark relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border',
        className
      )}
    >
      {/* Base Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
        aria-hidden
      />

      {/* Ambient blur orbs per design patterns */}
      <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-sp-accent/5 absolute top-[15%] left-[10%] h-[40%] w-[40%] rounded-full blur-[120px]" />
        <div className="bg-sp-accent/10 absolute right-[10%] bottom-[15%] h-[35%] w-[35%] rounded-full blur-[120px]" />
      </div>

      {/* Connecting Lines */}
      <svg className="text-sp-accent absolute inset-0 h-full w-full pointer-events-none" aria-hidden>
        {nodes.map((node) => (
          <motion.line
            key={`line-${node.id}`}
            x1={node.x}
            y1={node.y}
            x2="50%"
            y2="50%"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            initial={animated ? { strokeDashoffset: 0, opacity: 0 } : { strokeDashoffset: 0, opacity: 1 }}
            animate={
              animated
                ? { strokeDashoffset: node.flow, opacity: 1 }
                : { strokeDashoffset: 0, opacity: 1 }
            }
            transition={
              animated
                ? {
                    strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 0.5, delay: node.delay },
                  }
                : undefined
            }
          />
        ))}
      </svg>

      {/* Satellite Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={`node-${node.id}`}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          initial={animated ? { opacity: 0, scale: 0.5, x: '-50%', y: '-50%' } : { opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          transition={{ duration: 0.5, delay: node.delay, ease: 'easeOut' }}
        >
          <div
            className={cn(
              'border-sp-border-dark bg-sp-surface-subtle flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border shadow-lg',
              node.shape
            )}
          >
            {node.icon}
          </div>
        </motion.div>
      ))}

      {/* Central Core */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={animated ? { opacity: 0, scale: 0.8 } : undefined}
        animate={animated ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className={cn(
            'border-sp-accent/50 bg-sp-accent/10 relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center border shadow-[0_0_32px_rgba(255,112,67,0.2)]',
            coreShape
          )}
        >
          {animated && (
            <motion.div
              className={cn('border-sp-accent/30 absolute inset-0 border', coreShape)}
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <CoreIcon />
        </div>
      </motion.div>
    </div>
  )
}

function NeuralIcon() {
  return (
    <svg viewBox="0 0 40 40" className="text-sp-accent h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
      <circle cx="20" cy="20" r="6" fill="currentColor" />
      <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="20" y1="2" x2="20" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="32" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
      <line x1="2" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="32" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="text-sp-accent h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  )
}

function CoreCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="text-sp-accent h-10 w-10 sm:h-12 sm:w-12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.4" />
      <line x1="12" y1="2" x2="12" y2="8" strokeDasharray="2 2" />
      <line x1="12" y1="16" x2="12" y2="22" strokeDasharray="2 2" />
      <line x1="2" y1="12" x2="8" y2="12" strokeDasharray="2 2" />
      <line x1="16" y1="12" x2="22" y2="12" strokeDasharray="2 2" />
    </svg>
  )
}
