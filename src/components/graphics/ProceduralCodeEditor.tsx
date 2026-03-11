'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProceduralCodeEditorProps {
  className?: string
  animated?: boolean
}

export function ProceduralCodeEditor({ 
  className,
  animated = true 
}: ProceduralCodeEditorProps) {
  
  // Representing lines of code: indent level, widths of segments, color class
  const lines = [
    { indent: 0, segments: [{ w: 10, c: 'bg-purple-400' }, { w: 15, c: 'bg-blue-400' }, { w: 20, c: 'bg-gray-400' }] },
    { indent: 1, segments: [{ w: 12, c: 'bg-sp-accent' }, { w: 25, c: 'bg-gray-300' }] },
    { indent: 1, segments: [{ w: 8, c: 'bg-blue-400' }, { w: 30, c: 'bg-gray-400' }, { w: 15, c: 'bg-green-400' }] },
    { indent: 2, segments: [{ w: 15, c: 'bg-sp-accent' }, { w: 10, c: 'bg-gray-300' }, { w: 25, c: 'bg-yellow-400' }] },
    { indent: 2, segments: [{ w: 20, c: 'bg-blue-400' }, { w: 35, c: 'bg-gray-400' }] },
    { indent: 1, segments: [{ w: 8, c: 'bg-gray-500' }] },
    { indent: 1, segments: [{ w: 12, c: 'bg-sp-accent' }, { w: 40, c: 'bg-gray-300' }] },
    { indent: 0, segments: [{ w: 8, c: 'bg-gray-500' }] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
  }

  return (
    <div className={cn('relative w-full h-full flex flex-col bg-[#1e1e2e] rounded-xl overflow-hidden border border-white/10 shadow-2xl', className)}>
      {/* Mac window controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d3f] border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>

      {/* Editor Content */}
      <motion.div 
        className="flex-1 p-5 flex flex-col gap-3 font-mono text-sm overflow-hidden"
        variants={animated ? containerVariants : undefined}
        initial={animated ? "hidden" : "show"}
        animate="show"
      >
        {lines.map((line, i) => (
          <motion.div 
            key={i} 
            className="flex items-center gap-2"
            style={{ paddingLeft: `${line.indent * 1.5}rem` }}
            variants={animated ? lineVariants : undefined}
          >
            <span className="text-gray-600 select-none mr-2 w-4 text-right opacity-50 text-xs">
              {i + 1}
            </span>
            {line.segments.map((seg, j) => (
              <div 
                key={j} 
                className={cn('h-2.5 rounded-full opacity-80', seg.c)}
                style={{ width: `${seg.w}%` }} 
              />
            ))}
          </motion.div>
        ))}
        
        {/* Blinking Cursor */}
        <motion.div 
          className="w-2 h-4 bg-sp-accent ml-8 mt-1"
          animate={animated ? { opacity: [1, 0, 1] } : {}}
          transition={animated ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
        />
      </motion.div>
    </div>
  )
}
