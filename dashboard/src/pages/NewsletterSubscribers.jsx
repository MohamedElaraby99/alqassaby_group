import { useEffect, useState } from 'react';
import { newsletterAPI } from '../services/api';
import { useTranslation } from 'react-i18next';

export default function NewsletterSubscribers() {
  const { t } = useTranslation();
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stats, setStats] = useState({ total: 0, subscribed: 0, unsubscribed: 0 });
  const [filters, setFilters] = useState({
    subscribed: '',
    search: '',
  });

  useEffect(() => {
    fetchSubscribers();
    fetchStats();
  }, [page, filters]);

  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const params = { page, limit: 50, ...filters };
      Object.keys(params).forEach(key => {
        if (params[key] === '') delete params[key];
      });
      const response = await newsletterAPI.getAll(params);
      setSubscribers(response.data.data || []);
      setTotalPages(response.data.totalPages || 1);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || t('error'));
      console.error('Error fetching subscribers:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await newsletterAPI.getStats();
      setStats(response.data.data || { total: 0, subscribed: 0, unsubscribed: 0 });
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const handleUnsubscribe = async (id) => {
    if (!window.confirm(t('confirmDelete'))) return;

    try {
      await newsletterAPI.unsubscribe(id);
      fetchSubscribers();
      fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || t('error'));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(t('confirmDelete'))) return;

    try {
      await newsletterAPI.delete(id);
      fetchSubscribers();
      fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || t('error'));
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && subscribers.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{t('newsletter')}</h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-500 mb-1">{t('totalSubscribers')}</div>
          <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-500 mb-1">{t('activeSubscribers')}</div>
          <div className="text-3xl font-bold text-green-600">{stats.subscribed}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-500 mb-1">{t('unsubscribed')}</div>
          <div className="text-3xl font-bold text-gray-500">{stats.unsubscribed}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('subscriptionStatus')}</label>
            <select
              value={filters.subscribed}
              onChange={(e) => { setFilters({ ...filters, subscribed: e.target.value }); setPage(1); }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">{t('all')}</option>
              <option value="true">{t('subscribed')}</option>
              <option value="false">{t('unsubscribed')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('search')}</label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => { setFilters({ ...filters, search: e.target.value }); setPage(1); }}
              placeholder={t('searchPlaceholder')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Subscribers Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('email')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('phone')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('status')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('subscribedAt')}</th>
              <th className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">{t('actions')}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscribers.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                  {t('noSubscribers')}
                </td>
              </tr>
            ) : (
              subscribers.map(subscriber => (
                <tr key={subscriber._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{subscriber.email}</div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{subscriber.phone}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {subscriber.subscribed ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {t('subscribed')}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {t('unsubscribed')}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(subscriber.subscriptionDate)}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    <div className="flex flex-col sm:flex-row sm:space-x-2 gap-2 rtl:space-x-reverse">
                      {subscriber.subscribed && (
                        <button
                          onClick={() => handleUnsubscribe(subscriber._id)}
                          className="text-yellow-600 hover:text-yellow-900"
                        >
                          {t('unsubscribe')}
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(subscriber._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        {t('delete')}
                      </button>
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

