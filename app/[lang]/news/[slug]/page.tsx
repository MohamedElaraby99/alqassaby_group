'use client'

import { useParams } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendar, FaUser, FaShareAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

// News data with detailed information
const newsData: { [key: string]: any } = {
  'largest-chick-farms': {
    titleAr: 'أكبر مزارع كتاكيت في مصر الأكبر في الشرق الأوسط',
    titleEn: 'Largest Chick Farms in Egypt and the Middle East',
    dateAr: 'ديسمبر 18, 2023',
    dateEn: 'December 18, 2023',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200',
    contentAr: `
      <h2>مزارع الكتاكيت الأكبر في المنطقة</h2>
      <p>تفخر مجموعة القصبي بامتلاك أكبر مزارع تربية الكتاكيت في مصر والشرق الأوسط، حيث نستخدم أحدث التقنيات والمعايير العالمية في التربية والتفريخ. تمتد مزارعنا على مساحات شاسعة وتضم آلاف العنابر المجهزة بأحدث الأنظمة.</p>
      
      <h3>التقنيات المستخدمة</h3>
      <p>نستخدم في مزارعنا أحدث أنظمة التحكم في المناخ والتهوية، مع أنظمة تغذية أوتوماتيكية متطورة تضمن توزيع الأعلاف بشكل متساوٍ ودقيق. كما نطبق أعلى معايير الأمن الحيوي لحماية القطيع من الأمراض.</p>
      
      <h3>الطاقة الإنتاجية</h3>
      <p>تبلغ طاقتنا الإنتاجية ملايين الكتاكيت سنوياً، مما يجعلنا من أكبر المنتجين في المنطقة. نعمل على تلبية احتياجات السوق المحلي والإقليمي بكتاكيت عالية الجودة وسلالات ممتازة.</p>
      
      <h3>الرعاية والجودة</h3>
      <p>يتم رعاية الكتاكيت منذ اليوم الأول من قبل فريق من الأطباء البيطريين والخبراء المتخصصين. نطبق برامج تحصين شاملة ونراقب صحة القطيع على مدار الساعة لضمان أفضل النتائج.</p>
      
      <h3>الاستدامة والبيئة</h3>
      <p>نلتزم بممارسات مستدامة في جميع عملياتنا، مع التركيز على حماية البيئة وتقليل الأثر البيئي. نستخدم أنظمة إدارة النفايات الحديثة ونعمل على تحسين كفاءة استخدام الموارد.</p>
    `,
    contentEn: `
      <h2>The Largest Chick Farms in the Region</h2>
      <p>Elkassaby Group is proud to own the largest chick breeding farms in Egypt and the Middle East, where we use the latest technologies and international standards in breeding and hatching. Our farms extend over vast areas and include thousands of barns equipped with the latest systems.</p>
      
      <h3>Technologies Used</h3>
      <p>We use the latest climate and ventilation control systems in our farms, with advanced automatic feeding systems that ensure even and precise feed distribution. We also apply the highest biosecurity standards to protect the flock from diseases.</p>
      
      <h3>Production Capacity</h3>
      <p>Our production capacity reaches millions of chicks annually, making us one of the largest producers in the region. We work to meet the needs of the local and regional market with high-quality chicks and excellent breeds.</p>
      
      <h3>Care and Quality</h3>
      <p>Chicks are cared for from day one by a team of veterinarians and specialized experts. We implement comprehensive vaccination programs and monitor flock health around the clock to ensure the best results.</p>
      
      <h3>Sustainability and Environment</h3>
      <p>We are committed to sustainable practices in all our operations, focusing on environmental protection and reducing environmental impact. We use modern waste management systems and work to improve resource efficiency.</p>
    `,
  },
  'largest-poultry-farms': {
    titleAr: 'أكبر مزارع دواجن في مصر الأفضل في الشرق الأوسط',
    titleEn: 'Largest Poultry Farms in Egypt, Best in the Middle East',
    dateAr: 'ديسمبر 18, 2023',
    dateEn: 'December 18, 2023',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784532?w=1200',
    contentAr: `
      <h2>مزارع الدواجن الرائدة في المنطقة</h2>
      <p>تعد مزارع مجموعة القصبي من أكبر وأفضل مزارع الدواجن في مصر والشرق الأوسط بأكمله. نطبق أحدث تقنيات التربية ونلتزم بأعلى معايير الجودة والسلامة في جميع عملياتنا.</p>
      
      <h3>البنية التحتية المتطورة</h3>
      <p>تتميز مزارعنا ببنية تحتية حديثة تشمل عنابر مكيفة ومجهزة بأحدث أنظمة التحكم الآلي. كل عنبر مصمم لتوفير بيئة مثالية للدواجن، مع أنظمة تهوية متطورة وإضاءة محسوبة علمياً.</p>
      
      <h3>الإنتاجية والكفاءة</h3>
      <p>حققنا معدلات إنتاجية عالية وكفاءة استثنائية في التحويل الغذائي، مما يجعلنا في مقدمة منتجي الدواجن في المنطقة. نعتمد على سلالات عالمية معروفة بجودتها وسرعة نموها.</p>
      
      <h3>الرعاية البيطرية المتكاملة</h3>
      <p>يشرف على مزارعنا فريق من أفضل الأطباء البيطريين المتخصصين في مجال الدواجن. نطبق برامج وقائية شاملة ونراقب صحة القطيع بشكل مستمر باستخدام أحدث التقنيات.</p>
      
      <h3>الجودة والسلامة الغذائية</h3>
      <p>نلتزم بأعلى معايير الجودة والسلامة الغذائية في جميع مراحل الإنتاج. منتجاتنا حاصلة على شهادات الجودة الدولية وتخضع لرقابة صارمة لضمان سلامة المستهلك.</p>
    `,
    contentEn: `
      <h2>Leading Poultry Farms in the Region</h2>
      <p>Elkassaby Group farms are among the largest and best poultry farms in Egypt and the entire Middle East. We apply the latest breeding techniques and adhere to the highest quality and safety standards in all our operations.</p>
      
      <h3>Advanced Infrastructure</h3>
      <p>Our farms feature modern infrastructure including air-conditioned barns equipped with the latest automatic control systems. Each barn is designed to provide an ideal environment for poultry, with advanced ventilation systems and scientifically calculated lighting.</p>
      
      <h3>Productivity and Efficiency</h3>
      <p>We have achieved high productivity rates and exceptional feed conversion efficiency, placing us at the forefront of poultry producers in the region. We rely on globally recognized breeds known for their quality and rapid growth.</p>
      
      <h3>Comprehensive Veterinary Care</h3>
      <p>Our farms are supervised by a team of the best veterinarians specialized in poultry. We implement comprehensive preventive programs and continuously monitor flock health using the latest technologies.</p>
      
      <h3>Quality and Food Safety</h3>
      <p>We adhere to the highest quality and food safety standards at all stages of production. Our products are certified with international quality certificates and undergo strict monitoring to ensure consumer safety.</p>
    `,
  },
  'largest-poultry-companies': {
    titleAr: 'أكبر شركات دواجن في مصر الأفضل في الشرق الأوسط',
    titleEn: 'Largest Poultry Companies in Egypt, Best in the Middle East',
    dateAr: 'ديسمبر 16, 2023',
    dateEn: 'December 16, 2023',
    image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=1200',
    contentAr: `
      <h2>مجموعة القصبي في الصدارة</h2>
      <p>تحتل مجموعة القصبي مكانة الصدارة بين أكبر شركات الدواجن في مصر والمنطقة من حيث الإنتاج والجودة. بفضل خبرتنا الممتدة لأكثر من 23 عاماً، أصبحنا الخيار الأول للمربين والتجار.</p>
      
      <h3>التكامل الرأسي</h3>
      <p>نتميز بنظام التكامل الرأسي الذي يشمل جميع مراحل الإنتاج، من تربية الأمهات وإنتاج الكتاكيت إلى تصنيع الأعلاف والتوزيع. هذا النظام يضمن جودة عالية وأسعاراً تنافسية.</p>
      
      <h3>الانتشار الجغرافي</h3>
      <p>نمتلك شبكة واسعة من المزارع والمرافق في مختلف أنحاء مصر، مما يمكننا من خدمة عملائنا في جميع المحافظات. فروعنا ومراكز التوزيع تغطي كافة المناطق الاستراتيجية.</p>
      
      <h3>الابتكار والتطوير</h3>
      <p>نستثمر باستمرار في البحث والتطوير لتحسين منتجاتنا وخدماتنا. نتعاون مع مراكز بحثية عالمية ونطبق أحدث الابتكارات في صناعة الدواجن.</p>
      
      <h3>المسؤولية الاجتماعية</h3>
      <p>ندرك مسؤوليتنا تجاه المجتمع والبيئة. نساهم في برامج التنمية المحلية ونوفر فرص عمل للآلاف من المواطنين، ونلتزم بالممارسات المستدامة في جميع عملياتنا.</p>
    `,
    contentEn: `
      <h2>Elkassaby Group at the Forefront</h2>
      <p>Elkassaby Group holds a leading position among the largest poultry companies in Egypt and the region in terms of production and quality. With our experience spanning more than 23 years, we have become the first choice for breeders and traders.</p>
      
      <h3>Vertical Integration</h3>
      <p>We are distinguished by a vertical integration system that includes all stages of production, from breeding parents and producing chicks to manufacturing feed and distribution. This system ensures high quality and competitive prices.</p>
      
      <h3>Geographic Spread</h3>
      <p>We own an extensive network of farms and facilities throughout Egypt, enabling us to serve our customers in all governorates. Our branches and distribution centers cover all strategic areas.</p>
      
      <h3>Innovation and Development</h3>
      <p>We continuously invest in research and development to improve our products and services. We collaborate with global research centers and apply the latest innovations in the poultry industry.</p>
      
      <h3>Social Responsibility</h3>
      <p>We recognize our responsibility towards society and the environment. We contribute to local development programs, provide employment opportunities for thousands of citizens, and are committed to sustainable practices in all our operations.</p>
    `,
  },
  'feed-imports': {
    titleAr: 'أكبر شركات استيراد خامات أعلاف 2024',
    titleEn: 'Largest Feed Raw Materials Import Companies 2024',
    dateAr: 'ديسمبر 13, 2023',
    dateEn: 'December 13, 2023',
    image: 'https://images.unsplash.com/photo-1613732414371-d965c9f3d51a?w=1200',
    contentAr: `
      <h2>استيراد أجود الخامات العالمية</h2>
      <p>تعد مجموعة القصبي من أكبر مستوردي خامات الأعلاف في مصر. نستورد أجود الخامات من أفضل المصادر العالمية لضمان أعلى جودة لمنتجاتنا وتلبية احتياجات عملائنا.</p>
      
      <h3>شراكات عالمية</h3>
      <p>نتعاون مع كبرى الشركات العالمية المنتجة للخامات في أمريكا، البرازيل، الأرجنتين، وأوروبا. هذه الشراكات تضمن لنا الحصول على أفضل الخامات بأسعار تنافسية وبشكل مستمر.</p>
      
      <h3>مراقبة الجودة</h3>
      <p>جميع الخامات المستوردة تخضع لفحوصات صارمة في معاملنا المتخصصة قبل استخدامها في الإنتاج. نطبق معايير الجودة الدولية ونتأكد من مطابقة كل شحنة للمواصفات المطلوبة.</p>
      
      <h3>التخزين والحفظ</h3>
      <p>نمتلك مخازن حديثة ومجهزة بأحدث أنظمة التحكم في الحرارة والرطوبة. هذا يضمن الحفاظ على جودة الخامات وقيمتها الغذائية حتى استخدامها في الإنتاج.</p>
      
      <h3>التخطيط الاستراتيجي</h3>
      <p>لدينا فريق متخصص في التخطيط والتنبؤ بالاحتياجات المستقبلية. نضمن توفر الخامات على مدار العام ونتعامل بكفاءة مع التغيرات في الأسواق العالمية.</p>
    `,
    contentEn: `
      <h2>Importing the Finest Global Raw Materials</h2>
      <p>Elkassaby Group is one of the largest importers of feed raw materials in Egypt. We import the finest raw materials from the best global sources to ensure the highest quality for our products and meet our customers' needs.</p>
      
      <h3>Global Partnerships</h3>
      <p>We collaborate with major global companies producing raw materials in America, Brazil, Argentina, and Europe. These partnerships ensure we obtain the best raw materials at competitive prices on a continuous basis.</p>
      
      <h3>Quality Control</h3>
      <p>All imported raw materials undergo strict testing in our specialized laboratories before use in production. We apply international quality standards and ensure each shipment complies with required specifications.</p>
      
      <h3>Storage and Preservation</h3>
      <p>We own modern warehouses equipped with the latest temperature and humidity control systems. This ensures maintaining the quality of raw materials and their nutritional value until use in production.</p>
      
      <h3>Strategic Planning</h3>
      <p>We have a specialized team for planning and forecasting future needs. We ensure availability of raw materials year-round and efficiently handle changes in global markets.</p>
    `,
  },
  'breeder-farms': {
    titleAr: 'أكبر مزارع أمهات تسمين دواجن 2024',
    titleEn: 'Largest Broiler Breeder Farms 2024',
    dateAr: 'ديسمبر 13, 2023',
    dateEn: 'December 13, 2023',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200',
    contentAr: `
      <h2>مزارع أمهات التسمين الأكبر</h2>
      <p>نمتلك أكبر مزارع أمهات التسمين في مصر، مع سلالات عالية الإنتاجية ومعدلات تحويل ممتازة. مزارعنا مجهزة بأحدث التقنيات لضمان أفضل أداء إنتاجي.</p>
      
      <h3>السلالات العالمية</h3>
      <p>نربي أفضل السلالات العالمية المتخصصة في إنتاج دجاج التسمين. هذه السلالات معروفة بمعدلات نموها السريعة، كفاءتها العالية في تحويل الغذاء، ومقاومتها للأمراض.</p>
      
      <h3>الرعاية المتخصصة</h3>
      <p>تحظى قطعان الأمهات برعاية خاصة من فريق متخصص من الأطباء البيطريين والفنيين. نطبق برامج تغذية دقيقة وبرامج إضاءة محسوبة لتحقيق أفضل معدلات إنتاج.</p>
      
      <h3>معدلات الإنتاج</h3>
      <p>حققنا معدلات إنتاج استثنائية تفوق المعدلات العالمية، مع نسب فقس عالية وجودة كتاكيت ممتازة. نضمن توفير كتاكيت قوية وصحية لعملائنا على مدار العام.</p>
      
      <h3>الأمن الحيوي</h3>
      <p>نطبق أعلى معايير الأمن الحيوي في مزارع الأمهات. لدينا بروتوكولات صارمة للدخول والخروج، أنظمة تعقيم متطورة، ومراقبة صحية مستمرة لحماية القطيع.</p>
    `,
    contentEn: `
      <h2>The Largest Broiler Breeder Farms</h2>
      <p>We own the largest broiler breeder farms in Egypt, with highly productive strains and excellent conversion rates. Our farms are equipped with the latest technologies to ensure the best production performance.</p>
      
      <h3>Global Breeds</h3>
      <p>We breed the best global breeds specialized in producing broiler chickens. These breeds are known for their rapid growth rates, high feed conversion efficiency, and disease resistance.</p>
      
      <h3>Specialized Care</h3>
      <p>Breeder flocks receive special care from a specialized team of veterinarians and technicians. We implement precise feeding programs and calculated lighting programs to achieve the best production rates.</p>
      
      <h3>Production Rates</h3>
      <p>We have achieved exceptional production rates exceeding global standards, with high hatch rates and excellent chick quality. We ensure the supply of strong and healthy chicks to our customers year-round.</p>
      
      <h3>Biosecurity</h3>
      <p>We apply the highest biosecurity standards in breeder farms. We have strict entry and exit protocols, advanced disinfection systems, and continuous health monitoring to protect the flock.</p>
    `,
  },
  'new-factory': {
    titleAr: 'افتتاح مصنع جديد لإنتاج الأعلاف',
    titleEn: 'Opening of New Feed Production Factory',
    dateAr: 'نوفمبر 25, 2023',
    dateEn: 'November 25, 2023',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784532?w=1200',
    contentAr: `
      <h2>توسع في الطاقة الإنتاجية</h2>
      <p>افتتحنا مصنعاً جديداً بأحدث التقنيات لزيادة طاقتنا الإنتاجية وتلبية الطلب المتزايد على منتجاتنا. المصنع الجديد يعد إضافة نوعية لمنظومتنا الإنتاجية.</p>
      
      <h3>التقنيات الحديثة</h3>
      <p>المصنع الجديد مجهز بأحدث خطوط الإنتاج الأوتوماتيكية وأنظمة التحكم الرقمية. هذه التقنيات تضمن دقة عالية في التركيبات وجودة متسقة في الإنتاج.</p>
      
      <h3>الطاقة الإنتاجية</h3>
      <p>يضيف المصنع الجديد آلاف الأطنان من الطاقة الإنتاجية الشهرية، مما يمكننا من تلبية احتياجات السوق المتزايدة وتوسيع حصتنا السوقية.</p>
      
      <h3>الاستدامة البيئية</h3>
      <p>تم تصميم المصنع وفق أعلى معايير الاستدامة البيئية، مع أنظمة لتقليل الانبعاثات وإعادة تدوير المياه واستخدام الطاقة المتجددة.</p>
      
      <h3>فرص العمل</h3>
      <p>وفر المصنع الجديد مئات فرص العمل المباشرة وغير المباشرة، مساهماً في تنمية المجتمع المحلي ودعم الاقتصاد الوطني.</p>
    `,
    contentEn: `
      <h2>Expansion in Production Capacity</h2>
      <p>We have opened a new factory with the latest technologies to increase our production capacity and meet the growing demand for our products. The new factory is a qualitative addition to our production system.</p>
      
      <h3>Modern Technologies</h3>
      <p>The new factory is equipped with the latest automatic production lines and digital control systems. These technologies ensure high accuracy in formulations and consistent quality in production.</p>
      
      <h3>Production Capacity</h3>
      <p>The new factory adds thousands of tons of monthly production capacity, enabling us to meet growing market needs and expand our market share.</p>
      
      <h3>Environmental Sustainability</h3>
      <p>The factory was designed according to the highest environmental sustainability standards, with systems to reduce emissions, recycle water, and use renewable energy.</p>
      
      <h3>Employment Opportunities</h3>
      <p>The new factory provided hundreds of direct and indirect employment opportunities, contributing to local community development and supporting the national economy.</p>
    `,
  },
  'partnership': {
    titleAr: 'شراكة استراتيجية مع شركة عالمية',
    titleEn: 'Strategic Partnership with Global Company',
    dateAr: 'نوفمبر 10, 2023',
    dateEn: 'November 10, 2023',
    image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=1200',
    contentAr: `
      <h2>شراكة استراتيجية جديدة</h2>
      <p>عقدنا شراكة استراتيجية مع إحدى الشركات العالمية الرائدة في صناعة الدواجن لتطوير منتجاتنا وخدماتنا. هذه الشراكة تعزز مكانتنا في السوق وتفتح آفاقاً جديدة للنمو.</p>
      
      <h3>أهداف الشراكة</h3>
      <p>تهدف الشراكة إلى نقل أحدث التقنيات والممارسات العالمية في صناعة الدواجن، تطوير منتجات جديدة، وتحسين الكفاءة الإنتاجية في مختلف المجالات.</p>
      
      <h3>التبادل المعرفي</h3>
      <p>تتيح لنا الشراكة الاستفادة من الخبرات العالمية في مجالات التربية، التغذية، الإدارة، والتسويق. سيتم تدريب فرقنا على أحدث الممارسات والتقنيات.</p>
      
      <h3>البحث والتطوير</h3>
      <p>سنتعاون في مشاريع بحثية مشتركة لتطوير تركيبات أعلاف جديدة، تحسين السلالات، وابتكار حلول لتحديات الصناعة.</p>
      
      <h3>التوسع الإقليمي</h3>
      <p>تفتح الشراكة فرصاً للتوسع في أسواق جديدة وتصدير منتجاتنا إلى دول المنطقة، مما يعزز من حضورنا الإقليمي والدولي.</p>
    `,
    contentEn: `
      <h2>New Strategic Partnership</h2>
      <p>We have entered into a strategic partnership with one of the world's leading companies in the poultry industry to develop our products and services. This partnership strengthens our market position and opens new horizons for growth.</p>
      
      <h3>Partnership Objectives</h3>
      <p>The partnership aims to transfer the latest technologies and global practices in the poultry industry, develop new products, and improve production efficiency in various fields.</p>
      
      <h3>Knowledge Exchange</h3>
      <p>The partnership allows us to benefit from global expertise in breeding, nutrition, management, and marketing. Our teams will be trained on the latest practices and technologies.</p>
      
      <h3>Research and Development</h3>
      <p>We will collaborate on joint research projects to develop new feed formulations, improve breeds, and innovate solutions to industry challenges.</p>
      
      <h3>Regional Expansion</h3>
      <p>The partnership opens opportunities for expansion into new markets and exporting our products to regional countries, enhancing our regional and international presence.</p>
    `,
  },
  'training-program': {
    titleAr: 'إطلاق برنامج تدريبي جديد للمربين',
    titleEn: 'Launch of New Training Program for Breeders',
    dateAr: 'أكتوبر 28, 2023',
    dateEn: 'October 28, 2023',
    image: 'https://images.unsplash.com/photo-1613732414371-d965c9f3d51a?w=1200',
    contentAr: `
      <h2>برنامج تدريبي شامل</h2>
      <p>أطلقنا برنامجاً تدريبياً شاملاً لمربي الدواجن لنقل أحدث المعارف والممارسات في هذا المجال. البرنامج يستهدف تحسين كفاءة المربين وزيادة إنتاجية مزارعهم.</p>
      
      <h3>محاور التدريب</h3>
      <p>يغطي البرنامج مواضيع متنوعة تشمل التربية الحديثة، التغذية المتوازنة، الرعاية الصحية، إدارة المزرعة، والأمن الحيوي. كل محور يتم تقديمه من قبل خبراء متخصصين.</p>
      
      <h3>الأساليب التدريبية</h3>
      <p>نستخدم أساليب تدريبية متنوعة تجمع بين المحاضرات النظرية، الجلسات العملية، الزيارات الميدانية، والتدريب العملي في المزارع النموذجية.</p>
      
      <h3>الشهادات والاعتماد</h3>
      <p>يحصل المشاركون على شهادات معتمدة بعد إتمام البرنامج بنجاح. هذه الشهادات تعترف بها الجهات المعنية في القطاع الزراعي.</p>
      
      <h3>المتابعة والدعم</h3>
      <p>نقدم خدمات المتابعة والدعم الفني للخريجين، مع استشارات مجانية وزيارات دورية لمساعدتهم في تطبيق ما تعلموه.</p>
    `,
    contentEn: `
      <h2>Comprehensive Training Program</h2>
      <p>We have launched a comprehensive training program for poultry breeders to transfer the latest knowledge and practices in this field. The program aims to improve breeders' efficiency and increase their farm productivity.</p>
      
      <h3>Training Modules</h3>
      <p>The program covers various topics including modern breeding, balanced nutrition, health care, farm management, and biosecurity. Each module is delivered by specialized experts.</p>
      
      <h3>Training Methods</h3>
      <p>We use diverse training methods combining theoretical lectures, practical sessions, field visits, and hands-on training in model farms.</p>
      
      <h3>Certificates and Accreditation</h3>
      <p>Participants receive accredited certificates upon successfully completing the program. These certificates are recognized by relevant authorities in the agricultural sector.</p>
      
      <h3>Follow-up and Support</h3>
      <p>We provide follow-up and technical support services to graduates, with free consultations and regular visits to help them apply what they have learned.</p>
    `,
  },
  'iso-certificate': {
    titleAr: 'حصولنا على شهادة الأيزو الدولية',
    titleEn: 'Obtaining International ISO Certificate',
    dateAr: 'أكتوبر 15, 2023',
    dateEn: 'October 15, 2023',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200',
    contentAr: `
      <h2>شهادة الجودة العالمية</h2>
      <p>حصلت مجموعة القصبي على شهادة الأيزو الدولية في إدارة الجودة، مما يؤكد التزامنا بأعلى المعايير العالمية في جميع عملياتنا. هذا الإنجاز يعكس جهودنا المستمرة في تحسين الجودة.</p>
      
      <h3>معايير الأيزو</h3>
      <p>حصلنا على شهادة ISO 9001 لإدارة الجودة وISO 22000 لسلامة الغذاء. هذه الشهادات تؤكد التزامنا بأعلى معايير الجودة والسلامة في جميع مراحل الإنتاج.</p>
      
      <h3>عملية التأهيل</h3>
      <p>خضعت جميع مرافقنا وعملياتنا لعمليات تدقيق شاملة من قبل هيئات اعتماد دولية. تم فحص أنظمة الجودة، الإجراءات، التوثيق، والممارسات التشغيلية.</p>
      
      <h3>التحسين المستمر</h3>
      <p>الحصول على شهادات الأيزو ليس نهاية المطاف، بل بداية لرحلة التحسين المستمر. نلتزم بمراجعة وتطوير أنظمتنا بشكل دوري لضمان الحفاظ على المعايير العالية.</p>
      
      <h3>الفوائد للعملاء</h3>
      <p>هذه الشهادات تضمن لعملائنا الحصول على منتجات عالية الجودة ومطابقة للمعايير الدولية. كما تعزز ثقتهم في منتجاتنا وخدماتنا.</p>
    `,
    contentEn: `
      <h2>International Quality Certificate</h2>
      <p>Elkassaby Group has obtained the international ISO certificate in quality management, confirming our commitment to the highest global standards in all our operations. This achievement reflects our continuous efforts in improving quality.</p>
      
      <h3>ISO Standards</h3>
      <p>We obtained ISO 9001 certification for quality management and ISO 22000 for food safety. These certificates confirm our commitment to the highest quality and safety standards at all stages of production.</p>
      
      <h3>Qualification Process</h3>
      <p>All our facilities and operations underwent comprehensive audits by international accreditation bodies. Quality systems, procedures, documentation, and operational practices were examined.</p>
      
      <h3>Continuous Improvement</h3>
      <p>Obtaining ISO certificates is not the end goal, but the beginning of a continuous improvement journey. We are committed to regularly reviewing and developing our systems to ensure maintaining high standards.</p>
      
      <h3>Benefits for Customers</h3>
      <p>These certificates ensure our customers receive high-quality products compliant with international standards. They also enhance their confidence in our products and services.</p>
    `,
  },
}

