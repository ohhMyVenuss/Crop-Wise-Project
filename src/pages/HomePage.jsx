import { useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🔍',
      title: 'Chẩn đoán bệnh',
      description: 'Chụp ảnh lá ngô và nhận chẩn đoán bệnh chính xác với độ tin cậy cao',
      action: () => navigate('/chan-doan')
    },
    {
      icon: '🌱',
      title: 'Tư vấn dinh dưỡng',
      description: 'Nhận khuyến nghị phân bón phù hợp dựa trên địa lý và giai đoạn sinh trưởng',
      action: () => navigate('/tu-van-phan-bon')
    },
    {
      icon: '🗺️',
      title: 'Bản đồ dịch bệnh',
      description: 'Theo dõi tình hình dịch bệnh ngô trên toàn quốc và cảnh báo sớm',
      action: () => navigate('/ban-do-dich-benh')
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Ảnh đã phân tích' },
    { number: '95%', label: 'Độ chính xác' },
    { number: '500+', label: 'Nông dân tin dùng' },
    { number: '24/7', label: 'Hỗ trợ' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Chẩn đoán bệnh cho ngô
              <span className="block text-green-600">Tối ưu phân bón</span>
              <span className="block text-lg font-normal text-gray-600 mt-4">
                Chỉ bằng một tấm ảnh
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ứng dụng AI tiên tiến giúp nông dân Việt Nam chẩn đoán bệnh cây ngô 
              và nhận tư vấn dinh dưỡng chính xác, nhanh chóng và miễn phí.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="xl"
                onClick={() => navigate('/chan-doan')}
                className="text-lg px-8 py-4"
              >
                <span className="mr-2">🚀</span>
                Bắt đầu Chẩn đoán Ngay
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => navigate('/tu-van-phan-bon')}
                className="text-lg px-8 py-4"
              >
                <span className="mr-2">🌱</span>
                Tư vấn Phân bón
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Công nghệ AI tiên tiến mang đến giải pháp toàn diện cho nông dân trồng ngô
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                hover 
                className="text-center cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={feature.action}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Button variant="outline" size="sm">
                  Tìm hiểu thêm →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cách thức hoạt động
            </h2>
            <p className="text-xl text-gray-600">
              Đơn giản, nhanh chóng và hiệu quả
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Chụp ảnh</h3>
              <p className="text-gray-600">
                Chụp ảnh lá ngô bị bệnh bằng điện thoại hoặc máy ảnh
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. AI phân tích</h3>
              <p className="text-gray-600">
                Hệ thống AI phân tích và so sánh với hàng triệu mẫu bệnh
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Nhận kết quả</h3>
              <p className="text-gray-600">
                Nhận chẩn đoán chính xác và khuyến nghị xử lý chi tiết
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Tham gia cùng hàng ngàn nông dân đã tin dùng Bác Sĩ Ngô AI
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => navigate('/chan-doan')}
            className="text-lg px-8 py-4"
          >
            <span className="mr-2">🌽</span>
            Chẩn đoán miễn phí ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
