'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { getImageUrl } from '../utils/imageUtils'
import { useRouter } from "next/navigation";

interface ProductCardProps {
  title: string
  description: string
  image: string
  link?: string
  price?: string
  lang?: string
}

export default function ProductCard({
  title,
  description,
  image,
  link,
  price,
  lang = 'ar',
}: ProductCardProps) {

  const router = useRouter()
  const localizedLink = link ? `/${lang}${link}` : null

  const handleClick = () => {
    if (localizedLink) router.push(localizedLink);
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={getImageUrl(image)}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-bold" style={{ color: '#a01623' }}>
            {lang === 'ar' ? 'جودة عالية' : 'High Quality'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="w-12 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-20" style={{ backgroundColor: '#a01623' }} />

        <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#a01623] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {price && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-3xl font-bold" style={{ color: '#a01623' }}>{price}</span>
            <span className="text-sm text-gray-500">{lang === 'ar' ? 'للطن' : '/ton'}</span>
          </div>
        )}

     
        <div className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:gap-3 hover:shadow-lg bg-[#a01623]">
          <span>{lang === "ar" ? "عرض التفاصيل" : "View Details"}</span>
          <FaArrowRight className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${lang === "ar" ? "rotate-180" : ""}`} />
        </div>
      </div>

      {/* Accent Circle */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 transition-opacity duration-300 group-hover:opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="80" r="60" fill="#a01623" />
        </svg>
      </div>
    </motion.div>
  )
}
