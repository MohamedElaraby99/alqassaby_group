# 🔧 Fix 404 Errors for Static Assets in Standalone Mode

## Problem
Getting 404 errors for CSS/JS files like `/_next/static/css/app.css` when using Next.js standalone mode.

## Root Cause
The standalone build doesn't automatically include `.next/static/` and `public/` folders. These need to be copied to the standalone directory.

## Solution

### Step 1: Verify Build Structure

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

# Check if build exists
ls -la .next/

# Should see:
# - static/ (contains CSS, JS files)
# - standalone/ (contains server.js)
```

### Step 2: Copy Static Assets

```bash
# Make sure you're in the frontend directory
cd /var/www/elqassaby/alqassaby_group/frontend

# Remove old copies
rm -rf .next/standalone/.next
rm -rf .next/standalone/public

# Create the .next directory inside standalone
mkdir -p .next/standalone/.next

# Copy static folder
cp -r .next/static .next/standalone/.next/static

# Copy public folder
cp -r public .next/standalone/public

# Verify
ls -la .next/standalone/.next/static
ls -la .next/standalone/public
```

### Step 3: Restart PM2

```bash
pm2 restart elkassaby-frontend

# Check logs
pm2 logs elkassaby-frontend --lines 20
```

### Step 4: Test

```bash
# Test CSS file
curl -I http://localhost:3020/_next/static/css/app.css

# Should return 200 OK, not 404
```

---

## Alternative: Use the Fix Script

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

# Make executable
chmod +x verify-and-fix-assets.sh

# Run it
./verify-and-fix-assets.sh

# Restart PM2
pm2 restart elkassaby-frontend
```

---

## Important: Directory Structure

The standalone server expects this structure:

```
.next/standalone/
├── server.js          (the Next.js server)
├── node_modules/      (dependencies)
├── .next/             (must be created)
│   └── static/        (copied from .next/static)
└── public/            (copied from public/)
```

**Key Point:** The `.next` folder inside `standalone` is NOT created automatically. You must create it and copy the static files there.

---

## Why This Happens

Next.js standalone mode creates a minimal server build that:
- ✅ Includes server code
- ✅ Includes required node_modules
- ❌ Does NOT include static assets
- ❌ Does NOT include public folder

These must be manually copied.

---

## Permanent Fix: Update Build Process

The `package.json` already has a `postbuild` script, but if it's not working, try this:

```bash
# Edit package.json and ensure postbuild script exists:
```

```json
{
  "scripts": {
    "build": "next build",
    "postbuild": "mkdir -p .next/standalone/.next && cp -r .next/static .next/standalone/.next/static && cp -r public .next/standalone/public"
  }
}
```

Then rebuild:
```bash
npm run build
pm2 restart elkassaby-frontend
```

---

## Troubleshooting

### If files still return 404:

1. **Check file permissions:**
   ```bash
   ls -la .next/standalone/.next/static
   # Files should be readable
   ```

2. **Check if PM2 is running from correct directory:**
   ```bash
   pm2 describe elkassaby-frontend | grep cwd
   # Should show: /var/www/elqassaby/alqassaby_group/frontend
   ```

3. **Check Next.js server logs:**
   ```bash
   pm2 logs elkassaby-frontend
   # Look for any errors about missing files
   ```

4. **Verify the path structure:**
   ```bash
   # The server.js should be able to access:
   ls .next/standalone/.next/static/css/
   ls .next/standalone/public/
   ```

5. **Try accessing from standalone directory:**
   ```bash
   cd .next/standalone
   ls -la .next/static/css/ 2>/dev/null || echo "Not found from here"
   ```

### If the structure is wrong:

The standalone server runs from `.next/standalone/`, so it looks for:
- `./.next/static/` (relative to standalone directory)
- `./public/` (relative to standalone directory)

Make sure you copy to:
- `.next/standalone/.next/static/`
- `.next/standalone/public/`

---

## Quick Diagnostic

Run this to see what's wrong:

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

echo "=== Checking build ==="
ls -d .next/static .next/standalone 2>/dev/null || echo "❌ Build missing"

echo -e "\n=== Checking standalone structure ==="
ls -la .next/standalone/ | head -10

echo -e "\n=== Checking if static is copied ==="
ls -d .next/standalone/.next/static 2>/dev/null || echo "❌ Static not copied"

echo -e "\n=== Checking public ==="
ls -d .next/standalone/public 2>/dev/null || echo "❌ Public not copied"

echo -e "\n=== Testing server ==="
curl -I http://localhost:3020/_next/static/css/app.css 2>&1 | head -3
```

---

## Final Solution

If nothing works, try running the server from the project root instead of standalone:

```bash
# Update ecosystem.config.js to:
```

```javascript
module.exports = {
  apps: [{
    name: 'elkassaby-frontend',
    script: '.next/standalone/server.js',
    cwd: '/var/www/elqassaby/alqassaby_group/frontend',  // Run from root
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3020
    }
  }]
}
```

Then copy assets and restart:
```bash
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
pm2 restart elkassaby-frontend
```

