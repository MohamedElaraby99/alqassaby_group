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

      {/* Page Header */}
      <section
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: 'url(/bg12.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(160, 22, 35, 0.85)' }}></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider">
                {lang === 'ar' ? 'آخر الأخبار' : 'Latest News'}
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {lang === 'ar' ? 'الأخبار' : 'News'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {lang === 'ar' ? 'آخر أخبار وتطورات مجموعة القصبي' : 'Latest news and developments of Elkassaby Group'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
      <section className="py-24 text-white text-center relative overflow-hidden" style={{ backgroundColor: '#a01623' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider">
                {lang === 'ar' ? 'ابق على اطلاع' : 'Stay Updated'}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {lang === 'ar' ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              {lang === 'ar'
                ? 'احصل على آخر الأخبار والعروض الخاصة مباشرة في بريدك الإلكتروني'
                : 'Get the latest news and special offers directly in your email'}
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm focus:border-white focus:bg-white/20 focus:outline-none text-white placeholder-white/70"
                style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
              />
              <button
                type="submit"
                className="bg-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap"
                style={{ color: '#a01623' }}
              >
                {lang === 'ar' ? 'اشترك الآن' : 'Subscribe Now'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
