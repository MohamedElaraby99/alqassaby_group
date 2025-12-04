# 🚀 PM2 Setup for Next.js Standalone Mode

## Issue
When using `output: 'standalone'` in `next.config.js`, you **cannot** use `next start`. You must use the standalone server file directly.

## Solution

### Option 1: Use Standalone Mode (Recommended for Production)

After building, use the standalone server:

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

# 1. Build the app
npm run build

# 2. Stop the current PM2 process
pm2 delete elkassaby-website

# 3. Start with standalone server (port 3020)
pm2 start npm --name "elkassaby-frontend" -- run start:standalone

# OR directly:
pm2 start .next/standalone/server.js --name "elkassaby-frontend" --interpreter node -- --port 3020

# OR with environment variable:
PORT=3020 pm2 start .next/standalone/server.js --name "elkassaby-frontend" --interpreter node

# 4. Save PM2 config
pm2 save
```

### Option 2: Remove Standalone Mode (Simpler)

If you prefer to use `next start`, remove standalone mode:

```bash
# Edit next.config.js and remove or comment out:
# output: 'standalone',

# Then rebuild and restart
npm run build
pm2 restart elkassaby-frontend
```

---

## Recommended PM2 Command for Standalone Mode

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

# Delete old process
pm2 delete elkassaby-website
pm2 delete elkassaby-frontend

# Start standalone server with port 3020
pm2 start .next/standalone/server.js \
  --name "elkassaby-frontend" \
  --interpreter node \
  --env PORT=3020 \
  --cwd /var/www/elqassaby/alqassaby_group/frontend

# Save
pm2 save
pm2 startup
```

---

## Verify It's Working

```bash
# Check PM2
pm2 list
pm2 logs elkassaby-frontend

# Test the server
curl http://localhost:3020

# Should return HTML, not an error
```

---

## PM2 Ecosystem File (Alternative - Recommended)

Create `ecosystem.config.js` in the frontend directory:

```javascript
module.exports = {
  apps: [{
    name: 'elkassaby-frontend',
    script: '.next/standalone/server.js',
    cwd: '/var/www/elqassaby/alqassaby_group/frontend',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3020
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
}
```

Then use:
```bash
pm2 start ecosystem.config.js
pm2 save
```

---

## Troubleshooting

### If port 3020 is still not working:

1. **Check if PORT environment variable is set:**
   ```bash
   pm2 env 0 | grep PORT
   ```

2. **Set PORT explicitly in PM2:**
   ```bash
   pm2 delete elkassaby-frontend
   PORT=3020 pm2 start .next/standalone/server.js --name "elkassaby-frontend" --interpreter node
   ```

3. **Or modify the standalone server.js directly:**
   The standalone server reads PORT from environment. Make sure it's set:
   ```bash
   export PORT=3020
   pm2 start .next/standalone/server.js --name "elkassaby-frontend" --interpreter node
   ```

### If you get "Cannot find module" errors:

The standalone build needs the `.next/static` folder. Make sure you're running from the project root:

```bash
cd /var/www/elqassaby/alqassaby_group/frontend
pm2 start .next/standalone/server.js --name "elkassaby-frontend" --cwd /var/www/elqassaby/alqassaby_group/frontend
```

---

## Quick Fix Command

Run this to fix everything at once:

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

# Rebuild
npm run build

# Stop old processes
pm2 delete all

# Start with correct command and port
PORT=3020 pm2 start .next/standalone/server.js \
  --name "elkassaby-frontend" \
  --interpreter node \
  --cwd /var/www/elqassaby/alqassaby_group/frontend

# Save and setup startup
pm2 save
pm2 startup

# Verify
pm2 list
curl http://localhost:3020
```

