import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProductsList from './pages/ProductsList';
import ProductForm from './pages/ProductForm';
import BlogsList from './pages/BlogsList';
import BlogForm from './pages/BlogForm';
import DashboardHome from './pages/DashboardHome';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/edit/:id" element={<ProductForm />} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blogs/new" element={<BlogForm />} />
          <Route path="/blogs/edit/:id" element={<BlogForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

