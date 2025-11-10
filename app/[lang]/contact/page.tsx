'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactPage({ params }: { params: { lang: string } }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.')
  }

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-xl">نحن هنا للإجابة على جميع استفساراتك</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none text-right"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none text-right"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none text-right"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    الموضوع *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none text-right"
                    placeholder="موضوع رسالتك"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none text-right resize-none"
                    placeholder="اكتب رسالتك هنا"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  إرسال الرسالة
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">العنوان</h3>
                    <p className="text-gray-600 leading-relaxed">
                      المنصورة، توريل القديمة<br />
                      شارع الشريف الراضي<br />
                      عمارة القصبي
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">الهاتف</h3>
                    <div className="space-y-1">
                      <a href="tel:+20502100126" className="block text-gray-600 hover:text-primary transition">
                        +20 50 2100126
                      </a>
                      <a href="tel:+20502100127" className="block text-gray-600 hover:text-primary transition">
                        +20 50 2100127
                      </a>
                      <a href="tel:01097770109" className="block text-gray-600 hover:text-primary transition">
                        01097770109
                      </a>
                      <a href="tel:01097770117" className="block text-gray-600 hover:text-primary transition">
                        01097770117
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">البريد الإلكتروني</h3>
                    <a href="mailto:info@elkassaby.com" className="text-gray-600 hover:text-primary transition">
                      info@elkassaby.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">ساعات العمل</h3>
                    <p className="text-gray-600">
                      السبت - الخميس: 8:00 ص - 6:00 م<br />
                      الجمعة: مغلق
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-bold text-gray-800 mb-4">تابعنا على</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition text-xl"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition text-xl"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition text-xl"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition text-xl"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="موقعنا على الخريطة"
            subtitle="قم بزيارتنا في مقرنا الرئيسي"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-96"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="الأسئلة الشائعة"
            subtitle="إجابات على أكثر الأسئلة شيوعاً"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'ما هي مناطق التوزيع لديكم؟',
                answer: 'نوفر خدمة التوزيع لجميع محافظات مصر مع ضمان سرعة ودقة التوصيل.',
              },
              {
                question: 'هل تقدمون استشارات بيطرية؟',
                answer: 'نعم، لدينا فريق من الأطباء البيطريين المتخصصين لتقديم الاستشارات والمتابعة الدورية.',
              },
              {
                question: 'كيف يمكنني طلب المنتجات؟',
                answer: 'يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارتنا في مقرنا.',
              },
              {
                question: 'هل تقدمون برامج تغذية مخصصة؟',
                answer: 'نعم، نقدم برامج تغذية مصممة خصيصاً حسب نوع الدواجن ومرحلة النمو.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

