#!/bin/bash
# Comprehensive fix for Next.js standalone static assets

cd /var/www/elqassaby/alqassaby_group/frontend

echo "🔍 Checking current structure..."
echo ""

# Check if standalone exists
if [ ! -d ".next/standalone" ]; then
    echo "❌ .next/standalone directory not found!"
    echo "   Run 'npm run build' first"
    exit 1
fi

echo "📁 Current structure:"
ls -la .next/standalone/ 2>/dev/null | head -10
echo ""

# Check if static exists in root
if [ ! -d ".next/static" ]; then
    echo "❌ .next/static directory not found in root!"
    echo "   Run 'npm run build' first"
    exit 1
fi

echo "🔧 Fixing static assets..."

# Remove old copies if they exist
rm -rf .next/standalone/.next/static
rm -rf .next/standalone/public

# Create directories
mkdir -p .next/standalone/.next/static
mkdir -p .next/standalone/public

# Copy static assets
echo "📦 Copying .next/static..."
if [ -d ".next/static" ]; then
    cp -r .next/static/* .next/standalone/.next/static/ 2>/dev/null || cp -r .next/static .next/standalone/.next/
    echo "   ✅ Static files copied"
else
    echo "   ❌ .next/static not found!"
fi

# Copy public folder
echo "📁 Copying public folder..."
if [ -d "public" ]; then
    cp -r public/* .next/standalone/public/ 2>/dev/null || cp -r public .next/standalone/
    echo "   ✅ Public files copied"
else
    echo "   ⚠️  public folder not found (might be okay)"
fi

echo ""
echo "✅ Fix complete!"
echo ""
echo "📋 Verification:"
echo "   Checking .next/standalone/.next/static..."
ls -la .next/standalone/.next/static 2>/dev/null | head -5 || echo "   ❌ Not found!"
echo ""
echo "   Checking .next/standalone/public..."
ls -la .next/standalone/public 2>/dev/null | head -5 || echo "   ❌ Not found!"
echo ""
echo "🔄 Now restart PM2:"
echo "   pm2 restart elkassaby-frontend"
echo ""
echo "🧪 Test with:"
echo "   curl -I http://localhost:3020/_next/static/css/app.css"

