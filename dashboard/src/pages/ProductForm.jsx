import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsAPI } from '../services/api';
import { useTranslation } from 'react-i18next';

export default function ProductForm() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
    imageUrl: '',
    featured: false,
    inStock: true,
    tags: '',
    specifications: '',
  });

  useEffect(() => {
    if (isEdit) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getById(id);
      const product = response.data.data;
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price || '',
        category: product.category || '',
        image: null,
        imageUrl: product.image || '',
        featured: product.featured || false,
        inStock: product.inStock !== undefined ? product.inStock : true,
        tags: product.tags?.join(', ') || '',
        specifications: product.specifications
          ? Object.entries(product.specifications).map(([k, v]) => `${k}:${v}`).join('\n')
          : '',
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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        featured: formData.featured,
        inStock: formData.inStock,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
      };

      // Add image if new file uploaded, otherwise use existing URL
      if (formData.image) {
        data.image = formData.image;
      } else if (formData.imageUrl) {
        data.image = formData.imageUrl;
      }

      // Parse specifications
      if (formData.specifications) {
        const specs = {};
        formData.specifications.split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length > 0) {
            specs[key.trim()] = valueParts.join(':').trim();
          }
        });
        data.specifications = specs;
      }

      if (isEdit) {
        await productsAPI.update(id, data);
      } else {
        await productsAPI.create(data);
      }

      navigate('/products');
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
      return `http://localhost:5000${formData.imageUrl}`;
    }
    return null;
  };

  if (loading && isEdit && !formData.name) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {isEdit ? t('editProduct') : t('createProduct')}
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('name')} *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category */}
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('price')} *
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Image URL */}
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">{t('uploadImage')}</p>
          </div>
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('uploadImage')}
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('description')} *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Tags */}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Specifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('specifications')} (key:value)
          </label>
          <textarea
            name="specifications"
            value={formData.specifications}
            onChange={handleChange}
            rows="4"
            placeholder="weight:500g&#10;dimensions:10x10x5cm"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 rtl:space-x-reverse">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{t('featuredProducts')}</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{t('inStock')}</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            {t('cancel')}
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t('loading') : isEdit ? t('save') : t('create')}
          </button>
        </div>
      </form>
    </div>
  );
}

