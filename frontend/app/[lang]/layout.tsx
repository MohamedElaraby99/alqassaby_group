'use client'

import { Cairo } from 'next/font/google'
import '../globals.css'
import LoadingIndicator from '../components/LoadingIndicator'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
})

type Props = {
  children: React.ReactNode
  params: { lang: string }
}

export default function LangLayout({ children, params }: Props) {
  const { lang } = params
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div dir={dir} className={cairo.className}>
      <Provider store={store}>
        {loading && <LoadingIndicator />}
        {children}
      </Provider>
    </div>
  )
}
0