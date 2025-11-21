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
  const locale = pathname.startsWith('/en') ? 'en' : 'ar'

 
const alwaysRedPages = [`/${locale}/about`] 


const transparentPages = [`/${locale}`, `/${locale}/products`, `/${locale}/news`]


const isAlwaysRed =
  pathname === `/${locale}/about` || 
  (pathname.startsWith(`/${locale}/products/`) && pathname !== `/${locale}/products`) || 
  (pathname.startsWith(`/${locale}/news/`) && pathname !== `/${locale}/news`) 


const isTransparentPage =
  pathname === `/${locale}` || 
  pathname === `/${locale}/products` || 
  pathname === `/${locale}/news` 

const isRedNavbar = isAlwaysRed || (isTransparentPage && isScrolled)

 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMobileMenuOpen])

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

  
  const isActiveLink = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(href)
  }

  return (
     <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isRedNavbar ? 'shadow-lg bg-[#a01623]' : 'bg-black/30 backdrop-blur-md'
      }`}
    >
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className={`flex items-center flex-shrink-0 ${
              locale === 'en' ? 'gap-2' : 'gap-0.5 sm:gap-1 mr-[-115px]'
            }`}
          >
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 395.77 81.79"
              className={`h-8 sm:h-10 md:h-12 w-auto ${locale === 'en' ? '-mr-[124px] md:-mr-[188px]' : ''}`}
            >
              {/* SVG content */}
            </svg>
            <div className="text-sm sm:text-lg md:text-2xl font-bold">
              <span
                className="transition-colors text-yellow-300 whitespace-nowrap drop-shadow-md"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
              >
                {locale === 'ar' ? 'مجموعة القصبي' : 'Elkassaby Group'}
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6 xl:gap-8">
              {menuItems.map(item => {
                const isActive = isActiveLink(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`font-semibold transition-all duration-300 relative text-base ${
                        isActive
                          ? 'text-yellow-300 drop-shadow-md'
                          : 'text-yellow-300 hover:text-yellow-300 drop-shadow-sm'
                      }`}
                      style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}
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
                <span className="uppercase tracking-wider">{locale === 'ar' ? 'EN' : 'AR'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute ${locale === 'ar' ? 'right-0' : 'left-0'} top-0 h-full w-full bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? 'translate-x-0 scale-100'
              : locale === 'ar'
              ? 'translate-x-full scale-95'
              : '-translate-x-full scale-95'
          }`}
          style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
        >
          {/* Mobile menu items */}
          <nav className="p-5 text-center h-screen overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
            <ul className="space-y-2 mt-10 mb-6">
              {menuItems.map((item, index) => {
                const isActive = isActiveLink(item.href)
                return (
                  <li
                    key={item.href}
                    className={`transform transition-all duration-500 ease-out ${
                      isMobileMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : locale === 'ar'
                        ? 'translate-x-10 opacity-0'
                        : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 60 + 100}ms` }}
                  >
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-3 px-2 py-2.5 mx-auto rounded-xl font-semibold w-[65%] text-lg transition-all duration-300 transform relative overflow-hidden ${
                        isActive
                          ? 'bg-gradient-to-r from-[#a01623] to-[#c41f30] text-white shadow-lg shadow-red-500/30'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:shadow-md'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="flex-1">{locale === 'ar' ? item.label : item.labelEn}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Language switcher */}
            <div className="mb-10 p-4 w-[200px] mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  {locale === 'ar' ? 'اللغة' : 'Language'}
                </span>
              </div>
              <button
                onClick={() => {
                  toggleLanguage()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>{locale === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
