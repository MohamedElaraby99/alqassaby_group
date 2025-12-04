'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import NewsCard from '../../components/NewsCard'
import Newsletter from '../../components/Newsletter'
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
      <Newsletter lang={lang} />

      <Footer />
    </main>
  )
}
