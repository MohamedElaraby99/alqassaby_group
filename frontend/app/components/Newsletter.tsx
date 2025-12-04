'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { API_BASE_URL } from '../utils/config'

interface NewsletterProps {
  lang: string
}

export default function Newsletter({ lang }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !phone) {
      setMessage({
        type: 'error',
        text: lang === 'ar' ? 'الرجاء إدخال البريد الإلكتروني ورقم الهاتف' : 'Please enter email and phone number'
      })
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      const response = await axios.post(`${API_BASE_URL}/newsletter/subscribe`, {
        email,
        phone
      })

      setMessage({
        type: 'success',
        text: lang === 'ar' ? 'تم الاشتراك بنجاح! شكراً لك' : 'Successfully subscribed! Thank you'
      })
      
      // Clear form
      setEmail('')
      setPhone('')
    } catch (error: any) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || (lang === 'ar' ? 'حدث خطأ. الرجاء المحاولة مرة أخرى' : 'An error occurred. Please try again')
      })
    } finally {
      setLoading(false)
    }
  }

  return (
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

            {/* Message Display */}
            {message && (
              <div className={`mb-4 p-3 rounded-lg text-center ${
                message.type === 'success' 
                  ? 'bg-green-500/20 text-green-200 border border-green-500/50' 
                  : 'bg-red-500/20 text-red-200 border border-red-500/50'
              }`}>
                {message.text}
              </div>
            )}

            {/* Email Input and Subscribe Button Row */}
            <form onSubmit={handleSubmit}>
              <div className={`flex flex-col sm:flex-row gap-4 items-center ${lang === "ar" ? "flex-row-reverse" : ""}`}>
                {/* Email Input with Underline */}
                <div className="flex-1 w-full relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                    className={`w-full bg-transparent text-amber-50 placeholder:text-amber-50/70 pb-3 focus:outline-none text-base md:text-lg border-b-2 border-amber-200/60 focus:border-amber-200 transition-colors ${lang === "ar" ? "text-right" : "text-left"}`}
                    required
                  />
                </div>
                <div className="flex-1 w-full relative">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                    className={`w-full bg-transparent text-amber-50 placeholder:text-amber-50/70 pb-3 focus:outline-none text-base md:text-lg border-b-2 border-amber-200/60 focus:border-amber-200 transition-colors ${lang === "ar" ? "text-right" : "text-left"}`}
                    style={{ textAlign: lang === "ar" ? "right" : "left" }}
                    required
                  />
                </div>
                {/* Subscribe Button - Terracotta/Orange-Brown */}
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 md:px-10 py-3 md:py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: loading ? "#666" : "#a01623"
                  }}
                >
                  {loading 
                    ? (lang === "ar" ? "جاري الإرسال..." : "Subscribing...") 
                    : (lang === "ar" ? "اشترك" : "Subscribe")
                  }
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

