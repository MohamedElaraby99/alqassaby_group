'use client'

import { useParams } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCheck, FaLeaf, FaStar, FaShieldAlt } from 'react-icons/fa'

// Product data with detailed information
const productsData: { [key: string]: any } = {
  'fattening-feed': {
    titleAr: 'أعلاف دواجن التسمين',
    titleEn: 'Fattening Poultry Feed',
    descriptionAr: 'أعلاف عالية الجودة مصممة خصيصاً لتسمين الدواجن وزيادة الوزن بشكل صحي وسريع',
    descriptionEn: 'High-quality feed specially designed for fattening poultry and increasing weight in a healthy and fast manner',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784532?w=1200',
    featuresAr: [
      'بروتين عالي الجودة لنمو سريع',
      'تركيبة متوازنة من الفيتامينات والمعادن',
      'خالي من الهرمونات والمواد الضارة',
      'معدلات تحويل غذائي ممتازة',
      'مناسب لجميع سلالات الدواجن',
    ],
    featuresEn: [
      'High-quality protein for rapid growth',
      'Balanced formula of vitamins and minerals',
      'Free from hormones and harmful substances',
      'Excellent feed conversion rates',
      'Suitable for all poultry breeds',
    ],
    specificationsAr: {
      'نسبة البروتين': '22-24%',
      'الطاقة الأيضية': '3000-3200 كيلو كالوري/كجم',
      'نسبة الدهون': '4-6%',
      'الألياف': '3-4%',
    },
    specificationsEn: {
      'Protein Content': '22-24%',
      'Metabolic Energy': '3000-3200 kcal/kg',
      'Fat Content': '4-6%',
      'Fiber': '3-4%',
    },
  },
  'chick-feed': {
    titleAr: 'أعلاف الكتاكيت',
    titleEn: 'Chick Feed',
    descriptionAr: 'تركيبة خاصة للكتاكيت في مراحل النمو الأولى لضمان نمو صحي وقوي',
    descriptionEn: 'Special formula for chicks in early growth stages to ensure healthy and strong growth',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200',
    featuresAr: [
      'سهل الهضم للكتاكيت الصغيرة',
      'غني بالبروتين لنمو العظام والعضلات',
      'يحتوي على مضادات الأكسدة',
      'معزز بالفيتامينات الأساسية',
      'يقوي جهاز المناعة',
    ],
    featuresEn: [
      'Easy to digest for young chicks',
      'Rich in protein for bone and muscle growth',
      'Contains antioxidants',
      'Enhanced with essential vitamins',
      'Strengthens immune system',
    ],
    specificationsAr: {
      'نسبة البروتين': '20-22%',
      'الطاقة الأيضية': '2900-3100 كيلو كالوري/كجم',
      'نسبة الكالسيوم': '0.9-1.0%',
      'الفوسفور': '0.6-0.7%',
    },
    specificationsEn: {
      'Protein Content': '20-22%',
      'Metabolic Energy': '2900-3100 kcal/kg',
      'Calcium Content': '0.9-1.0%',
      'Phosphorus': '0.6-0.7%',
    },
  },
  'layer-feed': {
    titleAr: 'أعلاف الدجاج البياض',
    titleEn: 'Layer Feed',
    descriptionAr: 'أعلاف متوازنة لزيادة إنتاج البيض وتحسين جودته',
    descriptionEn: 'Balanced feed to increase egg production and improve quality',
    image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=1200',
    featuresAr: [
      'يزيد من إنتاجية البيض',
      'يحسن قوة قشرة البيض',
      'يعزز لون صفار البيض',
      'غني بالكالسيوم والفوسفور',
      'يحافظ على صحة الدجاج البياض',
    ],
    featuresEn: [
      'Increases egg productivity',
      'Improves eggshell strength',
      'Enhances egg yolk color',
      'Rich in calcium and phosphorus',
      'Maintains layer hen health',
    ],
    specificationsAr: {
      'نسبة البروتين': '16-18%',
      'الطاقة الأيضية': '2700-2900 كيلو كالوري/كجم',
      'نسبة الكالسيوم': '3.5-4.0%',
      'الفوسفور': '0.35-0.45%',
    },
    specificationsEn: {
      'Protein Content': '16-18%',
      'Metabolic Energy': '2700-2900 kcal/kg',
      'Calcium Content': '3.5-4.0%',
      'Phosphorus': '0.35-0.45%',
    },
  },
  'breeder-feed': {
    titleAr: 'أعلاف الأمهات',
    titleEn: 'Breeder Feed',
    descriptionAr: 'تركيبة غذائية متكاملة لأمهات الدواجن لضمان إنتاجية عالية',
    descriptionEn: 'Complete nutritional formula for breeder hens to ensure high productivity',
    image: 'https://images.unsplash.com/photo-1613732414371-d965c9f3d51a?w=1200',
    featuresAr: [
      'يحسن معدل الفقس',
      'يزيد من خصوبة البيض',
      'يدعم صحة الأمهات',
      'متوازن غذائياً للإنتاج الأمثل',
      'يحسن جودة الكتاكيت الناتجة',
    ],
    featuresEn: [
      'Improves hatch rate',
      'Increases egg fertility',
      'Supports breeder health',
      'Nutritionally balanced for optimal production',
      'Improves quality of hatched chicks',
    ],
    specificationsAr: {
      'نسبة البروتين': '17-19%',
      'الطاقة الأيضية': '2800-3000 كيلو كالوري/كجم',
      'نسبة الكالسيوم': '3.0-3.5%',
      'الفيتامينات': 'معززة',
    },
    specificationsEn: {
      'Protein Content': '17-19%',
      'Metabolic Energy': '2800-3000 kcal/kg',
      'Calcium Content': '3.0-3.5%',
      'Vitamins': 'Enhanced',
    },
  },
  'chicks': {
    titleAr: 'كتاكيت عالية الجودة',
    titleEn: 'High-Quality Chicks',
    descriptionAr: 'كتاكيت سلالات ممتازة من أفضل المصادر العالمية',
    descriptionEn: 'Excellent breed chicks from the best global sources',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200',
    featuresAr: [
      'سلالات عالمية معتمدة',
      'معدلات نمو عالية',
      'مقاومة قوية للأمراض',
      'تفريخ في بيئة معقمة',
      'شهادات صحية معتمدة',
    ],
    featuresEn: [
      'Certified global breeds',
      'High growth rates',
      'Strong disease resistance',
      'Hatched in sterile environment',
      'Certified health certificates',
    ],
    specificationsAr: {
      'العمر': 'يوم واحد',
      'الوزن': '40-45 جرام',
      'التطعيمات': 'كاملة',
      'المنشأ': 'مصادر عالمية موثوقة',
    },
    specificationsEn: {
      'Age': 'One day old',
      'Weight': '40-45 grams',
      'Vaccinations': 'Complete',
      'Origin': 'Reliable global sources',
    },
  },
  'supplements': {
    titleAr: 'مكملات غذائية',
    titleEn: 'Feed Supplements',
    descriptionAr: 'فيتامينات ومكملات غذائية لتعزيز صحة ومناعة الدواجن',
    descriptionEn: 'Vitamins and nutritional supplements to enhance poultry health and immunity',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784532?w=1200',
    featuresAr: [
      'فيتامينات متعددة أساسية',
      'معادن ضرورية للنمو',
      'معززات المناعة الطبيعية',
      'محسنات الأداء',
      'آمنة وطبيعية 100%',
    ],
    featuresEn: [
      'Essential multivitamins',
      'Minerals necessary for growth',
      'Natural immunity enhancers',
      'Performance boosters',
      '100% safe and natural',
    ],
    specificationsAr: {
      'الأنواع': 'فيتامينات، معادن، أحماض أمينية',
      'الاستخدام': 'إضافة للأعلاف أو الماء',
      'الجرعة': 'حسب التعليمات',
      'التخزين': 'مكان جاف وبارد',
    },
    specificationsEn: {
      'Types': 'Vitamins, minerals, amino acids',
      'Usage': 'Add to feed or water',
      'Dosage': 'As per instructions',
      'Storage': 'Cool, dry place',
    },
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const lang = params.lang as string

  const product = productsData[slug]

  if (!product) {
    return (
      <main>
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold">
            {lang === 'ar' ? 'المنتج غير موجود' : 'Product Not Found'}
          </h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative" style={{ backgroundColor: '#a01623' }}>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={product.image}
                alt={lang === 'ar' ? product.titleAr : product.titleEn}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 right-6 bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-bold text-lg" style={{ color: '#a01623' }}>
                  {lang === 'ar' ? 'جودة مضمونة' : 'Guaranteed Quality'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {lang === 'ar' ? product.titleAr : product.titleEn}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  {lang === 'ar' ? product.descriptionAr : product.descriptionEn}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <FaStar className="text-3xl mx-auto mb-2" style={{ color: '#a01623' }} />
                    <p className="text-sm text-gray-600">{lang === 'ar' ? 'جودة عالية' : 'High Quality'}</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <FaShieldAlt className="text-3xl mx-auto mb-2" style={{ color: '#a01623' }} />
                    <p className="text-sm text-gray-600">{lang === 'ar' ? 'آمن ومعتمد' : 'Safe & Certified'}</p>
                  </div>
                </div>

                <a
                  href={`/${lang}/contact`}
                  className="inline-block px-8 py-4 bg-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:bg-gray-100"
                  style={{ color: '#a01623' }}
                >
                  {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(lang === 'ar' ? product.featuresAr : product.featuresEn).map((feature: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(160, 22, 35, 0.1)' }}>
                  <FaCheck style={{ color: '#a01623' }} />
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications'}
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#a01623' }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              {Object.entries(lang === 'ar' ? product.specificationsAr : product.specificationsEn).map(
                ([key, value]: [string, any], index: number) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-4 ${
                      index !== Object.keys(product.specificationsAr).length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <span className="font-semibold text-gray-900">{key}</span>
                    <span className="font-bold" style={{ color: '#a01623' }}>
                      {value}
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: '#a01623' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {lang === 'ar' ? 'هل أنت مهتم بهذا المنتج؟' : 'Interested in this product?'}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {lang === 'ar'
                ? 'تواصل معنا الآن للحصول على أفضل الأسعار والعروض الخاصة'
                : 'Contact us now to get the best prices and special offers'}
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              style={{ color: '#a01623' }}
            >
              {lang === 'ar' ? 'اتصل بنا الآن' : 'Contact Us Now'}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

