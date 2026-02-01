import React from 'react';
import styles from './Hero2026.module.css';
import CustomAlert2026 from './CustomAlert2026';
import { isFormAvailable, FORM_CONFIG } from './config';
import WormholeAnimation2026 from './WormholeAnimation2026';

interface HeroProps {
    onShowTerms: () => void;
}

const Hero2026: React.FC<HeroProps> = ({ onShowTerms }) => {
    const [showAlert, setShowAlert] = React.useState(false);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <div className={styles.logo}>
                            <span className="material-symbols-outlined" style={{ fontSize: '2.25rem' }}>architecture</span>
                        </div>
                        <p className={styles.subtitle}>
                            Semana de la Inteligencia Artificial en el arte y la ciencia
                        </p>
                        <h1 className={styles.title}>
                            SEMANA<br />DE LA IA
                        </h1>
                        <div className={styles.heroInfo}>
                            <p className={styles.convocatoria}>
                                <span>Convocatoria abierta</span>
                                <span>Ponencias académicas y experiencias</span>
                            </p>
                            <p className={styles.eventDate}>
                                Del 27 al 29 de mayo de 2026 en Manizales
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <p className={styles.description}>
                            Conoce nuestros términos de referencia y postúlate a la semana de la IA. <br />
                            <span className={styles.bold}>Próximamente apertura de formulario de inscripción.</span>
                        </p>
                        <div className={styles.buttonGroup}>
                            <button
                                onClick={onShowTerms}
                                className={`${styles.btn} ${styles.btnSecondary}`}
                            >
                                Términos de Referencia
                            </button>
                            <button
                                onClick={() => {
                                    if (isFormAvailable()) {
                                        window.open(FORM_CONFIG.formLink, '_blank');
                                    } else {
                                        setShowAlert(true);
                                    }
                                }}
                                className={`${styles.btn} ${styles.btnPrimary}`}
                            >
                                Postúlate
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${styles.imageSection} grainy-overlay`}>
                    <WormholeAnimation2026 />
                </div>
            </div>

            <CustomAlert2026
                isOpen={showAlert}
                onClose={() => setShowAlert(false)}
                message="Este formulario estará disponible el 3 de marzo."
            />
        </section>
    );
};

export default Hero2026;
