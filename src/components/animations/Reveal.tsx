'use client'

import { motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  repeat?: boolean
}

export const Reveal = ({
  children,
  width = '100%',
  delay = 0,
  className,
  direction = 'up',
  repeat = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const isInView = useInView(ref, { once: !repeat, margin: '-8% 0px' })

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = lastScrollY.current
    if (current > previous) setScrollDirection('down')
    if (current < previous) setScrollDirection('up')
    lastScrollY.current = current
  })

  const distance = 120
  const scaleIn = 0.92

  const axisMap = {
    up: { axis: 'y', value: distance },
    down: { axis: 'y', value: -distance },
    left: { axis: 'x', value: distance },
    right: { axis: 'x', value: -distance },
  } as const

  const activeAxis = axisMap[direction]
  const forwardOffset = activeAxis.axis === 'x' ? { x: activeAxis.value } : { y: activeAxis.value }
  const reverseOffset =
    activeAxis.axis === 'x' ? { x: -activeAxis.value } : { y: -activeAxis.value }

  const variants = {
    hiddenForward: { opacity: 0, ...forwardOffset, scale: scaleIn, filter: 'blur(10px)' },
    hiddenReverse: { opacity: 0, ...reverseOffset, scale: scaleIn, filter: 'blur(10px)' },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' },
  }

  const hiddenState = scrollDirection === 'up' ? 'hiddenReverse' : 'hiddenForward'

  return (
    <div ref={ref} style={{ width, overflow: 'visible' }} className={className}>
      <motion.div
        variants={variants}
        initial={hiddenState}
        animate={isInView ? 'visible' : hiddenState}
        transition={{
          duration: 1.4,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn('h-full w-full', className)}
      >
        {children}
      </motion.div>
    </div>
  )
}
