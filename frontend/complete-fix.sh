#!/bin/bash
# Complete fix for Next.js standalone: Copy assets and restart server

cd /var/www/elqassaby/alqassaby_group/frontend

echo "🔧 Complete Fix for Next.js Standalone Mode"
echo "=========================================="
echo ""

# Step 1: Check if build exists
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

# Step 2: Copy static assets
echo "📦 Step 1: Copying static assets..."
rm -rf .next/standalone/.next
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/static

if [ -d ".next/standalone/.next/static" ]; then
    FILE_COUNT=$(find .next/standalone/.next/static -type f | wc -l)
    echo "   ✅ Copied $FILE_COUNT static files"
else
    echo "   ❌ Failed to copy static files!"
    exit 1
fi

# Step 3: Copy public folder (if not already there)
if [ ! -d ".next/standalone/public" ] || [ -z "$(ls -A .next/standalone/public 2>/dev/null)" ]; then
    echo "📁 Step 2: Copying public folder..."
    rm -rf .next/standalone/public
    cp -r public .next/standalone/public
    echo "   ✅ Copied public folder"
else
    echo "📁 Step 2: Public folder already exists"
fi

# Step 4: Verify structure
echo ""
echo "📋 Step 3: Verifying structure..."
echo "   .next/standalone/.next/static/: $([ -d .next/standalone/.next/static ] && echo '✅' || echo '❌')"
echo "   .next/standalone/public/: $([ -d .next/standalone/public ] && echo '✅' || echo '❌')"

CSS_COUNT=$(find .next/standalone/.next/static -name "*.css" 2>/dev/null | wc -l)
echo "   CSS files found: $CSS_COUNT"

# Step 5: Check PM2 status
echo ""
echo "🔄 Step 4: Checking PM2..."
pm2 list | grep elkassaby-frontend || echo "   ⚠️  PM2 process not found"

# Step 6: Restart PM2
echo ""
echo "🚀 Step 5: Starting/Restarting PM2..."
pm2 delete elkassaby-frontend 2>/dev/null

# Start with correct configuration
PORT=3020 pm2 start .next/standalone/server.js \
  --name "elkassaby-frontend" \
  --interpreter node \
  --cwd /var/www/elqassaby/alqassaby_group/frontend \
  --env PORT=3020

pm2 save

# Step 7: Wait and test
echo ""
echo "⏳ Waiting 3 seconds for server to start..."
sleep 3

echo ""
echo "🧪 Step 6: Testing server..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3020/_next/static/css/app.css 2>/dev/null || echo "000")

if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✅ Server is running and serving CSS files!"
elif [ "$HTTP_CODE" = "000" ]; then
    echo "   ❌ Server is not responding (connection refused)"
    echo "   Check PM2 logs: pm2 logs elkassaby-frontend"
else
    echo "   ⚠️  Server responded with HTTP $HTTP_CODE"
    echo "   Check: curl -I http://localhost:3020/_next/static/css/app.css"
fi

echo ""
echo "✅ Fix complete!"
echo ""
echo "📊 PM2 Status:"
pm2 list | grep elkassaby-frontend

echo ""
echo "📝 Next steps:"
echo "   - Check logs: pm2 logs elkassaby-frontend"
echo "   - Test website: curl http://localhost:3020"
echo "   - Check Nginx: sudo nginx -t && sudo systemctl reload nginx"

