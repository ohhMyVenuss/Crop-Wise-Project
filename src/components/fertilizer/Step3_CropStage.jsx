import { useState } from 'react';
import Button from '../shared/Button';

const Step3_CropStage = ({ onNext, onBack, data, setData, onSubmit }) => {
  const [selectedStage, setSelectedStage] = useState(data.cropStage || '');

  const cropStages = [
    {
      id: 'germination',
      name: 'Nảy mầm',
      period: '1-2 tuần sau gieo',
      description: 'Hạt nảy mầm và ra lá mầm',
      image: '🌱',
      color: 'from-green-300 to-green-500',
      fertilizer: 'Phân lót (NPK 16-16-8)',
      amount: '300-400 kg/ha'
    },
    {
      id: 'seedling',
      name: 'Cây con',
      period: '2-4 tuần sau gieo',
      description: 'Phát triển lá và thân',
      image: '🌿',
      color: 'from-green-400 to-green-600',
      fertilizer: 'Phân thúc đợt 1 (NPK 20-20-15)',
      amount: '400-500 kg/ha'
    },
    {
      id: 'vegetative',
      name: 'Sinh trưởng sinh dưỡng',
      period: '4-8 tuần sau gieo',
      description: 'Phát triển mạnh lá và thân',
      image: '🌾',
      color: 'from-green-500 to-green-700',
      fertilizer: 'Phân thúc đợt 2 (NPK 18-12-8)',
      amount: '500-600 kg/ha'
    },
    {
      id: 'flowering',
      name: 'Trổ cờ - Phun râu',
      period: '8-10 tuần sau gieo',
      description: 'Hình thành hoa và thụ phấn',
      image: '🌸',
      color: 'from-yellow-400 to-yellow-600',
      fertilizer: 'Phân thúc đợt 3 (NPK 16-8-16)',
      amount: '400-500 kg/ha'
    },
    {
      id: 'grain_filling',
      name: 'Làm hạt',
      period: '10-14 tuần sau gieo',
      description: 'Hình thành và phát triển hạt',
      image: '🌽',
      color: 'from-yellow-500 to-orange-500',
      fertilizer: 'Phân thúc đợt 4 (NPK 12-6-20)',
      amount: '300-400 kg/ha'
    },
    {
      id: 'maturity',
      name: 'Chín',
      period: '14-16 tuần sau gieo',
      description: 'Hạt chín và sẵn sàng thu hoạch',
      image: '🌾',
      color: 'from-orange-500 to-red-500',
      fertilizer: 'Không bón phân',
      amount: '0 kg/ha'
    }
  ];

  const handleStageSelect = (stage) => {
    setSelectedStage(stage);
    setData({ ...data, cropStage: stage });
  };

  const handleSubmit = () => {
    onSubmit(data);
  };

  const selectedStageData = cropStages.find(stage => stage.id === selectedStage);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🌱</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Chọn giai đoạn sinh trưởng
        </h2>
        <p className="text-gray-600">
          Mỗi giai đoạn cần loại phân bón và liều lượng khác nhau 
          để đảm bảo cây ngô phát triển tối ưu
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">Vị trí</span>
          </div>
          <div className="w-8 h-0.5 bg-green-500"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">Đất</span>
          </div>
          <div className="w-8 h-0.5 bg-green-500"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">Giai đoạn</span>
          </div>
        </div>
      </div>

      {/* Crop stage cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cropStages.map((stage) => (
          <div
            key={stage.id}
            onClick={() => handleStageSelect(stage.id)}
            className={`
              relative bg-white rounded-xl shadow-sm border-2 cursor-pointer transition-all duration-300 transform hover:scale-105
              ${selectedStage === stage.id 
                ? 'border-green-500 shadow-lg' 
                : 'border-gray-200 hover:border-gray-300'
              }
            `}
          >
            {/* Stage color indicator */}
            <div className={`h-20 bg-gradient-to-r ${stage.color} rounded-t-xl flex items-center justify-center`}>
              <span className="text-3xl">{stage.image}</span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {stage.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                {stage.period}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {stage.description}
              </p>

              {/* Fertilizer info */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Phân bón khuyến nghị:</div>
                <div className="text-sm font-medium text-gray-900">{stage.fertilizer}</div>
                <div className="text-xs text-green-600 font-medium">{stage.amount}</div>
              </div>

              {/* Selection indicator */}
              {selectedStage === stage.id && (
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

      {/* Selected stage details */}
      {selectedStageData && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${selectedStageData.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <span className="text-2xl">{selectedStageData.image}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {selectedStageData.name} - {selectedStageData.period}
              </h3>
              <p className="text-sm text-green-700 mb-3">
                {selectedStageData.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-green-600 font-medium mb-1">Phân bón:</div>
                  <div className="text-sm text-green-800">{selectedStageData.fertilizer}</div>
                </div>
                <div>
                  <div className="text-xs text-green-600 font-medium mb-1">Liều lượng:</div>
                  <div className="text-sm text-green-800">{selectedStageData.amount}</div>
                </div>
              </div>
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
          onClick={handleSubmit}
          disabled={!selectedStage}
          size="lg"
        >
          <span className="mr-2">📋</span>
          Xem khuyến nghị chi tiết
        </Button>
      </div>

      {/* Help section */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <span className="text-blue-600 mr-2 mt-1">💡</span>
          <div>
            <h4 className="text-sm font-medium text-blue-900 mb-2">
              Lưu ý về giai đoạn sinh trưởng:
            </h4>
            <div className="text-xs text-blue-700 space-y-1">
              <p>• Thời gian có thể thay đổi tùy theo giống và điều kiện thời tiết</p>
              <p>• Quan sát hình thái cây để xác định chính xác giai đoạn</p>
              <p>• Bón phân đúng thời điểm để tối ưu hiệu quả</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3_CropStage;
