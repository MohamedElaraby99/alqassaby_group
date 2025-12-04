#!/bin/bash
# Fix for Next.js standalone mode - Copy static assets

cd /var/www/elqassaby/alqassaby_group/frontend

echo "🔧 Fixing standalone mode static assets..."

# Create necessary directories
mkdir -p .next/standalone/.next/static
mkdir -p .next/standalone/public

# Copy static assets
echo "📦 Copying .next/static..."
cp -r .next/static .next/standalone/.next/static

# Copy public folder
echo "📁 Copying public folder..."
cp -r public .next/standalone/public

echo "✅ Static assets copied successfully!"
echo ""
echo "Now restart PM2:"
echo "  pm2 restart elkassaby-frontend"

