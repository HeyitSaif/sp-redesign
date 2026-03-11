'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralDataGridProps {
  className?: string
  animated?: boolean
}

export function ProceduralDataGrid({ 
  className,
  animated = true 
}: ProceduralDataGridProps) {
  
  const columns = 6
  const bars = Array.from({ length: columns }).map((_, i) => ({
    id: i,
    height: 30 + Math.random() * 60, // %
    delay: i * 0.1
  }))

  const dataPoints = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    width: 40 + Math.random() * 40, // %
    delay: i * 0.15
  }))

  return (
    <div className={cn('relative w-full h-full bg-sp-bg-dark rounded-2xl border border-white/5 p-6 flex flex-col gap-6 overflow-hidden', className)}>
      {/* Background Grid Lines */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem'
        }}
      />

      {/* Top Header Mockup */}
      <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex gap-2">
          <div className="w-10 h-3 rounded-full bg-sp-accent/40" />
          <div className="w-20 h-3 rounded-full bg-white/10" />
        </div>
        <div className="w-8 h-8 rounded-full border border-sp-accent/50 bg-sp-accent/10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-sp-accent animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-6">
        {/* Left Column - Bar Chart */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex items-end gap-2 h-full">
          {bars.map(bar => (
            <div key={bar.id} className="flex-1 bg-white/5 rounded-t-sm relative group">
              <motion.div 
                className="absolute bottom-0 w-full bg-sp-accent rounded-t-sm shadow-[0_0_10px_rgba(255,112,67,0.3)]"
                initial={animated ? { height: '0%' } : { height: `${bar.height}%` }}
                animate={animated ? { 
                  height: [`${bar.height}%`, `${bar.height + (Math.random() * 20 - 10)}%`, `${bar.height}%`] 
                } : {}}
                transition={animated ? {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bar.delay
                } : {}}
              />
            </div>
          ))}
        </div>

        {/* Right Column - Data List */}
        <div className="flex flex-col gap-3 h-full">
          {dataPoints.map(point => (
            <div key={point.id} className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-center gap-2">
              <div className="w-full flex justify-between items-center mb-1">
                <div className="w-12 h-2 rounded-full bg-white/20" />
                <div className="w-8 h-2 rounded-full bg-sp-accent/50" />
              </div>
              <motion.div 
                className="h-1.5 rounded-full bg-white/10 overflow-hidden"
              >
                <motion.div 
                  className="h-full bg-sp-accent"
                  initial={animated ? { width: '0%' } : { width: `${point.width}%` }}
                  animate={animated ? { width: `${point.width}%` } : {}}
                  transition={{ duration: 1, delay: point.delay, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
