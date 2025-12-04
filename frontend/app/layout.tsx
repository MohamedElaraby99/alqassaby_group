import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'

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
        <link rel="preconnect" href="http://localhost:5000" />
        <link rel="dns-prefetch" href="http://localhost:5000" />
      </head>
      <body>
        {children}
        <FloatingWhatsApp phone="201097770117" />
      </body>
    </html>
  )
}
