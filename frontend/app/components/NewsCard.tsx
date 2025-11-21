'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar } from 'react-icons/fa'
import { getImageUrl } from '../utils/imageUtils'

interface NewsCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  link: string
  locale?: 'ar' | 'en' // اختياري لو حابة تحددي اللغة
}

export default function NewsCard({ title, excerpt, image, date, link, locale = 'ar' }: NewsCardProps) {
  return (
    <Link href={link} className="block">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="card overflow-hidden cursor-pointer"
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={getImageUrl(image)}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <FaCalendar />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{excerpt}</p>
          <span className="text-primary font-semibold hover:text-secondary transition">
            {locale === 'ar' ? 'اقرأ المزيد ←' : 'Read more →'}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
