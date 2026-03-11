'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FloatiesBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Circle 1 */}
      <motion.div
        className="bg-sp-accent/5 absolute top-[10%] left-[5%] h-64 w-64 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Pill 1 */}
      <motion.div
        className="bg-sp-accent/5 absolute top-[40%] right-[10%] h-32 w-80 rotate-45 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Circle 2 */}
      <motion.div
        className="bg-sp-accent/5 absolute bottom-[20%] left-[20%] h-96 w-96 rounded-full blur-3xl"
        animate={{
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* SVG Shape 1 (Blob) */}
      <motion.div
        className="absolute top-[20%] right-[30%] opacity-[0.03] mix-blend-overlay"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-96 w-96">
          <path
            fill="#ffffff"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87.1,14.6,81.5,29.1,73.1,41.4C64.7,53.6,53.4,63.5,40.3,70.8C27.2,78.2,13.6,83.1,-0.7,84.4C-15.1,85.6,-30.2,83.2,-43.3,75.8C-56.5,68.4,-67.7,56.1,-75.4,42C-83.1,27.9,-87.3,13.9,-86.6,0.4C-85.9,-13.2,-80.3,-26.3,-72.4,-38.1C-64.4,-49.8,-54,-60.1,-41.5,-68.2C-29,-76.4,-14.5,-82.4,0.7,-83.7C15.9,-85,31.8,-81.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* SVG Shape 2 (Outline Blob) */}
      <motion.div
        className="absolute right-[5%] bottom-[10%] opacity-[0.05]"
        animate={{
          rotate: [360, 270, 180, 90, 0],
          y: [0, -30, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-80 w-80">
          <path
            fill="none"
            stroke="var(--sp-accent)"
            strokeWidth="2"
            d="M51.6,-66.2C64.9,-54.6,72.4,-36.5,75.9,-18.2C79.3,0.1,78.7,18.6,71.2,34.3C63.7,50,49.3,62.8,32.7,69.5C16.1,76.2,-2.7,76.9,-20.9,71.6C-39.1,66.4,-56.7,55.2,-67.7,40.1C-78.7,25,-83.1,5.9,-79.8,-11.7C-76.4,-29.3,-65.3,-45.5,-50.8,-56.7C-36.3,-68,-18.1,-74.3,0.5,-74.9C19,-75.5,38.3,-77.8,51.6,-66.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
    </div>
  )
}
