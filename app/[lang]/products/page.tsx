'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import ProductCard from '../../components/ProductCard'
import { motion } from 'framer-motion'

export default function ProductsPage({ params }: { params: { lang: string } }) {
  const products = [
    {
      title: 'أعلاف دواجن التسمين',
      description: 'أعلاف عالية الجودة مصممة خصيصاً لتسمين الدواجن وزيادة الوزن بشكل صحي وسريع',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784532?w=600',
      link: '/products/fattening-feed',
    },
    {
      title: 'أعلاف الكتاكيت',
      description: 'تركيبة خاصة للكتاكيت في مراحل النمو الأولى لضمان نمو صحي وقوي',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600',
      link: '/products/chick-feed',
    },
    {
      title: 'أعلاف الدجاج البياض',
      description: 'أعلاف متوازنة لزيادة إنتاج البيض وتحسين جودته',
      image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=600',
      link: '/products/layer-feed',
    },
    {
      title: 'أعلاف الأمهات',
      description: 'تركيبة غذائية متكاملة لأمهات الدواجن لضمان إنتاجية عالية',
      image: 'https://images.unsplash.com/photo-1613732414371-d965c9f3d51a?w=600',
      link: '/products/breeder-feed',
    },
    {
      title: 'كتاكيت عالية الجودة',
      description: 'كتاكيت سلالات ممتازة من أفضل المصادر العالمية',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600',
      link: '/products/chicks',
    },
    {
      title: 'مكملات غذائية',
      description: 'فيتامينات ومكملات غذائية لتعزيز صحة ومناعة الدواجن',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784532?w=600',
      link: '/products/supplements',
    },
  ]

  return (
    <main>
      <Header />
      
      {/* Page Header */}
      <section
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1587049352846-4a222e784532?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">منتجاتنا</h1>
            <p className="text-xl">أفضل أعلاف الدواجن والكتاكيت في مصر</p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="منتجاتنا المميزة"
            subtitle="نوفر مجموعة متكاملة من الأعلاف والكتاكيت عالية الجودة لتلبية جميع احتياجاتك"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="مميزات منتجاتنا"
            subtitle="لماذا تختار منتجات مجموعة القصبي؟"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'جودة عالية',
                description: 'جميع منتجاتنا مصنوعة من أجود الخامات وتخضع لرقابة صارمة على الجودة',
              },
              {
                title: 'تركيبة متوازنة',
                description: 'تركيبات غذائية متوازنة مصممة بواسطة خبراء التغذية',
              },
              {
                title: 'نتائج مضمونة',
                description: 'معدلات نمو وإنتاجية عالية مع استخدام منتجاتنا',
              },
              {
                title: 'آمنة وصحية',
                description: 'منتجات خالية من المواد الضارة وآمنة تماماً',
              },
              {
                title: 'أسعار تنافسية',
                description: 'أفضل قيمة مقابل السعر في السوق',
              },
              {
                title: 'دعم فني',
                description: 'فريق دعم فني متخصص لمساعدتك في اختيار المنتج المناسب',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">هل تريد معرفة المزيد عن منتجاتنا؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              اتصل بنا الآن وسيساعدك فريقنا في اختيار المنتجات المناسبة لمزرعتك
            </p>
            <a href="/contact" className="btn-secondary">
              اتصل بنا
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

