'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import NewsCard from '../../components/NewsCard'
import { motion } from 'framer-motion'

export default function NewsPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  const newsItems = [
    {
      title: lang === 'ar' ? 'أكبر مزارع كتاكيت في مصر الأكبر في الشرق الأوسط' : 'Largest Chick Farms in Egypt and the Middle East',
      excerpt: lang === 'ar' ? 'نفخر بامتلاكنا لأكبر مزارع تربية الكتاكيت في مصر، مع أحدث التقنيات والمعايير العالمية في التربية والتفريخ' : 'We are proud to own the largest chick breeding farms in Egypt, with the latest technologies and international standards',
      image: '/bg12.png',
      date: lang === 'ar' ? 'ديسمبر 18, 2023' : 'December 18, 2023',
      link: `/${lang}/news/largest-chick-farms`,
    },
    {
      title: lang === 'ar' ? 'أكبر مزارع دواجن في مصر الأفضل في الشرق الأوسط' : 'Largest Poultry Farms in Egypt, Best in the Middle East',
      excerpt: lang === 'ar' ? 'تعد مزارعنا من أكبر وأفضل مزارع الدواجن في مصر والشرق الأوسط بأكمله، حيث نطبق أحدث تقنيات التربية' : 'Our farms are among the largest and best poultry farms in Egypt and the entire Middle East, applying the latest breeding technologies',
      image: '/bg12.png',
      date: lang === 'ar' ? 'ديسمبر 18, 2023' : 'December 18, 2023',
      link: `/${lang}/news/largest-poultry-farms`,
    },
    {
      title: lang === 'ar' ? 'أكبر شركات دواجن في مصر الأفضل في الشرق الأوسط' : 'Largest Poultry Companies in Egypt, Best in the Middle East',
      excerpt: lang === 'ar' ? 'مجموعة القصبي تحتل مكانة الصدارة بين أكبر شركات الدواجن في المنطقة من حيث الإنتاج والجودة' : 'Elkassaby Group holds a leading position among the largest poultry companies in the region in terms of production and quality',
      image: '/bg12.png',
      date: lang === 'ar' ? 'ديسمبر 16, 2023' : 'December 16, 2023',
      link: `/${lang}/news/largest-poultry-companies`,
    },
    {
      title: lang === 'ar' ? 'أكبر شركات استيراد خامات أعلاف 2024' : 'Largest Feed Raw Materials Import Companies 2024',
      excerpt: lang === 'ar' ? 'نستورد أجود خامات الأعلاف من أفضل المصادر العالمية لضمان أعلى جودة لمنتجاتنا' : 'We import the finest feed raw materials from the best global sources to ensure the highest quality for our products',
      image: '/bg12.png',
      date: lang === 'ar' ? 'ديسمبر 13, 2023' : 'December 13, 2023',
      link: `/${lang}/news/feed-imports`,
    },
    {
      title: lang === 'ar' ? 'أكبر مزارع أمهات تسمين دواجن 2024' : 'Largest Broiler Breeder Farms 2024',
      excerpt: lang === 'ar' ? 'نمتلك أكبر مزارع أمهات التسمين في مصر مع سلالات عالية الإنتاجية ومعدلات تحويل ممتازة' : 'We own the largest broiler breeder farms in Egypt with highly productive strains and excellent conversion rates',
      image: '/bg12.png',
      date: lang === 'ar' ? 'ديسمبر 13, 2023' : 'December 13, 2023',
      link: `/${lang}/news/breeder-farms`,
    },
    {
      title: lang === 'ar' ? 'افتتاح مصنع جديد لإنتاج الأعلاف' : 'Opening of New Feed Production Factory',
      excerpt: lang === 'ar' ? 'افتتحنا مصنعاً جديداً بأحدث التقنيات لزيادة طاقتنا الإنتاجية وتلبية الطلب المتزايد' : 'We opened a new factory with the latest technologies to increase our production capacity and meet growing demand',
      image: '/bg12.png',
      date: lang === 'ar' ? 'نوفمبر 25, 2023' : 'November 25, 2023',
      link: `/${lang}/news/new-factory`,
    },
    {
      title: lang === 'ar' ? 'شراكة استراتيجية مع شركة عالمية' : 'Strategic Partnership with Global Company',
      excerpt: lang === 'ar' ? 'عقدنا شراكة استراتيجية مع إحدى الشركات العالمية الرائدة لتطوير منتجاتنا وخدماتنا' : 'We entered into a strategic partnership with a leading global company to develop our products and services',
      image: '/bg12.png',
      date: lang === 'ar' ? 'نوفمبر 10, 2023' : 'November 10, 2023',
      link: `/${lang}/news/partnership`,
    },
    {
      title: lang === 'ar' ? 'إطلاق برنامج تدريبي جديد للمربين' : 'Launch of New Training Program for Breeders',
      excerpt: lang === 'ar' ? 'أطلقنا برنامجاً تدريبياً شاملاً لمربي الدواجن لنقل أحدث المعارف والممارسات في هذا المجال' : 'We launched a comprehensive training program for poultry breeders to transfer the latest knowledge and practices',
        image: '/bg12.png',
      date: lang === 'ar' ? 'أكتوبر 28, 2023' : 'October 28, 2023',
      link: `/${lang}/news/training-program`,
    },
    {
      title: lang === 'ar' ? 'حصولنا على شهادة الأيزو الدولية' : 'Obtaining International ISO Certificate',
      excerpt: lang === 'ar' ? 'حصلت مجموعة القصبي على شهادة الأيزو الدولية في إدارة الجودة، مما يؤكد التزامنا بأعلى المعايير' : 'Elkassaby Group obtained the international ISO certificate in quality management, confirming our commitment to the highest standards',
      image: '/bg12.png',
      date: lang === 'ar' ? 'أكتوبر 15, 2023' : 'October 15, 2023',
      link: `/${lang}/news/iso-certificate`,
    },
  ]

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
        
        {/* Animated Background Elements */}
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

