'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
  secondaryCta?: { text: string; link: string }
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = '/images/hero-bg.jpg',
  ctaText,
  ctaLink,
  secondaryCta,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Mobile-friendly background attachment */}
      <style jsx>{`
        @media (min-width: 768px) {
          section {
            background-attachment: fixed;
          }
        }
      `}</style>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-16 sm:pt-24 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {subtitle}
          </p>
          
          {(ctaText || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              {ctaText && ctaLink && (
                <Link href={ctaLink} className="btn-secondary w-full sm:w-auto text-center">
                  {ctaText}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.link} className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto text-center">
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <svg
            className="w-6 h-6 text-white/80 hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <svg
            className="w-6 h-6 text-white/60 hover:text-white transition-colors -mt-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

