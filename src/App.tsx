import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Fondo from './components/Fondo/Fondo';
import styles from './App.module.css';

import HeroTextSection from './components/HeroTextSection/HeroTextSection';
import PDFViewerSection from './components/PDFViewerSection/PDFViewerSection';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';
import SecondChange from './components/SecondChange/SecondChange';

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
                <SecondChange />
              </>
            }
          />
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
