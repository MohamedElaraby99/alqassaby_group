import { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

export default function Layout({ children }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  function handleLogout() {
    logOut();
    navigate("/loginForm");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Mobile Button */}
      <button
        className={`lg:hidden fixed top-4 ${i18n.language === 'ar' ? 'right-4' : 'left-4'} z-50 bg-gray-900 text-white p-3 rounded-lg shadow-md`}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 ${i18n.language === 'ar' ? 'right-0' : 'left-0'} w-64 bg-gray-900 text-white transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : (i18n.language === 'ar' ? "translate-x-full" : "-translate-x-full")} 
        lg:translate-x-0 lg:static lg:block z-40`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{t('dashboard')}</h1>
              <p className="text-gray-400 text-sm mt-1">{t('adminPanel')}</p>
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex space-x-2 rtl:space-x-reverse">
              <button
                onClick={() => changeLanguage('en')}
                className={`text-xs px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ar')}
                className={`text-xs px-2 py-1 rounded ${i18n.language === 'ar' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              >
                عربي
              </button>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('/') && location.pathname === '/'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              {t('home')}
            </Link>

            {/* Users */}
            <Link
              to="/users"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('/users')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              {t('users')}
            </Link>

            {/* Products */}
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('/products')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              {t('products')}
            </Link>

            {/* Blogs */}
            <Link
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('/blogs')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              {t('blogs')}
            </Link>

            {/* Newsletter */}
            <Link
              to="/newsletter"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('/newsletter')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              {t('newsletter')}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${isActive('/contact')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              {t('contact')}
            </Link>

          </nav>

          {/*  Logout Button */}
          <button
            onClick={handleLogout}
            className="m-4 mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-all"
          >
            {t('logout')}
          </button>

        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 pt-16 lg:pt-6">
        {children}
      </div>
    </div>
  );
}
