#!/bin/bash
# Complete fix for Next.js standalone static assets

cd /var/www/elqassaby/alqassaby_group/frontend

echo "🔧 Fixing Next.js standalone static assets..."
echo ""

# Step 1: Verify build exists
if [ ! -d ".next/standalone" ]; then
    echo "❌ Error: .next/standalone not found!"
    echo "   Run 'npm run build' first"
    exit 1
fi

if [ ! -d ".next/static" ]; then
    echo "❌ Error: .next/static not found!"
    echo "   Run 'npm run build' first"
    exit 1
fi

# Step 2: Remove old copies
echo "🧹 Cleaning old copies..."
rm -rf .next/standalone/.next
rm -rf .next/standalone/public

# Step 3: Create directory structure
echo "📁 Creating directory structure..."
mkdir -p .next/standalone/.next
mkdir -p .next/standalone/public

# Step 4: Copy static assets
echo "📦 Copying static assets..."
if [ -d ".next/static" ]; then
    cp -r .next/static .next/standalone/.next/static
    echo "   ✅ Copied .next/static"
    
    # Verify
    if [ -d ".next/standalone/.next/static" ]; then
        FILE_COUNT=$(find .next/standalone/.next/static -type f | wc -l)
        echo "   ✅ Verified: $FILE_COUNT files copied"
    else
        echo "   ❌ Copy failed!"
        exit 1
    fi
else
    echo "   ❌ .next/static not found!"
    exit 1
fi

# Step 5: Copy public folder
echo "📁 Copying public folder..."
if [ -d "public" ]; then
    cp -r public/* .next/standalone/public/ 2>/dev/null || cp -r public .next/standalone/
    echo "   ✅ Copied public folder"
else
    echo "   ⚠️  public folder not found (might be okay)"
fi

# Step 6: Set correct permissions
echo "🔐 Setting permissions..."
chmod -R 755 .next/standalone/.next/static 2>/dev/null
chmod -R 755 .next/standalone/public 2>/dev/null

# Step 7: Verify structure
echo ""
echo "📋 Final structure:"
echo "   .next/standalone/.next/static/ exists: $([ -d .next/standalone/.next/static ] && echo '✅' || echo '❌')"
echo "   .next/standalone/public/ exists: $([ -d .next/standalone/public ] && echo '✅' || echo '❌')"

# Step 8: Check for CSS files
echo ""
echo "🔍 Checking for CSS files:"
CSS_FILES=$(find .next/standalone/.next/static -name "*.css" 2>/dev/null | wc -l)
echo "   Found $CSS_FILES CSS files"

if [ "$CSS_FILES" -eq 0 ]; then
    echo "   ⚠️  Warning: No CSS files found!"
    echo "   This might mean the build structure is different"
fi

echo ""
echo "✅ Fix complete!"
echo ""
echo "🔄 Next steps:"
echo "   1. Restart PM2: pm2 restart elkassaby-frontend"
echo "   2. Test: curl -I http://localhost:3020/_next/static/css/app.css"
echo "   3. Check logs: pm2 logs elkassaby-frontend"

