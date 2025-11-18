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
              <div className="flex items-center gap-2">
                <FaCalendar className="text-white" />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-white" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag className="text-white" />
                <span>{blog.category}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <FaShareAlt />
                <span>{lang === 'ar' ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-12">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" />
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
              <p className= 'text-black '><strong>Excerpt:</strong> {blog.excerpt}</p>

              {/* Content */}
              <p>{blog.content}</p>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              )}

              {/* Additional Info */}
              <div className="mt-6 text-gray-600">
                <p><strong>Published:</strong> {blog.published ? 'Yes' : 'No'}</p>
                <p><strong>Featured:</strong> {blog.featured ? 'Yes' : 'No'}</p>
                <p><strong>Slug:</strong> {blog.slug}</p>
                <p><strong>Views:</strong> {blog.views}</p>
                <p><strong>Updated At:</strong> {new Date(blog.updatedAt).toLocaleDateString()}</p>
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
