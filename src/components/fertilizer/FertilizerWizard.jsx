import { useState } from 'react';
import Step1_Location from './Step1_Location';
import Step2_SoilType from './Step2_SoilType';
import Step3_CropStage from './Step3_CropStage';
import Modal from '../shared/Modal';

const FertilizerWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    soilType: '',
    cropStage: ''
  });
  const [showResult, setShowResult] = useState(false);

  const steps = [
    { number: 1, title: 'Vị trí', component: Step1_Location },
    { number: 2, title: 'Loại đất', component: Step2_SoilType },
    { number: 3, title: 'Giai đoạn', component: Step3_CropStage }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (data) => {
    console.log('Final form data:', data);
    setShowResult(true);
  };

  const handleCloseResult = () => {
    setShowResult(false);
    setCurrentStep(1);
    setFormData({
      location: '',
      soilType: '',
      cropStage: ''
    });
  };

  // Mock fertilizer recommendation data
  const getFertilizerRecommendation = (data) => {
    const recommendations = {
      'Hà Nội': {
        'clay': {
          'germination': {
            fertilizer: 'NPK 16-16-8',
            amount: '350 kg/ha',
            method: 'Bón lót trước khi gieo',
            additional: 'Thêm 1-2 tấn phân hữu cơ'
          }
        }
      }
    };

    // Default recommendation
    return {
      fertilizer: 'NPK 20-20-15',
      amount: '450 kg/ha',
      method: 'Bón thúc đợt 1',
      additional: 'Kết hợp bón phân hữu cơ',
      timing: 'Sau gieo 15-20 ngày',
      notes: [
        'Chia bón 2-3 đợt',
        'Tưới nước sau khi bón',
        'Tránh bón khi trời mưa to',
        'Theo dõi phản ứng của cây'
      ]
    };
  };

  const currentStepData = steps[currentStep - 1];
  const CurrentComponent = currentStepData.component;

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
            loại đất và giai đoạn sinh trưởng của cây
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                  ${currentStep >= step.number 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 text-neutral-text'
                  }
                `}>
                  {step.number}
                </div>
                <span className={`
                  ml-2 text-sm font-medium
                  ${currentStep >= step.number ? 'text-primary' : 'text-neutral-text'}
                `}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`
                    w-8 h-0.5 mx-4
                    ${currentStep > step.number ? 'bg-primary' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current step component */}
        <CurrentComponent
          onNext={handleNext}
          onBack={handleBack}
          onSubmit={handleSubmit}
          data={formData}
          setData={setFormData}
        />

        {/* Result Modal */}
        <Modal
          isOpen={showResult}
          onClose={handleCloseResult}
          title="Khuyến nghị phân bón"
          size="lg"
        >
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-subtle-bg rounded-lg p-4">
              <h3 className="font-semibold text-primary-dark mb-3">Thông tin canh tác:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-neutral-text">Vị trí:</span>
                  <span className="ml-2 font-medium text-primary-dark">{formData.location}</span>
                </div>
                <div>
                  <span className="text-neutral-text">Đất:</span>
                  <span className="ml-2 font-medium text-primary-dark">
                    {formData.soilType === 'clay' ? 'Đất sét' : 
                     formData.soilType === 'loam' ? 'Đất thịt' : 
                     formData.soilType === 'sandy' ? 'Đất cát' : ''}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-text">Giai đoạn:</span>
                  <span className="ml-2 font-medium text-primary-dark">
                    {formData.cropStage === 'germination' ? 'Nảy mầm' :
                     formData.cropStage === 'seedling' ? 'Cây con' :
                     formData.cropStage === 'vegetative' ? 'Sinh trưởng sinh dưỡng' :
                     formData.cropStage === 'flowering' ? 'Trổ cờ - Phun râu' :
                     formData.cropStage === 'grain_filling' ? 'Làm hạt' :
                     formData.cropStage === 'maturity' ? 'Chín' : ''}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            {(() => {
              const recommendation = getFertilizerRecommendation(formData);
              return (
                <div className="space-y-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <h3 className="font-semibold text-primary-dark mb-3">Khuyến nghị phân bón:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-primary">Loại phân:</span>
                        <span className="ml-2 font-medium text-primary-dark">{recommendation.fertilizer}</span>
                      </div>
                      <div>
                        <span className="text-primary">Liều lượng:</span>
                        <span className="ml-2 font-medium text-primary-dark">{recommendation.amount}</span>
                      </div>
                      <div>
                        <span className="text-primary">Cách bón:</span>
                        <span className="ml-2 font-medium text-primary-dark">{recommendation.method}</span>
                      </div>
                      <div>
                        <span className="text-primary">Thời điểm:</span>
                        <span className="ml-2 font-medium text-primary-dark">{recommendation.timing}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-primary">Ghi chú thêm:</span>
                      <span className="ml-2 text-primary-dark">{recommendation.additional}</span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-medium text-accent mb-2">Lưu ý quan trọng:</h4>
                    <ul className="space-y-1">
                      {recommendation.notes.map((note, index) => (
                        <li key={index} className="flex items-start text-sm text-accent">
                          <span className="w-2 h-2 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleCloseResult}
                className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Hoàn thành
              </button>
              <button
                onClick={() => {
                  setShowResult(false);
                  setCurrentStep(1);
                  setFormData({ location: '', soilType: '', cropStage: '' });
                }}
                className="flex-1 border border-light-border text-neutral-text py-3 px-6 rounded-lg font-medium hover:bg-subtle-bg transition-colors"
              >
                Tư vấn lại
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default FertilizerWizard;
