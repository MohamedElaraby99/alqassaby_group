'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import ProductCard from '../../components/ProductCard'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { getProducts } from '@/store/productsSlice'

export default function ProductsPage({ params }: { params: { lang: string } }) {
  const { lang } = params
  const dispatch = useDispatch<AppDispatch>()

  const { products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts()); 
  }, [dispatch]);

const mappedProducts = products.map((p: any) => ({
  _id: p._id,
  title: lang === 'ar' ? p.name_ar || p.name : p.name,
  description: lang === 'ar' ? p.description_ar || p.description : p.description,
  image: p.image && p.image.trim() !== '' ? p.image : '/bg12.png', 
  link: `/${lang}/products/${p._id}`,
  price: p.price
}));


  if (loading) {
    return <p className="text-center py-20 text-xl">{lang === 'ar' ? 'جاري تحميل المنتجات...' : 'Loading products...'}</p>
  }

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
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(160, 22, 35, 0.7)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {lang === 'ar' ? 'منتجاتنا' : 'Our Products'}
            </h1>
            <p className="text-xl">
              {lang === 'ar' ? 'أفضل أعلاف الدواجن والكتاكيت في مصر' : 'Best Poultry Feed and Chicks in Egypt'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={lang === 'ar' ? 'منتجاتنا المميزة' : 'Our Featured Products'}
            subtitle={lang === 'ar' ? 'نوفر مجموعة متكاملة من الأعلاف والكتاكيت عالية الجودة لتلبية جميع احتياجاتك' : 'We provide a complete range of high-quality feed and chicks to meet all your needs'}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mappedProducts.map(product => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProductCard {...product} lang={lang} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: '#a01623' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {lang === 'ar' ? 'هل تريد معرفة المزيد عن منتجاتنا؟' : 'Want to know more about our products?'}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {lang === 'ar' 
                ? 'اتصل بنا الآن وسيساعدك فريقنا في اختيار المنتجات المناسبة لمزرعتك'
                : 'Contact us now and our team will help you choose the right products for your farm'}
            </p>
            <a 
              href={`/${lang}/contact`} 
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              style={{ color: '#a01623' }}
            >
              {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
