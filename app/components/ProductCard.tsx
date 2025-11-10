'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  image: string
  link?: string
  price?: string
}

export default function ProductCard({
  title,
  description,
  image,
  link,
  price,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        {price && (
          <p className="text-2xl font-bold text-secondary mb-4">{price}</p>
        )}
        {link && (
          <Link
            href={link}
            className="inline-block text-primary font-semibold hover:text-secondary transition"
          >
            اقرأ المزيد ←
          </Link>
        )}
      </div>
    </motion.div>
  )
}

