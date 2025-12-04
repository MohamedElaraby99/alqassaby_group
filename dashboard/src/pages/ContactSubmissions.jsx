import { useEffect, useState } from 'react';
import { contactAPI } from '../services/api';
import { useTranslation } from 'react-i18next';

export default function ContactSubmissions() {
  const { t } = useTranslation();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stats, setStats] = useState({ total: 0, read: 0, unread: 0, replied: 0, unreplied: 0 });
  const [filters, setFilters] = useState({
    read: '',
    replied: '',
    search: '',
  });
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    fetchSubmissions();
    fetchStats();
  }, [page, filters]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const params = { page, limit: 50, ...filters };
      Object.keys(params).forEach(key => {
        if (params[key] === '') delete params[key];
      });
      const response = await contactAPI.getAll(params);
      setSubmissions(response.data.data || []);
      setTotalPages(response.data.totalPages || 1);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || t('error'));
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await contactAPI.getStats();
      setStats(response.data.data || { total: 0, read: 0, unread: 0, replied: 0, unreplied: 0 });
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await contactAPI.markAsRead(id);
      fetchSubmissions();
      fetchStats();
      if (selectedSubmission && selectedSubmission._id === id) {
        setSelectedSubmission({ ...selectedSubmission, read: true });
      }
    } catch (err) {
      alert(err.response?.data?.message || t('error'));
    }
  };

  const handleMarkAsReplied = async (id) => {
    try {
      await contactAPI.markAsReplied(id);
      fetchSubmissions();
      fetchStats();
      if (selectedSubmission && selectedSubmission._id === id) {
        setSelectedSubmission({ ...selectedSubmission, replied: true, read: true });
      }
    } catch (err) {
      alert(err.response?.data?.message || t('error'));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(t('confirmDelete'))) return;

    try {
      await contactAPI.delete(id);
      fetchSubmissions();
      fetchStats();
      if (selectedSubmission && selectedSubmission._id === id) {
        setSelectedSubmission(null);
      }
    } catch (err) {
      alert(err.response?.data?.message || t('error'));
    }
  };

  const handleViewDetails = async (id) => {
    try {
      const response = await contactAPI.getById(id);
      setSelectedSubmission(response.data.data);
      // Auto mark as read when viewing
      if (!response.data.data.read) {
        await handleMarkAsRead(id);
      }
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

  if (loading && submissions.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{t('contact')}</h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-500 mb-1">{t('totalSubscribers')}</div>
          <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-500 mb-1">{t('unread')}</div>
          <div className="text-3xl font-bold text-red-600">{stats.unread}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-500 mb-1">{t('read')}</div>
          <div className="text-3xl font-bold text-blue-600">{stats.read}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-500 mb-1">{t('replied')}</div>
          <div className="text-3xl font-bold text-green-600">{stats.replied}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-500 mb-1">{t('unreplied')}</div>
          <div className="text-3xl font-bold text-orange-600">{stats.unreplied}</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Filters and List */}
        <div className="lg:col-span-2">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('readStatus')}</label>
                <select
                  value={filters.read}
                  onChange={(e) => { setFilters({ ...filters, read: e.target.value }); setPage(1); }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">{t('all')}</option>
                  <option value="true">{t('read')}</option>
                  <option value="false">{t('unread')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('replyStatus')}</label>
                <select
                  value={filters.replied}
                  onChange={(e) => { setFilters({ ...filters, replied: e.target.value }); setPage(1); }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">{t('all')}</option>
                  <option value="true">{t('replied')}</option>
                  <option value="false">{t('unreplied')}</option>
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

          {/* Submissions List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200">
              {submissions.length === 0 ? (
                <div className="px-4 py-8 text-center text-gray-500">
                  {t('noSubmissions')}
                </div>
              ) : (
                submissions.map(submission => (
                  <div
                    key={submission._id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${!submission.read ? 'bg-blue-50' : ''
                      } ${selectedSubmission?._id === submission._id ? 'bg-green-50' : ''}`}
                    onClick={() => handleViewDetails(submission._id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                          {!submission.read && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              {t('new')}
                            </span>
                          )}
                          {submission.replied && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {t('replied')}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{submission.email}</p>
                        <p className="text-sm font-medium text-gray-900 mb-2">{submission.subject}</p>
                        <p className="text-sm text-gray-500 line-clamp-2">{submission.message}</p>
                        <p className="text-xs text-gray-400 mt-2">{formatDate(submission.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
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

        {/* Details Panel */}
        <div className="lg:col-span-1">
          {selectedSubmission ? (
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">{t('details')}</h2>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">{t('name')}</label>
                  <p className="text-gray-900 font-semibold">{selectedSubmission.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">{t('email')}</label>
                  <p className="text-gray-900">{selectedSubmission.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">{t('phone')}</label>
                  <p className="text-gray-900">{selectedSubmission.phone}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">{t('subject')}</label>
                  <p className="text-gray-900 font-semibold">{selectedSubmission.subject}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">{t('message')}</label>
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">{t('date')}</label>
                  <p className="text-gray-900 text-sm">{formatDate(selectedSubmission.createdAt)}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                {!selectedSubmission.read && (
                  <button
                    onClick={() => handleMarkAsRead(selectedSubmission._id)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('markAsRead')}
                  </button>
                )}
                {!selectedSubmission.replied && (
                  <button
                    onClick={() => handleMarkAsReplied(selectedSubmission._id)}
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {t('markAsReplied')}
                  </button>
                )}
                <button
                  onClick={() => handleDelete(selectedSubmission._id)}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  {t('delete')}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500 text-center">{t('selectSubmission')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

