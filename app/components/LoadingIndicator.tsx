'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    // When pathname changes, loading is complete
    setIsLoading(false)
    setProgress(0)
  }, [pathname])

  useEffect(() => {
    // Progress bar animation
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev
          return prev + Math.random() * 10
        })
      }, 200)
      
      return () => clearInterval(interval)
    }
  }, [isLoading])

  useEffect(() => {
    // Listen for link clicks to show loader
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link) {
        const href = link.getAttribute('href')
        const currentPath = window.location.pathname
        
        // Only show loader for internal navigation to different pages
        if (href && href.startsWith('/') && !href.startsWith('/#') && href !== currentPath) {
          // Check if it's not the same page
          const targetPath = href.split('?')[0].split('#')[0]
          const current = currentPath.split('?')[0].split('#')[0]
          
          if (targetPath !== current) {
            setIsLoading(true)
            setProgress(10)
          }
        }
      }
    }

    // Listen for browser back/forward buttons
    const handlePopState = () => {
      setIsLoading(true)
      setProgress(10)
    }

    // Listen for touch events (mobile swipe gestures)
    let touchStartX = 0
    let touchStartY = 0
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      
      const diffX = touchEndX - touchStartX
      const diffY = touchEndY - touchStartY
      
      // Detect horizontal swipe (for browser back/forward on mobile)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        // Swipe detected, the browser might navigate
        // We set a small timeout to detect if navigation happens
        setTimeout(() => {
          if (document.visibilityState === 'hidden') {
            setIsLoading(true)
            setProgress(10)
          }
        }, 100)
      }
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('popstate', handlePopState)
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)
    
    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  if (!isLoading) return null

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-[#a01623] via-[#c41f30] to-[#a01623] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Shimmer effect */}
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Full Screen Overlay with Spinner */}
      <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-white/90 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-6">
          {/* Modern Loading Spinner with Logo */}
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="w-20 h-20 border-4 border-gray-200 border-t-[#a01623] border-r-[#c41f30] rounded-full animate-spin"></div>
            
            {/* Middle rotating ring - opposite direction */}
            <div className="absolute inset-2 w-16 h-16 border-4 border-transparent border-b-[#a01623] border-l-[#c41f30] rounded-full animate-spin-reverse"></div>
            
            {/* Inner pulsing dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-[#a01623] to-[#c41f30] rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Loading Text with locale support */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-[#a01623] font-bold text-xl animate-pulse">
              {pathname.startsWith('/ar') ? 'جاري التحميل...' : 'Loading...'}
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#a01623] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-[#a01623] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-[#a01623] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

