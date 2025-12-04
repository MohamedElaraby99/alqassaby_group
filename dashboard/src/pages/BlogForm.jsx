import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogsAPI, BASE_URL } from '../services/api';
import { useTranslation } from 'react-i18next';

export default function BlogForm() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    image: null,
    imageUrl: '',
    featured: false,
    published: true,
    category: '',
    tags: '',
  });

  useEffect(() => {
    if (isEdit) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await blogsAPI.getById(id);
      const blog = response.data.data;
      setFormData({
        title: blog.title || '',
        slug: blog.slug || '',
        content: blog.content || '',
        excerpt: blog.excerpt || '',
        author: blog.author || '',
        image: null,
        imageUrl: blog.image || '',
        featured: blog.featured || false,
        published: blog.published !== undefined ? blog.published : true,
        category: blog.category || '',
        tags: blog.tags?.join(', ') || '',
      });
    } catch (err) {
      setError(err.response?.data?.message || t('error'));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, image: files[0] || null });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });

      // Auto-generate slug from title
      if (name === 'title' && !isEdit) {
        const slug = value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        setFormData(prev => ({ ...prev, slug }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        excerpt: formData.excerpt,
        author: formData.author,
        category: formData.category,
        featured: formData.featured,
        published: formData.published,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
      };

      // Add image if new file uploaded, otherwise use existing URL
      if (formData.image) {
        data.image = formData.image;
      } else if (formData.imageUrl) {
        data.image = formData.imageUrl;
      }

      if (isEdit) {
        await blogsAPI.update(id, data);
      } else {
        await blogsAPI.create(data);
      }

      navigate('/blogs');
    } catch (err) {
      setError(err.response?.data?.message || t('error'));
    } finally {
      setLoading(false);
    }
  };

  const getImagePreview = () => {
    if (formData.image) {
      return URL.createObjectURL(formData.image);
    }
    if (formData.imageUrl) {
      if (formData.imageUrl.startsWith('http')) {
        return formData.imageUrl;
      }
      return `${BASE_URL}${formData.imageUrl}`;
    }
    return null;
  };

  if (loading && isEdit && !formData.title) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {isEdit ? t('editBlog') : t('createBlog')}
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('title')} *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('slug')} *
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">URL-friendly identifier (auto-generated from title)</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('author')} *
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('category')} *
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('image')} URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">{t('uploadImage')}</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('uploadImage')}
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          {getImagePreview() && (
            <div className="mt-2">
              <img
                src={getImagePreview()}
                alt="Preview"
                className="h-32 w-32 object-cover rounded"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('excerpt')} *
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows="3"
            maxLength="500"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Short summary of the blog post"
          />
          <p className="text-xs text-gray-500 mt-1">{formData.excerpt.length}/500 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('content')} *
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="12"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
            placeholder="Full blog content here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('tags')}
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder={t('tagsPlaceholder')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="ml-2 text-sm text-gray-700">{t('featuredProducts')}</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="published"
              checked={formData.published}
              onChange={handleChange}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="ml-2 text-sm text-gray-700">{t('published')}</span>
          </label>
        </div>

        <div className="flex justify-end space-x-4 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => navigate('/blogs')}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            {t('cancel')}
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t('loading') : isEdit ? t('save') : t('create')}
          </button>
        </div>
      </form>
    </div>
  );
}

