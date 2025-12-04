import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'
import { API_HOST } from './utils/config'

// Lazy load FloatingWhatsApp to reduce initial bundle size
const FloatingWhatsApp = dynamic(() => import('./components/FloatingWhatsApp'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Elkassaby Group',
  description: 'Elkassaby Group for Poultry Feed',
  icons: {
    icon: '/Kasaby-Logo3.png',
    shortcut: '/Kasaby-Logo3.png',
    apple: '/Kasaby-Logo3.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href={API_HOST} />
        <link rel="dns-prefetch" href={API_HOST} />
      </head>
      <body>
        {children}
        <FloatingWhatsApp phone="201097770117" />
      </body>
    </html>
  )
}
