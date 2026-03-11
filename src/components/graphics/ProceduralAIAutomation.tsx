'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralAIAutomationProps {
  className?: string
  animated?: boolean
}

export function ProceduralAIAutomation({
  className,
  animated = true,
}: ProceduralAIAutomationProps) {
  // A glowing central orb connected to multiple processing nodes
  const nodes = [
    { x: '20%', y: '30%', size: 16, delay: 0.2 },
    { x: '80%', y: '25%', size: 24, delay: 0.5 },
    { x: '75%', y: '75%', size: 18, delay: 0.8 },
    { x: '25%', y: '80%', size: 20, delay: 1.1 },
    { x: '15%', y: '55%', size: 12, delay: 1.4 },
    { x: '85%', y: '50%', size: 14, delay: 1.7 },
  ]

  return (
    <div
      className={cn(
        'bg-sp-bg-dark relative flex h-full w-full items-center justify-center overflow-hidden',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      {/* Ambient background glow */}
      <motion.div
        className="bg-sp-accent/20 absolute h-64 w-64 rounded-full blur-[80px]"
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }
            : undefined
        }
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Connection lines to center */}
      <svg className="absolute inset-0 h-full w-full opacity-30">
        <defs>
          <linearGradient id="ai-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--sp-accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--sp-accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--sp-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => (
          <motion.line
            key={`line-${i}`}
            x1="50%"
            y1="50%"
            x2={node.x}
            y2={node.y}
            stroke="url(#ai-line-gradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              animated
                ? {
                    pathLength: [0, 1, 1],
                    opacity: [0, 1, 0],
                  }
                : { pathLength: 1, opacity: 1 }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.delay,
              ease: 'linear',
            }}
          />
        ))}
      </svg>

      {/* Central brain/core node */}
      <motion.div
        className="border-sp-accent bg-sp-bg-dark z-10 flex h-24 w-24 items-center justify-center rounded-full border shadow-[0_0_40px_rgba(255,112,67,0.4)]"
        animate={
          animated
            ? {
                boxShadow: [
                  '0 0 20px rgba(255,112,67,0.4)',
                  '0 0 60px rgba(255,112,67,0.8)',
                  '0 0 20px rgba(255,112,67,0.4)',
                ],
              }
            : undefined
        }
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="bg-sp-accent/80 h-12 w-12 rounded-full blur-[8px]" />
        <div className="absolute h-8 w-8 rounded-full bg-white" />
      </motion.div>

      {/* Peripheral nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={`node-${i}`}
          className="bg-sp-bg-medium absolute z-10 rounded-full border border-white/20"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
            transform: 'translate(-50%, -50%)',
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.5, 1],
                  borderColor: [
                    'rgba(255,255,255,0.2)',
                    'rgba(255,112,67,0.8)',
                    'rgba(255,255,255,0.2)',
                  ],
                }
              : undefined
          }
          transition={{ duration: 2, repeat: Infinity, delay: node.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Scanning laser line */}
      {animated && (
        <motion.div
          className="bg-sp-accent absolute inset-x-0 h-[2px] opacity-50 shadow-[0_0_10px_rgba(255,112,67,1)]"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </div>
  )
}
