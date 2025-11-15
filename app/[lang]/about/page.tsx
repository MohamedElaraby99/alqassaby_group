'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { FaHistory, FaBullseye, FaEye, FaAward, FaRocket, FaLightbulb } from 'react-icons/fa'

export default function AboutPage({ params }: { params: { lang: string } }) {
  const { lang } = params
  
  return (
    <main>
      <Header />
      
      {/* Page Header */}
      {/* <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundColor: '#a01623',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {lang === 'ar' ? 'من نحن' : 'About Us'}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {lang === 'ar' 
                ? 'رحلة 23 عاماً من التميز والابتكار في صناعة أعلاف الدواجن'
                : '23 Years Journey of Excellence and Innovation in Poultry Feed Industry'}
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Timeline Section with History Image */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          {/* Main Timeline Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mt-5 font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'تاريخنا' : 'Our History'}
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          {/* History Timeline Image */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/ourhistory.png"
                alt={lang === 'ar' ? 'تاريخ مجموعة القصبي' : 'Elkassaby Group History'}
                className="w-full h-auto"
              />
            </div>
          </motion.div> */}

          {/* History Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {lang === 'ar'
                ? 'تأسست مجموعة القصبي منذ أكثر من 23 عاماً بهدف تقديم أفضل أعلاف الدواجن في مصر. بدأنا رحلتنا بإيمان راسخ بأهمية الجودة والابتكار في صناعة الأعلاف.'
                : 'Elkassaby Group was founded more than 23 years ago with the aim of providing the best poultry feed in Egypt. We started our journey with a firm belief in the importance of quality and innovation in the feed industry.'}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {lang === 'ar'
                ? 'على مدار السنوات، نمت المجموعة لتصبح واحدة من أكثر الشركات احتراماً في مجال أعلاف الدواجن ليس في مصر فقط ولكن في الشرق الأوسط بأكمله.'
                : 'Over the years, the group has grown to become one of the most respected companies in the poultry feed industry not only in Egypt but throughout the entire Middle East.'}
            </p>
          </motion.div>

          {/* Vertical Timeline - Vision & Mission */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line - Now visible on all screen sizes */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style={{ backgroundColor: '#a01623' }}></div>

            {/* Vision Timeline Item */}
            <div className="relative mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:flex items-center"
              >
                {/* Left Content */}
                <div className={`md:w-1/2 mb-8 md:mb-0 ${lang === 'ar' ? 'md:pl-12' : 'md:pr-12'} px-4 md:px-0`}>
                  <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-3 md:gap-4 mb-4 md:mb-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-lg flex-shrink-0" style={{ backgroundColor: '#a01623' }}>
                        <FaEye />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                      {lang === 'ar'
                        ? 'نسعى لأن نكون الخيار الأول لكل مربي الدواجن في مصر والشرق الأوسط، من خلال تقديم منتجات عالية الجودة وخدمات متميزة.'
                        : 'We strive to be the first choice for all poultry farmers in Egypt and the Middle East, by providing high-quality products and distinguished services.'}
                    </p>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {lang === 'ar'
                        ? 'رؤيتنا هي المساهمة في تطوير صناعة الدواجن في المنطقة وتحقيق الاكتفاء الذاتي من خلال الابتكار المستمر والالتزام بأعلى معايير الجودة.'
                        : 'Our vision is to contribute to the development of the poultry industry in the region and achieve self-sufficiency through continuous innovation and commitment to the highest quality standards.'}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Now visible on all screen sizes */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: '#a01623' }}></div>

                {/* Right Image */}
                <div className={`md:w-1/2 ${lang === 'ar' ? 'md:pr-12' : 'md:pl-12'} px-4 md:px-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src="/OurVision.png"
                      alt={lang === 'ar' ? 'رؤية مجموعة القصبي' : 'Elkassaby Group Vision'}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Mission Timeline Item */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:flex items-center flex-row-reverse"
              >
                {/* Right Content */}
                <div className={`md:w-1/2 mb-8 md:mb-0 ${lang === 'ar' ? 'md:pr-12' : 'md:pl-12'} px-4 md:px-0`}>
                  <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-3 md:gap-4 mb-4 md:mb-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-lg flex-shrink-0" style={{ backgroundColor: '#a01623' }}>
                        <FaBullseye />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {lang === 'ar' ? 'مهمتنا' : 'Our Mission'}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                      {lang === 'ar'
                        ? 'مهمتنا هي توفير أفضل أعلاف الدواجن والكتاكيت عالية الجودة، مع تقديم برامج تغذية متطورة تدعم الأداء الأمثل للمزارع.'
                        : 'Our mission is to provide the best poultry feed and high-quality chicks, along with advanced nutrition programs that support optimal farm performance.'}
                    </p>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {lang === 'ar'
                        ? 'نلتزم بدعم عملائنا من خلال الخبرة الفنية والمتابعة المستمرة لضمان تحقيق أفضل النتائج في مزارعهم.'
                        : 'We are committed to supporting our clients through technical expertise and continuous follow-up to ensure achieving the best results on their farms.'}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Now visible on all screen sizes */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: '#a01623' }}></div>

                {/* Left Image */}
                <div className={`md:w-1/2 ${lang === 'ar' ? 'md:pl-12' : 'md:pr-12'} px-4 md:px-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src="/OurMission.png"
                      alt={lang === 'ar' ? 'مهمة مجموعة القصبي' : 'Elkassaby Group Mission'}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

