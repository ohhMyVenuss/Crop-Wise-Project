import Button from '../shared/Button';

const DiagnosisResult = ({ imageUrl, result, onFindSuppliers, onReportToCommunity }) => {
  // Mock data cho kết quả chẩn đoán
  const mockResult = {
    diseaseName: 'Bệnh Đốm Lá Lớn',
    confidence: 97,
    description: 'Bệnh do nấm Helminthosporium turcicum gây ra, thường xuất hiện vào cuối vụ khi độ ẩm cao.',
    symptoms: [
      'Các đốm hình thoi màu nâu trên lá',
      'Đốm lan rộng và liên kết với nhau',
      'Lá chuyển màu vàng và khô héo',
      'Giảm năng suất nghiêm trọng'
    ],
    recommendations: {
      biological: [
        'Sử dụng chế phẩm sinh học Trichoderma',
        'Tăng cường bón phân hữu cơ',
        'Luân canh cây trồng'
      ],
      chemical: [
        'Phun thuốc trừ nấm Propiconazole 25EC',
        'Sử dụng Mancozeb 80WP',
        'Kết hợp với thuốc gốc đồng'
      ]
    },
    severity: 'Cao',
    affectedArea: '15-20% diện tích lá'
  };

  const actualResult = result || mockResult;

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Cao': return 'text-red-600 bg-red-100';
      case 'Trung bình': return 'text-yellow-600 bg-yellow-100';
      case 'Thấp': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header với ảnh và kết quả chính */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Ảnh */}
          <div className="flex-shrink-0">
            <img 
              src={imageUrl} 
              alt="Ảnh chẩn đoán" 
              className="w-full max-w-sm h-64 object-cover rounded-lg shadow-sm"
            />
          </div>
          
          {/* Kết quả chính */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {actualResult.diseaseName}
              </h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(actualResult.severity)}`}>
                {actualResult.severity}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-gray-600">Độ chính xác:</span>
                  <span className="text-lg font-bold text-green-600">{actualResult.confidence}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${actualResult.confidence}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {actualResult.description}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Diện tích bị ảnh hưởng: <strong>{actualResult.affectedArea}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Triệu chứng */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
            🔍
          </span>
          Triệu chứng quan sát
        </h3>
        <ul className="space-y-2">
          {actualResult.symptoms.map((symptom, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{symptom}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Khuyến nghị */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Biện pháp sinh học */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
              🌱
            </span>
            Biện pháp sinh học
          </h3>
          <ul className="space-y-2">
            {actualResult.recommendations.biological.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Biện pháp hóa học */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              🧪
            </span>
            Biện pháp hóa học
          </h3>
          <ul className="space-y-2">
            {actualResult.recommendations.chemical.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="primary" 
          size="lg" 
          className="flex-1"
          onClick={onFindSuppliers}
        >
          <span className="mr-2">🏪</span>
          Tìm cửa hàng vật tư
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1"
          onClick={onReportToCommunity}
        >
          <span className="mr-2">⚠️</span>
          Cảnh báo cho cộng đồng
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <span className="text-yellow-600 text-lg">⚠️</span>
          <div>
            <h4 className="text-sm font-medium text-yellow-800 mb-1">Lưu ý quan trọng:</h4>
            <p className="text-xs text-yellow-700">
              Kết quả chẩn đoán này chỉ mang tính chất tham khảo. Để có chẩn đoán chính xác nhất, 
              vui lòng liên hệ với chuyên gia nông nghiệp hoặc cơ quan bảo vệ thực vật địa phương.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResult;
