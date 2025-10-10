import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌽</span>
              </div>
              <span className="text-xl font-bold text-primary-dark">
                Crop Wise
              </span>
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-text hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                Trang chủ
              </NavLink>
              <NavLink
                to="/chan-doan"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-text hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                Chẩn đoán bệnh
              </NavLink>
              <NavLink
                to="/tu-van-phan-bon"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-text hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                Tư vấn phân bón
              </NavLink>
              <NavLink
                to="/ban-do-dich-benh"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-text hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                Bản đồ dịch bệnh
              </NavLink>
              <NavLink
                to="/nha-cung-cap"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-text hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                Nhà cung cấp
              </NavLink>
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-text hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                Demo Tính năng AI
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-neutral-text hover:text-primary focus:outline-none focus:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
