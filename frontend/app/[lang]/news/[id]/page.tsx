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
  console.log('blogg' , blog)

  useEffect(() => {
    if (id) {
      dispatch(getBlogById(id))
    }
  }, [dispatch, id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!blog) return <p>Blog Not Found</p>

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative" style={{ backgroundColor: '#a01623' }}>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-white/80">
              <Link href={`/${lang}`} className="hover:text-white transition-colors">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link>
              <span>/</span>
              <Link href={`/${lang}/news`} className="hover:text-white transition-colors">{lang === 'ar' ? 'الأخبار' : 'News'}</Link>
              <span>/</span>
              <span className="text-black">{blog.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-black  mb-6 leading-tight">{blog.title}</h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/90 mb-8">
              {blog.createdAt && !isNaN(new Date(blog.createdAt).getTime()) && (
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-white" />
                  <span>{new Date(blog.createdAt).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              )}
              {blog.author && (
                <div className="flex items-center gap-2">
                  <FaUser className="text-white" />
                  <span>{blog.author}</span>
                </div>
              )}
              {blog.category && (
                <div className="flex items-center gap-2">
                  <FaTag className="text-white" />
                  <span>{blog.category}</span>
                </div>
              )}
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <FaShareAlt />
                <span>{lang === 'ar' ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-12">
              <Image src={getImageUrl(blog.image)} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg max-w-none">

              {/* Excerpt */}
              {blog.excerpt && (
                <p className="text-black mb-4">
                  <strong>{lang === 'ar' ? 'ملخص:' : 'Excerpt:'}</strong> {blog.excerpt}
                </p>
              )}

              {/* Content */}
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content || (lang === 'ar' ? 'لا يوجد محتوى' : 'No content available')}
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              )}

              {/* Additional Info */}
              <div className="mt-6 text-gray-600 text-sm border-t pt-4">
                {blog.excerpt !== undefined && (
                  <p><strong>{lang === 'ar' ? 'ملخص:' : 'Excerpt:'}</strong> {blog.excerpt || (lang === 'ar' ? 'غير متوفر' : 'Not available')}</p>
                )}
                <p><strong>{lang === 'ar' ? 'نُشر:' : 'Published:'}</strong> {blog.published !== undefined ? (blog.published ? (lang === 'ar' ? 'نعم' : 'Yes') : (lang === 'ar' ? 'لا' : 'No')) : (lang === 'ar' ? 'غير محدد' : 'Not specified')}</p>
                <p><strong>{lang === 'ar' ? 'مميز:' : 'Featured:'}</strong> {blog.featured !== undefined ? (blog.featured ? (lang === 'ar' ? 'نعم' : 'Yes') : (lang === 'ar' ? 'لا' : 'No')) : (lang === 'ar' ? 'غير محدد' : 'Not specified')}</p>
                {blog.slug !== undefined && (
                  <p><strong>{lang === 'ar' ? 'الرابط:' : 'Slug:'}</strong> {blog.slug || (lang === 'ar' ? 'غير متوفر' : 'Not available')}</p>
                )}
                <p><strong>{lang === 'ar' ? 'المشاهدات:' : 'Views:'}</strong> {blog.views !== undefined && blog.views !== null ? blog.views : 0}</p>
                {blog.updatedAt && !isNaN(new Date(blog.updatedAt).getTime()) ? (
                  <p><strong>{lang === 'ar' ? 'آخر تحديث:' : 'Updated At:'}</strong> {new Date(blog.updatedAt).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                ) : (
                  <p><strong>{lang === 'ar' ? 'آخر تحديث:' : 'Updated At:'}</strong> {lang === 'ar' ? 'غير متوفر' : 'Not available'}</p>
                )}
              </div>
            </motion.div>

            {/* Back Button */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href={`/${lang}/news`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: '#a01623' }}
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
