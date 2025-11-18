# مجموعة القصبي - دليل الإعداد والتشغيل
# Elkassaby Group - Setup & Installation Guide

## متطلبات النظام / System Requirements

- Node.js 18.x أو أحدث / or higher
- npm أو yarn / or yarn
- Git

## خطوات التثبيت / Installation Steps

### 1. تثبيت المكتبات / Install Dependencies

```bash
npm install
```

أو / or

```bash
yarn install
```

### 2. تشغيل المشروع في وضع التطوير / Run Development Server

```bash
npm run dev
```

أو / or

```bash
yarn dev
```

افتح المتصفح على / Open your browser at: [http://localhost:3000](http://localhost:3000)

### 3. بناء المشروع للإنتاج / Build for Production

```bash
npm run build
```

أو / or

```bash
yarn build
```

### 4. تشغيل نسخة الإنتاج / Start Production Server

```bash
npm start
```

أو / or

```bash
yarn start
```

## هيكل المشروع / Project Structure

```
elkassaby-group/
├── app/                      # Next.js App Directory
│   ├── components/          # React Components
│   │   ├── Header.tsx       # Navigation Header
│   │   ├── Footer.tsx       # Site Footer
│   │   ├── Hero.tsx         # Hero Section Component
│   │   ├── SectionTitle.tsx # Section Title Component
│   │   ├── ProductCard.tsx  # Product Card Component
│   │   ├── ServiceCard.tsx  # Service Card Component
│   │   ├── NewsCard.tsx     # News Card Component
│   │   └── CompanyCard.tsx  # Company Card Component
│   ├── lib/                 # Utilities & Helpers
│   │   └── translations.ts  # Translation Strings
│   ├── context/             # React Context
│   │   └── LanguageContext.tsx
│   ├── about/               # About Page
│   ├── products/            # Products Page
│   ├── services/            # Services Page
│   ├── news/                # News Page
│   ├── contact/             # Contact Page
│   ├── layout.tsx           # Root Layout
│   ├── page.tsx             # Home Page
│   └── globals.css          # Global Styles
├── public/                  # Static Assets
├── package.json             # Dependencies
├── tsconfig.json           # TypeScript Config
├── tailwind.config.ts      # Tailwind Config
├── next.config.js          # Next.js Config
└── README.md               # Documentation
```

## المميزات / Features

✅ **تصميم حديث ومتجاوب** / Modern & Responsive Design
- تصميم متجاوب بالكامل يعمل على جميع الأجهزة
- Fully responsive design that works on all devices

✅ **دعم ثنائي اللغة** / Bilingual Support
- دعم اللغة العربية (RTL) والإنجليزية (LTR)
- Arabic (RTL) and English (LTR) support

✅ **أداء عالي** / High Performance
- بُني باستخدام Next.js 14 لأداء فائق
- Built with Next.js 14 for superior performance

✅ **تحريكات سلسة** / Smooth Animations
- استخدام Framer Motion للحركات الانسيابية
- Using Framer Motion for fluid animations

✅ **تحسين محركات البحث** / SEO Optimized
- محسّن لمحركات البحث
- Optimized for search engines

## الصفحات / Pages

1. **الصفحة الرئيسية / Home** (`/`)
   - قسم البطل (Hero)
   - معلومات عن الشركة
   - الخدمات
   - الأخبار
   - الشركات التابعة

2. **من نحن / About** (`/about`)
   - تاريخ الشركة
   - الرؤية والرسالة
   - القيم
   - الإحصائيات

3. **المنتجات / Products** (`/products`)
   - عرض جميع المنتجات
   - مميزات المنتجات

4. **الخدمات / Services** (`/services`)
   - الخدمات الرئيسية
   - الخدمات الإضافية
   - عملية العمل

5. **الأخبار / News** (`/news`)
   - آخر الأخبار
   - النشرة الإخبارية

6. **اتصل بنا / Contact** (`/contact`)
   - نموذج الاتصال
   - معلومات التواصل
   - الموقع على الخريطة
   - الأسئلة الشائعة

## التخصيص / Customization

### الألوان / Colors

يمكن تعديل الألوان في `tailwind.config.ts`:
You can modify colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#2c5f2d',    // اللون الأساسي / Primary Color
  secondary: '#d4af37',  // اللون الثانوي / Secondary Color
  accent: '#8b4513',     // لون التمييز / Accent Color
}
```

### الخطوط / Fonts

الخط الحالي: Cairo (يدعم العربية)
Current font: Cairo (supports Arabic)

لتغيير الخط، عدّل في `app/layout.tsx`
To change font, modify in `app/layout.tsx`

### الصور / Images

ضع الصور في مجلد `public/images/`
Place images in `public/images/` folder

## معلومات الاتصال / Contact Information

- **الهاتف / Phone:** +20 50 2100126
- **البريد الإلكتروني / Email:** info@elkassaby.com
- **الموقع الإلكتروني / Website:** https://elkassaby.net

## الدعم / Support

لأي استفسارات أو مشاكل، يرجى التواصل معنا
For any questions or issues, please contact us

## الترخيص / License

© 2024 مجموعة القصبي - جميع الحقوق محفوظة
© 2024 Elkassaby Group - All Rights Reserved

