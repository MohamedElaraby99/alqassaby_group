'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import NewsCard from '../../components/NewsCard'
import { motion } from 'framer-motion'

export default function NewsPage({ params }: { params: { lang: string } }) {
  const newsItems = [
    {
      title: 'أكبر مزارع كتاكيت في مصر الأكبر في الشرق الأوسط',
      excerpt: 'نفخر بامتلاكنا لأكبر مزارع تربية الكتاكيت في مصر، مع أحدث التقنيات والمعايير العالمية في التربية والتفريخ',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600',
      date: 'ديسمبر 18, 2023',
      link: '/news/largest-chick-farms',
    },
    {
      title: 'أكبر مزارع دواجن في مصر الأفضل في الشرق الأوسط',
      excerpt: 'تعد مزارعنا من أكبر وأفضل مزارع الدواجن في مصر والشرق الأوسط بأكمله، حيث نطبق أحدث تقنيات التربية',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784532?w=600',
      date: 'ديسمبر 18, 2023',
      link: '/news/largest-poultry-farms',
    },
    {
      title: 'أكبر شركات دواجن في مصر الأفضل في الشرق الأوسط',
      excerpt: 'مجموعة القصبي تحتل مكانة الصدارة بين أكبر شركات الدواجن في المنطقة من حيث الإنتاج والجودة',
      image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=600',
      date: 'ديسمبر 16, 2023',
      link: '/news/largest-poultry-companies',
    },
    {
      title: 'أكبر شركات استيراد خامات أعلاف 2024',
      excerpt: 'نستورد أجود خامات الأعلاف من أفضل المصادر العالمية لضمان أعلى جودة لمنتجاتنا',
      image: 'https://images.unsplash.com/photo-1613732414371-d965c9f3d51a?w=600',
      date: 'ديسمبر 13, 2023',
      link: '/news/feed-imports',
    },
    {
      title: 'أكبر مزارع أمهات تسمين دواجن 2024',
      excerpt: 'نمتلك أكبر مزارع أمهات التسمين في مصر مع سلالات عالية الإنتاجية ومعدلات تحويل ممتازة',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600',
      date: 'ديسمبر 13, 2023',
      link: '/news/breeder-farms',
    },
    {
      title: 'افتتاح مصنع جديد لإنتاج الأعلاف',
      excerpt: 'افتتحنا مصنعاً جديداً بأحدث التقنيات لزيادة طاقتنا الإنتاجية وتلبية الطلب المتزايد',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784532?w=600',
      date: 'نوفمبر 25, 2023',
      link: '/news/new-factory',
    },
    {
      title: 'شراكة استراتيجية مع شركة عالمية',
      excerpt: 'عقدنا شراكة استراتيجية مع إحدى الشركات العالمية الرائدة لتطوير منتجاتنا وخدماتنا',
      image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=600',
      date: 'نوفمبر 10, 2023',
      link: '/news/partnership',
    },
    {
      title: 'إطلاق برنامج تدريبي جديد للمربين',
      excerpt: 'أطلقنا برنامجاً تدريبياً شاملاً لمربي الدواجن لنقل أحدث المعارف والممارسات في هذا المجال',
      image: 'https://images.unsplash.com/photo-1613732414371-d965c9f3d51a?w=600',
      date: 'أكتوبر 28, 2023',
      link: '/news/training-program',
    },
    {
      title: 'حصولنا على شهادة الأيزو الدولية',
      excerpt: 'حصلت مجموعة القصبي على شهادة الأيزو الدولية في إدارة الجودة، مما يؤكد التزامنا بأعلى المعايير',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600',
      date: 'أكتوبر 15, 2023',
      link: '/news/iso-certificate',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">الأخبار</h1>
            <p className="text-xl">آخر أخبار وتطورات مجموعة القصبي</p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="آخر الأخبار"
            subtitle="تابع آخر المستجدات والإنجازات"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NewsCard {...news} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              احصل على آخر الأخبار والعروض الخاصة مباشرة في بريدك الإلكتروني
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none text-right"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                اشترك الآن
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

