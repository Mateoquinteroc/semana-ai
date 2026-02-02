import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Fondo from './components/Fondo/Fondo';
import styles from './App.module.css';

import PDFViewerSection from './components/PDFViewerSection/PDFViewerSection';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';
import TabNavigation from './components/TabNavigation/TabNavigation';

import Version2024 from './pages/Version2024';
import Version2025 from './pages/Version2025';
import Version2026 from './pages/Version2026';

function AppWrapper() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith('/2026') && <div className={styles.background} />}
      <div className={styles.container}>
        {!location.pathname.startsWith('/2026') && <Fondo />}

        {/* Ocultar ScrollArrow en /documento, /2024, /2026 y la raíz (que ahora es 2026) */}
        {location.pathname !== '/documento' &&
          location.pathname !== '/2024' &&
          location.pathname !== '/' &&
          !location.pathname.startsWith('/2026') && <ScrollArrow />}

        {location.pathname !== '/2026/condiciones' && <TabNavigation />}

        <Routes>
          <Route path="/" element={<Version2026 />} />
          <Route path="/2024" element={<Version2024 />} />
          <Route path="/2025" element={<Version2025 />} />
          <Route path="/2026" element={<Version2026 />} />
          <Route path="/2026/condiciones" element={<Version2026 initialView="terms" />} />
          <Route path="/documento" element={<PDFViewerSection />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
