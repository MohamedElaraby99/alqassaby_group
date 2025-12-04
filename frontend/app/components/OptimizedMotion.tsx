'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface OptimizedMotionProps extends MotionProps {
  children: ReactNode
  className?: string
}

// Optimized motion wrapper with reduced motion support
export default function OptimizedMotion({ 
  children, 
  className,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.3 },
  ...props 
}: OptimizedMotionProps) {
  // Check if user prefers reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // If reduced motion is preferred, skip animations
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

