# 🎨 Fix Missing Styles in Next.js Standalone Mode

## Problem
When using `output: 'standalone'` in Next.js, the static assets (CSS, JS, images) are not automatically included. The standalone build only includes the server code.

## Solution

### Quick Fix - Run This Script

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

# Make the script executable
chmod +x fix-standalone-assets.sh

# Run the fix
./fix-standalone-assets.sh

# Restart PM2
pm2 restart elkassaby-frontend
```

### Manual Fix

If the script doesn't work, do it manually:

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

# 1. Copy static assets to standalone folder
cp -r .next/static .next/standalone/.next/static

# 2. Copy public folder to standalone folder
cp -r public .next/standalone/public

# 3. Restart PM2
pm2 restart elkassaby-frontend
```

### Alternative: Use Post-Build Script

Add this to your `package.json`:

```json
"scripts": {
  "build": "next build && npm run copy-assets",
  "copy-assets": "cp -r .next/static .next/standalone/.next/static && cp -r public .next/standalone/public"
}
```

Then rebuild:
```bash
npm run build
pm2 restart elkassaby-frontend
```

---

## Why This Happens

Next.js standalone mode creates a minimal server build in `.next/standalone/` that only includes:
- Server code
- Node modules needed by the server

It does NOT include:
- Static assets (`.next/static/`)
- Public folder (`public/`)

These need to be manually copied or symlinked.

---

## Verify It's Fixed

1. **Check browser console:**
   - Open DevTools (F12)
   - Check Network tab
   - Look for CSS/JS files - they should load (status 200)

2. **Check if files exist:**
   ```bash
   ls -la .next/standalone/.next/static/
   ls -la .next/standalone/public/
   ```

3. **Test the site:**
   - Styles should now appear
   - Images should load
   - JavaScript should work

---

## Permanent Solution: Update Build Process

Create a `postbuild.sh` script that runs after every build:

```bash
#!/bin/bash
# postbuild.sh
cd /var/www/elqassaby/alqassaby_group/frontend
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```

Then update `package.json`:

```json
"scripts": {
  "build": "next build && bash postbuild.sh",
  "postbuild": "bash postbuild.sh"
}
```

---

## If Styles Still Don't Work

1. **Check Nginx is proxying static files correctly:**
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```

2. **Check if static files are being served:**
   ```bash
   curl -I http://localhost:3020/_next/static/css/app.css
   ```

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

4. **Check PM2 is running from correct directory:**
   ```bash
   pm2 describe elkassaby-frontend | grep cwd
   ```

---

## Recommended: Update PM2 to Run from Standalone Directory

If you want PM2 to run from the standalone directory, update `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'elkassaby-frontend',
    script: 'server.js',
    cwd: '/var/www/elqassaby/alqassaby_group/frontend/.next/standalone',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3020
    }
  }]
}
```

But you still need to copy the static assets first!

