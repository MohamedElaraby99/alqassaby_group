import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import '../globals.css'

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
})

type Props = {
  children: React.ReactNode
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params
  
  if (lang === 'en') {
    return {
      title: 'Elkassaby Group | Best Poultry Feed in Egypt',
      description: 'Elkassaby Group for Poultry Feed - We provide the finest types of poultry and poultry feed in Egypt and the Middle East for over 23years',
      keywords: 'Elkassaby Group, poultry feed, Egypt poultry, poultry farms, chicks',
      viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
      },
    }
  }
  
  return {
    title: 'مجموعة القصبي - Elkassaby Group | أفضل أعلاف دواجن في مصر',
    description: 'مجموعة القصبي لأعلاف الدواجن - نوفر أجود أنواع الدواجن وأعلاف الدواجن في مصر والشرق الأوسط منذ أكثر من 23 عاماً',
    keywords: 'مجموعة القصبي, أعلاف دواجن, دواجن مصر, مزارع دواجن, كتاكيت, Elkassaby Group, poultry feed',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
  }
}

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }]
}

export default function LangLayout({
  children,
  params,
}: Props) {
  const { lang } = params
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  
  return (
    <html lang={lang} dir={dir}>
      <body className={cairo.className}>{children}</body>
    </html>
  )
}

