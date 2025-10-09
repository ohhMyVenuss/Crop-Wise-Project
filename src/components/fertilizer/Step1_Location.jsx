import { useState } from 'react';
import Button from '../shared/Button';

const Step1_Location = ({ onNext, data, setData }) => {
  const [selectedLocation, setSelectedLocation] = useState(data.location || '');

  const provinces = [
    'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ',
    'An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu',
    'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước',
    'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đắk Lắk', 'Đắk Nông',
    'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang',
    'Hà Nam', 'Hà Tĩnh', 'Hải Dương', 'Hậu Giang', 'Hòa Bình',
    'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu',
    'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định',
    'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên',
    'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị',
    'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên',
    'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang',
    'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setData({ ...data, location });
  };

  const handleNext = () => {
    if (selectedLocation) {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📍</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Chọn vị trí canh tác
        </h2>
        <p className="text-gray-600">
          Vị trí địa lý ảnh hưởng đến loại đất và khí hậu, từ đó quyết định 
          loại phân bón phù hợp
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Tỉnh/Thành phố canh tác:
          </label>
          
          {/* Search input */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Tìm kiếm tỉnh/thành phố..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              onChange={(e) => {
                const filtered = provinces.filter(province => 
                  province.toLowerCase().includes(e.target.value.toLowerCase())
                );
                // In real app, you would filter the list
              }}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Province grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
            {provinces.map((province) => (
              <button
                key={province}
                onClick={() => handleLocationSelect(province)}
                className={`p-3 text-sm rounded-lg border transition-all duration-200 ${
                  selectedLocation === province
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {province}
              </button>
            ))}
          </div>
        </div>

        {/* Selected location display */}
        {selectedLocation && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-green-800 font-medium">
                Đã chọn: {selectedLocation}
              </span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-end">
          <Button 
            variant="primary" 
            onClick={handleNext}
            disabled={!selectedLocation}
          >
            Tiếp theo →
          </Button>
        </div>
      </div>

      {/* Info box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <span className="text-blue-600 mr-2 mt-1">💡</span>
          <div>
            <h4 className="text-sm font-medium text-blue-900 mb-1">
              Tại sao cần chọn vị trí?
            </h4>
            <p className="text-xs text-blue-700">
              Mỗi vùng miền có điều kiện khí hậu, thổ nhưỡng khác nhau. 
              Việc chọn đúng vị trí giúp hệ thống đưa ra khuyến nghị phân bón chính xác nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1_Location;
