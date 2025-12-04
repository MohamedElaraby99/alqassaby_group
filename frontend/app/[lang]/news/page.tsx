'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import NewsCard from '../../components/NewsCard'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '@/store/blogsSlice' 
import { RootState, AppDispatch } from '@/store/store'
import { getImageUrl } from '../../utils/imageUtils'

export default function NewsPage({ params }: { params: { lang: string } }) {
  const { lang } = params
  const dispatch = useDispatch<AppDispatch>()
  const { blogs, loading, error } = useSelector((state: RootState) => state.blogs)

  useEffect(() => {
    dispatch(getAllBlogs()) 
  }, [dispatch])

  return (
    <main>
      <Header />

      {/* News Grid */}
      <section className="py-20 bg-white mt-20">
        <div className="container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'آخر الأخبار' : 'Latest News'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar' ? 'تابع آخر المستجدات والإنجازات' : 'Follow the latest updates and achievements'}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          {/* Loading / Error / Data */}
          {loading && <p className="text-center text-xl py-10">{lang === 'ar' ? 'جارٍ تحميل الأخبار...' : 'Loading news...'}</p>}
          {error && <p className="text-center text-xl py-10 text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <NewsCard
                    title={blog.title}
                    excerpt={blog.excerpt || ''}
                    image={getImageUrl(blog.image)}
                    date={new Date(blog.createdAt).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                    link={`/${lang}/news/${blog._id}`}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <div className=''>
<section className="relative py-16 md:py-20 overflow-hidden">
  {/* Blurred Green Leaves Background */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{
     backgroundColor: "#111827",
      filter: "blur(8px)",
      transform: "scale(1.1)"
    }}
  ></div>
  <div className="absolute inset-0 bg-[#111827]/20"></div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      {/* Dark Green Semi-Transparent Container */}
      <div 
        className="bg-grey/85 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-200/40 shadow-2xl"
        style={{
          borderWidth: "1px"
        }}
      >
        {/* Heading - Elegant Serif */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif text-amber-50 mb-3 text-center ${lang === "ar" ? "font-playfair" : "font-playfair"}`}>
          {lang === "ar" 
            ? " اشترك في نشرتنا الإخبارية" 
            : "Subscribe to our newsletter"}
        </h2>

        {/* Subtitle */}
        <p className={`text-base md:text-lg text-amber-50/90 mb-8 text-center ${lang === "ar" ? "font-sans" : "font-sans"}`}>
          {lang === "ar" ? "احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني" : "Get the latest news and updates directly in your email"}
        </p>

        {/* Email Input and Subscribe Button Row */}
        <div className={`flex flex-col sm:flex-row gap-4 items-center ${lang === "ar" ? "flex-row-reverse" : ""}`}>
          {/* Email Input with Underline */}
          <div className="flex-1 w-full relative">
            <input
              type="email"
              placeholder={lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
              className={`w-full bg-transparent text-amber-50 placeholder:text-amber-50/70 pb-3 focus:outline-none text-base md:text-lg border-b-2 border-amber-200/60 focus:border-amber-200 transition-colors ${lang === "ar" ? "text-right" : "text-left"}`}
            />
          </div>
          <div className="flex-1 w-full relative">
          <input
              type="text"
              placeholder={lang === "ar" ? "رقم الهاتف" : "Phone Number"}
              className={`w-full bg-transparent text-amber-50 placeholder:text-amber-50/70 pb-3 focus:outline-none text-base md:text-lg border-b-2 border-amber-200/60 focus:border-amber-200 transition-colors ${lang === "ar" ? "text-right" : "text-left"}`}
              style={{ textAlign: lang === "ar" ? "right" : "left" }}
            />
            </div>
          {/* Subscribe Button - Terracotta/Orange-Brown */}
          <button
            className="px-8 md:px-10 py-3 md:py-4 bg-[#c9734f] hover:bg-[#b8653f] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-base md:text-lg"
            style={{
              backgroundColor: "#a01623"
            }}
          >
            {lang === "ar" ? "اشترك" : "Subscribe"}
          </button>
        </div>
      </div>
    </motion.div>
  </div>
</section>
</div>

      <Footer />
    </main>
  )
}
