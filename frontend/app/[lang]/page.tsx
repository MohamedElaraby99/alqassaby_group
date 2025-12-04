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
import { ChevronLeft, ChevronRight } from "lucide-react";

// import { FiZap , FiAward , FiShield , TrendingUp  } from 'react-icons/fi'
// import { Egg, Feather, Leaf, HeartPulse } from "lucide-react"; // Uncomment when needed




export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Hero
        title={lang === 'ar' ? 'أجود أنواع الدواجن مع إنتاجيات كبيرة' : 'The Finest Poultry with High Production'}
        subtitle={lang === 'ar' ? 'نجعل أولوياتنا لتوفير خدمات متنوعة لتلبية احتياجاتك. مجموعة القصبي، اختيارك الأمثل لأفضل أعلاف الدواجن في مصر' : 'We prioritize providing diverse services to meet your needs. Elkassaby Group, your best choice for the finest poultry feed in Egypt'}
        backgroundImage="/bg.webp"
        ctaText={lang === 'ar' ? 'تعرف على خدماتنا' : 'Our Services'}
        ctaLink={`/${lang}/services`}
        secondaryCta={{ text: lang === 'ar' ? 'اتصل بنا' : 'Contact Us', link: `/${lang}/contact` }}
      />


            {/* About section */}
