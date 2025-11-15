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
import { Egg, Feather, Leaf, HeartPulse } from "lucide-react";

// import { FiZap , FiAward , FiShield , TrendingUp  } from 'react-icons/fi'




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
            ? 'خبرة 23 عاماً في تربية الكتاكيت والسلالات المميزة'
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
      <section className=" flex items-center h-[700px] ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
           
            <motion.div   
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative bg-yellow-50 mx-auto w-[75%] h-[400px] rounded-lg overflow-hidden"
>

  <div className="absolute top-0 right-0 bg-[#a01623] flex items-center gap-2 w-[130px] py-1 rounded">
  <p className="text-white w-[80px] text-center text-sm ms-2">Origin Product</p>
    <p className="text-white text-center font-bold ml-5 text-2xl">100%</p>
    
  </div>

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
     
     <section className="py-20 w-[95%] mx-auto">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
    >
      {/* Background Image */}
      <img
        src="/work_bg.png"
        alt={lang === 'ar' ? 'طبيب بيطري دواجن' : 'Poultry Veterinarian'}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text Content - Positioned on Right */}
      <div
        className={`absolute inset-0 flex items-center p-8 lg:p-16 ${
          lang === 'ar' ? 'justify-start text-right' : 'justify-end text-left'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 w-full lg:w-[50%] max-w-2xl"
        >
          {/* Small Title */}
          <div className="mb-6 flex justify-right">
            <span
              className={`text-white font-semibold text-lg tracking-wider flex items-center gap-3 ${
                lang === 'ar' ? 'flex-row-reverse' : ''
              }`}
            >
              <span className="h-px w-12 bg-white rounded-full"></span>
              {lang === 'ar' ? 'ما نقدمه' : 'What We Do'}
            </span>
          </div>

          {/* Main Title */}
          <h2
            className={`text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight ${
              lang === 'ar' ? 'text-right' : 'text-left'
            }`}
          >
            {lang === 'ar'
              ? 'منهجنا العلمي في تربية الكتاكيت'
              : 'Our Scientific Chick Rearing Approach'}
          </h2>

          {/* Description */}
          <p
            className={`text-white/90 text-lg leading-relaxed mb-8 ${
              lang === 'ar' ? 'text-right' : 'text-left'
            }`}
          >
            {lang === 'ar'
              ? 'نطبق نظامًا علميًا دقيقًا لتربية الكتاكيت يبدأ من توفير بيئة مثالية تشمل ضبط درجات الحرارة والرطوبة، وتنفيذ إجراءات وقائية تقلل من أي مخاطر صحية. نركز على التغذية المبكرة السليمة لدعم بناء جهاز مناعي قوي وتحسين معدلات النمو منذ اليوم الأول، مما يضمن إنتاجية عالية وجودة أفضل للمزارع.'
              : 'We apply a precise scientific system for chick rearing, starting with providing an ideal environment that includes controlled temperature and humidity levels, along with preventive measures that minimize any health risks. We focus on proper early nutrition to support strong immune development and improved growth rates from day one, ensuring high productivity and superior quality for farms.'}
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                {/* Circular Progress */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="white"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="226"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">100%</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  {lang === 'ar' ? 'خبرة في تربية الكتاكيت' : 'Chick Rearing Expertise'}
                </h4>
                <p className="text-white/80 text-sm">
                  {lang === 'ar' ? 'معايير علمية دقيقة' : 'Scientific Standards'}
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                {/* Circular Progress */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="white"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="226"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">100%</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  {lang === 'ar' ? 'تقنيات حديثة' : 'Modern Techniques'}
                </h4>
                  <p className="text-white/80 text-sm">
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
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl w-[570px] mx-auto font-bold text-[#a01623] mb-4 break-words">
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
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#a01623] leading-tight mb-2 inline-block">
                {lang === 'ar' ? 'مدونتنا' : 'Our Blog'}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                {lang === 'ar' 
                  ? 'اقرأ أحدث مدوناتنا'
                  : 'Read Our Latest Blog'}
                <br />
                {lang === 'ar' ? 'ومقالاتنا' : '& Article Post'}
              </h2>
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
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-[#a01623]">
                    {lang === 'ar' ? 'دواجن' : 'Poultry'}
                  </span>
                </div>
              </div>
              <div className="p-6  bg-[#a01632] ">
                <div className="flex items-center gap-4 text-sm text-gray-50 mb-3">
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
                <h3 className="text-xl font-bold text-gray-100 mb-4 leading-tight">
                  {lang === 'ar'
                    ? 'الدليل الشامل لتربية دجاج سعيد وصحي'
                    : 'The Ultimate Guide to Raising Happy and Healthy Chickens'}
                </h3>
                <a 
                  href={`/${lang}/blog/raising-happy-chickens`}
                  className="inline-block px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 hover:bg-[#a01623] hover:text-white"
                  style={{ borderColor: '#a01623', color: '#a01623' }}
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
                  src='https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600'
                  alt="Chicken"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-[#a01623]">
                    {lang === 'ar' ? 'دجاج' : 'Chicken'}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-[#a01623]">
                <div className="flex items-center gap-4 text-sm text-gray-50 mb-3">
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
                <h3 className="text-xl font-bold text-gray-100 mb-4 leading-tight">
                  {lang === 'ar'
                    ? 'طرق إبداعية للاستمتاع بالبيض الطازج من المزرعة'
                    : 'Creative Ways to Enjoy Farm-Fresh Eggs For Every Poultry Farming'}
                </h3>
                <a 
                  href={`/${lang}/blog/farm-fresh-eggs`}
                  className="inline-block px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 hover:bg-[#a01623] hover:text-white"
                  style={{ borderColor: '#a01623', color: '#a01623' }}
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
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-[#a01623]">
                    {lang === 'ar' ? 'دجاج' : 'Chicken'}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-[#a01623]">
                <div className="flex items-center gap-4 text-sm text-gray-50 mb-3">
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
                <h3 className="text-xl font-bold text-gray-100 mb-4 leading-tight">
                  {lang === 'ar'
                    ? 'طرق رائعة لتعزيز إنتاجية مزرعة الدواجن الخاصة بك'
                    : 'Egg-citing Ways to Boost Your Poultry Farm\'s Productivity'}
                </h3>
                <a 
                  href={`/${lang}/blog/boost-productivity`}
                  className="inline-block px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 hover:bg-[#a01623] hover:text-white"
                  style={{ borderColor: '#a01623', color: '#a01623' }}
                >
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#a01623' }}>
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
                  className="px-6 py-3 bg-white text-[#a01623] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
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

