/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Performance optimizations
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'example.com', 'via.placeholder.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Optimize bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
  },
}

module.exports = nextConfig
