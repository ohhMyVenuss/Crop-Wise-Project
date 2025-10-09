import { useState } from 'react';
import Button from '../shared/Button';

const Step2_SoilType = ({ onNext, onBack, data, setData }) => {
  const [selectedSoilType, setSelectedSoilType] = useState(data.soilType || '');

  const soilTypes = [
    {
      id: 'clay',
      name: 'Đất sét',
      description: 'Giữ nước tốt, thoát nước kém',
      characteristics: ['Giữ nước lâu', 'Khó thoát nước', 'Nhiều chất dinh dưỡng', 'Khó làm đất'],
      image: '🏺',
      color: 'from-red-400 to-red-600',
      recommendations: 'Cần bón phân hữu cơ và vôi để cải thiện cấu trúc'
    },
    {
      id: 'loam',
      name: 'Đất thịt',
      description: 'Cân bằng tốt, lý tưởng cho canh tác',
      characteristics: ['Thoát nước tốt', 'Giữ ẩm vừa phải', 'Dễ làm đất', 'Màu mỡ'],
      image: '🌱',
      color: 'from-green-400 to-green-600',
      recommendations: 'Loại đất lý tưởng, chỉ cần bón phân cân đối'
    },
    {
      id: 'sandy',
      name: 'Đất cát',
      description: 'Thoát nước nhanh, giữ ẩm kém',
      characteristics: ['Thoát nước nhanh', 'Giữ ẩm kém', 'Nghèo dinh dưỡng', 'Dễ làm đất'],
      image: '🏖️',
      color: 'from-yellow-400 to-yellow-600',
      recommendations: 'Cần bón nhiều phân hữu cơ và tưới nước thường xuyên'
    }
  ];

  const handleSoilTypeSelect = (soilType) => {
    setSelectedSoilType(soilType);
    setData({ ...data, soilType });
  };

  const handleNext = () => {
    if (selectedSoilType) {
      onNext();
    }
  };

  const selectedSoilData = soilTypes.find(soil => soil.id === selectedSoilType);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🌍</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Chọn loại đất
        </h2>
        <p className="text-gray-600">
          Loại đất quyết định khả năng giữ nước và dinh dưỡng, 
          ảnh hưởng trực tiếp đến loại phân bón cần sử dụng
        </p>
      </div>

      {/* Soil type cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {soilTypes.map((soil) => (
          <div
            key={soil.id}
            onClick={() => handleSoilTypeSelect(soil.id)}
            className={`
              relative bg-white rounded-xl shadow-sm border-2 cursor-pointer transition-all duration-300 transform hover:scale-105
              ${selectedSoilType === soil.id 
                ? 'border-green-500 shadow-lg' 
                : 'border-gray-200 hover:border-gray-300'
              }
            `}
          >
            {/* Soil color indicator */}
            <div className={`h-24 bg-gradient-to-r ${soil.color} rounded-t-xl flex items-center justify-center`}>
              <span className="text-4xl">{soil.image}</span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {soil.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {soil.description}
              </p>

              {/* Characteristics */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Đặc điểm:</h4>
                <ul className="space-y-1">
                  {soil.characteristics.map((char, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selection indicator */}
              {selectedSoilType === soil.id && (
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Selected soil type details */}
      {selectedSoilData && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${selectedSoilData.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <span className="text-2xl">{selectedSoilData.image}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {selectedSoilData.name} - {selectedSoilData.description}
              </h3>
              <p className="text-sm text-green-700">
                <strong>Khuyến nghị:</strong> {selectedSoilData.recommendations}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          ← Quay lại
        </Button>
        <Button 
          variant="primary" 
          onClick={handleNext}
          disabled={!selectedSoilType}
        >
          Tiếp theo →
        </Button>
      </div>

      {/* Help section */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <span className="text-blue-600 mr-2 mt-1">❓</span>
          <div>
            <h4 className="text-sm font-medium text-blue-900 mb-2">
              Không biết đất của mình thuộc loại nào?
            </h4>
            <div className="text-xs text-blue-700 space-y-1">
              <p><strong>Đất sét:</strong> Khi ướt dính tay, khi khô cứng và nứt nẻ</p>
              <p><strong>Đất thịt:</strong> Mềm, dễ bóp, khi khô tạo thành cục nhỏ</p>
              <p><strong>Đất cát:</strong> Thô ráp, rời rạc, không dính tay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2_SoilType;
