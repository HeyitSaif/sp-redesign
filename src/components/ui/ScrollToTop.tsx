'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

type LocomotiveLikeInstance = {
  scrollTo?: (target: number | string, options?: { immediate?: boolean }) => void
}

function getLocomotiveInstance(): LocomotiveLikeInstance | null {
  if (typeof window === 'undefined') return null

  const maybeWindow = window as typeof window & {
    locomotive?: LocomotiveLikeInstance
    locoScroll?: LocomotiveLikeInstance
    __locomotiveScroll?: LocomotiveLikeInstance
    lenis?: LocomotiveLikeInstance
  }

  return (
    maybeWindow.__locomotiveScroll ??
    maybeWindow.locoScroll ??
    maybeWindow.locomotive ??
    maybeWindow.lenis ??
    null
  )
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const locomotive = getLocomotiveInstance()
    if (locomotive?.scrollTo) {
      locomotive.scrollTo(0, { immediate: false })
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="bg-primary/20 border-primary/50 hover:bg-primary group fixed right-8 bottom-8 z-50 rounded-full border p-4 text-white shadow-[0_0_20px_rgba(92,107,192,0.3)] backdrop-blur-md transition-colors hover:shadow-[0_0_30px_rgba(92,107,192,0.6)]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="transition-transform group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
