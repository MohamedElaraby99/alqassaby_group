'use client'

import { useParams } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendar, FaUser, FaShareAlt, FaArrowLeft, FaArrowRight, FaTag } from 'react-icons/fa'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { useEffect } from 'react'
import { getBlogById } from '@/store/blogPostSlice'
import { getImageUrl } from '../../../utils/imageUtils'

export default function NewsDetailPage() {
  const params = useParams()
  const id = params.id as string
  const lang = params.lang as string

  const dispatch = useDispatch<AppDispatch>()
  const { blog, error, loading } = useSelector((state: RootState) => state.blogDetails)

  useEffect(() => {
    if (id) {
      dispatch(getBlogById(id))
    }
  }, [dispatch, id])

  if (loading) return <p className="text-center mt-20 text-red-600 text-xl">Loading...</p>
  if (error) return <p className="text-center mt-20 text-red-600 text-xl">{error}</p>
  if (!blog) return <p className="text-center mt-20 text-red-600 text-xl">Blog Not Found</p>

  return (
    <main className="bg-white text-red-800">
      <Header />

      <section className="pt-28 pb-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-2 text-sm text-red-600/80">
              <Link href={`/${lang}`} className="hover:text-red-700 transition-colors">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link>
              <span>/</span>
              <Link href={`/${lang}/news`} className="hover:text-red-700 transition-colors">{lang === 'ar' ? 'الأخبار' : 'News'}</Link>
              <span>/</span>
              <span className="text-red-600">{blog.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{blog.title}</h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-red-600/90 mb-8 text-lg">
              {blog.createdAt && !isNaN(new Date(blog.createdAt).getTime()) && (
                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <span>{new Date(blog.createdAt).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              )}
              {blog.author && (
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>{blog.author}</span>
                </div>
              )}
              {blog.category && (
                <div className="flex items-center gap-2">
                  <FaTag />
                  <span>{blog.category}</span>
                </div>
              )}
              <button className="flex items-center gap-2 hover:text-red-700 transition-colors">
                <FaShareAlt />
                <span>{lang === 'ar' ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-6">
              <Image src={getImageUrl(blog.image)} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-cover" />
            </div>

            {/* Content directly under image */}
            <div className="prose prose-lg max-w-none text-red-800 text-xl">
              {blog.excerpt && (
                <p className="mb-4">
                  <strong>{lang === 'ar' ? 'ملخص:' : 'Excerpt:'}</strong> {blog.excerpt}
                </p>
              )}

              <div className="leading-relaxed whitespace-pre-line mb-6">
                {blog.content || (lang === 'ar' ? 'لا يوجد محتوى' : 'No content available')}
              </div>

              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, idx) => (
                    <span key={idx} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-lg">{tag}</span>
                  ))}
                </div>
              )}

              {/* Back Button */}
              <div className="text-right">
                <Link
                  href={`/${lang}/news`}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  {lang === 'ar' ? (
                    <>
                      <FaArrowRight />
                      <span>العودة إلى الأخبار</span>
                    </>
                  ) : (
                    <>
                      <FaArrowLeft />
                      <span>Back to News</span>
                    </>
                  )}
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
