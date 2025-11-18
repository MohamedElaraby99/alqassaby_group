import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a01623',
          light: '#bf1e2e',
          dark: '#7d111c',
        },
        secondary: {
          DEFAULT: '#d4af37',
          light: '#e5c55f',
          dark: '#b8941f',
        },
        accent: {
          DEFAULT: '#8b4513',
          light: '#a0522d',
          dark: '#654321',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

