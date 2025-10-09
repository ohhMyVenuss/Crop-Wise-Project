import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

const SuppliersPage = () => {
  // Mock data for suppliers
  const suppliers = [
    {
      id: 1,
      name: 'Công ty TNHH Nông nghiệp Xanh',
      location: 'Hà Nội',
      rating: 4.8,
      products: ['Phân bón NPK', 'Thuốc trừ sâu', 'Hạt giống'],
      phone: '024-1234-5678',
      address: '123 Đường ABC, Quận XYZ, Hà Nội',
      distance: '2.5 km'
    },
    {
      id: 2,
      name: 'Cửa hàng Vật tư Nông nghiệp Minh Đức',
      location: 'TP. Hồ Chí Minh',
      rating: 4.6,
      products: ['Phân hữu cơ', 'Phân bón lá', 'Dụng cụ nông nghiệp'],
      phone: '028-8765-4321',
      address: '456 Đường DEF, Quận GHI, TP.HCM',
      distance: '5.2 km'
    },
    {
      id: 3,
      name: 'HTX Nông nghiệp Đồng Xanh',
      location: 'Đà Nẵng',
      rating: 4.9,
      products: ['Phân bón tổng hợp', 'Thuốc trừ bệnh', 'Hạt giống cao cấp'],
      phone: '0236-9876-5432',
      address: '789 Đường JKL, Quận MNO, Đà Nẵng',
      distance: '8.7 km'
    },
    {
      id: 4,
      name: 'Siêu thị Nông sản Việt',
      location: 'Cần Thơ',
      rating: 4.5,
      products: ['Phân bón chuyên dụng', 'Chế phẩm sinh học', 'Vật tư khác'],
      phone: '0292-1357-2468',
      address: '321 Đường PQR, Quận STU, Cần Thơ',
      distance: '12.3 km'
    }
  ];

  const productCategories = [
    { name: 'Phân bón NPK', count: 45, icon: '🌱' },
    { name: 'Phân hữu cơ', count: 23, icon: '🍃' },
    { name: 'Thuốc trừ sâu', count: 67, icon: '🧪' },
    { name: 'Thuốc trừ bệnh', count: 34, icon: '💊' },
    { name: 'Hạt giống', count: 89, icon: '🌽' },
    { name: 'Dụng cụ', count: 56, icon: '🔧' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Nhà cung cấp vật tư nông nghiệp
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tìm kiếm và kết nối với các nhà cung cấp uy tín trong khu vực của bạn
          </p>
        </div>

        {/* Search and filters */}
        <Card className="mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tìm kiếm
              </label>
              <input
                type="text"
                placeholder="Tên cửa hàng, sản phẩm..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tỉnh/Thành phố
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option value="">Tất cả</option>
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP. Hồ Chí Minh</option>
                <option value="danang">Đà Nẵng</option>
                <option value="cantho">Cần Thơ</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Khoảng cách
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option value="">Tất cả</option>
                <option value="5">Dưới 5km</option>
                <option value="10">Dưới 10km</option>
                <option value="20">Dưới 20km</option>
              </select>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Danh mục sản phẩm
              </h3>
              <div className="space-y-3">
                {productCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main content - Suppliers list */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {suppliers.map((supplier) => (
                <Card key={supplier.id} hover>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Supplier info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {supplier.name}
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm text-gray-600">📍 {supplier.location}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-600">🚗 {supplier.distance}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-3">
                            {renderStars(supplier.rating)}
                            <span className="text-sm text-gray-600 ml-2">
                              {supplier.rating} ({Math.floor(Math.random() * 100) + 20} đánh giá)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Products */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Sản phẩm chính:</h4>
                        <div className="flex flex-wrap gap-2">
                          {supplier.products.map((product, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact info */}
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <span className="mr-2">📞</span>
                          <span>{supplier.phone}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="mr-2 mt-0.5">📍</span>
                          <span>{supplier.address}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-3 md:w-48">
                      <Button variant="primary" size="sm">
                        📞 Gọi ngay
                      </Button>
                      <Button variant="outline" size="sm">
                        🗺️ Chỉ đường
                      </Button>
                      <Button variant="ghost" size="sm">
                        📝 Xem chi tiết
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load more button */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Xem thêm nhà cung cấp
              </Button>
            </div>
          </div>
        </div>

        {/* Become a supplier section */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Bạn là nhà cung cấp?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Đăng ký trở thành đối tác của chúng tôi để tiếp cận với hàng ngàn 
              nông dân trên toàn quốc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Đăng ký ngay
              </Button>
              <Button variant="outline" size="lg">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SuppliersPage;