<section className="py-20 w-[90%] mx-auto">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#a01623] leading-tight mb-2 inline-block">
          {lang === 'ar' ? 'من نحن' : 'About Us'}
        </h2>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          {lang === 'ar'
            ? 'خبرة40 عاماً في تربية الكتاكيت والسلالات المميزة'
            : '23 Years of Expertise in Chick Rearing and Premium Breeds'}
        </h3>

        <p className="text-lg text-gray-600 leading-relaxed">
          {lang === 'ar'
            ? 'تعد مجموعة القصبي واحدة من أبرز الشركات في مجال تربية الكتاكيت عالية الجودة في مصر والشرق الأوسط. نحن نختار بعناية أفضل السلالات لضمان صحة ونمو الكتاكيت منذ اليوم الأول.'
            : 'Elkassaby Group is one of the leading companies in the field of high-quality chick rearing in Egypt and the Middle East. We carefully select the best breeds to ensure the health and growth of chicks from day one.'}
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          {lang === 'ar'
            ? 'نعتمد على برامج تغذية وإدارة حديثة مدعومة بالعلم لضمان أفضل معدلات النمو والأداء طوال دورة التربية. نهتم بالمتابعة المستمرة والرقابة الدقيقة على جميع مراحل التربية لتقديم كتاكيت قوية وصحية تلبي احتياجات المزارعين.'
            : 'Our programs are scientifically designed, combining modern nutrition and management techniques to achieve optimal growth and performance throughout the rearing cycle. We maintain continuous monitoring and strict quality control across all stages to provide strong and healthy chicks that meet farmers’ needs.'}
        </p>

        <a
          href={`/${lang}/about`}
          className="inline-block px-8 py-3 text-white font-semibold rounded-md transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: '#a01623' }}
        >
          {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
        </a>
      </motion.div>

      {/* Logo Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <div className="relative">
          <div className="relative rounded-xl p-4 bg-red-200 max-w-sm transform transition-all duration-300 hover:scale-105">
            <img
              src="/logoo.png"
              alt={lang === 'ar' ? 'مجموعة القصبي' : 'Elkassaby Group'}
              className="w-full h-auto shadow-red-200 shadow-xl rounded-sm object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>

    {/* Feature Cards */}
    {/* <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="py-8 w-[65%] mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { icon: Egg, title: 'Improved Breeds', ar: 'سلالات محسّنة', desc: 'We select hatching eggs carefully to ensure strong, healthy chicks.', arDesc: 'نختار بيض التفريخ بعناية لضمان إنتاج كتاكيت قوية وصحية.' },
          { icon: Feather, title: 'Optimal Growth', ar: 'نمو ممتاز', desc: 'We ensure proper chick growth through scientific supervision.', arDesc: 'نضمن نمو سليم للكتاكيت بفضل الرعاية والمتابعة العلمية.' },
          { icon: Leaf, title: 'Advanced Nutrition', ar: 'تغذية مدروسة', desc: 'We follow modern science-backed nutrition programs for top performance.', arDesc: 'نعتمد على برامج تغذية حديثة مدعومة بالعلم لضمان أعلى أداء.' },
          { icon: HeartPulse, title: 'Health Monitoring', ar: 'متابعة صحية دقيقة', desc: 'We provide continuous veterinary and health monitoring for best survival rates.', arDesc: 'نقدم متابعة بيطرية وصحية مستمرة لضمان أفضل معدلات النجاة.' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="p-2 mt-2 bg-white shadow-xl rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <Icon className="mx-auto w-12 h-12 text-[#a01623] mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {lang === 'ar' ? item.ar : item.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {lang === 'ar' ? item.arDesc : item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div> */}
  </div>
</section>


  


      {/* Maximizing Poultry Business Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="container w-[90%] mx-auto px-4">
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
                  src="/chicken2.webp"
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
      <section className=" flex items-center mt-5 md:h-[700px] ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
           
            <motion.div   
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative  mx-auto w-[75%] h-[400px] rounded-lg overflow-hidden"
>

  {/* <div className="absolute top-0 right-0 bg-[#a01623] flex items-center gap-2 w-[130px] py-1 rounded">
  <p className="text-white w-[80px] text-center text-sm ms-2">Origin Product</p>
    <p className="text-white text-center font-bold ml-5 text-2xl">100%</p>
    
  </div> */}

  <img
    src="/01.png"
    alt={lang === 'ar' ? 'جودة عالية' : 'High Quality'}
    className="object-contain w-full h-full"
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
      {lang === 'ar' ? 'كتاكيت مضمونة 100٪' : '100% Guaranteed Chicks'}
    </span>
  </h2>

  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    {lang === 'ar'
      ? 'نوفر كتاكيت قوية وعالية الجودة لمساعدة المربين في بدء دورات ناجحة وتحقيق أفضل معدلات نمو.'
      : 'We provide strong, high-quality chicks to help farmers start successful cycles and achieve the best growth rates.'}
  </p>

  <p className="text-lg text-gray-600 leading-relaxed mb-6">
    {lang === 'ar'
      ? 'نهتم باختيار السلالات المميزة ونقدم متابعة فنية لضمان أفضل أداء طوال دورة التربية. مجموعة القصبي تُعد من أكثر الشركات احتراماً في مجال الكتاكيت في مصر والشرق الأوسط.'
      : 'We carefully select premium chick breeds and offer technical support to ensure the best performance throughout the cycle. Elkassaby Group is one of the most respected chick suppliers in Egypt and the Middle East.'}
  </p>

  <a href={`/${lang}/products`} className="btn-primary">
    {lang === 'ar' ? 'تعرف على منتجاتنا' : 'Our Products'}
  </a>
</motion.div>

          </div>
        </div>
      </section>


      {/* Poultry Rearing Approach Section */}
     
     <section className="py-8 sm:py-12 md:py-16 lg:py-20 w-full sm:w-[95%] mx-auto px-4 sm:px-0">
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative min-h-[500px] sm:h-[550px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
    >
      {/* Background Image */}
      <img
        src="/work_bg.webp"
        alt={lang === 'ar' ? 'طبيب بيطري دواجن' : 'Poultry Veterinarian'}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20"></div>

      {/* Text Content */}
      <div
        className={`absolute inset-0 flex items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 ${
          lang === 'ar' 
            ? 'justify-start sm:justify-start text-right' 
            : 'justify-start sm:justify-end text-left'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] max-w-2xl"
        >
          {/* Small Title */}
          <div className={`mb-3 sm:mb-4 md:mb-6 flex ${lang === 'ar' ? 'justify-start' : 'justify-start'}`}>
            <span
              className={`text-white font-semibold text-sm sm:text-base md:text-lg tracking-wider flex items-center gap-2 sm:gap-3 ${
                lang === 'ar' ? 'flex-row-reverse' : ''
              }`}
            >
              <span className="h-px w-8 sm:w-10 md:w-12 bg-white rounded-full"></span>
              {lang === 'ar' ? 'ما نقدمه' : 'What We Do'}
            </span>
          </div>

          {/* Main Title */}
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight ${
              lang === 'ar' ? 'text-right' : 'text-left'
            }`}
          >
            {lang === 'ar'
              ? 'منهجنا العلمي في تربية الكتاكيت'
              : 'Our Scientific Chick Rearing Approach'}
          </h2>

          {/* Description */}
          <p
            className={`text-white/95 sm:text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 ${
              lang === 'ar' ? 'text-right' : 'text-left'
            }`}
          >
            {lang === 'ar'
              ? 'نطبق نظامًا علميًا دقيقًا لتربية الكتاكيت يبدأ من توفير بيئة مثالية تشمل ضبط درجات الحرارة والرطوبة، وتنفيذ إجراءات وقائية تقلل من أي مخاطر صحية...'
              : 'We apply a precise scientific system for chick rearing, starting with providing an ideal environment...'}
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

            {/* Stat 1 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="5"
                    fill="none"
                    className="sm:stroke-[6]"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="white"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray="226"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    className="sm:stroke-[6]"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-white">100%</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm sm:text-base md:text-lg truncate sm:whitespace-normal">
                  {lang === 'ar' ? 'خبرة في تربية الكتاكيت' : 'Chick Rearing Expertise'}
                </h4>
                <p className="text-white/80 text-xs sm:text-sm">
                  {lang === 'ar' ? 'معايير علمية دقيقة' : 'Scientific Standards'}
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="5"
                    fill="none"
                    className="sm:stroke-[6]"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="white"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray="226"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    className="sm:stroke-[6]"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-white">100%</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm sm:text-base md:text-lg truncate sm:whitespace-normal">
                  {lang === 'ar' ? 'تقنيات حديثة' : 'Modern Techniques'}
                </h4>
                <p className="text-white/80 text-xs sm:text-sm">
                  {lang === 'ar' ? 'لضمان أفضل نتائج' : 'For Optimal Results'}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
 


      {/* Subsidiary Companies Section */}
      <section className="py-20 w-[90%] mx-auto bg-white">
        <div className="container mx-auto px-4">
          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center items-center mb-8 text-[#a01623]">
            <span className="text-[#a01623] text-2xl font-bold "> Elkassaby Group</span>
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 395.77 81.79"
              className={`h-16 sm:h-20 md:h-24 lg:h-32 w-auto transition-colors duration-300 -mr-[242px] sm:-mr-4 md:-mr-[-500px] lg:-mr-[500px]`}
            >
              <g>
                <path 
                  className="transition-colors duration-300" 
                  fill="#a01623"
                  d="M61.82,49.15c.98.8,1.45,1.87.65,3.01l-11.74,11.92-17.51-16.96c-.61-.23-.72-.07-1.2.26-1.53,1.08-4.08,3.84-5.53,5.26-1.24,1.21-2.44,2.83-3.87,3.81-.67.06-5.63-5.79-6.81-6.54-.51-.32-.82-.46-1.37-.07-.46.78-.44,1.77.18,2.45l12.64,12.53.92-.19,8.5-8.51,1.05-.55,9.81,9.59-.05,1.99-14.76,14.64c-.65-.09-.74-.74-1.19-1.14-8.04-7.24-15.8-15.6-23.4-23.32-1.33-1.35-3.96-3.3-4.95-4.75-.65-.95-.88-2.13-.09-3.09l29.51-29.28c.18-.16.29-.09.48,0,.32.16,2.65,2.63,2.65,2.89L7.32,51.69c-.87.89-.85,2.49,0,3.36l25.43,25.14.61-.36c2.51-3.2,7.17-6.29,9.44-9.49.87-1.23,1.04-2.22.25-3.56l-6.93-6.96c-.27-.24-.61-.29-.96-.24-1.04.15-7.87,8-9.36,9.12-.27.25-.57.29-.92.19-.52-.15-6.82-6.52-7.76-7.47-1.4-1.41-5.6-5.32-6.43-6.63-.72-1.14-.41-2.19.35-3.22s4.45-4.71,5.51-5.51c.31-.24.66-.6,1.09-.59.94.03,6.46,6.99,7.63,6.89,1.05-.09,1.24-1.57,1.13-2.42-.05-.22-2.44-1.06-2.4-2.2,0-.32,2.72-3.11,3.04-3.2.91-.25,1.48,2.36,2.65,2.56,1.45.24,2.22-1.03,1.52-2.24-1.13-1.47-5.73-4.9-5.89-6.54-.03-.36.1-.66.23-.98l12.03-12.19c.29-.05,1.14.69,1.41.92,1.88,1.66,4.41,4.24,6.12,6.1.25.27.75.81.67,1.18l-9.28,9.67.06.79,16.11,16.04c.3.05.55,0,.82-.13.29-.14,4.22-4.08,4.56-4.55.73-.99,1.35-4.1-.24-3.35-.84.39-4.22,4.73-4.81,4.57l-7.18-6.97c-.33-.51-.62-1.15-.3-1.73l7.39-7.26.72.24,6.35,6.36c1.33.62,2.24-1.49,1.19-2.4l-27.34-27.29-1.08-.58-1.08.58L3.02,45.96c-1.1.89-3.1-1.75-3.01-2.74L32.97,10.28l32.14,31.86c1.79,2.38-3.65,5.04-3.93,6.59-.11.61.57.37.64.43ZM35.2,29.47c-.91.26-4.51,4.84-5.7,5.58-.36.46-.29,1.06-.12,1.58.14.42,4.11,4.49,4.68,4.9.88.64,1.3.64,2.18,0,.76-.55,3.85-3.66,4.43-4.43s.8-1.2.49-2.17c-.11-.35-4.6-5.01-5.04-5.27-.34-.2-.49-.31-.92-.19ZM54.7,52.64c.52.36,2.05-1.29,2.1-1.82.1-1.02-4.02-4.15-4.76-5.22-.25-.37-.21-1.04-.45-1.22-1.03-.75-1.96.29-1.96,1.45,0,2.55,4.57,4.16,5.07,6.81Z"
                />
                <path 
                  className="transition-colors duration-300" 
                  fill="#a01623"
                  d="M61.8,28.8c.59.6,3.62,3.73,3.68,4.12.19,1.08-1.72,3.64-2.88,3.1L33.72,6.92c-1.9-.96-2.5,1.01-3.49,2.06L3.02,35.91c-1.25.9-3.24-2.07-2.91-3.13L32.75,0l29.06,28.8Z"
                />
                <path 
                  className="transition-colors duration-300" 
                  fill="#a01623"
                  d="M45.27,44.21c-.15.19-2.25,1.96-2.4,1.95-.69-.44-3.13-2.11-2.99-2.91.1-.59,2.71-3.04,3.19-3.04,1.05.74,3.28,2.69,2.21,4.01Z"
                />
                <path 
                  className="transition-colors duration-300" 
                  fill="#a01623"
                  d="M47.43,35.45c1-.28,3.42,2.18,3.43,2.96,0,.63-2.33,2.39-3,2.67-.56,0-2.5-2.06-2.71-2.71-.05-.52,1.8-2.79,2.28-2.92Z"
                />
                <path 
                  className="transition-colors duration-300" 
                  fill="#a01623"
                  d="M28.96,54.12c.86-.17,2.97,1.97,2.97,2.72,0,.57-1.97,2.9-2.59,2.96-.79-.38-2.88-2.16-2.97-2.97-.07-.65,1.96-2.58,2.59-2.71Z"
                />
              </g>
            </svg>
              
            </div>
          </motion.div>

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl md:w-[570px] mx-auto font-bold text-[#a01623] mb-4 break-words">
  {lang === 'ar' 
    ? 'تتكون مجموعة القصبي من 3 شركات رئيسية'
    : 'Elkassaby Group consists of 3 main companies'}
</h2>

          </motion.div>

          {/* Companies Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Company 1 - Hagar Poultry */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl flex items-center justify-center p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img
                  src="/included/hagar-logo.png"
                  alt="Hagar Poultry"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                {lang === 'ar' ? 'هاجر للثروة الداجنة' : 'Hagar Poultry'}
              </h3>
            </motion.div>

            {/* Company 2 - Tabarak Poultry */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-6 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-2xl flex items-center justify-center p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img
                  src="/included/tabark-logo.png"
                  alt="Tabarak Poultry"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                {lang === 'ar' ? 'تبارك للتفريخ والدواجن' : 'Tabarak Poultry'}
              </h3>
            </motion.div>

            {/* Company 3 - Elkassaby Investment */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl flex items-center justify-center p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img
                  src="/included/kassaby-investment-logo.png"
                  alt="Elkassaby Investment"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                {lang === 'ar' ? 'القصبي للاستثمار' : 'Elkassaby Investment'}
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

  

      {/* Blog Section */}
      <section className="py-20 bg-gra">
        <div className="container w-[90%] mx-auto  px-4">
          {/* Section Header */}
         {/* Section Header */}
        <div className="flex justify-between items-center mb-12">

          {/* Titles */}
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#a01623] leading-tight mb-2">
              {lang === "ar" ? "مدونتنا" : "Our Blog"}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {lang === "ar" ? "اقرأ أحدث مدوناتنا" : "Read Our Latest Blog"}
              <br />
              {lang === "ar" ? "ومقالاتنا" : "& Article Post"}
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              className="w-12 h-12 rounded border-2 border-[#a01623] flex items-center justify-center text-[#a01623] hover:bg-[#a01623] hover:text-white transition"
            >
              {lang === "ar" ? <ChevronRight size={25} /> : <ChevronLeft size={25} />}
            </button>

            <button
              className="w-12 h-12 rounded border border-2 border-[#a01623] flex items-center justify-center text-[#a01623] hover:bg-[#a01623] hover:text-white transition"
            >
              {lang === "ar" ? <ChevronLeft size={25} /> : <ChevronRight size={25} />}
            </button>
          </div>
        </div>

    

          {/* Blog Cards Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Blog Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Text Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold text-black mb-3 leading-tight ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {lang === 'ar'
                    ? 'الدليل الشامل لتربية دجاج سعيد وصحي'
                    : 'The Ultimate Guide to Raising Happy and Healthy Chickens'}
                </h3>
                <div className={`flex items-center gap-4 text-sm text-gray-500 mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {lang === 'ar' ? '04/05/2024' : '05/04/2024'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    10k
                  </span>
                </div>
                <p className={`text-gray-700 text-sm mb-6 line-clamp-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {lang === 'ar'
                    ? 'اكتشف أفضل الممارسات العلمية لتربية الدجاج بطريقة صحية ومستدامة. تعلم كيفية توفير البيئة المثالية والرعاية المناسبة لضمان نمو صحي...'
                    : 'Discover the best scientific practices for raising chickens in a healthy and sustainable way. Learn how to provide the ideal environment and proper care to ensure healthy growth...'}
                </p>
                <a 
                  href={`/${lang}/blog/raising-happy-chickens`}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-black text-black font-medium text-sm rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md mt-auto ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <span>{lang === 'ar' ? 'اقرأ المقال' : 'Read Article'}</span>
                  <svg className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600"
                  alt="Poultry"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Blog Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Text Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold text-black mb-3 leading-tight ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {lang === 'ar'
                    ? 'طرق إبداعية للاستمتاع بالبيض الطازج من المزرعة'
                    : 'Creative Ways to Enjoy Farm-Fresh Eggs For Every Poultry Farming'}
                </h3>
                <div className={`flex items-center gap-4 text-sm text-gray-500 mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {lang === 'ar' ? '04/05/2024' : '05/04/2024'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    10k
                  </span>
                </div>
                <p className={`text-gray-700 text-sm mb-6 line-clamp-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {lang === 'ar'
                    ? 'استكشف طرقًا مبتكرة لاستخدام البيض الطازج في وجباتك اليومية. من الوصفات التقليدية إلى الأطباق الحديثة، اكتشف كيف يمكن للبيض أن يكون مكونًا متعدد الاستخدامات...'
                    : 'Explore innovative ways to use farm-fresh eggs in your daily meals. From traditional recipes to modern dishes, discover how eggs can be a versatile ingredient...'}
                </p>
                <a 
                  href={`/${lang}/blog/farm-fresh-eggs`}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-black text-black font-medium text-sm rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md mt-auto ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <span>{lang === 'ar' ? 'اقرأ المقال' : 'Read Article'}</span>
                  <svg className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src='https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600'
                  alt="Chicken"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Blog Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Text Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold text-black mb-3 leading-tight ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {lang === 'ar'
                    ? 'طرق رائعة لتعزيز إنتاجية مزرعة الدواجن الخاصة بك'
                    : 'Egg-citing Ways to Boost Your Poultry Farm\'s Productivity'}
                </h3>
                <div className={`flex items-center gap-4 text-sm text-gray-500 mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {lang === 'ar' ? '04/05/2024' : '05/04/2024'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    10k
                  </span>
                </div>
                <p className={`text-gray-700 text-sm mb-6 line-clamp-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {lang === 'ar'
                    ? 'تعلم كيفية تحسين إنتاجية مزرعتك من خلال تطبيق أحدث التقنيات والأساليب العلمية. اكتشف استراتيجيات فعالة لزيادة الإنتاج وتحسين جودة المنتجات...'
                    : 'Learn how to improve your farm\'s productivity by applying the latest techniques and scientific methods. Discover effective strategies to increase production and improve product quality...'}
                </p>
                <a 
                  href={`/${lang}/blog/boost-productivity`}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-black text-black font-medium text-sm rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md mt-auto ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <span>{lang === 'ar' ? 'اقرأ المقال' : 'Read Article'}</span>
                  <svg className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=600"
                  alt="Chicken"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


     
{/* Newsletter Section */}

<div className=''>
<section className="relative py-16 md:py-20 overflow-hidden">
  {/* Blurred Green Leaves Background */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{
     backgroundColor: "#111827",
      filter: "blur(8px)",
      transform: "scale(1.1)"
    }}
  ></div>
  <div className="absolute inset-0 bg-[#111827]/20"></div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      {/* Dark Green Semi-Transparent Container */}
      <div 
        className="bg-grey/85 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-200/40 shadow-2xl"
        style={{
          borderWidth: "1px"
        }}
      >
        {/* Heading - Elegant Serif */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif text-amber-50 mb-3 text-center ${lang === "ar" ? "font-playfair" : "font-playfair"}`}>
          {lang === "ar" 
            ? " اشترك في نشرتنا الإخبارية" 
            : "Subscribe to our newsletter"}
        </h2>

        {/* Subtitle */}
        <p className={`text-base md:text-lg text-amber-50/90 mb-8 text-center ${lang === "ar" ? "font-sans" : "font-sans"}`}>
          {lang === "ar" ? "احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني" : "Get the latest news and updates directly in your email"}
        </p>

        {/* Email Input and Subscribe Button Row */}
        <div className={`flex flex-col sm:flex-row gap-4 items-center ${lang === "ar" ? "flex-row-reverse" : ""}`}>
          {/* Email Input with Underline */}
          <div className="flex-1 w-full relative">
            <input
              type="email"
              placeholder={lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
              className={`w-full bg-transparent text-amber-50 placeholder:text-amber-50/70 pb-3 focus:outline-none text-base md:text-lg border-b-2 border-amber-200/60 focus:border-amber-200 transition-colors ${lang === "ar" ? "text-right" : "text-left"}`}
            />
          </div>
          <div className="flex-1 w-full relative">
          <input
              type="text"
              placeholder={lang === "ar" ? "رقم الهاتف" : "Phone Number"}
              className={`w-full bg-transparent text-amber-50 placeholder:text-amber-50/70 pb-3 focus:outline-none text-base md:text-lg border-b-2 border-amber-200/60 focus:border-amber-200 transition-colors ${lang === "ar" ? "text-right" : "text-left"}`}
              style={{ textAlign: lang === "ar" ? "right" : "left" }}
            />
            </div>
          {/* Subscribe Button - Terracotta/Orange-Brown */}
          <button
            className="px-8 md:px-10 py-3 md:py-4 bg-[#c9734f] hover:bg-[#b8653f] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-base md:text-lg"
            style={{
              backgroundColor: "#a01623"
            }}
          >
            {lang === "ar" ? "اشترك" : "Subscribe"}
          </button>
        </div>
      </div>
    </motion.div>
  </div>
</section>
</div>


      <Footer />
    </main>
  )
}

