import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DiagnosisPage from './pages/DiagnosisPage';
import FertilizerPage from './pages/FertilizerPage';
import DiseaseMapPage from './pages/DiseaseMapPage';
import SuppliersPage from './pages/SuppliersPage';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chan-doan" element={<DiagnosisPage />} />
            <Route path="/tu-van-phan-bon" element={<FertilizerPage />} />
            <Route path="/ban-do-dich-benh" element={<DiseaseMapPage />} />
            <Route path="/nha-cung-cap" element={<SuppliersPage />} />
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;