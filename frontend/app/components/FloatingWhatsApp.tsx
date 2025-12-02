'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

type FloatingWhatsAppProps = {
  /** Phone number in international format without +, e.g. 201234567890 */
  phone?: string
  /** Default message pre-filled in WhatsApp */
  message?: string
  /** Hide button on specific paths if needed */
  hideOnPaths?: string[]
}

const DEFAULT_PHONE = '+201097770117' // TODO: replace with real number

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phone = DEFAULT_PHONE,
  message = 'Hello, I would like to inquire about your products.',
  hideOnPaths = [],
}) => {
  const pathname = usePathname()

  if (hideOnPaths.includes(pathname)) return null

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`

  return (
    <div className="fixed z-50 bottom-5 right-4 md:bottom-8 md:right-8 flex items-center gap-3 group">
      {/* Label bubble */}
      <div className="px-3 py-2 text-xs font-semibold text-white rounded-full shadow-md bg-[#25D366] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
        تواصل معنا الآن
      </div>

      {/* Pulsing background circle */}
      <div className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 blur-md opacity-70 animate-ping pointer-events-none" />

      {/* Main button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg md:w-14 md:h-14 bg-[#25D366] hover:bg-[#1ebe5d] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
      >
        {/* Small notification dot */}
        <span className="absolute top-1 right-1 inline-flex w-2 h-2 bg-[#d4af37] rounded-full shadow-sm" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 md:w-7 md:h-7"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16.003 3.2C9.743 3.2 4.6 8.343 4.6 14.603c0 2.52.82 4.86 2.214 6.77L5.2 26.8l5.6-1.574a11.35 11.35 0 0 0 5.203 1.277h.001c6.26 0 11.403-5.143 11.403-11.403 0-3.047-1.187-5.912-3.344-8.07A11.332 11.332 0 0 0 16.003 3.2zm6.707 16.157c-.28.79-1.39 1.45-1.954 1.487-.5.034-1.14.048-1.84-.115-.424-.101-.97-.315-1.68-.615-2.958-1.276-4.88-4.253-5.028-4.454-.147-.2-1.2-1.593-1.2-3.04 0-1.448.76-2.158 1.03-2.456.27-.298.59-.372.787-.372.197 0 .394.002.568.01.183.008.427-.07.668.51.28.678.955 2.34 1.037 2.51.082.17.137.37.025.57-.112.2-.168.322-.33.495-.165.177-.35.396-.5.532-.165.147-.337.307-.145.605.193.298.86 1.42 1.848 2.3 1.27 1.127 2.34 1.48 2.68 1.645.34.165.54.147.74-.088.2-.235.85-.992 1.08-1.333.23-.34.46-.287.77-.172.31.116 1.955.92 2.29 1.085.337.165.56.247.64.385.082.137.082.794-.198 1.584z"
          />
        </svg>
      </a>
    </div>
  )
}

export default FloatingWhatsApp


