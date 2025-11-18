'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert(lang === 'ar' ? 'شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.' : 'Thank you for contacting us! We will reply to you as soon as possible.')
  }

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
                {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {lang === 'ar' ? 'اتصل بنا' : 'Get In Touch'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {lang === 'ar' 
                ? 'نحن هنا للإجابة على جميع استفساراتك ومساعدتك في تحقيق أهدافك'
                : 'We are here to answer all your questions and help you achieve your goals'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(160, 22, 35, 0.1)', color: '#a01623' }}>
                  {lang === 'ar' ? 'راسلنا' : 'Send Message'}
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {lang === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>
                <p className="text-gray-600 text-lg">
                  {lang === 'ar'
                    ? 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن'
                    : 'Fill out the form below and we will contact you as soon as possible'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                      {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#a01623] focus:outline-none transition-colors"
                      style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                      placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                      {lang === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#a01623] focus:outline-none transition-colors"
                      style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                      placeholder={lang === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                    {lang === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#a01623] focus:outline-none transition-colors"
                    style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                    placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                    {lang === 'ar' ? 'الموضوع *' : 'Subject *'}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#a01623] focus:outline-none transition-colors"
                    style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                    placeholder={lang === 'ar' ? 'موضوع رسالتك' : 'Message subject'}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                    {lang === 'ar' ? 'الرسالة *' : 'Message *'}
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#a01623] focus:outline-none transition-colors resize-none"
                    style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                    placeholder={lang === 'ar' ? 'اكتب رسالتك هنا' : 'Write your message here'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: '#a01623' }}
                >
                  {lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(160, 22, 35, 0.1)', color: '#a01623' }}>
                  {lang === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {lang === 'ar' ? 'معلومات التواصل' : 'Get In Touch'}
                </h2>
                <p className="text-gray-600 text-lg">
                  {lang === 'ar'
                    ? 'نحن متواجدون دائماً لمساعدتك والإجابة على استفساراتك'
                    : 'We are always available to help you and answer your questions'}
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl" style={{ backgroundColor: '#a01623' }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {lang === 'ar' ? 'العنوان' : 'Address'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {lang === 'ar' ? (
                          <>
                            المنصورة، توريل القديمة<br />
                            شارع الشريف الراضي<br />
                            عمارة القصبي
                          </>
                        ) : (
                          <>
                            Mansoura, Old Torril<br />
                            El Sharif El Rady Street<br />
                            Elkassaby Building
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl" style={{ backgroundColor: '#a01623' }}>
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {lang === 'ar' ? 'الهاتف' : 'Phone'}
                      </h3>
                      <div className="space-y-1">
                        <a href="tel:+20502100126" className="block text-gray-600 hover:text-[#a01623] transition">
                          +20 50 2100126
                        </a>
                        <a href="tel:+20502100127" className="block text-gray-600 hover:text-[#a01623] transition">
                          +20 50 2100127
                        </a>
                        <a href="tel:01097770109" className="block text-gray-600 hover:text-[#a01623] transition">
                          01097770109
                        </a>
                        <a href="tel:01097770117" className="block text-gray-600 hover:text-[#a01623] transition">
                          01097770117
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl" style={{ backgroundColor: '#a01623' }}>
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </h3>
                      <a href="mailto:info@elkassaby.com" className="text-gray-600 hover:text-[#a01623] transition">
                        info@elkassaby.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl" style={{ backgroundColor: '#a01623' }}>
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {lang === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                      </h3>
                      <p className="text-gray-600">
                        {lang === 'ar' ? (
                          <>
                            السبت - الخميس: 8:00 ص - 6:00 م<br />
                            الجمعة: مغلق
                          </>
                        ) : (
                          <>
                            Saturday - Thursday: 8:00 AM - 6:00 PM<br />
                            Friday: Closed
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    {lang === 'ar' ? 'تابعنا على' : 'Follow Us'}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg text-xl"
                      style={{ backgroundColor: '#a01623' }}
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg text-xl"
                      style={{ backgroundColor: '#a01623' }}
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg text-xl"
                      style={{ backgroundColor: '#a01623' }}
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg text-xl"
                      style={{ backgroundColor: '#a01623' }}
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              {lang === 'ar' ? 'موقعنا على الخريطة' : 'Find Us on Map'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar' ? 'قم بزيارتنا في مقرنا الرئيسي' : 'Visit us at our headquarters'}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d31.3!3d31.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAwJzAwLjAiTiAzMcKwMTgnMDAuMCJF!5e0!3m2!1sar!2seg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar' ? 'إجابات على أكثر الأسئلة شيوعاً' : 'Answers to the most common questions'}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                questionAr: 'ما هي مناطق التوزيع لديكم؟',
                questionEn: 'What are your distribution areas?',
                answerAr: 'نوفر خدمة التوزيع لجميع محافظات مصر مع ضمان سرعة ودقة التوصيل.',
                answerEn: 'We provide distribution service to all governorates of Egypt with guaranteed fast and accurate delivery.',
              },
              {
                questionAr: 'هل تقدمون استشارات بيطرية؟',
                questionEn: 'Do you provide veterinary consultations?',
                answerAr: 'نعم، لدينا فريق من الأطباء البيطريين المتخصصين لتقديم الاستشارات والمتابعة الدورية.',
                answerEn: 'Yes, we have a team of specialized veterinarians to provide consultations and regular follow-ups.',
              },
              {
                questionAr: 'كيف يمكنني طلب المنتجات؟',
                questionEn: 'How can I order products?',
                answerAr: 'يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارتنا في مقرنا.',
                answerEn: 'You can contact us by phone, email, or visit us at our headquarters.',
              },
              {
                questionAr: 'هل تقدمون برامج تغذية مخصصة؟',
                questionEn: 'Do you provide customized nutrition programs?',
                answerAr: 'نعم، نقدم برامج تغذية مصممة خصيصاً حسب نوع الدواجن ومرحلة النمو.',
                answerEn: 'Yes, we provide nutrition programs specially designed according to poultry type and growth stage.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#a01623' }}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {lang === 'ar' ? faq.questionAr : faq.questionEn}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {lang === 'ar' ? faq.answerAr : faq.answerEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

