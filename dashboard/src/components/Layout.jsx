import { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// import { AuthContext } from '../context/AuthContext';

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

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
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:block z-40`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-800">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Admin Panel</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Home
            </Link>

            {/* Products */}
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive('/products')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Products
            </Link>

            {/* Blogs */}
            <Link
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive('/blogs')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Blogs
            </Link>

          </nav>

          {/*  Logout Button */}
          <button
            onClick={handleLogout}
            className="m-4 mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-all"
          >
            Log out
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
      <div className="flex-1 lg:ml-30 p-6">
        {children}
      </div>
    </div>
  );
}
