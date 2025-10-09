import Card from '../components/shared/Card';

const DiseaseMapPage = () => {
  // Mock data for disease map
  const diseaseData = [
    { province: 'Hà Nội', disease: 'Bệnh đốm lá', severity: 'Cao', cases: 45 },
    { province: 'TP. Hồ Chí Minh', disease: 'Bệnh rỉ sắt', severity: 'Trung bình', cases: 23 },
    { province: 'Đà Nẵng', disease: 'Bệnh khô vằn', severity: 'Thấp', cases: 8 },
    { province: 'Cần Thơ', disease: 'Bệnh đốm lá', severity: 'Cao', cases: 38 },
    { province: 'An Giang', disease: 'Bệnh rỉ sắt', severity: 'Trung bình', cases: 29 },
    { province: 'Bình Dương', disease: 'Bệnh khô vằn', severity: 'Thấp', cases: 12 }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Cao': return 'bg-red-100 text-red-800 border-red-200';
      case 'Trung bình': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Thấp': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bản đồ dịch bệnh ngô
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Theo dõi tình hình dịch bệnh ngô trên toàn quốc và nhận cảnh báo sớm 
            để bảo vệ vụ mùa của bạn
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">15</div>
            <div className="text-sm text-gray-600">Tỉnh có dịch bệnh</div>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Loại bệnh phổ biến</div>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">155</div>
            <div className="text-sm text-gray-600">Ca bệnh được báo cáo</div>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Độ chính xác dự báo</div>
          </Card>
        </div>

        {/* Map placeholder */}
        <Card className="mb-8">
          <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Bản đồ tương tác
              </h3>
              <p className="text-gray-500 text-sm">
                Tính năng đang được phát triển. Sẽ hiển thị bản đồ Việt Nam 
                với các điểm dịch bệnh được cập nhật real-time.
              </p>
            </div>
          </div>
        </Card>

        {/* Disease list */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent reports */}
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Báo cáo dịch bệnh gần đây
            </h2>
            <div className="space-y-4">
              {diseaseData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.province}</div>
                    <div className="text-sm text-gray-600">{item.disease}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">{item.cases} ca</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(item.severity)}`}>
                      {item.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Disease prevention tips */}
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Biện pháp phòng ngừa
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🌱</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Chọn giống kháng bệnh</h3>
                  <p className="text-sm text-gray-600">
                    Sử dụng các giống ngô có khả năng kháng bệnh cao
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">💧</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Quản lý nước tốt</h3>
                  <p className="text-sm text-gray-600">
                    Tránh để nước đọng, tạo hệ thống thoát nước hiệu quả
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🔍</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Kiểm tra thường xuyên</h3>
                  <p className="text-sm text-gray-600">
                    Thường xuyên kiểm tra và phát hiện sớm các dấu hiệu bệnh
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🧪</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Xử lý kịp thời</h3>
                  <p className="text-sm text-gray-600">
                    Sử dụng thuốc trừ sâu/bệnh khi phát hiện sớm
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Alert system */}
        <Card className="mt-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Hệ thống cảnh báo sớm
            </h2>
            <p className="text-gray-600 mb-6">
              Đăng ký nhận thông báo về dịch bệnh tại khu vực của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DiseaseMapPage;
