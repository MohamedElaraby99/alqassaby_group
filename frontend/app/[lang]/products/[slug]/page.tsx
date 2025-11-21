'use client'

import { useParams } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCheck, FaShieldAlt, FaStar, FaBox, FaListOl, FaWeightHanging } from 'react-icons/fa'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpaceficProduct } from '@/store/productDetailsSlice'
import { AppDispatch, RootState } from '@/store/store'
import { getImageUrl } from '../../../utils/imageUtils'

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const lang = params.lang as string

  const dispatch = useDispatch<AppDispatch >()
  const { product, error, loading } = useSelector(
    (state:RootState ) => state.productDetails
  )

  useEffect(() => {
    if (slug) {
      dispatch(getSpaceficProduct(slug ))
    }
  }, [dispatch, slug])

  if (loading) {
    return (
      <main>
        <Header />
        <div className="pt-40 pb-20 text-center text-3xl font-bold">
          {lang === 'ar' ? 'جارٍ التحميل...' : 'Loading...'}
        </div>
        <Footer />
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <Header />
        <div className="pt-40 pb-20 text-center text-3xl font-bold">
          {error}
        </div>
        <Footer />
      </main>
    )
  }

  if (!product) {
    return (
      <main>
        <Header />
        <div className="pt-40 pb-20 text-center text-3xl font-bold">
          {lang === 'ar' ? 'المنتج غير موجود' : 'Product Not Found'}
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Product Image */}
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={getImageUrl(product.image)}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-6 right-6 bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-bold text-lg" style={{ color: '#a01623' }}>
                  {lang === 'ar' ? 'جودة مضمونة' : 'Guaranteed Quality'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl text-[#a01623] md:text-5xl font-bold mb-6">
                  {product.name}
                </h1>

                <p className="text-xl text-[#a01623] leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Price, Category, Weight, Stock */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {/* Category */}
                  <div className="bg-amber-300 backdrop-blur-md border border-white/20 p-4 rounded-xl flex justify-between items-center">
                    <span className="text-white/90 text-lg font-semibold">
                      {lang === "ar" ? "الفئة:" : "Category:"}
                    </span>
                    <span className="text-white text-lg font-bold">{product.category}</span>
                  </div>

                  {/* Price */}
                  <div className="bg-amber-300 backdrop-blur-md border border-white/20 p-4 rounded-xl flex justify-between items-center">
                    <span className="text-white/80 text-lg font-semibold">
                      {lang === "ar" ? "السعر:" : "Price:"}
                    </span>
                    <span className="text-white text-lg font-bold">{product.price} EGP</span>
                  </div>

                  {/* Weight */}
                  {product.specifications?.weight && (
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex justify-between items-center">
                      <span className="text-white/80 text-lg font-semibold">
                        {lang === "ar" ? "الوزن:" : "Weight:"}
                      </span>
                      <span className="text-white text-lg font-bold">
                        {product.specifications.weight}
                      </span>
                    </div>
                  )}

                  {/* Stock */}
                  <div
                    className={`p-4 rounded-xl border backdrop-blur-md flex justify-between items-center ${
                      product.inStock
                        ? "bg-green-500 border-green-400/40"
                        : "bg-red-500/20 border-red-400/40"
                    }`}
                  >
                    <span className="text-white/80 text-lg font-semibold">
                      {lang === "ar" ? "الحالة:" : "Status:"}
                    </span>

                    <span
                      className={`text-lg font-bold ${
                        product.inStock ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {product.inStock
                        ? lang === "ar" ? "متوفر" : "Available"
                        : lang === "ar" ? "غير متوفر" : "Out of Stock"}
                    </span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#a01623] p-6 rounded-xl shadow-lg text-center">
                    <FaStar className="text-3xl mx-auto mb-2 text-amber-300" />
                    <p className="text-sm text-amber-300">
                      {lang === 'ar' ? 'جودة عالية' : 'High Quality'}
                    </p>
                  </div>

                  <div className="bg-[#a01623] p-6 rounded-xl shadow-lg text-center">
                    <FaShieldAlt className="text-3xl mx-auto mb-2 text-amber-300" />
                    <p className="text-sm text-amber-300">
                      {lang === 'ar' ? 'آمن ومعتمد' : 'Safe & Certified'}
                    </p>
                  </div>
                </div>

                <a
                  href={`/${lang}/contact`}
                  className="inline-block px-8 py-4 bg-[#a01623] text-amber-300 font-bold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:bg-gray-100"
                >
                  {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
     {/* Specifications Section */}
{product.specifications && (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-[#a01623]">
          {lang === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications'}
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-amber-400"></div>
      </motion.div>

      {/* Table Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200"
      >
        {/* Table Header */}
        <div className="grid grid-cols-2 bg-amber-300  px-8 py-4 border-b border-amber-300">
          <span className="text-lg font-bold text-[#a01623]  ">
            {lang === 'ar' ? 'البند' : 'Specification'}
          </span>
          <span className="text-lg font-bold text-center text-[#a01623]">
            {lang === 'ar' ? 'القيمة' : 'Value'}
          </span>
        </div>

        {/* Rows with Typewriter Animation */}
        <motion.div
          className="p-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } } 
          }}
        >
          {Object.entries(product.specifications).map(([key, value], index) => {
            const keyLetters = key.split("")
            const valueLetters = String(value).split("")

            const letterVariants = {
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }

            return (
              <motion.div
                key={index}
                className={`grid grid-cols-2 py-4 items-center ${
                  index !== Object.keys(product.specifications).length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } } 
                }}
              >
                {/* Key */}
                <motion.span className="font-semibold text-gray-900 capitalize">
                  {keyLetters.map((char, i) => (
                    <motion.span key={i} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.span>

                {/* Value */}
                <motion.span className="font-bold text-[#a01623] text-right">
                  {valueLetters.map((char, i) => (
                    <motion.span key={i} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  </section>
)}


      <Footer />
    </main>
  )
}
