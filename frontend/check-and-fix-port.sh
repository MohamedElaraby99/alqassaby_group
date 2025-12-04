#!/bin/bash
# Check PM2 logs and fix port issue

cd /var/www/elqassaby/alqassaby_group/frontend

echo "🔍 Checking PM2 logs for elkassaby-frontend..."
echo "=============================================="
echo ""

# Check recent logs
pm2 logs elkassaby-frontend --lines 30 --nostream

echo ""
echo "🔍 Checking what port the server is actually using..."
echo ""

# Check if anything is listening on port 3020
echo "Checking port 3020:"
sudo netstat -tlnp | grep 3020 || echo "   ❌ Nothing listening on port 3020"

echo ""
echo "Checking port 3000 (default):"
sudo netstat -tlnp | grep 3000 | grep node || echo "   (Not found or not Node.js)"

echo ""
echo "🔧 Fixing port issue..."
echo ""

# Stop the process
pm2 stop elkassaby-frontend

# Delete and restart with explicit PORT in environment
pm2 delete elkassaby-frontend

# Start with PORT explicitly set
echo "Starting with PORT=3020..."
PORT=3020 pm2 start .next/standalone/server.js \
  --name "elkassaby-frontend" \
  --interpreter node \
  --cwd /var/www/elqassaby/alqassaby_group/frontend \
  --update-env

# Alternative: Use ecosystem file with PORT
echo ""
echo "Or using ecosystem.config.js..."
pm2 start ecosystem.config.js --update-env

pm2 save

echo ""
echo "⏳ Waiting 3 seconds..."
sleep 3

echo ""
echo "🧪 Testing..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3020 2>/dev/null || echo "000")

if [ "$HTTP_CODE" != "000" ] && [ "$HTTP_CODE" != "" ]; then
    echo "   ✅ Server responding with HTTP $HTTP_CODE"
    echo "   Test CSS: curl -I http://localhost:3020/_next/static/css/app.css"
else
    echo "   ❌ Server not responding"
    echo ""
    echo "📋 Check logs:"
    pm2 logs elkassaby-frontend --lines 20 --nostream
fi

echo ""
echo "📊 Current PM2 status:"
pm2 list | grep elkassaby-frontend

