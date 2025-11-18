export const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    products: 'المنتجات',
    services: 'الخدمات',
    news: 'الأخبار',
    contact: 'اتصل بنا',
    
    // Common
    readMore: 'اقرأ المزيد',
    learnMore: 'تعرف على المزيد',
    contactUs: 'اتصل بنا',
    viewAll: 'عرض الكل',
    submit: 'إرسال',
    
    // Home
    heroTitle: 'أجود أنواع الدواجن مع إنتاجيات كبيرة',
    heroSubtitle: 'نجعل أولوياتنا لتوفير خدمات متنوعة لتلبية احتياجاتك. مجموعة القصبي، اختيارك الأمثل لأفضل أعلاف الدواجن في مصر',
    aboutUsTitle: 'بعض الكلمات عنا',
    servicesTitle: 'خدماتنا',
    whyChooseUs: 'لماذا تختارنا؟',
    
    // Contact
    contactFormTitle: 'أرسل لنا رسالة',
    name: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    subject: 'الموضوع',
    message: 'الرسالة',
    address: 'العنوان',
    workingHours: 'ساعات العمل',
    
    // Footer
    quickLinks: 'روابط سريعة',
    ourCompanies: 'شركاتنا',
    contactInfo: 'معلومات التواصل',
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    products: 'Products',
    services: 'Services',
    news: 'News',
    contact: 'Contact',
    
    // Common
    readMore: 'Read More',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    viewAll: 'View All',
    submit: 'Submit',
    
    // Home
    heroTitle: 'The Finest Poultry with High Production',
    heroSubtitle: 'We prioritize providing diverse services to meet your needs. Elkassaby Group, your best choice for the finest poultry feed in Egypt',
    aboutUsTitle: 'About Us',
    servicesTitle: 'Our Services',
    whyChooseUs: 'Why Choose Us?',
    
    // Contact
    contactFormTitle: 'Send Us a Message',
    name: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    subject: 'Subject',
    message: 'Message',
    address: 'Address',
    workingHours: 'Working Hours',
    
    // Footer
    quickLinks: 'Quick Links',
    ourCompanies: 'Our Companies',
    contactInfo: 'Contact Information',
    allRightsReserved: 'All Rights Reserved',
  },
}

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations.ar

export function getTranslation(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] || translations.ar[key]
}

