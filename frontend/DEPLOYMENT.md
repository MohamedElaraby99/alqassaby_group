# 🚀 دليل النشر / Deployment Guide

## خيارات النشر / Deployment Options

### 1. Vercel (موصى به / Recommended)

Vercel هي منصة Next.js الرسمية وتوفر نشر سهل ومجاني
Vercel is the official Next.js platform and provides easy free deployment

#### الخطوات / Steps:

1. أنشئ حساب على [Vercel](https://vercel.com)
   Create an account on [Vercel](https://vercel.com)

2. اربط مستودع GitHub الخاص بك
   Connect your GitHub repository

3. استورد المشروع
   Import the project

4. Vercel سيكتشف Next.js تلقائياً ويقوم بالنشر
   Vercel will automatically detect Next.js and deploy

```bash
# أو استخدم CLI
# Or use CLI
npm i -g vercel
vercel
```

---

### 2. Netlify

#### الخطوات / Steps:

1. أنشئ حساب على [Netlify](https://netlify.com)
   Create an account on [Netlify](https://netlify.com)

2. اربط مستودع GitHub
   Connect GitHub repository

3. إعدادات البناء / Build settings:
   ```
   Build command: npm run build
   Publish directory: .next
   ```

---

### 3. استضافة خاصة / Custom Hosting (VPS)

#### المتطلبات / Requirements:
- Node.js 18+
- PM2 (Process Manager)

#### الخطوات / Steps:

```bash
# 1. بناء المشروع / Build the project
npm run build

# 2. تثبيت PM2 / Install PM2
npm install -g pm2

# 3. تشغيل التطبيق / Start the application
pm2 start npm --name "elkassaby-website" -- start

# 4. حفظ القائمة / Save PM2 list
pm2 save

# 5. تشغيل تلقائي عند إعادة التشغيل / Auto-start on reboot
pm2 startup
```

#### إعداد Nginx / Nginx Configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### 4. Docker

#### Dockerfile:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### docker-compose.yml:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### الأوامر / Commands:

```bash
# بناء الصورة / Build image
docker build -t elkassaby-website .

# تشغيل الحاوية / Run container
docker run -p 3000:3000 elkassaby-website

# أو استخدم docker-compose
# Or use docker-compose
docker-compose up -d
```

---

## متغيرات البيئة / Environment Variables

أنشئ ملف `.env.local` للمتغيرات الحساسة:
Create `.env.local` file for sensitive variables:

```env
# API Keys (إذا لزم الأمر)
NEXT_PUBLIC_API_URL=https://api.elkassaby.com

# Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Contact Form
CONTACT_EMAIL=info@elkassaby.com
```

---

## قائمة التحقق قبل النشر / Pre-Deployment Checklist

✅ اختبر المشروع محلياً / Test locally
```bash
npm run build
npm start
```

✅ تحقق من عدم وجود أخطاء / Check for errors
```bash
npm run lint
```

✅ تحسين الصور / Optimize images
- استخدم صور WebP
- ضغط الصور

✅ تحديث معلومات الاتصال / Update contact info
- الهاتف / Phone numbers
- البريد الإلكتروني / Email
- العنوان / Address

✅ إعداد SSL / Setup SSL
- احصل على شهادة SSL مجانية من Let's Encrypt

✅ إعداد النطاق / Domain setup
- أشر النطاق إلى الاستضافة
- انتظر انتشار DNS

---

## مراقبة الأداء / Performance Monitoring

### أدوات مفيدة / Useful Tools:

1. **Google Analytics** - تتبع الزوار
2. **Google Search Console** - تحسين SEO
3. **Vercel Analytics** - أداء التطبيق
4. **Sentry** - تتبع الأخطاء

---

## النسخ الاحتياطي / Backup

```bash
# نسخة احتياطية من قاعدة البيانات (إن وجدت)
# Backup database (if exists)
pg_dump database_name > backup.sql

# نسخة احتياطية من الملفات
# Backup files
tar -czf backup-$(date +%Y%m%d).tar.gz /path/to/app
```

---

## الدعم / Support

للمساعدة في النشر، اتصل بـ:
For deployment help, contact:

📧 Email: info@elkassaby.com  
📱 Phone: +20 50 2100126

---

**نجاح باهر! 🎉 / Great Success! 🎉**

موقعك جاهز للنشر!
Your website is ready to deploy!

