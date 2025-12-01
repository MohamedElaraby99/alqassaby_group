import type { Metadata } from 'next'
import './globals.css'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'Elkassaby Group',
  description: 'Elkassaby Group for Poultry Feed',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingWhatsApp phone="201234567890" />
      </body>
    </html>
  )
}
