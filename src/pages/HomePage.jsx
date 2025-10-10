import { useNavigate } from 'react-router-dom';
import { Search, Leaf, Globe2, Camera, BrainCircuit, ClipboardCheck, Rocket, Wheat } from 'lucide-react';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import WeatherWidget from '../components/shared/WeatherWidget';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Search className="text-primary w-8 h-8" />,
      title: 'Chẩn đoán bệnh',
      description: 'Chụp ảnh lá ngô và nhận chẩn đoán bệnh chính xác với độ tin cậy cao',
      action: () => navigate('/chan-doan')
    },
    {
      icon: <Leaf className="text-primary w-8 h-8" />,
      title: 'Tư vấn dinh dưỡng',
      description: 'Nhận khuyến nghị phân bón phù hợp dựa trên địa lý và giai đoạn sinh trưởng',
      action: () => navigate('/tu-van-phan-bon')
    },
    {
      icon: <Globe2 className="text-primary w-8 h-8" />,
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
    <div className="min-h-screen bg-subtle-bg">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449')" }}>
        <div className="absolute inset-0 bg-primary-dark opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Chẩn đoán bệnh cho ngô
              <span className="block text-accent">Tối ưu phân bón</span>
              <span className="block text-lg font-normal text-white/90 mt-4">
                Chỉ bằng một tấm ảnh
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Ứng dụng AI tiên tiến giúp nông dân Việt Nam chẩn đoán bệnh cây ngô 
              và nhận tư vấn dinh dưỡng chính xác, nhanh chóng và miễn phí.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="xl"
                onClick={() => navigate('/chan-doan')}
                className="text-lg px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors"
              >
                <Rocket className="mr-2 w-5 h-5" />
                Bắt đầu Chẩn đoán Ngay
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => navigate('/tu-van-phan-bon')}
                className="text-lg px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Leaf className="mr-2 w-5 h-5" />
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
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-neutral-text font-medium group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-subtle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-neutral-text max-w-2xl mx-auto">
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
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-text leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Button variant="outline" size="sm" className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Tìm hiểu thêm →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Widget Section */}
      <section className="py-16 bg-subtle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Thông tin thời tiết nông vụ
            </h2>
            <p className="text-xl text-neutral-text">
              Theo dõi điều kiện thời tiết để tối ưu hóa canh tác
            </p>
          </div>
          <WeatherWidget />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Cách thức hoạt động
            </h2>
            <p className="text-xl text-neutral-text">
              Đơn giản, nhanh chóng và hiệu quả
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Camera className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4">1. Chụp ảnh</h3>
              <p className="text-neutral-text">
                Chụp ảnh lá ngô bị bệnh bằng điện thoại hoặc máy ảnh
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <BrainCircuit className="text-accent w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4">2. AI phân tích</h3>
              <p className="text-neutral-text">
                Hệ thống AI phân tích và so sánh với hàng triệu mẫu bệnh
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ClipboardCheck className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4">3. Nhận kết quả</h3>
              <p className="text-neutral-text">
                Nhận chẩn đoán chính xác và khuyến nghị xử lý chi tiết
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tham gia cùng hàng ngàn nông dân đã tin dùng Bác Sĩ Ngô AI
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => navigate('/chan-doan')}
            className="text-lg px-8 py-4 bg-white text-primary-dark hover:bg-white/90 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Wheat className="mr-2 w-5 h-5" />
            Chẩn đoán miễn phí ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
