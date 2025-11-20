# Dashboard - Blog & Product Management

A modern React dashboard application built with Vite for managing blogs and products in the backend API.

## Features

- 📦 **Product Management**
  - View all products with pagination
  - Create, edit, and delete products
  - Filter by featured status, category, and stock status
  - Toggle featured status
  - Image upload support
  - Product specifications management

- 📝 **Blog Management**
  - View all blogs with pagination
  - Create, edit, and delete blogs
  - Filter by featured status, category, and published status
  - Toggle featured status
  - Image upload support
  - Auto-generated slugs from titles
  - View count tracking

- 🎨 **Modern UI**
  - Clean, responsive design with Tailwind CSS
  - Sidebar navigation
  - Dashboard overview with statistics
  - Intuitive forms and tables

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Backend API running on `http://localhost:5000`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional, defaults to `http://localhost:5000/api`):
```env
VITE_API_URL=http://localhost:5000/api
```

3. Start the development server:
```bash
npm run dev
```

The dashboard will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
dashboard/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with sidebar
│   ├── pages/
│   │   ├── DashboardHome.jsx   # Dashboard overview
│   │   ├── ProductsList.jsx    # Products listing page
│   │   ├── ProductForm.jsx      # Product create/edit form
│   │   ├── BlogsList.jsx       # Blogs listing page
│   │   └── BlogForm.jsx        # Blog create/edit form
│   ├── services/
│   │   └── api.js              # API service layer
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## API Integration

The dashboard connects to the backend API at `/api/products` and `/api/blogs`. Make sure your backend server is running and CORS is properly configured.

### Available Routes

- `/` - Dashboard home with statistics
- `/products` - Products list
- `/products/new` - Create new product
- `/products/edit/:id` - Edit product
- `/blogs` - Blogs list
- `/blogs/new` - Create new blog
- `/blogs/edit/:id` - Edit blog

## Features in Detail

### Products

- **List View**: Table with image, name, category, price, and status
- **Filters**: Featured, category, and stock status
- **Create/Edit**: Full form with image upload, tags, and specifications
- **Actions**: Edit, toggle featured, and delete

### Blogs

- **List View**: Table with image, title, author, category, views, and status
- **Filters**: Featured, category, and published status
- **Create/Edit**: Full form with image upload, tags, and content editor
- **Auto-slug**: Slug automatically generated from title
- **Actions**: Edit, toggle featured, and delete

## Technologies Used

- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS

## Development

The app uses Vite's proxy configuration to forward API requests to the backend during development. This is configured in `vite.config.js`.

## License

This project is part of the Alqassaby Group application.

