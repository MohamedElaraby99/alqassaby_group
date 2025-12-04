# 🔧 Troubleshooting 502 Bad Gateway Error

## What is a 502 Bad Gateway?

A 502 error means Nginx is running but **cannot connect** to your Next.js server. This usually happens when:
- Next.js server is not running
- Next.js is running on a different port than Nginx expects
- Firewall is blocking the connection
- Next.js server crashed

---

## Step-by-Step Troubleshooting

### 1. Check if Next.js Server is Running

```bash
# Check if anything is running on port 3020
sudo netstat -tlnp | grep 3020
# OR
sudo ss -tlnp | grep 3020
# OR
sudo lsof -i :3020
```

**Expected output:** Should show Node.js process listening on port 3020

**If nothing shows:**
- Your Next.js server is NOT running
- Go to Step 2

---

### 2. Check PM2 Status

```bash
# Check PM2 processes
pm2 list

# Check logs
pm2 logs elkassaby-frontend

# If the process is stopped or errored:
pm2 restart elkassaby-frontend
```

**If PM2 shows the app as "stopped" or "errored":**
- Check the logs: `pm2 logs elkassaby-frontend`
- Restart: `pm2 restart elkassaby-frontend`

---

### 3. Manually Start Next.js Server

```bash
cd /var/www/elqassaby/alqassaby_group/frontend

# Make sure you're in the right directory
pwd

# Build the app (if not already built)
npm run build

# Start the server manually to see errors
npm start
```

**Watch for errors:**
- Port already in use?
- Missing dependencies?
- Build errors?

**If it starts successfully:**
- Press `Ctrl+C` to stop
- Then use PM2: `pm2 start npm --name "elkassaby-frontend" -- start`

---

### 4. Verify Nginx Configuration

```bash
# Check your Nginx config
sudo nano /etc/nginx/sites-available/elkassaby.com
```

**Make sure it has:**
```nginx
location / {
    proxy_pass http://localhost:3020;  # ← Must be 3020, not 3000!
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

**If it says `localhost:3000`, update it to `localhost:3020`**

Then:
```bash
# Test Nginx config
sudo nginx -t

# If test passes, reload
sudo systemctl reload nginx
```

---

### 5. Test Direct Connection to Next.js

```bash
# Test if Next.js is responding directly
curl http://localhost:3020

# Should return HTML, not an error
```

**If this works but Nginx doesn't:**
- Nginx config is wrong (see Step 4)

**If this doesn't work:**
- Next.js server is not running (see Steps 2-3)

---

### 6. Check Nginx Error Logs

```bash
# View recent errors
sudo tail -50 /var/log/nginx/error.log

# Watch errors in real-time
sudo tail -f /var/log/nginx/error.log
```

**Common errors:**
- `connect() failed (111: Connection refused)` → Next.js not running
- `connect() failed (113: No route to host)` → Firewall issue
- `upstream timed out` → Next.js is slow/crashed

---

### 7. Check Firewall

```bash
# Check if firewall is blocking
sudo ufw status

# If firewall is active, allow port 3020 (for local connections)
# Actually, you don't need to open 3020 to the internet,
# but make sure localhost connections work

# Check if iptables is blocking
sudo iptables -L -n | grep 3020
```

---

### 8. Quick Fix: Restart Everything

```bash
# 1. Stop PM2
pm2 stop elkassaby-frontend

# 2. Rebuild (if needed)
cd /var/www/elqassaby/alqassaby_group/frontend
npm run build

# 3. Start PM2
pm2 start npm --name "elkassaby-frontend" -- start
pm2 save

# 4. Wait a few seconds, then check
pm2 list
curl http://localhost:3020

# 5. Reload Nginx
sudo nginx -t
sudo systemctl reload nginx
```

---

## Common Issues & Solutions

### Issue 1: Port Mismatch

**Symptom:** Nginx points to port 3000, but Next.js runs on 3020

**Solution:**
```bash
# Update Nginx config
sudo nano /etc/nginx/sites-available/elkassaby.com
# Change all instances of :3000 to :3020
sudo nginx -t
sudo systemctl reload nginx
```

---

### Issue 2: Next.js Not Built

**Symptom:** `npm start` fails or shows errors

**Solution:**
```bash
cd /var/www/elqassaby/alqassaby_group/frontend
npm install
npm run build
npm start
```

---

### Issue 3: PM2 Process Crashed

**Symptom:** `pm2 list` shows status as "errored" or "stopped"

**Solution:**
```bash
# Check logs
pm2 logs elkassaby-frontend --lines 50

# Delete and recreate
pm2 delete elkassaby-frontend
cd /var/www/elqassaby/alqassaby_group/frontend
pm2 start npm --name "elkassaby-frontend" -- start
pm2 save
```

---

### Issue 4: Wrong Working Directory

**Symptom:** PM2 can't find the app

**Solution:**
```bash
# Make sure PM2 starts from the correct directory
cd /var/www/elqassaby/alqassaby_group/frontend
pm2 delete elkassaby-frontend
pm2 start npm --name "elkassaby-frontend" --cwd /var/www/elqassaby/alqassaby_group/frontend -- start
pm2 save
```

---

### Issue 5: Node.js Version

**Symptom:** Next.js won't start, version errors

**Solution:**
```bash
# Check Node.js version (need 18+)
node -v

# If version is too old, update Node.js
# Using nvm (recommended):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

---

## Verification Checklist

After fixing, verify:

- [ ] `pm2 list` shows `elkassaby-frontend` as `online`
- [ ] `curl http://localhost:3020` returns HTML (not error)
- [ ] `sudo nginx -t` shows "syntax is ok"
- [ ] Nginx config has `proxy_pass http://localhost:3020;`
- [ ] `sudo tail /var/log/nginx/error.log` shows no recent errors
- [ ] Website loads at `https://elkassaby.com`

---

## Still Not Working?

1. **Check all logs:**
   ```bash
   pm2 logs elkassaby-frontend --lines 100
   sudo tail -100 /var/log/nginx/error.log
   sudo journalctl -u nginx -n 50
   ```

2. **Verify file permissions:**
   ```bash
   ls -la /var/www/elqassaby/alqassaby_group/frontend
   # Make sure user has read/execute permissions
   ```

3. **Test with a simple Next.js app:**
   ```bash
   # Create a test to verify Next.js works
   cd /tmp
   npx create-next-app@latest test-app
   cd test-app
   npm run build
   PORT=3020 npm start
   # In another terminal: curl http://localhost:3020
   ```

---

## Quick Diagnostic Script

Run this to get a full diagnostic:

```bash
#!/bin/bash
echo "=== Next.js Port Check ==="
sudo netstat -tlnp | grep 3020 || echo "❌ Nothing on port 3020"

echo -e "\n=== PM2 Status ==="
pm2 list

echo -e "\n=== PM2 Logs (last 10 lines) ==="
pm2 logs elkassaby-frontend --lines 10 --nostream

echo -e "\n=== Direct Connection Test ==="
curl -I http://localhost:3020 2>&1 | head -5

echo -e "\n=== Nginx Config Test ==="
sudo nginx -t

echo -e "\n=== Nginx Error Log (last 5 lines) ==="
sudo tail -5 /var/log/nginx/error.log
```

Save as `check-502.sh`, make executable (`chmod +x check-502.sh`), and run it.

---

**Most Common Fix:** Update Nginx config to use port 3020 and restart both services!

