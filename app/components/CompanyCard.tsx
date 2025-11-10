'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface CompanyCardProps {
  name: string
  logo: string
  description?: string
}

export default function CompanyCard({ name, logo, description }: CompanyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="card p-8 text-center"
    >
      <div className="relative h-32 mb-6 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={100}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </motion.div>
  )
}

