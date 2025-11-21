import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsAPI, blogsAPI } from '../services/api';

export default function DashboardHome() {
  const [stats, setStats] = useState({
    products: { total: 0, featured: 0 },
    blogs: { total: 0, featured: 0, published: 0 },
    loading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, featuredProductsRes, blogsRes, featuredBlogsRes, publishedBlogsRes] = await Promise.all([
          productsAPI.getAll({ limit: 1 }),
          productsAPI.getAll({ featured: true, limit: 1 }),
          blogsAPI.getAll({ limit: 1 }),
          blogsAPI.getAll({ featured: true, limit: 1 }),
          blogsAPI.getAll({ published: true, limit: 1 }),
        ]);

        setStats({
          products: {
            total: productsRes.data.total || 0,
            featured: featuredProductsRes.data.total || 0,
          },
          blogs: {
            total: blogsRes.data.total || 0,
            featured: featuredBlogsRes.data.total || 0,
            published: publishedBlogsRes.data.total || 0,
          },
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchStats();
  }, []);

  if (stats.loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
  <div className="px-4 md:px-6 lg:px-8 py-6">

    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
      Dashboard Overview
    </h1>

    {/* Stats Cards */}
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 
      gap-6 mb-8
    ">
      {/* Products Card */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Products</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.products.total}</p>
          </div>
          <div className="bg-blue-100 rounded-full p-3">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
        <Link to="/products" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4">
          View all →
        </Link>
      </div>

      {/* Featured Products */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Featured Products</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.products.featured}</p>
          </div>
          <div className="bg-yellow-100 rounded-full p-3">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Blogs</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.blogs.total}</p>
          </div>
          <div className="bg-green-100 rounded-full p-3">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <Link to="/blogs" className="text-green-600 hover:text-green-800 text-sm font-medium mt-4">
          View all →
        </Link>
      </div>

      {/* Published Blogs */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Published Blogs</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.blogs.published}</p>
          </div>
          <div className="bg-purple-100 rounded-full p-3">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>

      <div className="
        grid grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-4
      ">
        <Link
          to="/products/new"
          className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Product
        </Link>

        <Link
          to="/blogs/new"
          className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Blog
        </Link>
      </div>
    </div>
  </div>
);

}

