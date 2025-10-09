import { useState } from 'react';
import ImageUploader from '../components/diagnosis/ImageUploader';
import DiagnosisResult from '../components/diagnosis/DiagnosisResult';
import Spinner from '../components/shared/Spinner';

const DiagnosisPage = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageSelect = async (file, previewUrl) => {
    setUploadedImage(file);
    setImageUrl(previewUrl);
    setStatus('loading');
    
    // Simulate API call delay
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleFindSuppliers = () => {
    // Navigate to suppliers page or open modal
    console.log('Finding suppliers...');
    // In real app, this would navigate to suppliers page with filters
  };

  const handleReportToCommunity = () => {
    // Open report modal or navigate to community page
    console.log('Reporting to community...');
    // In real app, this would open a modal to report disease location
  };

  const resetDiagnosis = () => {
    setStatus('idle');
    setUploadedImage(null);
    setImageUrl(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Chẩn đoán bệnh cho cây ngô
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chụp ảnh lá ngô bị bệnh và nhận được chẩn đoán chính xác cùng với 
            các biện pháp xử lý phù hợp
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {status === 'idle' && (
            <div>
              <ImageUploader onImageSelect={handleImageSelect} />
            </div>
          )}

          {status === 'loading' && (
            <div className="text-center py-12">
              <Spinner size="xl" color="green" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Đang phân tích ảnh...
              </h3>
              <p className="text-gray-600">
                Hệ thống AI đang xử lý và chẩn đoán bệnh cho cây ngô của bạn
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <p>• Kiểm tra triệu chứng bệnh</p>
                <p>• So sánh với cơ sở dữ liệu bệnh</p>
                <p>• Tạo khuyến nghị xử lý</p>
              </div>
            </div>
          )}

          {status === 'success' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Kết quả chẩn đoán</h2>
                <button
                  onClick={resetDiagnosis}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
              <DiagnosisResult
                imageUrl={imageUrl}
                onFindSuppliers={handleFindSuppliers}
                onReportToCommunity={handleReportToCommunity}
              />
            </div>
          )}
        </div>

        {/* How it works section */}
        {status === 'idle' && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
              Cách thức hoạt động
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📸</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Chụp ảnh</h4>
                <p className="text-sm text-gray-600">
                  Chụp ảnh lá ngô bị bệnh với chất lượng tốt
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2. AI phân tích</h4>
                <p className="text-sm text-gray-600">
                  Hệ thống AI phân tích và so sánh với cơ sở dữ liệu
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Nhận kết quả</h4>
                <p className="text-sm text-gray-600">
                  Nhận chẩn đoán và khuyến nghị xử lý chi tiết
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosisPage;
