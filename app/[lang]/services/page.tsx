'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import ServiceCard from '../../components/ServiceCard'
import { motion } from 'framer-motion'
import { FaLeaf, FaAward, FaTruck, FaHandshake, FaChartLine, FaShieldAlt, FaUserMd, FaFlask, FaPhone, FaClock, FaMapMarkedAlt, FaBook } from 'react-icons/fa'

export default function ServicesPage({ params }: { params: { lang: string } }) {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">خدماتنا</h1>
            <p className="text-xl">حلول متكاملة لنجاح مزرعتك</p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="خدماتنا الرئيسية"
            subtitle="نقدم مجموعة شاملة من الخدمات لدعم نجاح مزرعتك"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaLeaf />}
              title="أعلاف عالية الجودة"
              description="نوفر أجود أنواع الأعلاف المصنوعة من أفضل الخامات المستوردة والمحلية لضمان نمو صحي وسريع للدواجن"
            />
            <ServiceCard
              icon={<FaAward />}
              title="معايير الجودة العالمية"
              description="نلتزم بأعلى معايير الجودة والسلامة الدولية في جميع منتجاتنا مع شهادات معتمدة"
            />
            <ServiceCard
              icon={<FaTruck />}
              title="التوصيل السريع"
              description="خدمة توصيل سريعة وموثوقة لجميع أنحاء الجمهورية مع ضمان سلامة المنتجات"
            />
            <ServiceCard
              icon={<FaHandshake />}
              title="دعم فني متخصص"
              description="فريق من الأطباء البيطريين والخبراء لمساعدتك في تحسين إنتاجية مزرعتك"
            />
            <ServiceCard
              icon={<FaChartLine />}
              title="برامج تغذية متطورة"
              description="برامج تغذية مصممة خصيصاً حسب نوع الدواجن ومرحلة النمو لتحقيق أفضل النتائج"
            />
            <ServiceCard
              icon={<FaShieldAlt />}
              title="ضمان الجودة"
              description="نضمن لك منتجات آمنة وموثوقة مع كل عملية شراء وإمكانية الإرجاع"
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="خدمات إضافية"
            subtitle="المزيد من الخدمات لضمان نجاحك"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaUserMd />}
              title="استشارات بيطرية"
              description="استشارات بيطرية متخصصة لمتابعة صحة القطيع وعلاج الأمراض"
            />
            <ServiceCard
              icon={<FaFlask />}
              title="تحليل الأعلاف"
              description="خدمات تحليل الأعلاف في معاملنا للتأكد من الجودة والقيمة الغذائية"
            />
            <ServiceCard
              icon={<FaBook />}
              title="تدريب وتأهيل"
              description="برامج تدريبية لمربي الدواجن لنقل أحدث المعارف والممارسات"
            />
            <ServiceCard
              icon={<FaPhone />}
              title="دعم على مدار الساعة"
              description="فريق دعم متاح على مدار الساعة للرد على استفساراتك"
            />
            <ServiceCard
              icon={<FaClock />}
              title="متابعة دورية"
              description="زيارات دورية من فريقنا لمتابعة حالة المزرعة وتقديم التوصيات"
            />
            <ServiceCard
              icon={<FaMapMarkedAlt />}
              title="تصميم المزارع"
              description="خدمات استشارية لتصميم وتجهيز المزارع بأحدث المعايير"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="كيف نعمل معك"
            subtitle="عملية بسيطة وفعالة لضمان أفضل خدمة"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'التواصل',
                description: 'تواصل معنا عبر الهاتف أو البريد الإلكتروني',
              },
              {
                step: '02',
                title: 'الاستشارة',
                description: 'نستمع لاحتياجاتك ونقدم الاستشارة المناسبة',
              },
              {
                step: '03',
                title: 'التنفيذ',
                description: 'نبدأ في تنفيذ الخطة وتوفير المنتجات',
              },
              {
                step: '04',
                title: 'المتابعة',
                description: 'نتابع معك باستمرار لضمان تحقيق الأهداف',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-secondary/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
                لماذا تختار خدماتنا؟
              </h2>
              <ul className="space-y-4">
                {[
                  'خبرة أكثر من 15 عاماً في مجال أعلاف الدواجن',
                  'فريق من الخبراء والأطباء البيطريين المتخصصين',
                  'منتجات عالية الجودة ومضمونة',
                  'أسعار تنافسية ومناسبة',
                  'دعم فني متواصل ومتابعة دورية',
                  'شبكة توزيع واسعة تغطي جميع أنحاء مصر',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-lg text-gray-700"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    {benefit}
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
              <img
                src="https://images.unsplash.com/photo-1587049352846-4a222e784532?w=800"
                alt="خدمات مجموعة القصبي"
                className="w-full h-full object-cover"
              />
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">ابدأ معنا اليوم</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              اتصل بنا الآن واحصل على استشارة مجانية من فريقنا المتخصص
            </p>
            <a href="/contact" className="btn-secondary">
              اتصل بنا الآن
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

