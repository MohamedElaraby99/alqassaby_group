'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import ServiceCard from '../../components/ServiceCard'
import { motion } from 'framer-motion'
import { FaLeaf, FaAward, FaTruck, FaHandshake, FaChartLine, FaShieldAlt, FaUserMd, FaFlask, FaPhone, FaClock, FaMapMarkedAlt, FaBook, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  return (
    <main>
      <Header />
      
      {/* Page Header */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
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
                {lang === 'ar' ? 'ما نقدمه لك' : 'What We Offer'}
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {lang === 'ar' ? 'خدماتنا المتميزة' : 'Our Premium Services'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {lang === 'ar' 
                ? 'حلول متكاملة ومبتكرة لنجاح مزرعتك وتحقيق أعلى معدلات الإنتاجية'
                : 'Comprehensive and innovative solutions for your farm success and achieving the highest productivity rates'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'خدماتنا الرئيسية' : 'Our Core Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar'
                ? 'نقدم مجموعة شاملة من الخدمات المتخصصة لدعم نجاح مزرعتك وتحقيق أهدافك'
                : 'We provide a comprehensive range of specialized services to support your farm success and achieve your goals'}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaLeaf />}
              title={lang === 'ar' ? 'أعلاف عالية الجودة' : 'High-Quality Feed'}
              description={lang === 'ar'
                ? 'نوفر أجود أنواع الأعلاف المصنوعة من أفضل الخامات المستوردة والمحلية لضمان نمو صحي وسريع للدواجن'
                : 'We provide the finest types of feed made from the best imported and local materials to ensure healthy and rapid poultry growth'}
            />
            <ServiceCard
              icon={<FaAward />}
              title={lang === 'ar' ? 'معايير الجودة العالمية' : 'International Quality Standards'}
              description={lang === 'ar'
                ? 'نلتزم بأعلى معايير الجودة والسلامة الدولية في جميع منتجاتنا مع شهادات معتمدة'
                : 'We adhere to the highest international quality and safety standards in all our products with certified certificates'}
            />
            <ServiceCard
              icon={<FaTruck />}
              title={lang === 'ar' ? 'التوصيل السريع' : 'Fast Delivery'}
              description={lang === 'ar'
                ? 'خدمة توصيل سريعة وموثوقة لجميع أنحاء الجمهورية مع ضمان سلامة المنتجات'
                : 'Fast and reliable delivery service to all parts of the country with guaranteed product safety'}
            />
            <ServiceCard
              icon={<FaHandshake />}
              title={lang === 'ar' ? 'دعم فني متخصص' : 'Specialized Technical Support'}
              description={lang === 'ar'
                ? 'فريق من الأطباء البيطريين والخبراء لمساعدتك في تحسين إنتاجية مزرعتك'
                : 'A team of veterinarians and experts to help you improve your farm productivity'}
            />
            <ServiceCard
              icon={<FaChartLine />}
              title={lang === 'ar' ? 'برامج تغذية متطورة' : 'Advanced Nutrition Programs'}
              description={lang === 'ar'
                ? 'برامج تغذية مصممة خصيصاً حسب نوع الدواجن ومرحلة النمو لتحقيق أفضل النتائج'
                : 'Nutrition programs specially designed according to poultry type and growth stage to achieve the best results'}
            />
            <ServiceCard
              icon={<FaShieldAlt />}
              title={lang === 'ar' ? 'ضمان الجودة' : 'Quality Assurance'}
              description={lang === 'ar'
                ? 'نضمن لك منتجات آمنة وموثوقة مع كل عملية شراء وإمكانية الإرجاع'
                : 'We guarantee safe and reliable products with every purchase and return option'}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'خدمات إضافية متميزة' : 'Premium Additional Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar'
                ? 'المزيد من الخدمات الاحترافية لضمان نجاحك المستمر وتطوير مزرعتك'
                : 'More professional services to ensure your continued success and farm development'}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaUserMd />}
              title={lang === 'ar' ? 'استشارات بيطرية' : 'Veterinary Consultations'}
              description={lang === 'ar'
                ? 'استشارات بيطرية متخصصة لمتابعة صحة القطيع وعلاج الأمراض'
                : 'Specialized veterinary consultations to monitor flock health and treat diseases'}
            />
            <ServiceCard
              icon={<FaFlask />}
              title={lang === 'ar' ? 'تحليل الأعلاف' : 'Feed Analysis'}
              description={lang === 'ar'
                ? 'خدمات تحليل الأعلاف في معاملنا للتأكد من الجودة والقيمة الغذائية'
                : 'Feed analysis services in our laboratories to ensure quality and nutritional value'}
            />
            <ServiceCard
              icon={<FaBook />}
              title={lang === 'ar' ? 'تدريب وتأهيل' : 'Training & Development'}
              description={lang === 'ar'
                ? 'برامج تدريبية لمربي الدواجن لنقل أحدث المعارف والممارسات'
                : 'Training programs for poultry farmers to transfer the latest knowledge and practices'}
            />
            <ServiceCard
              icon={<FaPhone />}
              title={lang === 'ar' ? 'دعم على مدار الساعة' : '24/7 Support'}
              description={lang === 'ar'
                ? 'فريق دعم متاح على مدار الساعة للرد على استفساراتك'
                : 'Support team available 24/7 to answer your inquiries'}
            />
            <ServiceCard
              icon={<FaClock />}
              title={lang === 'ar' ? 'متابعة دورية' : 'Regular Follow-ups'}
              description={lang === 'ar'
                ? 'زيارات دورية من فريقنا لمتابعة حالة المزرعة وتقديم التوصيات'
                : 'Regular visits from our team to follow up on farm conditions and provide recommendations'}
            />
            <ServiceCard
              icon={<FaMapMarkedAlt />}
              title={lang === 'ar' ? 'تصميم المزارع' : 'Farm Design'}
              description={lang === 'ar'
                ? 'خدمات استشارية لتصميم وتجهيز المزارع بأحدث المعايير'
                : 'Consulting services for designing and equipping farms with the latest standards'}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'كيف نعمل معك' : 'How We Work With You'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar'
                ? 'عملية بسيطة وفعالة ومنظمة لضمان حصولك على أفضل خدمة ممكنة'
                : 'A simple, effective, and organized process to ensure you get the best possible service'}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                titleAr: 'التواصل',
                titleEn: 'Contact',
                descriptionAr: 'تواصل معنا عبر الهاتف أو البريد الإلكتروني',
                descriptionEn: 'Contact us via phone or email',
              },
              {
                step: '02',
                titleAr: 'الاستشارة',
                titleEn: 'Consultation',
                descriptionAr: 'نستمع لاحتياجاتك ونقدم الاستشارة المناسبة',
                descriptionEn: 'We listen to your needs and provide appropriate consultation',
              },
              {
                step: '03',
                titleAr: 'التنفيذ',
                titleEn: 'Implementation',
                descriptionAr: 'نبدأ في تنفيذ الخطة وتوفير المنتجات',
                descriptionEn: 'We start implementing the plan and providing products',
              },
              {
                step: '04',
                titleAr: 'المتابعة',
                titleEn: 'Follow-up',
                descriptionAr: 'نتابع معك باستمرار لضمان تحقيق الأهداف',
                descriptionEn: 'We follow up with you continuously to ensure goal achievement',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="relative mb-6">
                    <div
                      className="text-7xl font-bold mb-4 bg-gradient-to-br from-[#a01623] to-[#7d111c] bg-clip-text text-transparent"
                    >
                      {item.step}
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: '#a01623' }}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {lang === 'ar' ? item.descriptionAr : item.descriptionEn}
                  </p>
                </div>
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#a01623] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {lang === 'ar' ? 'لماذا تختار خدماتنا؟' : 'Why Choose Our Services?'}
              </h2>
              <ul className="space-y-5">
                {[
                  { ar: 'خبرة أكثر من 23 عاماً في مجال أعلاف الدواجن', en: 'More than 23 years of experience in poultry feed' },
                  { ar: 'فريق من الخبراء والأطباء البيطريين المتخصصين', en: 'Team of specialized experts and veterinarians' },
                  { ar: 'منتجات عالية الجودة ومضمونة', en: 'High-quality and guaranteed products' },
                  { ar: 'أسعار تنافسية ومناسبة', en: 'Competitive and suitable prices' },
                  { ar: 'دعم فني متواصل ومتابعة دورية', en: 'Continuous technical support and regular follow-up' },
                  { ar: 'شبكة توزيع واسعة تغطي جميع أنحاء مصر', en: 'Wide distribution network covering all of Egypt' },
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-lg text-gray-700 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(160, 22, 35, 0.1)' }}>
                      <FaCheckCircle className="text-sm" style={{ color: '#a01623' }} />
                    </div>
                    <span className="leading-relaxed">{lang === 'ar' ? benefit.ar : benefit.en}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50 p-16">
                <img
                  src="/logoo.png"
                  alt={lang === 'ar' ? 'شعار مجموعة القصبي' : 'Elkassaby Group Logo'}
                  className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-110 drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-white text-center relative overflow-hidden" style={{ backgroundColor: '#a01623' }}>
        {/* Animated Background Elements */}
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
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider">
                {lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {lang === 'ar' ? 'ابدأ معنا اليوم' : 'Start With Us Today'}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              {lang === 'ar'
                ? 'اتصل بنا الآن واحصل على استشارة مجانية من فريقنا المتخصص'
                : 'Contact us now and get a free consultation from our specialized team'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`/${lang}/contact`}
                className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
                style={{ color: '#a01623' }}
              >
                <span>{lang === 'ar' ? 'اتصل بنا الآن' : 'Contact Us Now'}</span>
                <FaArrowRight className={`transition-transform duration-300 group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </a>
              
              <a
                href={`/${lang}/products`}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white hover:bg-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg text-white hover:text-[#a01623]"
              >
                <span>{lang === 'ar' ? 'تصفح المنتجات' : 'Browse Products'}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

