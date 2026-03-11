'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMemo } from 'react'

interface Node {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

interface ProceduralNetworkProps {
  className?: string
  nodeCount?: number
  animated?: boolean
}

export function ProceduralNetwork({ 
  className, 
  nodeCount = 15,
  animated = true 
}: ProceduralNetworkProps) {
  
  const nodes = useMemo<Node[]>(() => {
    return Array.from({ length: nodeCount }).map((_, i) => ({
      id: i,
      x: 10 + Math.random() * 80, // % from left
      y: 10 + Math.random() * 80, // % from top
      size: 4 + Math.random() * 8, // px
      delay: Math.random() * 5,
    }))
  }, [nodeCount])

  // Create connections between close nodes
  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Connect if close enough (arbitrary % distance)
        if (distance < 30) {
          lines.push({
            id: `${i}-${j}`,
            start: nodes[i],
            end: nodes[j],
            opacity: 1 - distance / 30
          })
        }
      }
    }
    return lines
  }, [nodes])

  return (
    <div className={cn('relative w-full h-full overflow-hidden bg-sp-bg-dark rounded-2xl border border-white/5', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sp-accent/10 via-transparent to-transparent" />
      
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {connections.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.start.x}%`}
            y1={`${line.start.y}%`}
            x2={`${line.end.x}%`}
            y2={`${line.end.y}%`}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: line.opacity * 0.5 }}
            animate={animated ? { 
              pathLength: 1, 
              opacity: line.opacity * 0.5 
            } : {}}
            transition={{ 
              duration: 2, 
              delay: (line.start.delay + line.end.delay) / 2,
              ease: "easeInOut" 
            }}
          />
        ))}
      </svg>

      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-sp-accent shadow-[0_0_15px_rgba(255,112,67,0.8)]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            x: '-50%',
            y: '-50%'
          }}
          initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          animate={animated ? { 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          } : {}}
          transition={animated ? {
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut"
          } : {}}
        />
      ))}
    </div>
  )
}
