import { useState } from 'react';
import { 
  Brain, 
  CloudRain, 
  Sun, 
  Upload, 
  DollarSign, 
  BarChart3, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Leaf,
  Zap,
  Target,
  Users
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DemoPage = () => {
  // State cho Lộ trình Bón phân Động
  const [schedule, setSchedule] = useState([
    { id: 1, stage: 'Sinh trưởng', task: 'Bón thúc Đạm Urê', dosage: '120 kg/ha', status: 'Sắp tới', notes: 'Khi cây có 7-9 lá.' },
    { id: 2, stage: 'Trổ cờ', task: 'Bón thúc Kali & Đạm', dosage: '150 kg/ha', status: 'Sắp tới', notes: 'Trước khi trổ cờ 10 ngày.' },
    { id: 3, stage: 'Chín', task: 'Ngừng bón phân', dosage: '0 kg/ha', status: 'Sắp tới', notes: 'Ngừng bón trước thu hoạch.' },
  ]);
  const [notification, setNotification] = useState('');
  const [showCostOptimization, setShowCostOptimization] = useState(false);
  const [showPerformanceReport, setShowPerformanceReport] = useState(false);

  // Dữ liệu giả cho tối ưu chi phí
  const suppliers = [
    { name: 'Cửa hàng VTNN An Nông', price: 10000, distance: 2, promo: null },
    { name: 'Đại lý Giống cây trồng Miền Tây', price: 10500, distance: 5, promo: 'Giảm 5% tổng hóa đơn' },
    { name: 'Nông sản Đồng Nai', price: 9800, distance: 8, promo: 'Miễn phí vận chuyển' },
  ];

  // Dữ liệu giả cho báo cáo hiệu suất
  const userReport = { yield: 5.2, fertilizerUsage: 280 };
  const communityAverage = { yield: 4.8, fertilizerUsage: 320 };
  
  const chartData = [
    { name: 'Năng suất (tấn/ha)', user: userReport.yield, community: communityAverage.yield },
    { name: 'Lượng phân bón (kg/ha)', user: userReport.fertilizerUsage, community: communityAverage.fertilizerUsage },
  ];

  // Logic AI mô phỏng
  const handleWeatherForecast = (type) => {
    if (type === 'rain') {
      setNotification('AI đã cập nhật lịch trình để tránh lãng phí do mưa lớn!');
      setSchedule(prev => prev.map(item => 
        item.task.includes('Đạm') 
          ? { ...item, status: 'Tạm hoãn', notes: 'Hoãn do mưa lớn, tránh rửa trôi' }
          : item
      ));
    } else {
      setNotification('Thời tiết tốt! Lịch trình bón phân đã được khôi phục.');
      setSchedule(prev => prev.map(item => 
        item.status === 'Tạm hoãn' 
          ? { ...item, status: 'Sắp tới', notes: item.task.includes('Đạm') ? 'Khi cây có 7-9 lá.' : 'Trước khi trổ cờ 10 ngày.' }
          : item
      ));
    }
  };

  const handleImageAnalysis = () => {
    setNotification('AI đã điều chỉnh liều lượng phân bón dựa trên phân tích hình ảnh mới nhất!');
    setSchedule(prev => prev.map((item, index) => 
      index === 0 
        ? { ...item, dosage: '150 kg/ha', notes: 'Tăng liều lượng do AI phát hiện lá hơi vàng' }
        : item
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Sắp tới': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Tạm hoãn': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hoàn thành': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getNotificationColor = () => {
    if (notification.includes('AI đã cập nhật') || notification.includes('AI đã điều chỉnh')) {
      return 'bg-green-50 border-green-200 text-green-800';
    } else if (notification.includes('mưa lớn')) {
      return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    }
    return 'bg-blue-50 border-blue-200 text-blue-800';
  };

  return (
    <div className="min-h-screen bg-subtle-bg py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary-dark mb-4">
            Demo Tính năng AI CropWise
          </h1>
          <p className="text-lg text-neutral-text max-w-3xl mx-auto">
            Khám phá các tính năng AI sáng tạo: Lộ trình bón phân động, Tối ưu hóa chi phí, 
            và Báo cáo hiệu suất cộng đồng
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Cột trái - Bảng điều khiển AI */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-primary-dark mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Bảng điều khiển AI
              </h2>
              
              {/* Mô phỏng Thời tiết */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-primary-dark mb-3">Mô phỏng Thời tiết</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleWeatherForecast('rain')}
                    className="flex-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-3 px-4 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <CloudRain className="w-4 h-4" />
                    Dự báo: Mưa lớn sắp tới
                  </button>
                  <button
                    onClick={() => handleWeatherForecast('sunny')}
                    className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 px-4 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <Sun className="w-4 h-4" />
                    Thời tiết: Nắng đẹp
                  </button>
                </div>
              </div>

              {/* Mô phỏng Phản hồi Hình ảnh */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-primary-dark mb-3">Phân tích Hình ảnh AI</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-4">Upload ảnh cây trồng để AI phân tích</p>
                  <button
                    onClick={handleImageAnalysis}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                  >
                    Cập nhật tình trạng cây
                  </button>
                </div>
              </div>
            </div>

            {/* Các tính năng khác */}
            <div className="grid gap-4">
              <button
                onClick={() => setShowCostOptimization(true)}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all text-left group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-primary-dark">Mô phỏng Tối ưu Chi phí</h3>
                </div>
                <p className="text-neutral-text">AI phân tích thị trường và đề xuất giải pháp tiết kiệm</p>
              </button>

              <button
                onClick={() => setShowPerformanceReport(true)}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all text-left group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-primary-dark">Xem Báo cáo Vụ mùa</h3>
                </div>
                <p className="text-neutral-text">So sánh hiệu suất với cộng đồng nông dân</p>
              </button>
            </div>
          </div>

          {/* Cột phải - Lộ trình bón phân */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-primary-dark mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Lộ trình Bón phân Động
              </h2>

              {/* Thông báo AI */}
              {notification && (
                <div className={`p-4 rounded-lg border mb-6 ${getNotificationColor()}`}>
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    <span className="font-medium">{notification}</span>
                  </div>
                </div>
              )}

              {/* Lịch trình */}
              <div className="space-y-4">
                {schedule.map((item) => (
                  <div key={item.id} className="border border-light-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-primary-dark">{item.stage}</h3>
                        <p className="text-neutral-text">{item.task}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-text">Liều lượng:</span>
                        <span className="ml-2 font-medium text-primary-dark">{item.dosage}</span>
                      </div>
                      <div>
                        <span className="text-neutral-text">Ghi chú:</span>
                        <span className="ml-2 text-neutral-text">{item.notes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Tối ưu Chi phí */}
        {showCostOptimization && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-primary-dark flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    Tối ưu hóa Chi phí
                  </h2>
                  <button
                    onClick={() => setShowCostOptimization(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Đề xuất AI */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">🤖 Đề xuất AI:</h3>
                    <p className="text-green-700">Cần 120 kg Đạm Urê cho lần bón tới.</p>
                  </div>

                  {/* Phân tích Thị trường */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-4">Phân tích Thị trường</h3>
                    <div className="space-y-3">
                      {suppliers.map((supplier, index) => {
                        const isBest = index === 0;
                        const totalPrice = supplier.promo ? supplier.price * 0.95 : supplier.price;
                        return (
                          <div key={index} className={`border rounded-lg p-4 ${isBest ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-primary-dark">{supplier.name}</h4>
                              {isBest && <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Tốt nhất</span>}
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-neutral-text">Giá:</span>
                                <span className="ml-2 font-medium">{supplier.price.toLocaleString()} VNĐ/kg</span>
                              </div>
                              <div>
                                <span className="text-neutral-text">Khoảng cách:</span>
                                <span className="ml-2 font-medium">{supplier.distance} km</span>
                              </div>
                              <div>
                                <span className="text-neutral-text">Khuyến mãi:</span>
                                <span className="ml-2 text-green-600">{supplier.promo || 'Không có'}</span>
                              </div>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="text-neutral-text">Tổng chi phí (120kg):</span>
                              <span className="ml-2 font-bold text-primary-dark">
                                {(totalPrice * 120).toLocaleString()} VNĐ
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Gợi ý Công thức Thay thế */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">💡 Gợi ý Công thức Thay thế:</h3>
                    <p className="text-blue-700">
                      Hoặc, AI gợi ý công thức thay thế tiết kiệm hơn: Dùng 80kg NPK 16-16-8 (giá 9,500 VNĐ/kg) 
                      kết hợp với 50kg Đạm (giá 8,500 VNĐ/kg). Tiết kiệm 15% chi phí!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Báo cáo Hiệu suất */}
        {showPerformanceReport && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary-dark flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Báo cáo Hiệu suất Vụ mùa
              </h2>
              <button
                onClick={() => setShowPerformanceReport(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Chỉ số cá nhân */}
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-4">Chỉ số của bạn</h3>
                <div className="grid gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-800">Năng suất</span>
                    </div>
                    <p className="text-2xl font-bold text-green-700">{userReport.yield} tấn/ha</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-800">Lượng phân bón</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-700">{userReport.fertilizerUsage} kg/ha</p>
                  </div>
                </div>
              </div>

              {/* Biểu đồ so sánh */}
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-4">So sánh với Cộng đồng</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="user" fill="#2A9D8F" name="Bạn" />
                      <Bar dataKey="community" fill="#94A3B8" name="Trung bình cộng đồng" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Nhận xét AI */}
            <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-primary-dark mb-2">Kết quả phân tích AI:</h4>
                  <p className="text-neutral-text">
                    Bạn đã sử dụng ít hơn <span className="font-bold text-green-600">12.5%</span> phân bón 
                    nhưng đạt năng suất cao hơn <span className="font-bold text-green-600">8.3%</span> so với trung bình khu vực. 
                    <span className="font-bold text-primary"> Rất hiệu quả!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoPage;
