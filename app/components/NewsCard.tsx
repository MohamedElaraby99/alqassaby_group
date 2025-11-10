'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar } from 'react-icons/fa'

interface NewsCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  link: string
}

export default function NewsCard({ title, excerpt, image, date, link }: NewsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
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
        <Link
          href={link}
          className="inline-block text-primary font-semibold hover:text-secondary transition"
        >
          اقرأ المزيد ←
        </Link>
      </div>
    </motion.div>
  )
}

