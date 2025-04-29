import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Fondo from './components/Fondo/Fondo';
import styles from './App.module.css';

import HeroTextSection from './components/HeroTextSection/HeroTextSection';
import ThematicLinesSection from './components/ThematicLinesSection/ThematicLinesSection';
import PDFViewerSection from './components/PDFViewerSection/PDFViewerSection';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';
import Timeline from './components/Timeline/Timeline';

function AppWrapper() {
  const location = useLocation();

  return (
    <>
      <div className={styles.background} />
      <div className={styles.container}>
        <Fondo />

        {/* Ocultar ScrollArrow en /documento */}
        {location.pathname !== '/documento' && <ScrollArrow />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroTextSection />
                <ThematicLinesSection />
              </>
            }
          />
          <Route path="/documento" element={<PDFViewerSection />} />
        </Routes>
        <Timeline/>
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
