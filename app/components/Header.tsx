'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/en') ? 'en' : 'ar'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar'
    const currentPath = pathname.replace(/^\/(ar|en)/, '')
    router.push(`/${newLocale}${currentPath || '/'}`)
  }

  const menuItems = [
    { label: 'الرئيسية', href: `/${locale}`, labelEn: 'Home' },
    { label: 'من نحن', href: `/${locale}/about`, labelEn: 'About' },
    { label: 'المنتجات', href: `/${locale}/products`, labelEn: 'Products' },
    { label: 'الخدمات', href: `/${locale}/services`, labelEn: 'Services' },
    { label: 'الأخبار', href: `/${locale}/news`, labelEn: 'News' },
    { label: 'اتصل بنا', href: `/${locale}/contact`, labelEn: 'Contact' },
  ]

  // Check if link is active
  const isActiveLink = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(href)
  }

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'bg-black/20 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none'
      }`}
      style={isScrolled ? { backgroundColor: '#a01623' } : {}}
    >
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo - Always on LEFT */}
          <Link href={`/${locale}`} className={`flex items-center flex-shrink-0 ${locale === 'en' ? 'gap-0' : 'gap-0.5 sm:gap-1'}`}>
            <svg 
              id="Layer_2" 
              data-name="Layer 2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 395.77 81.79"
              className={`h-8 sm:h-10 md:h-12 w-auto ${locale === 'en' ? '-mr-[178px]' : ''}`}
            >
              <g>
                <path 
                  className="transition-colors"
                  style={{ fill: 'white' }}
                  d="M61.82,49.15c.98.8,1.45,1.87.65,3.01l-11.74,11.92-17.51-16.96c-.61-.23-.72-.07-1.2.26-1.53,1.08-4.08,3.84-5.53,5.26-1.24,1.21-2.44,2.83-3.87,3.81-.67.06-5.63-5.79-6.81-6.54-.51-.32-.82-.46-1.37-.07-.46.78-.44,1.77.18,2.45l12.64,12.53.92-.19,8.5-8.51,1.05-.55,9.81,9.59-.05,1.99-14.76,14.64c-.65-.09-.74-.74-1.19-1.14-8.04-7.24-15.8-15.6-23.4-23.32-1.33-1.35-3.96-3.3-4.95-4.75-.65-.95-.88-2.13-.09-3.09l29.51-29.28c.18-.16.29-.09.48,0,.32.16,2.65,2.63,2.65,2.89L7.32,51.69c-.87.89-.85,2.49,0,3.36l25.43,25.14.61-.36c2.51-3.2,7.17-6.29,9.44-9.49.87-1.23,1.04-2.22.25-3.56l-6.93-6.96c-.27-.24-.61-.29-.96-.24-1.04.15-7.87,8-9.36,9.12-.27.25-.57.29-.92.19-.52-.15-6.82-6.52-7.76-7.47-1.4-1.41-5.6-5.32-6.43-6.63-.72-1.14-.41-2.19.35-3.22s4.45-4.71,5.51-5.51c.31-.24.66-.6,1.09-.59.94.03,6.46,6.99,7.63,6.89,1.05-.09,1.24-1.57,1.13-2.42-.05-.22-2.44-1.06-2.4-2.2,0-.32,2.72-3.11,3.04-3.2.91-.25,1.48,2.36,2.65,2.56,1.45.24,2.22-1.03,1.52-2.24-1.13-1.47-5.73-4.9-5.89-6.54-.03-.36.1-.66.23-.98l12.03-12.19c.29-.05,1.14.69,1.41.92,1.88,1.66,4.41,4.24,6.12,6.1.25.27.75.81.67,1.18l-9.28,9.67.06.79,16.11,16.04c.3.05.55,0,.82-.13.29-.14,4.22-4.08,4.56-4.55.73-.99,1.35-4.1-.24-3.35-.84.39-4.22,4.73-4.81,4.57l-7.18-6.97c-.33-.51-.62-1.15-.3-1.73l7.39-7.26.72.24,6.35,6.36c1.33.62,2.24-1.49,1.19-2.4l-27.34-27.29-1.08-.58-1.08.58L3.02,45.96c-1.1.89-3.1-1.75-3.01-2.74L32.97,10.28l32.14,31.86c1.79,2.38-3.65,5.04-3.93,6.59-.11.61.57.37.64.43ZM35.2,29.47c-.91.26-4.51,4.84-5.7,5.58-.36.46-.29,1.06-.12,1.58.14.42,4.11,4.49,4.68,4.9.88.64,1.3.64,2.18,0,.76-.55,3.85-3.66,4.43-4.43s.8-1.2.49-2.17c-.11-.35-4.6-5.01-5.04-5.27-.34-.2-.49-.31-.92-.19ZM54.7,52.64c.52.36,2.05-1.29,2.1-1.82.1-1.02-4.02-4.15-4.76-5.22-.25-.37-.21-1.04-.45-1.22-1.03-.75-1.96.29-1.96,1.45,0,2.55,4.57,4.16,5.07,6.81Z"
                />
                <path 
                  className="transition-colors"
                  style={{ fill: 'white' }}
                  d="M61.8,28.8c.59.6,3.62,3.73,3.68,4.12.19,1.08-1.72,3.64-2.88,3.1L33.72,6.92c-1.9-.96-2.5,1.01-3.49,2.06L3.02,35.91c-1.25.9-3.24-2.07-2.91-3.13L32.75,0l29.06,28.8Z"
                />
                <path 
                  className="transition-colors"
                  style={{ fill: 'white' }}
                  d="M45.27,44.21c-.15.19-2.25,1.96-2.4,1.95-.69-.44-3.13-2.11-2.99-2.91.1-.59,2.71-3.04,3.19-3.04,1.05.74,3.28,2.69,2.21,4.01Z"
                />
                <path 
                  className="transition-colors"
                  style={{ fill: 'white' }}
                  d="M47.43,35.45c1-.28,3.42,2.18,3.43,2.96,0,.63-2.33,2.39-3,2.67-.56,0-2.5-2.06-2.71-2.71-.05-.52,1.8-2.79,2.28-2.92Z"
                />
                <path 
                  className="transition-colors"
                  style={{ fill: 'white' }}
                  d="M28.96,54.12c.86-.17,2.97,1.97,2.97,2.72,0,.57-1.97,2.9-2.59,2.96-.79-.38-2.88-2.16-2.97-2.97-.07-.65,1.96-2.58,2.59-2.71Z"
                />
              </g>
            </svg>
            <div className={`text-lg sm:text-xl md:text-2xl font-bold hidden sm:block ${locale === 'en' ? 'm-0 p-0' : ''}`}>
              <span className="transition-colors text-white">
                {locale === 'ar' ? 'مجموعة القصبي' : 'Elkassaby Group'}
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6 xl:gap-8">
              {menuItems.map((item) => {
                const isActive = isActiveLink(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`font-semibold transition-all duration-300 relative ${
                        isActive
                          ? 'text-yellow-300'
                          : 'text-white hover:text-yellow-300'
                      }`}
                    >
                      {locale === 'ar' ? item.label : item.labelEn}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300 rounded-full"></span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="group flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 hover:border-white/50 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span className="uppercase tracking-wider">{locale === 'ar' ? 'EN' : 'AR'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Modern Hamburger on RIGHT */}
          <button
            className="lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-50 flex-shrink-0 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 sm:w-7 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Modern Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute ${
            locale === 'ar' ? 'right-0' : 'left-0'
          } top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'translate-x-0'
              : locale === 'ar'
              ? 'translate-x-full'
              : '-translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-6">
            <h2 className="text-2xl font-bold">
              {locale === 'ar' ? 'القائمة' : 'Menu'}
            </h2>
          </div>

          {/* Menu Items */}
          <nav className="p-6">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = isActiveLink(item.href)
                return (
                  <li
                    key={item.href}
                    className={`transform transition-all duration-300 ease-out ${
                      isMobileMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : locale === 'ar'
                        ? 'translate-x-10 opacity-0'
                        : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                        isActive
                          ? 'bg-[#a01623] text-white'
                          : 'text-gray-800 hover:bg-primary hover:text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'ar' ? item.label : item.labelEn}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Language Toggle in Mobile Menu */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => {
                  toggleLanguage()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full px-4 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-200 transform hover:scale-105"
              >
                {locale === 'ar' ? '🌐 English' : '🌐 عربي'}
              </button>
            </div>

            {/* Contact Info in Mobile Menu */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3 font-semibold">
                {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+20502100126"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary transition"
                >
                  <FaPhone className="text-xs" />
                  <span>+20 50 2100126</span>
                </a>
                <a
                  href="mailto:info@elkassaby.com"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary transition"
                >
                  <FaEnvelope className="text-xs" />
                  <span>info@elkassaby.com</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

