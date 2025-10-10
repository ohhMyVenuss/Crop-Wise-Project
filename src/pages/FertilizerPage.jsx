import { useState } from 'react';
import { 
  MapPin, 
  FlaskConical, 
  Beaker, 
  CloudRain, 
  Thermometer, 
  Sprout, 
  Leaf, 
  Flower, 
  Wheat,
  ArrowRight,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

const FertilizerPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
    rainfall: 25.5, // Dữ liệu giả lập từ widget
    temperature: 31, // Dữ liệu giả lập từ widget
    growthStage: '',
  });
  const [recommendation, setRecommendation] = useState(null);

  // Danh sách tỉnh thành trồng ngô tiêu biểu
  const locations = [
    'Sơn La',
    'Đồng Nai', 
    'Đắk Lắk',
    'An Giang',
    'Tây Ninh',
    'Bình Phước',
    'Gia Lai',
    'Kon Tum'
  ];

  // Các giai đoạn phát triển của cây ngô
  const growthStages = [
    {
      id: 'germination',
      name: 'Nảy mầm & Cây con',
      icon: Sprout,
      description: 'Giai đoạn từ khi gieo hạt đến cây có 3-4 lá'
    },
    {
      id: 'vegetative',
      name: 'Sinh trưởng (Vươn lóng)',
      icon: Leaf,
      description: 'Giai đoạn cây phát triển thân lá mạnh'
    },
    {
      id: 'flowering',
      name: 'Trổ cờ, Phun râu',
      icon: Flower,
      description: 'Giai đoạn cây trổ cờ và phun râu'
    },
    {
      id: 'maturity',
      name: 'Chín & Thu hoạch',
      icon: Wheat,
      description: 'Giai đoạn hạt chín và sẵn sàng thu hoạch'
    }
  ];

  // Dữ liệu lịch trình bón phân
  const fertilizerSchedule = [
    {
      stage: 'Nảy mầm',
      fertilizer: 'Phân bón lót (NPK 16-16-8)',
      amount: '300-400',
      note: 'Bón trước khi gieo hạt'
    },
    {
      stage: 'Sinh trưởng',
      fertilizer: 'Bón thúc lần 1 (Đạm Urê, NPK)',
      amount: '100-150',
      note: 'Khi cây có 7-9 lá'
    },
    {
      stage: 'Trổ cờ, Phun râu',
      fertilizer: 'Bón thúc lần 2 (Đạm Urê, Kali)',
      amount: '120-180',
      note: 'Trước khi trổ cờ 10-15 ngày'
    },
    {
      stage: 'Chín & Thu hoạch',
      fertilizer: 'Không bón phân',
      amount: '0',
      note: 'Ngừng bón trước thu hoạch 20 ngày'
    }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Logic xử lý và tạo khuyến nghị
    const mockRecommendation = {
      immediate: {
        fertilizer: 'NPK 20-20-15',
        amount: '200-250 kg/ha',
        timing: 'Bón ngay trong tuần này',
        method: 'Rải đều quanh gốc, cách gốc 10-15cm'
      },
      schedule: fertilizerSchedule.filter((_, index) => {
        const currentStageIndex = growthStages.findIndex(stage => stage.id === formData.growthStage);
        return index >= currentStageIndex;
      })
    };
    
    setRecommendation(mockRecommendation);
    setCurrentStep(4);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      location: '',
      nitrogen: '',
      phosphorus: '',
      potassium: '',
      ph: '',
      rainfall: 25.5,
      temperature: 31,
      growthStage: '',
    });
    setRecommendation(null);
  };

  // Bước 1: Chọn địa điểm
  const renderStep1 = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-primary-dark mb-2">
          Bước 1: Vị trí canh tác của bạn ở đâu?
        </h2>
        <p className="text-neutral-text">
          Chọn tỉnh thành nơi bạn đang canh tác để nhận khuyến nghị phù hợp
        </p>
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Hướng dẫn:</strong> Vui lòng chọn tỉnh/thành phố từ danh sách bên dưới. Sau khi chọn xong, nút "Tiếp theo" sẽ được kích hoạt.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-primary-dark mb-2">
          Tỉnh/Thành phố
        </label>
        <select
          value={formData.location}
          onChange={(e) => {
            console.log('Location selected:', e.target.value);
            setFormData({...formData, location: e.target.value});
          }}
          className="w-full p-3 border border-light-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">-- Chọn tỉnh/thành phố --</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
        {formData.location ? (
          <p className="text-sm text-green-600 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Đã chọn: {formData.location}
          </p>
        ) : (
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Vui lòng chọn tỉnh/thành phố để tiếp tục
          </p>
        )}
      </div>

      <div className="flex justify-end mt-8">
        {formData.location ? (
          <button
            onClick={() => {
              console.log('Next button clicked, current location:', formData.location);
              handleNext();
            }}
            className="fertilizer-btn-primary px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Tiếp theo
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            disabled
            className="fertilizer-btn-disabled px-8 py-4 rounded-lg font-semibold cursor-not-allowed flex items-center gap-2"
          >
            Tiếp theo
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );

  // Bước 2: Nhập thông số đất & thời tiết
  const renderStep2 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <FlaskConical className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-primary-dark mb-2">
          Bước 2: Cung cấp thông số đo đạc
        </h2>
        <p className="text-neutral-text">
          Nhập các thông số về đất và thời tiết để có khuyến nghị chính xác
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Nitrogen */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-primary-dark">
            <FlaskConical className="w-4 h-4 text-primary" />
            Nitrogen (N) - ppm
          </label>
          <input
            type="number"
            value={formData.nitrogen}
            onChange={(e) => setFormData({...formData, nitrogen: e.target.value})}
            placeholder="Nhập hàm lượng N"
            className="w-full p-3 border border-light-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Phosphorus */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-primary-dark">
            <FlaskConical className="w-4 h-4 text-primary" />
            Phosphorus (P) - ppm
          </label>
          <input
            type="number"
            value={formData.phosphorus}
            onChange={(e) => setFormData({...formData, phosphorus: e.target.value})}
            placeholder="Nhập hàm lượng P"
            className="w-full p-3 border border-light-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Potassium */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-primary-dark">
            <FlaskConical className="w-4 h-4 text-primary" />
            Potassium (K) - ppm
          </label>
          <input
            type="number"
            value={formData.potassium}
            onChange={(e) => setFormData({...formData, potassium: e.target.value})}
            placeholder="Nhập hàm lượng K"
            className="w-full p-3 border border-light-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* pH */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-primary-dark">
            <Beaker className="w-4 h-4 text-primary" />
            Độ pH
          </label>
          <input
            type="number"
            step="0.1"
            value={formData.ph}
            onChange={(e) => setFormData({...formData, ph: e.target.value})}
            placeholder="Nhập độ pH"
            className="w-full p-3 border border-light-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Rainfall */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-primary-dark">
            <CloudRain className="w-4 h-4 text-primary" />
            Lượng mưa (mm)
          </label>
          <input
            type="number"
            value={formData.rainfall}
            disabled
            className="w-full p-3 border border-light-border rounded-lg bg-gray-50 text-gray-500"
          />
        </div>

        {/* Temperature */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-primary-dark">
            <Thermometer className="w-4 h-4 text-primary" />
            Nhiệt độ (°C)
          </label>
          <input
            type="number"
            value={formData.temperature}
            disabled
            className="w-full p-3 border border-light-border rounded-lg bg-gray-50 text-gray-500"
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className="border-2 border-gray-300 text-gray-600 py-4 px-8 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại
        </button>
        <button
          onClick={handleNext}
          disabled={!formData.nitrogen || !formData.phosphorus || !formData.potassium || !formData.ph}
          className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 ${
            formData.nitrogen && formData.phosphorus && formData.potassium && formData.ph
              ? 'fertilizer-btn-primary shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'fertilizer-btn-disabled'
          }`}
        >
          Tiếp theo
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // Bước 3: Chọn giai đoạn phát triển
  const renderStep3 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sprout className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-primary-dark mb-2">
          Bước 3: Cây ngô của bạn đang ở giai đoạn nào?
        </h2>
        <p className="text-neutral-text">
          Chọn giai đoạn phát triển hiện tại của cây ngô
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {growthStages.map((stage) => {
          const IconComponent = stage.icon;
          const isSelected = formData.growthStage === stage.id;
          
          return (
            <div
              key={stage.id}
              onClick={() => setFormData({...formData, growthStage: stage.id})}
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                isSelected 
                  ? 'border-primary bg-primary/5' 
                  : 'border-light-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-dark mb-2">{stage.name}</h3>
                  <p className="text-sm text-neutral-text">{stage.description}</p>
                </div>
                {isSelected && (
                  <CheckCircle className="w-5 h-5 text-primary" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className="border-2 border-gray-300 text-gray-600 py-4 px-8 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại
        </button>
        <button
          onClick={handleSubmit}
          disabled={!formData.growthStage}
          className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 ${
            formData.growthStage
              ? 'fertilizer-btn-primary shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'fertilizer-btn-disabled'
          }`}
        >
          Xem kết quả
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // Bước 4: Hiển thị kết quả
  const renderResult = () => (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-primary-dark mb-2">
          Khuyến nghị phân bón cho cây ngô
        </h2>
        <p className="text-neutral-text">
          Dựa trên thông tin bạn cung cấp, đây là khuyến nghị chi tiết
        </p>
      </div>

      {/* Đề xuất tức thời */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-primary-dark mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Đề xuất Tức thời
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <span className="text-sm text-primary font-medium">Loại phân bón:</span>
            <p className="font-semibold text-primary-dark">{recommendation.immediate.fertilizer}</p>
          </div>
          <div>
            <span className="text-sm text-primary font-medium">Liều lượng:</span>
            <p className="font-semibold text-primary-dark">{recommendation.immediate.amount}</p>
          </div>
          <div>
            <span className="text-sm text-primary font-medium">Thời điểm:</span>
            <p className="font-semibold text-primary-dark">{recommendation.immediate.timing}</p>
          </div>
          <div>
            <span className="text-sm text-primary font-medium">Cách bón:</span>
            <p className="font-semibold text-primary-dark">{recommendation.immediate.method}</p>
          </div>
        </div>
      </div>

      {/* Lịch trình bón phân toàn diện */}
      <div className="bg-white border border-light-border rounded-lg overflow-hidden">
        <div className="bg-accent/10 px-6 py-4 border-b border-light-border">
          <h3 className="text-xl font-semibold text-accent">
            Lộ trình Bón phân Tham khảo từ Giai đoạn Hiện tại
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-subtle-bg">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary-dark">Giai đoạn</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary-dark">Loại phân bón gợi ý</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary-dark">Liều lượng (kg/ha)</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary-dark">Lưu ý</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light-border">
              {recommendation.schedule.map((item, index) => (
                <tr key={index} className="hover:bg-subtle-bg">
                  <td className="px-6 py-4 text-sm font-medium text-primary-dark">{item.stage}</td>
                  <td className="px-6 py-4 text-sm text-neutral-text">{item.fertilizer}</td>
                  <td className="px-6 py-4 text-sm text-neutral-text">{item.amount}</td>
                  <td className="px-6 py-4 text-sm text-neutral-text">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={resetForm}
          className="flex-1 fertilizer-btn-primary py-4 px-8 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Tư vấn lại
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 border-2 border-gray-300 text-gray-600 py-4 px-8 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm hover:shadow-md"
        >
          In kết quả
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-subtle-bg py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-dark mb-4">
            Tư vấn phân bón cho cây ngô
          </h1>
          <p className="text-lg text-neutral-text max-w-2xl mx-auto">
            Nhận khuyến nghị phân bón phù hợp dựa trên vị trí địa lý, 
            thông số đất và giai đoạn sinh trưởng của cây
          </p>
        </div>

        {/* Progress bar */}
        {currentStep <= 3 && (
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2
                    ${currentStep >= step 
                      ? 'bg-[#2A9D8F] text-white border-[#2A9D8F] shadow-lg' 
                      : 'bg-white text-gray-500 border-gray-300 shadow-sm'
                    }
                  `}>
                    {step}
                  </div>
                  <span className={`
                    ml-3 text-sm font-semibold
                    ${currentStep >= step ? 'text-[#264653]' : 'text-gray-500'}
                  `}>
                    {step === 1 ? 'Vị trí' : step === 2 ? 'Thông số' : 'Giai đoạn'}
                  </span>
                  {step < 3 && (
                    <div className={`
                      w-12 h-1 mx-4 rounded-full
                      ${currentStep > step ? 'bg-[#2A9D8F]' : 'bg-gray-300'}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Current step content */}
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderResult()}
      </div>
    </div>
  );
};

export default FertilizerPage;
