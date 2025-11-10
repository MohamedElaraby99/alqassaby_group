'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const locale = pathname.startsWith('/en') ? 'en' : 'ar'

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">مجموعة القصبي</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              نحن واحدة من أكثر الشركات احتراماً في مجال أعلاف الدواجن في مصر والشرق الأوسط منذ أكثر من 15 عاماً.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-secondary transition text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-secondary transition text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-secondary transition text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-secondary transition text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-secondary transition">
                  {locale === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-secondary transition">
                  {locale === 'ar' ? 'من نحن' : 'About'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-gray-300 hover:text-secondary transition">
                  {locale === 'ar' ? 'المنتجات' : 'Products'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-secondary transition">
                  {locale === 'ar' ? 'الخدمات' : 'Services'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/news`} className="text-gray-300 hover:text-secondary transition">
                  {locale === 'ar' ? 'الأخبار' : 'News'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-secondary transition">
                  {locale === 'ar' ? 'اتصل بنا' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h3 className="text-xl font-bold mb-4">شركاتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                القصبي للاستثمار
              </li>
              <li className="text-gray-300">
                تبارك للتفريخ والدواجن
              </li>
              <li className="text-gray-300">
                هاجر للثروة الداجنة
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  المنصورة، توريل القديمة، شارع الشريف الراضي، عمارة القصبي
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-secondary flex-shrink-0" />
                <div className="text-gray-300">
                  <a href="tel:+20502100126" className="block hover:text-secondary transition">
                    +20 50 2100126
                  </a>
                  <a href="tel:01097770109" className="block hover:text-secondary transition">
                    01097770109
                  </a>
                  <a href="tel:01097770117" className="block hover:text-secondary transition">
                    01097770117
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <a href="mailto:info@elkassaby.com" className="text-gray-300 hover:text-secondary transition">
                  info@elkassaby.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400">
            <p>
              © {currentYear} مجموعة القصبي - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

