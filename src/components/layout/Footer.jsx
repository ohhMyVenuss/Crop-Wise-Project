const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">🌽</span>
              </div>
              <span className="text-lg font-bold">Bác Sĩ Ngô AI</span>
            </div>
            <p className="text-gray-300 text-sm">
              Trợ lý ảo thông minh giúp nông dân trồng ngô chẩn đoán bệnh và tối ưu hóa phân bón.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/chan-doan" className="text-gray-300 hover:text-green-400 transition-colors">
                  Chẩn đoán bệnh
                </a>
              </li>
              <li>
                <a href="/tu-van-phan-bon" className="text-gray-300 hover:text-green-400 transition-colors">
                  Tư vấn phân bón
                </a>
              </li>
              <li>
                <a href="/ban-do-dich-benh" className="text-gray-300 hover:text-green-400 transition-colors">
                  Bản đồ dịch bệnh
                </a>
              </li>
              <li>
                <a href="/nha-cung-cap" className="text-gray-300 hover:text-green-400 transition-colors">
                  Nhà cung cấp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 Email: support@bacsingoai.vn</p>
              <p>📱 Hotline: 1900-xxxx</p>
              <p>📍 Địa chỉ: Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Bác Sĩ Ngô AI. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
