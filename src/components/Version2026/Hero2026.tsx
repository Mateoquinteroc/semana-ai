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
                            Arte y Ciencia
                        </p>
                        <h1 className={styles.title}>
                            SEMANA<br />DE LA IA
                        </h1>
                    </div>
                    <div className={styles.bottomContent}>
                        <p className={styles.description}>
                            Conoce nuestros términos de referencia y postúlate a la semana de la IA. <br />
                            <span className={styles.bold}>2 de febrero apertura de convocatoria.</span>
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
                message="Este formulario estará disponible el 2 de febrero."
            />
        </section>
    );
};

export default Hero2026;