export default function NewsDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const lang = params.lang as string

  const news = newsData[slug]

  if (!news) {
    return (
      <main>
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold">
            {lang === 'ar' ? 'الخبر غير موجود' : 'News Not Found'}
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
          >
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-white/80">
              <Link href={`/${lang}`} className="hover:text-white transition-colors">
                {lang === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <span>/</span>
              <Link href={`/${lang}/news`} className="hover:text-white transition-colors">
                {lang === 'ar' ? 'الأخبار' : 'News'}
              </Link>
              <span>/</span>
              <span className="text-white/60">{lang === 'ar' ? news.titleAr : news.titleEn}</span>
            </div>

            {/* Title and Meta */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {lang === 'ar' ? news.titleAr : news.titleEn}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/90 mb-8">
              <div className="flex items-center gap-2">
                <FaCalendar className="text-white" />
                <span>{lang === 'ar' ? news.dateAr : news.dateEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-white" />
                <span>{lang === 'ar' ? 'مجموعة القصبي' : 'Elkassaby Group'}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <FaShareAlt />
                <span>{lang === 'ar' ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={news.image}
                alt={lang === 'ar' ? news.titleAr : news.titleEn}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: lang === 'ar' ? news.contentAr : news.contentEn 
              }}
              style={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
              }}
            />

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <Link
                href={`/${lang}/news`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: '#a01623' }}
              >
                {lang === 'ar' ? (
                  <>
                    <FaArrowRight />
                    <span>العودة إلى الأخبار</span>
                  </>
                ) : (
                  <>
                    <FaArrowLeft />
                    <span>Back to News</span>
                  </>
                )}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white text-center relative overflow-hidden" style={{ backgroundColor: '#a01623' }}>
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
          >
            <h2 className="text-4xl font-bold mb-6">
              {lang === 'ar' ? 'هل تريد معرفة المزيد؟' : 'Want to Know More?'}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {lang === 'ar'
                ? 'تواصل معنا للحصول على المزيد من المعلومات عن منتجاتنا وخدماتنا'
                : 'Contact us for more information about our products and services'}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              style={{ color: '#a01623' }}
            >
              {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

