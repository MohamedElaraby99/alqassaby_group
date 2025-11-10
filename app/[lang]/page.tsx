'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import ServiceCard from '../components/ServiceCard'
import NewsCard from '../components/NewsCard'
import CompanyCard from '../components/CompanyCard'
import { motion } from 'framer-motion'

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Hero
        title={lang === 'ar' ? 'أجود أنواع الدواجن مع إنتاجيات كبيرة' : 'The Finest Poultry with High Production'}
        subtitle={lang === 'ar' ? 'نجعل أولوياتنا لتوفير خدمات متنوعة لتلبية احتياجاتك. مجموعة القصبي، اختيارك الأمثل لأفضل أعلاف الدواجن في مصر' : 'We prioritize providing diverse services to meet your needs. Elkassaby Group, your best choice for the finest poultry feed in Egypt'}
        backgroundImage="/bg.png"
        ctaText={lang === 'ar' ? 'تعرف على خدماتنا' : 'Our Services'}
        ctaLink={`/${lang}/services`}
        secondaryCta={{ text: lang === 'ar' ? 'اتصل بنا' : 'Contact Us', link: `/${lang}/contact` }}
      />


      {/* Maximizing Poultry Business Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <span className="text-amber-700 font-semibold text-lg tracking-wider flex items-center justify-center gap-3">
                  <span className="h-px w-12 bg-amber-700"></span>
                  {lang === 'ar' ? 'نمو الأعمال' : 'Grow Business'}
                  <span className="h-px w-12 bg-amber-700"></span>
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {lang === 'ar' 
                  ? 'تعظيم إمكانات أعمال الدواجن الخاصة بك'
                  : 'Maximizing Your Poultry Business Potential'}
              </h2>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-700 flex items-center justify-center shadow-lg p-3">
                  <img src="/icons/business_icon1.png" alt="Broiler" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {lang === 'ar' ? 'التسمين' : 'Broiler'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {lang === 'ar'
                      ? 'التغذية أمر بالغ الأهمية في تربية الدواجن ولا ندخر جهداً'
                      : 'Nutrition is paramount in poultry farming and we spare no effort'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-700 flex items-center justify-center shadow-lg p-3">
                  <img src="/icons/business_icon3.png" alt="Breeders" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {lang === 'ar' ? 'المربون' : 'Breeders'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {lang === 'ar'
                      ? 'التغذية أمر بالغ الأهمية في تربية الدواجن ولا ندخر جهداً'
                      : 'Nutrition is paramount in poultry farming and we spare no effort'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-700 flex items-center justify-center shadow-lg p-3">
                  <img src="/icons/business_icon4.png" alt="Dynamic Ecology" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {lang === 'ar' ? 'البيئة الديناميكية' : 'Dynamic Ecology'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {lang === 'ar'
                      ? 'التغذية أمر بالغ الأهمية في تربية الدواجن ولا ندخر جهداً'
                      : 'Nutrition is paramount in poultry farming and we spare no effort'}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Center Column - Chicken Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <div className="relative">
                <img
                  src="/chicken2.png"
                  alt={lang === 'ar' ? 'دجاجة' : 'Chicken'}
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))'
                  }}
                />
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-700 flex items-center justify-center shadow-lg p-3">
                  <img src="/icons/business_icon5.png" alt="Organic Ecosystem" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {lang === 'ar' ? 'النظام البيئي العضوي' : 'Organic Ecosystem'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {lang === 'ar'
                      ? 'التغذية أمر بالغ الأهمية في تربية الدواجن ولا ندخر جهداً'
                      : 'Nutrition is paramount in poultry farming and we spare no effort'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-700 flex items-center justify-center shadow-lg p-3">
                  <img src="/icons/business_icon2.png" alt="Layers" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {lang === 'ar' ? 'البياض' : 'Layers'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {lang === 'ar'
                      ? 'التغذية أمر بالغ الأهمية في تربية الدواجن ولا ندخر جهداً'
                      : 'Nutrition is paramount in poultry farming and we spare no effort'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-700 flex items-center justify-center shadow-lg p-3">
                  <img src="/icons/business_icon6.png" alt="Organic Feeder" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {lang === 'ar' ? 'التغذية العضوية' : 'Organic Feeder'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {lang === 'ar'
                      ? 'التغذية أمر بالغ الأهمية في تربية الدواجن ولا ندخر جهداً'
                      : 'Nutrition is paramount in poultry farming and we spare no effort'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      

      {/* High Quality Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src="/23.png"
                alt={lang === 'ar' ? 'جودة عالية' : 'High Quality'}
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {lang === 'ar' ? 'جودة عالية' : 'High Quality'}<br />
                <span className="text-secondary">
                  {lang === 'ar' ? '100٪ أعلاف دواجن آمنة' : '100% Safe Poultry Feed'}
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {lang === 'ar'
                  ? 'نحن نساعد عملائنا في زيادة مزارع الدواجن الخاصة بهم باستخدام أفضل أنواع الدجاج وأعلاف الدواجن.'
                  : 'We help our clients grow their poultry farms using the best types of chickens and poultry feed.'}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {lang === 'ar'
                  ? 'نحن نهتم بمنتجاتنا لضمان أن تكون برامج التغذية والإنتاج الجيدة مصممة لدعم الأداء الأمثل. تعد مجموعة القصبي واحدة من أكثر الشركات احتراماً في مجال أعلاف الدواجن ليس في مصر فقط ولكن في الشرق الأوسط أيضاً.'
                  : 'We care about our products to ensure that good nutrition and production programs are designed to support optimal performance. Elkassaby Group is one of the most respected companies in the poultry feed industry not only in Egypt but also in the Middle East.'}
              </p>
              <a href={`/${lang}/products`} className="btn-primary">
                {lang === 'ar' ? 'تعرف على منتجاتنا' : 'Our Products'}
              </a>
            </motion.div>
          </div>
        </div>
      </section>



       {/* About Elkassaby Group Section */}
       <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {lang === 'ar' 
                  ? 'من نحن'
                  : 'About Us'}
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {lang === 'ar'
                  ? 'خبرة 23 عاماً في مجال أعلاف الدواجن'
                  : '23 Years of Experience in Poultry Feed'}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {lang === 'ar'
                  ? 'تعد مجموعة القصبي واحدة من أكثر الشركات احتراماً في مصر، فنحن في السوق منذ أكثر من 23 عاماً، وساعدنا العديد من العملاء في مزارعهم وقدمنا لهم أفضل أعلاف للدواجن.'
                  : 'Elkassaby Group is one of the most respected companies in Egypt. We have been in the market for more than 15 years, helping many clients with their farms and providing them with the best poultry feed.'}
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {lang === 'ar'
                  ? 'نحن نهتم بمنتجاتنا لضمان أن تكون برامج التغذية والإنتاج الجيدة مصممة لدعم الأداء الأمثل. تعد مجموعة القصبي واحدة من أكثر الشركات احتراماً في مجال أعلاف الدواجن ليس في مصر فقط ولكن في الشرق الأوسط أيضاً.'
                  : 'We care about our products to ensure that good nutrition and production programs are designed to support optimal performance. Elkassaby Group is one of the most respected companies in the poultry feed industry, not only in Egypt but also in the Middle East.'}
              </p>
              
              <a 
                href={`/${lang}/about`} 
                className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#bf1e2e' }}
              >
                {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
              </a>
            </motion.div>

            

            {/* Logo Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <div className="relative group">
                {/* Modern Frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-red-500 to-red-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                
                {/* Logo Container */}
                <div className="relative  rounded-3xl shadow-2xl p-8 max-w-md transform transition-all duration-300 hover:scale-10">
                  <img
                    src="/logoo.png"
                    alt={lang === 'ar' ? 'مجموعة القصبي' : 'Elkassaby Group'}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#bf1e2e] font-semibold mb-2">
                {lang === 'ar' ? 'مدونتنا' : 'Our Blog'}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {lang === 'ar' 
                  ? 'اقرأ أحدث مدوناتنا'
                  : 'Read Our Latest Blog'}
                <br />
                {lang === 'ar' ? 'ومقالاتنا' : '& Article Post'}
              </h2>
            </div>
            {/* Navigation Arrows */}
            <div className="hidden md:flex gap-3">
             
              <button 
                className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-[#bf1e2e] hover:text-white hover:border-[#bf1e2e] transition-all duration-300 text-gray-600"
                aria-label={lang === 'ar' ? 'التالي' : 'Next'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-[#bf1e2e] hover:text-white hover:border-[#bf1e2e] transition-all duration-300 text-gray-600"
                aria-label={lang === 'ar' ? 'السابق' : 'Previous'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600"
                  alt="Poultry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-[#bf1e2e]">
                    {lang === 'ar' ? 'دواجن' : 'Poultry'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {lang === 'ar' ? 'مايو 04, 2024' : 'May 04, 2024'}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Admin
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {lang === 'ar'
                    ? 'الدليل الشامل لتربية دجاج سعيد وصحي'
                    : 'The Ultimate Guide to Raising Happy and Healthy Chickens'}
                </h3>
                <a 
                  href={`/${lang}/blog/raising-happy-chickens`}
                  className="inline-block px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 hover:bg-[#bf1e2e] hover:text-white"
                  style={{ borderColor: '#bf1e2e', color: '#bf1e2e' }}
                >
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                </a>
              </div>
            </motion.div>

            {/* Blog Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587049352846-4a222e784532?w=600"
                  alt="Chicken"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-[#bf1e2e]">
                    {lang === 'ar' ? 'دجاج' : 'Chicken'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {lang === 'ar' ? 'مايو 04, 2024' : 'May 04, 2024'}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Admin
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {lang === 'ar'
                    ? 'طرق إبداعية للاستمتاع بالبيض الطازج من المزرعة'
                    : 'Creative Ways to Enjoy Farm-Fresh Eggs For Every Poultry Farming'}
                </h3>
                <a 
                  href={`/${lang}/blog/farm-fresh-eggs`}
                  className="inline-block px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 hover:bg-[#bf1e2e] hover:text-white"
                  style={{ borderColor: '#bf1e2e', color: '#bf1e2e' }}
                >
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                </a>
              </div>
            </motion.div>

            {/* Blog Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=600"
                  alt="Chicken"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-[#bf1e2e]">
                    {lang === 'ar' ? 'دجاج' : 'Chicken'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {lang === 'ar' ? 'مايو 04, 2024' : 'May 04, 2024'}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Admin
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {lang === 'ar'
                    ? 'طرق رائعة لتعزيز إنتاجية مزرعة الدواجن الخاصة بك'
                    : 'Egg-citing Ways to Boost Your Poultry Farm\'s Productivity'}
                </h3>
                <a 
                  href={`/${lang}/blog/boost-productivity`}
                  className="inline-block px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 hover:bg-[#bf1e2e] hover:text-white"
                  style={{ borderColor: '#bf1e2e', color: '#bf1e2e' }}
                >
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#bf1e2e' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {lang === 'ar'
                ? 'اشترك في نشرتنا الإخبارية'
                : 'Subscribe to Our Newsletter'}
            </h2>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/90 mb-6">
              {lang === 'ar'
                ? 'احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني'
                : 'Get the latest news and updates delivered directly to your inbox'}
            </p>

            {/* Newsletter Form */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  className="flex-1 px-5 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                  style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                />
                <button
                  className="px-6 py-3 bg-white text-[#bf1e2e] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  {lang === 'ar' ? 'اشترك' : 'Subscribe'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

