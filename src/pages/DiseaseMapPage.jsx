import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dữ liệu giả cho các ca bệnh
const reportedOutbreaks = [
  { id: 1, position: [10.7769, 106.7009], disease: 'Bệnh Đốm Lá Lớn', severity: 'Cao' },
  { id: 2, position: [10.775, 106.702], disease: 'Bệnh Đốm Lá Lớn', severity: 'Trung bình' },
  { id: 3, position: [10.78, 106.705], disease: 'Bệnh Gỉ Sắt', severity: 'Cao' },
  { id: 4, position: [10.772, 106.698], disease: 'Bệnh Thối Rễ', severity: 'Thấp' },
  { id: 5, position: [10.785, 106.710], disease: 'Bệnh Đốm Lá Lớn', severity: 'Cao' },
];

// Tạo icon tùy chỉnh cho markers
const createCustomIcon = (color) => new Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
      <path fill="${color}" stroke="#fff" stroke-width="2" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0z"/>
      <circle fill="#fff" cx="12.5" cy="12.5" r="6"/>
    </svg>
  `)}`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Component cho vùng dự báo AI
const PredictionLayer = () => {
  // Tạo vùng dự báo dạng polygon bao quanh các điểm bệnh
  const predictionZone = [
    [10.770, 106.695], // Điểm góc dưới trái
    [10.790, 106.695], // Điểm góc dưới phải
    [10.790, 106.715], // Điểm góc trên phải
    [10.770, 106.715], // Điểm góc trên trái
    [10.770, 106.695]  // Đóng polygon
  ];

  return (
    <Polygon
      positions={predictionZone}
      pathOptions={{
        color: '#ff6b35',
        fillColor: '#ff6b35',
        fillOpacity: 0.3,
        weight: 2,
        dashArray: '5, 5'
      }}
    />
  );
};

// Component cho Legend
const MapLegend = () => (
  <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-[1000] max-w-xs">
    <h3 className="font-semibold text-gray-800 mb-3">Chú giải</h3>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        <span className="text-sm text-gray-700">Ca bệnh đã xác nhận</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        <span className="text-sm text-gray-700">Vùng AI dự báo lây lan</span>
      </div>
      <div className="mt-3 pt-2 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          Dự báo dựa trên mô hình AI, dữ liệu thời tiết và mô hình lây lan
        </p>
      </div>
    </div>
  </div>
);

// Component chính
const DiseaseMapPage = () => {
  const [showPrediction, setShowPrediction] = useState(false);
  
  // Tọa độ trung tâm (TP.HCM)
  const center = [10.7769, 106.7009];
  const zoom = 13;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bản đồ Dịch bệnh</h1>
              <p className="text-gray-600 mt-1">Theo dõi và dự báo lây lan dịch bệnh cây trồng</p>
            </div>
            
            {/* Toggle Button */}
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPrediction}
                  onChange={(e) => setShowPrediction(e.target.checked)}
                  className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Hiển thị Vùng Dự báo AI
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-[calc(100vh-120px)]">
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Render các điểm bệnh */}
          {reportedOutbreaks.map((outbreak) => (
            <Marker
              key={outbreak.id}
              position={outbreak.position}
              icon={createCustomIcon('#ef4444')}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold text-gray-800">{outbreak.disease}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Mức độ: <span className={`font-medium ${
                      outbreak.severity === 'Cao' ? 'text-red-600' :
                      outbreak.severity === 'Trung bình' ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {outbreak.severity}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Tọa độ: {outbreak.position[0].toFixed(4)}, {outbreak.position[1].toFixed(4)}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
          
          {/* Hiển thị vùng dự báo khi được bật */}
          {showPrediction && <PredictionLayer />}
        </MapContainer>
        
        {/* Legend */}
        <MapLegend />
        
        {/* Thông tin thống kê */}
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg z-[1000]">
          <h3 className="font-semibold text-gray-800 mb-2">Thống kê</h3>
          <div className="space-y-1 text-sm">
            <p className="text-gray-600">
              Tổng ca bệnh: <span className="font-medium text-red-600">{reportedOutbreaks.length}</span>
            </p>
            <p className="text-gray-600">
              Đang theo dõi: <span className="font-medium text-orange-600">
                {reportedOutbreaks.filter(o => o.severity === 'Cao').length} ca nghiêm trọng
              </span>
            </p>
            {showPrediction && (
              <p className="text-gray-600">
                Vùng nguy cơ: <span className="font-medium text-orange-600">Đang hoạt động</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseMapPage;