#!/bin/bash
# Complete fix: Copy entire .next directory to standalone

cd /var/www/elqassaby/alqassaby_group/frontend

echo "🔧 Complete Fix for Next.js Standalone Mode"
echo "=========================================="
echo ""

# Step 1: Verify build exists
if [ ! -d ".next/standalone" ]; then
    echo "❌ Error: .next/standalone not found!"
    echo "   Run 'npm run build' first"
    exit 1
fi

if [ ! -d ".next" ]; then
    echo "❌ Error: .next directory not found!"
    echo "   Run 'npm run build' first"
    exit 1
fi

# Step 2: Stop PM2
echo "🛑 Stopping PM2..."
pm2 stop elkassaby-frontend 2>/dev/null
pm2 delete elkassaby-frontend 2>/dev/null

# Step 3: Copy entire .next directory to standalone
echo "📦 Copying .next directory to standalone..."
echo "   This includes BUILD_ID, routes-manifest, and all build files"

# Remove old .next in standalone
rm -rf .next/standalone/.next

# Copy the entire .next directory
cp -r .next .next/standalone/.next

# But we don't need to copy standalone inside itself (would be recursive)
rm -rf .next/standalone/.next/standalone

echo "   ✅ Copied .next directory"

# Step 4: Copy public folder
echo "📁 Copying public folder..."
rm -rf .next/standalone/public
cp -r public .next/standalone/public
echo "   ✅ Copied public folder"

# Step 5: Verify structure
echo ""
echo "📋 Verifying structure..."
echo "   .next/standalone/.next/BUILD_ID: $([ -f .next/standalone/.next/BUILD_ID ] && echo '✅' || echo '❌')"
echo "   .next/standalone/.next/static/: $([ -d .next/standalone/.next/static ] && echo '✅' || echo '❌')"
echo "   .next/standalone/public/: $([ -d .next/standalone/public ] && echo '✅' || echo '❌')"

# Step 6: Start PM2
echo ""
echo "🚀 Starting PM2..."
PORT=3020 pm2 start .next/standalone/server.js \
  --name "elkassaby-frontend" \
  --interpreter node \
  --cwd /var/www/elqassaby/alqassaby_group/frontend

pm2 save

# Step 7: Wait and test
echo ""
echo "⏳ Waiting 5 seconds for server to start..."
sleep 5

echo ""
echo "🧪 Testing server..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3020 2>/dev/null || echo "000")

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "   ✅ Server is responding! (HTTP $HTTP_CODE)"
    
    # Test CSS
    CSS_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3020/_next/static/css/app.css 2>/dev/null || echo "000")
    if [ "$CSS_CODE" = "200" ]; then
        echo "   ✅ CSS files are accessible!"
    else
        echo "   ⚠️  CSS returned HTTP $CSS_CODE (might need to check path)"
    fi
else
    echo "   ❌ Server not responding (HTTP $HTTP_CODE)"
    echo ""
    echo "📋 Check logs:"
    pm2 logs elkassaby-frontend --lines 10 --nostream
fi

echo ""
echo "📊 PM2 Status:"
pm2 list | grep elkassaby-frontend

echo ""
echo "✅ Fix complete!"
echo ""
echo "📝 If it's still not working, check:"
echo "   - pm2 logs elkassaby-frontend"
echo "   - ls -la .next/standalone/.next/"
echo "   - curl http://localhost:3020"

