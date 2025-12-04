# 🚀 Dashboard Production Setup

## Environment Variables

The dashboard now automatically uses the production API URL when built for production. However, you can override it with environment variables.

### For Production Build

Create a `.env.production` file in the dashboard directory:

```env
VITE_API_URL=https://api.elkassaby.com/api
VITE_BASE_URL=https://api.elkassaby.com
```

### For Development

Create a `.env` or `.env.local` file:

```env
VITE_API_URL=http://localhost:5006/api
VITE_BASE_URL=http://localhost:5006
```

## Build for Production

```bash
cd dashboard

# Build with production environment
npm run build

# The build will automatically use:
# - https://api.elkassaby.com/api (production)
# - http://localhost:5006/api (development)
```

## What Changed

✅ **API Configuration** (`src/services/api.js`):
- Now detects production mode automatically
- Uses `https://api.elkassaby.com/api` in production
- Falls back to `http://localhost:5006/api` in development

✅ **Auth Context** (`src/context/AuthContext.jsx`):
- Now uses `API_BASE_URL` from api.js instead of hardcoded URLs
- Works in both development and production

✅ **Image URLs** (BlogForm, BlogsList, ProductForm):
- Now use `BASE_URL` from api.js instead of hardcoded localhost
- Automatically uses correct domain based on environment

## Verification

After building, check the built files to confirm:

```bash
# Check the built JavaScript
grep -r "api.elkassaby.com" dist/ || echo "Not found - check build"
grep -r "localhost:5006" dist/ && echo "⚠️  Still contains localhost!"
```

## Deployment

1. Build the dashboard:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your server

3. Make sure the backend API is accessible at `https://api.elkassaby.com`

4. The dashboard will automatically connect to the production API

