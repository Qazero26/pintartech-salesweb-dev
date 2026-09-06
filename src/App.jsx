import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PintartechHome from './pages/PintartechHome';
import TafsirbotPage from './pages/TafsirbotPage';
import PintarmathkidsPage from './pages/PintarmathkidsPage';
import MaintenancePage from './pages/MaintenancePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PintarTech Home Portal */}
        <Route path="/" element={<PintartechHome />} />

        {/* TafsirBot STAM Dedicated Page */}
        <Route path="/tafsirbotSTAM" element={<TafsirbotPage />} />

        {/* Pintar Math Kids Sales Page */}
        <Route path="/pintarmathkids" element={<PintarmathkidsPage />} />

        {/* Product & Class Maintenance Pages */}
        <Route 
          path="/pintararabickids" 
          element={<MaintenancePage title="Pintar Arabic Kids" category="Edu Game" />} 
        />
        <Route 
          path="/pintarjawikids" 
          element={<MaintenancePage title="Pintar Jawi Kids" category="Edu Game" />} 
        />
        <Route 
          path="/kelasexcel" 
          element={<MaintenancePage title="Kelas Asas Microsoft Excel" category="Kelas Latihan" />} 
        />
        <Route 
          path="/kelasappsheet" 
          element={<MaintenancePage title="Kelas AppSheet (No-Code App Dev)" category="Kelas Latihan" />} 
        />

        {/* Fallback to Home */}
        <Route path="*" element={<PintartechHome />} />
      </Routes>
    </BrowserRouter>
  );
}
