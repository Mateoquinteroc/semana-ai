
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importación de todos los componentes
import Hero2026 from '../components/Version2026/Hero2026';
import ThematicLines2026 from '../components/Version2026/ThematicLines2026';
import Schedule2026 from '../components/Version2026/Schedule2026';
import Speakers2026 from '../components/Version2026/Speakers2026';
import Location2026 from '../components/Version2026/Location2026';
import Registration2026 from '../components/Version2026/Registration2026';
import LiveStream2026 from '../components/Version2026/LiveStream2026';
import Footer2026 from '../components/Version2026/Footer2026';
import AIGuide2026 from '../components/Version2026/AIGuide2026';
import TermsOfReference2026 from '../components/Version2026/TermsOfReference2026';

import styles from './Version2026.module.css';

// CONFIGURACIÓN: Cambia a 'true' para mostrar o 'false' para ocultar
const VISIBLE_COMPONENTS = {
    hero: true,
    thematicLines: true,
    schedule: false,
    speakers: false,
    location: false,
    registration: false,
    liveStream: false,
    footer: false,
    aiGuide: false
};

interface Version2026Props {
    initialView?: 'home' | 'terms';
}

const Version2026: React.FC<Version2026Props> = ({ initialView = 'home' }) => {
    const navigate = useNavigate();
    const [view, setView] = useState<'home' | 'terms'>(initialView);

    const handleShowTerms = () => {
        setView('terms');
        navigate('/2026/terminos');
    };

    const handleBack = () => {
        setView('home');
        navigate('/2026');
    };

    if (view === 'terms') {
        return <TermsOfReference2026 onBack={handleBack} />;
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {VISIBLE_COMPONENTS.hero && <Hero2026 onShowTerms={handleShowTerms} />}
                {VISIBLE_COMPONENTS.thematicLines && <ThematicLines2026 />}
                {VISIBLE_COMPONENTS.schedule && <Schedule2026 />}
                {VISIBLE_COMPONENTS.speakers && <Speakers2026 />}
                {VISIBLE_COMPONENTS.location && <Location2026 />}
                {VISIBLE_COMPONENTS.registration && <Registration2026 />}
                {VISIBLE_COMPONENTS.liveStream && <LiveStream2026 />}
                {VISIBLE_COMPONENTS.footer && <Footer2026 />}
            </main>
            {VISIBLE_COMPONENTS.aiGuide && <AIGuide2026 />}
        </div>
    );
};

export default Version2026;
