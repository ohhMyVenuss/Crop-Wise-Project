import { useState, useEffect } from 'react';
import { 
  Cloud, Sun, CloudRain, Droplets, Thermometer, Eye, Wind, 
  ChevronDown, ChevronRight, Gauge, Sun as SunIcon, 
  CloudSnow, Zap, Shield, Sunrise, Sunset, MapPin
} from 'lucide-react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate comprehensive weather data for Da Nang
    const mockWeatherData = {
      location: 'Đà Nẵng',
      date: 'Hôm nay 28 Tháng 9',
      sunrise: '06:19',
      sunset: '18:32',
      current: {
        temperature: 28,
        description: 'Nắng ít mây',
        icon: 'sun',
        feelsLike: 30,
        humidity: 82,
        windSpeed: 8,
        precipitation: 1.4,
        uvIndex: 4,
        rainChance: 42,
        visibility: 10
      },
      hourly: [
        { time: 'Hiện tại', temp: 28, icon: 'sun', rain: 23 },
        { time: '11:00', temp: 29, icon: 'sun', rain: 15 },
        { time: '12:00', temp: 30, icon: 'sun', rain: 20 },
        { time: '13:00', temp: 31, icon: 'sun', rain: 25 },
        { time: '14:00', temp: 30, icon: 'cloud', rain: 35 },
        { time: '15:00', temp: 29, icon: 'cloud', rain: 45 },
        { time: '16:00', temp: 28, icon: 'cloud', rain: 55 },
        { time: '17:00', temp: 27, icon: 'rain', rain: 65 }
      ]
    };

    // Simulate API call delay
    setTimeout(() => {
      setWeather(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, []);

  const getWeatherIcon = (iconType, size = 'w-6 h-6') => {
    switch (iconType) {
      case 'sun':
        return <Sun className={`${size} text-yellow-500`} />;
      case 'cloud':
        return <Cloud className={`${size} text-gray-500`} />;
      case 'rain':
        return <CloudRain className={`${size} text-blue-500`} />;
      case 'snow':
        return <CloudSnow className={`${size} text-blue-300`} />;
      default:
        return <Sun className={`${size} text-yellow-500`} />;
    }
  };

  const getHumidityStatus = (humidity) => {
    if (humidity < 40) return { text: 'Tốt', color: 'text-green-600' };
    if (humidity < 70) return { text: 'Bình thường', color: 'text-yellow-600' };
    return { text: 'Cao', color: 'text-red-600' };
  };

  const getUVStatus = (uv) => {
    if (uv <= 2) return { text: 'Thấp', color: 'text-green-600' };
    if (uv <= 5) return { text: 'Trung bình', color: 'text-yellow-600' };
    if (uv <= 7) return { text: 'Cao', color: 'text-orange-600' };
    if (uv <= 10) return { text: 'Rất cao', color: 'text-red-600' };
    return { text: 'Cực cao', color: 'text-purple-600' };
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-light-border w-full">
        <div className="animate-pulse p-6">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-light-border w-full p-6">
        <p className="text-red-500">Không thể tải dữ liệu thời tiết</p>
      </div>
    );
  }

  const humidityStatus = getHumidityStatus(weather.current.humidity);
  const uvStatus = getUVStatus(weather.current.uvIndex);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-light-border w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar bên trái */}
        <div className="lg:w-1/3 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
          {/* Header với điều khiển */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-neutral-text rounded-full"></div>
                <div className="w-1 h-1 bg-neutral-text rounded-full"></div>
                <div className="w-1 h-1 bg-neutral-text rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-1">
              <span className="text-sm text-neutral-text">°C</span>
              <div className="w-8 h-4 bg-primary rounded-full relative">
                <div className="absolute right-1 top-0.5 w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-sm text-neutral-text">°F</span>
            </div>
          </div>

          {/* Thông tin vị trí và ngày */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-lg font-semibold text-primary-dark">{weather.location}</span>
            </div>
            <div className="text-sm text-neutral-text mb-4">{weather.date}</div>
            <div className="flex items-center space-x-4 text-sm text-neutral-text">
              <div className="flex items-center space-x-1">
                <Sunrise className="w-4 h-4 text-green-500" />
                <span>{weather.sunrise}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Sunset className="w-4 h-4 text-green-600" />
                <span>{weather.sunset}</span>
              </div>
            </div>
          </div>

          {/* Nhiệt độ và trạng thái chính */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <button className="text-neutral-text hover:text-primary transition-colors">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <div className="text-6xl font-bold text-primary-dark">{weather.current.temperature}°</div>
              <button className="text-neutral-text hover:text-primary transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-2">
              {getWeatherIcon(weather.current.icon, 'w-8 h-8')}
              <span className="text-lg font-medium text-primary-dark">{weather.current.description}</span>
            </div>
          </div>

          {/* Hình ảnh minh họa */}
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full flex items-center justify-center">
              <Sun className="w-16 h-16 text-green-500" />
            </div>
          </div>
        </div>

        {/* Nội dung chính bên phải */}
        <div className="lg:w-2/3 p-8">
          {/* Header với welcome message */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-dark">Chào mừng trở lại!</h3>
              <p className="text-sm text-neutral-text">Kiểm tra thông tin thời tiết hôm nay</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
            </div>
          </div>

          {/* Dự báo theo giờ */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-primary-dark">Dự báo theo giờ</h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-neutral-text">Lượng mưa</span>
                  <ChevronDown className="w-4 h-4 text-neutral-text" />
                </div>
                <button className="flex items-center space-x-1 text-sm text-primary hover:text-primary-dark">
                  <span>Những ngày tới</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Biểu đồ nhiệt độ */}
            <div className="mb-4">
              <div className="flex items-end space-x-2 h-20">
                {weather.hourly.map((hour, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-primary/20 to-primary/40 rounded-t"
                      style={{ height: `${(hour.temp / 35) * 60}px` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thông tin giờ */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {weather.hourly.map((hour, index) => (
                <div key={index} className="flex-shrink-0 text-center min-w-[60px]">
                  <div className="text-xs text-neutral-text mb-2">{hour.time}</div>
                  <div className="flex justify-center mb-2">
                    {getWeatherIcon(hour.icon, 'w-5 h-5')}
                  </div>
                  <div className="text-sm font-semibold text-primary-dark">{hour.temp}°</div>
                </div>
              ))}
            </div>

            {/* Biểu đồ lượng mưa */}
            <div className="mt-4">
              <div className="flex items-end space-x-1 h-16">
                {weather.hourly.map((hour, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-green-200 rounded-t"
                      style={{ height: `${(hour.rain / 100) * 60}px` }}
                    ></div>
                    <div className="text-xs text-neutral-text mt-1">{hour.rain}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chi tiết thời tiết */}
          <div>
            <h4 className="text-lg font-semibold text-primary-dark mb-4">Chi tiết thời tiết hôm nay</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Độ ẩm */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-primary-dark">Độ ẩm</span>
                  </div>
                  <span className="text-lg font-bold text-primary-dark">{weather.current.humidity}%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-text">
                    <span>Tốt</span>
                    <span>Bình thường</span>
                    <span>Cao</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${weather.current.humidity}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-neutral-text">
                    {weather.current.humidity}% ({humidityStatus.text})
                  </div>
                </div>
              </div>

              {/* Gió */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Wind className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-primary-dark">Gió</span>
                  </div>
                  <span className="text-lg font-bold text-primary-dark">{weather.current.windSpeed} km/h</span>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute inset-2 border-4 border-green-500 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs font-bold text-primary-dark">{weather.current.windSpeed}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lượng mưa */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <CloudRain className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-primary-dark">Lượng mưa</span>
                  </div>
                  <span className="text-lg font-bold text-primary-dark">{weather.current.precipitation} cm</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-text">
                    <span>0</span>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40</span>
                    <span>50</span>
                    <span>60</span>
                    <span>70</span>
                    <span>80</span>
                    <span>90</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(weather.current.precipitation / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Chỉ số UV */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <SunIcon className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-primary-dark">Chỉ số UV</span>
                  </div>
                  <span className="text-lg font-bold text-primary-dark">{weather.current.uvIndex}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-text">
                    <span>0-2</span>
                    <span>3-5</span>
                    <span>6-7</span>
                    <span>8-10</span>
                    <span>11+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(weather.current.uvIndex / 11) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-neutral-text">
                    {weather.current.uvIndex} ({uvStatus.text})
                  </div>
                </div>
              </div>

              {/* Cảm giác như */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-primary-dark">Cảm giác như</span>
                  </div>
                  <span className="text-lg font-bold text-primary-dark">{weather.current.feelsLike}°C</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-text">
                    <span>0°C</span>
                    <span>25°C</span>
                    <span>50°C</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(weather.current.feelsLike / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Khả năng mưa */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <CloudRain className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-primary-dark">Khả năng mưa</span>
                  </div>
                  <span className="text-lg font-bold text-primary-dark">{weather.current.rainChance}%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-text">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${weather.current.rainChance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trạng thái nông nghiệp */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-primary-dark">Trạng thái nông nghiệp</span>
                </div>
                <span className="text-sm font-semibold text-green-600">Tốt cho canh tác</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;