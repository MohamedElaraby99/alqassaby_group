'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const locale = pathname.startsWith('/en') ? 'en' : 'ar'

  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 1500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>

      {/* Scroll to top button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          aria-label={locale === "ar" ? "الرجوع للأعلى" : "Back to top"}
          className={`
            fixed bottom-6 ${locale === "ar" ? "left-6" : "right-6"}
            bg-[#a01623] text-white p-3 rounded-full shadow-xl
            hover:bg-[#8c1320] transition-all z-50
          `}
        >
          <FaArrowUp size={15} />
        </button>
      )}

      <footer className="bg-gray-900 text-white">

        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* About */}
            <div>
             
                <Link href={`/${locale}`} className={`flex items-center mt-3 ml-8 flex-shrink-0 ${locale === 'en' ? 'gap-2' : 'gap-0.5 sm:gap-1 mr-[-115px]'}`}>
            <svg 
              id="Layer_2" 
              data-name="Layer 2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 395.77 81.79"
              className={`h-8 sm:h-10 md:h-12 w-auto ${locale === 'en' ? '-mr-[124px] md:-mr-[188px]' : ''}`}
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
            <div className="text-sm sm:text-lg md:text-2xl font-bold">
              <span className="transition-colors text-white whitespace-nowrap drop-shadow-md" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
                {locale === 'ar' ? 'مجموعة القصبي' : 'Elkassaby Group'}
              </span>
            </div>
          </Link>

              <p className="text-gray-300 mb-4 leading-relaxed text-center">
                {locale === "ar"
                  ? "نحن واحدة من أكثر الشركات احتراماً في مجال أعلاف الدواجن في مصر والشرق الأوسط منذ أكثر من 23 عاماً."
                  : "We are one of the most respected poultry feed companies in Egypt and the Middle East for over 23 years."}
              </p>

              <div className="flex gap-4 justify-center">
                <a href="#" className="text-white hover:text-secondary text-xl"><FaFacebook /></a>
                <a href="#" className="text-white hover:text-secondary text-xl"><FaTwitter /></a>
                <a href="#" className="text-white hover:text-secondary text-xl"><FaInstagram /></a>
                <a href="#" className="text-white hover:text-secondary text-xl"><FaLinkedin /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                <li><Link href={`/${locale}`} className="text-gray-300 hover:text-secondary">{locale === 'ar' ? 'الرئيسية' : 'Home'}</Link></li>
                <li><Link href={`/${locale}/about`} className="text-gray-300 hover:text-secondary">{locale === 'ar' ? 'من نحن' : 'About'}</Link></li>
                <li><Link href={`/${locale}/products`} className="text-gray-300 hover:text-secondary">{locale === 'ar' ? 'المنتجات' : 'Products'}</Link></li>
                <li><Link href={`/${locale}/services`} className="text-gray-300 hover:text-secondary">{locale === 'ar' ? 'الخدمات' : 'Services'}</Link></li>
                <li><Link href={`/${locale}/news`} className="text-gray-300 hover:text-secondary">{locale === 'ar' ? 'الأخبار' : 'News'}</Link></li>
                <li><Link href={`/${locale}/contact`} className="text-gray-300 hover:text-secondary">{locale === 'ar' ? 'اتصل بنا' : 'Contact'}</Link></li>
              </ul>
            </div>

            {/* Companies */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {locale === "ar" ? "شركاتنا" : "Our Companies"}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>{locale === "ar" ? "القصبي للاستثمار" : "Elkassaby Investment"}</li>
                <li>{locale === "ar" ? "تبارك للتفريخ والدواجن" : "Tabarak for Poultry"}</li>
                <li>{locale === "ar" ? "هاجر للثروة الداجنة" : "Hager Poultry Group"}</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {locale === "ar" ? "معلومات التواصل" : "Contact Information"}
              </h3>
              <ul className="space-y-3 text-gray-300">

                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-secondary mt-1" />
                  <span>
                    {locale === "ar"
                      ? "المنصورة، توريل القديمة، شارع الشريف الراضي، عمارة القصبي"
                      : "Mansoura, Old Toreil, Elsharef Alradi Street, Elkassaby Building"}
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <FaPhone className="text-secondary mt-1" />
                  <div>
                    <a href="tel:+20502100126" className="block hover:text-secondary">+20 50 2100126</a>
                    <a href="tel:01097770109" className="block hover:text-secondary">01097770109</a>
                    <a href="tel:01097770117" className="block hover:text-secondary">01097770117</a>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-secondary" />
                  <a href="mailto:info@elkassaby.com" className="hover:text-secondary">
                    info@elkassaby.com
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6 text-center text-gray-400">
            <p>
              {locale === "ar"
                ? `© ${currentYear} مجموعة القصبي - جميع الحقوق محفوظة`
                : `© ${currentYear} Elkassaby Group - All Rights Reserved`}
            </p>
          </div>
        </div>

      </footer>
    </>
  )
}
