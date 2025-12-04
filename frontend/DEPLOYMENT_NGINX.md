# 🚀 Next.js Deployment with Nginx - Complete Guide

## Important: Next.js is NOT a Static Site!

Next.js must run as a **Node.js server**, not as static files. The correct setup is:

1. Build the Next.js app
2. Run it with `next start` (Node.js server)
3. Use PM2 to keep it running
4. Configure Nginx to proxy requests to the Node.js server

---

## Step 1: Build the Next.js Application

```bash
cd /var/www/elqassaby/alqassaby_group/frontend
npm install
npm run build
```

This creates the `.next` folder with the optimized production build.

---

## Step 2: Install and Configure PM2

PM2 keeps your Next.js server running and restarts it automatically.

```bash
# Install PM2 globally
npm install -g pm2

# Start the Next.js server
cd /var/www/elqassaby/alqassaby_group/frontend
pm2 start npm --name "elkassaby-frontend" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system reboot
pm2 startup
# Follow the instructions it provides
```

**Verify it's running:**
```bash
pm2 list
pm2 logs elkassaby-frontend
```

The server should be running on `http://localhost:3000`

---

## Step 3: Configure Nginx

### Copy the Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/elkassaby.com
```

Paste the configuration from `nginx.conf.example` (see below).

### Enable the Site

```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/elkassaby.com /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## Correct Nginx Configuration

```nginx
# HTTP to HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name elkassaby.com www.elkassaby.com;

    # Redirect all HTTP requests to HTTPS
    return 301 https://$server_name$request_uri;
}

# HTTPS Server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name elkassaby.com www.elkassaby.com;

    # SSL Configuration (managed by Certbot)
    ssl_certificate /etc/letsencrypt/live/elkassaby.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/elkassaby.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Proxy to Next.js server (running on port 3000)
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Cache static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60d;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Step 4: Environment Variables

Create `.env.local` in the frontend directory:

```bash
cd /var/www/elqassaby/alqassaby_group/frontend
nano .env.local
```

Add:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.elkassaby.com/api
NEXT_PUBLIC_API_HOST=https://api.elkassaby.com
```

Then restart PM2:
```bash
pm2 restart elkassaby-frontend
```

---

## Common Issues

### ❌ Wrong: Serving as Static Files
```nginx
root /var/www/elqassaby/alqassaby_group/frontend/dist;  # WRONG!
try_files $uri /index.html;  # WRONG!
```

### ✅ Correct: Proxy to Node.js Server
```nginx
proxy_pass http://localhost:3000;  # CORRECT!
```

---

## Useful Commands

```bash
# Check PM2 status
pm2 status
pm2 logs elkassaby-frontend

# Restart Next.js app
pm2 restart elkassaby-frontend

# Stop Next.js app
pm2 stop elkassaby-frontend

# Check Nginx status
sudo systemctl status nginx
sudo nginx -t

# View Nginx error logs
sudo tail -f /var/log/nginx/error.log

# View Nginx access logs
sudo tail -f /var/log/nginx/access.log
```

---

## Verification

1. **Check PM2:**
   ```bash
   pm2 list
   ```
   Should show `elkassaby-frontend` as `online`

2. **Check if Next.js is responding:**
   ```bash
   curl http://localhost:3000
   ```

3. **Check Nginx:**
   ```bash
   curl -I https://elkassaby.com
   ```

---

## Summary

✅ **DO:**
- Run Next.js with `npm start` (via PM2)
- Proxy Nginx to `http://localhost:3000`
- Use PM2 to keep the server running

❌ **DON'T:**
- Try to serve `.next` folder as static files
- Use `root` and `try_files` like a static site
- Point to a `dist` folder (Next.js doesn't create one)

---

**Your Next.js app is now properly configured! 🎉**

