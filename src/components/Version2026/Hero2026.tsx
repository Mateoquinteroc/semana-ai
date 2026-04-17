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
                            Semana de la Inteligencia Artificial en las Artes y la Ciencias
                        </p>
                        <p className={styles.eventDate}>
                            Del 25 al 28 de mayo de 2026 en Manizales
                        </p>
                        <h1 className={styles.title}>
                            SEMANA<br />DE LA IA
                        </h1>
                        <div className={styles.heroInfo}>
                            <p className={styles.convocatoria}>
                                <span>Prepárate para la Tercera Edición</span>
                                <span>Un punto de encuentro entre arte, ciencia y tecnología</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <p className={styles.description}>
                            Regístrate ahora para participar en la Semana de la Inteligencia Artificial y recibir toda la información sobre la agenda y nuestros invitados <br />
                        </p>
                        <div className={styles.buttonGroup}>
                            <button
                                onClick={() => {
                                    document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${styles.btn} ${styles.btnParticipa}`}
                            >
                                PARTICIPA
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
                message="Este formulario estará disponible el 3 de febrero."
            />
        </section>
    );
};

export default Hero2026;
