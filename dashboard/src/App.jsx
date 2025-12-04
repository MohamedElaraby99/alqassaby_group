import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProductsList from './pages/ProductsList';
import ProductForm from './pages/ProductForm';
import BlogsList from './pages/BlogsList';
import BlogForm from './pages/BlogForm';
import DashboardHome from './pages/DashboardHome';
import LoginForm from './pages/LoginForm';
import NewsletterSubscribers from './pages/NewsletterSubscribers';
import ContactSubmissions from './pages/ContactSubmissions';
import UsersList from './pages/UsersList';
import UserForm from './pages/UserForm';

import AuthContextProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProutectedRoute';

function App() {
  return (
    <AuthContextProvider>
      <Router>

        <Routes>


          <Route path="/loginForm" element={<LoginForm />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <DashboardHome />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProductsList />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/products/new"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProductForm />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/products/edit/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProductForm />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/blogs"
            element={
              <ProtectedRoute>
                <Layout>
                  <BlogsList />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/blogs/new"
            element={
              <ProtectedRoute>
                <Layout>
                  <BlogForm />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/blogs/edit/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <BlogForm />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/newsletter"
            element={
              <ProtectedRoute>
                <Layout>
                  <NewsletterSubscribers />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Layout>
                  <ContactSubmissions />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Layout>
                  <UsersList />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/users/new"
            element={
              <ProtectedRoute>
                <Layout>
                  <UserForm />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/users/edit/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <UserForm />
                </Layout>
              </ProtectedRoute>
            }
          />


          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
