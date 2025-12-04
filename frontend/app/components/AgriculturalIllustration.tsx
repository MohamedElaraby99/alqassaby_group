'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

// Memoized component to prevent unnecessary re-renders
const AgriculturalIllustration = memo(() => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 via-amber-50 to-white p-8 relative overflow-hidden rounded-2xl">
      {/* Background agricultural pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <pattern id="grainPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="#a01623" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grainPattern)" />
        </svg>
      </div>

      {/* Main agricultural illustration - Simplified for performance */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-md relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a01623" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7d111c" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="grainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4a460" />
            <stop offset="50%" stopColor="#daa520" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
        </defs>

        {/* Simplified farm field rows */}
        <g>
          {[0, 1, 2, 3].map((i) => (
            <motion.rect
              key={i}
              x={50 + i * 80}
              y={300}
              width="60"
              height="80"
              rx="5"
              fill="url(#fieldGradient)"
              initial={{ opacity: 0.7 }}
              animate={{
                y: [300, 290, 300],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </g>

        {/* Simplified plants - fewer animations */}
        <g>
          {[100, 200, 300].map((x, i) => (
            <g key={i}>
              <motion.line
                x1={x}
                y1="320"
                x2={x}
                y2="200"
                stroke="#2d5016"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />
              <motion.ellipse
                cx={x}
                cy="190"
                rx="12"
                ry="20"
                fill="url(#grainGradient)"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            </g>
          ))}
        </g>

        {/* Center circle - simplified */}
        <motion.circle
          cx="200"
          cy="200"
          r="50"
          fill="none"
          stroke="#a01623"
          strokeWidth="3"
          strokeDasharray="8 4"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Simplified service icon */}
        <motion.path
          d="M 170 180 L 200 165 L 230 180 L 230 200 Q 230 210 200 220 Q 170 210 170 200 Z"
          fill="#a01623"
          fillOpacity="0.7"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
})

AgriculturalIllustration.displayName = 'AgriculturalIllustration'

export default AgriculturalIllustration

