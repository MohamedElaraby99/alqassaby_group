import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsAPI, BASE_URL } from '../services/api';
import { useTranslation } from 'react-i18next';

export default function BlogsList() {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    featured: '',
    category: '',
    published: '',
  });

  useEffect(() => {
    fetchBlogs();
  }, [page, filters]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = { page, limit: 10, ...filters };
      Object.keys(params).forEach(key => {
        if (params[key] === '') delete params[key];
      });
      const response = await blogsAPI.getAll(params);
      setBlogs(response.data.data || []);
      setTotalPages(response.data.totalPages || 1);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || t('error'));
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(t('confirmDelete'))) return;

    try {
      await blogsAPI.delete(id);
      fetchBlogs();
    } catch (err) {
      alert(err.response?.data?.message || t('error'));
    }
  };

  const handleToggleFeatured = async (id) => {
    try {
      await blogsAPI.toggleFeatured(id);
      fetchBlogs();
    } catch (err) {
      alert(err.response?.data?.message || t('error'));
    }
  };

  const getImageUrl = (image) => {
    if (!image) return 'https://via.placeholder.com/150';
    if (image.startsWith('http')) return image;
    return `${BASE_URL}${image}`;
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{t('blogs')}</h1>
        <Link
          to="/blogs/new"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          + {t('addNewBlog')}
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('featuredProducts')}</label>
            <select
              value={filters.featured}
              onChange={(e) => { setFilters({ ...filters, featured: e.target.value }); setPage(1); }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">{t('all')}</option>
              <option value="true">{t('featuredProducts')}</option>
              <option value="false">{t('notFeatured')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('category')}</label>
            <input
              type="text"
              value={filters.category}
              onChange={(e) => { setFilters({ ...filters, category: e.target.value }); setPage(1); }}
              placeholder={t('filterByCategory')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('published')}</label>
            <select
              value={filters.published}
              onChange={(e) => { setFilters({ ...filters, published: e.target.value }); setPage(1); }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">{t('all')}</option>
              <option value="true">{t('published')}</option>
              <option value="false">{t('draft')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('image')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('title')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('author')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('category')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('views')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('status')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('actions')}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-4 py-4 text-center text-gray-500">
                  {t('noBlogs')}
                </td>
              </tr>
            ) : (
              blogs.map(blog => (
                <tr key={blog._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <img src={getImageUrl(blog.image)} alt={blog.title} className="h-12 w-12 object-cover rounded" />
                  </td>
                  <td className="px-4 py-2">
                    <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{blog.excerpt}</div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{blog.author}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{blog.category}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{blog.views || 0}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      {blog.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {t('featuredProducts')}
                        </span>
                      )}
                      {blog.published ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {t('published')}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {t('draft')}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    <div className="flex flex-col sm:flex-row sm:space-x-2 gap-2 rtl:space-x-reverse">
                      <Link to={`/blogs/edit/${blog._id}`} className="text-blue-600 hover:text-blue-900">{t('edit')}</Link>
                      <button onClick={() => handleToggleFeatured(blog._id)} className="text-yellow-600 hover:text-yellow-900">
                        {blog.featured ? t('unfeature') : t('feature')}
                      </button>
                      <button onClick={() => handleDelete(blog._id)} className="text-red-600 hover:text-red-900">{t('delete')}</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2 rtl:space-x-reverse">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            {t('previous')}
          </button>
          <span className="px-4 py-2 text-sm text-gray-700">{t('pageOf', { current: page, total: totalPages })}</span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            {t('next')}
          </button>
        </div>
      )}
    </div>
  );
}

