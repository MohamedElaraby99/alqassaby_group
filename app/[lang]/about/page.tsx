'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import { motion } from 'framer-motion'
import { FaHistory, FaBullseye, FaEye, FaAward } from 'react-icons/fa'

export default function AboutPage({ params }: { params: { lang: string } }) {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">من نحن</h1>
            <p className="text-xl">تعرف على مجموعة القصبي وتاريخنا العريق</p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl text-primary">
                  <FaHistory />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">تاريخنا</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                تأسست مجموعة القصبي منذ أكثر من 15 عاماً بهدف تقديم أفضل أعلاف الدواجن في مصر. بدأنا رحلتنا بإيمان راسخ بأهمية الجودة والابتكار في صناعة الأعلاف.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                على مدار السنوات، نمت المجموعة لتصبح واحدة من أكثر الشركات احتراماً في مجال أعلاف الدواجن ليس في مصر فقط ولكن في الشرق الأوسط بأكمله.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=800"
                alt="تاريخ مجموعة القصبي"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800"
                alt="رؤية مجموعة القصبي"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl text-primary">
                  <FaEye />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">رؤيتنا</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                نسعى لأن نكون الخيار الأول لكل مربي الدواجن في مصر والشرق الأوسط، من خلال تقديم منتجات عالية الجودة وخدمات متميزة.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                رؤيتنا هي المساهمة في تطوير صناعة الدواجن في المنطقة وتحقيق الاكتفاء الذاتي من خلال الابتكار المستمر والالتزام بأعلى معايير الجودة.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl text-primary">
                  <FaBullseye />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">مهمتنا</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                مهمتنا هي توفير أفضل أعلاف الدواجن والكتاكيت عالية الجودة، مع تقديم برامج تغذية متطورة تدعم الأداء الأمثل للمزارع.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                نلتزم بدعم عملائنا من خلال الخبرة الفنية والمتابعة المستمرة لضمان تحقيق أفضل النتائج في مزارعهم.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1613732414371-d965c9f3d51a?w=800"
                alt="مهمة مجموعة القصبي"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="قيمنا"
            subtitle="القيم التي توجه عملنا وتحدد هويتنا"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaAward />,
                title: 'الجودة',
                description: 'نلتزم بأعلى معايير الجودة في كل ما نقدمه',
              },
              {
                icon: <FaAward />,
                title: 'الابتكار',
                description: 'نسعى دائماً للتطوير والابتكار في منتجاتنا',
              },
              {
                icon: <FaAward />,
                title: 'النزاهة',
                description: 'نعمل بشفافية ونزاهة مع جميع عملائنا',
              },
              {
                icon: <FaAward />,
                title: 'التميز',
                description: 'نسعى للتميز في كل جوانب عملنا',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 text-4xl">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'سنوات من الخبرة' },
              { number: '1000+', label: 'عميل راضٍ' },
              { number: '3', label: 'شركات متخصصة' },
              { number: '100%', label: 'جودة مضمونة' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

