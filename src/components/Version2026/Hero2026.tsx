import React from 'react';
import styles from './Hero2026.module.css';

interface HeroProps {
    onShowTerms: () => void;
}

const Hero2026: React.FC<HeroProps> = ({ onShowTerms }) => {
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
                            <a
                                href="https://forms.gle/QidyC3dyxECYV5jr6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.btn} ${styles.btnPrimary}`}
                            >
                                Postúlate
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${styles.imageSection} grainy-overlay`}>
                    <div
                        className={styles.bgImage}
                        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDhVHWZTdW048KBmIezIIJtYQEiVm7BPJRXwQ9jKUrjyX4RaknCw3WWGdvIse5kml5enPkQ-ayH9T0s389XH6ik5sPuEsgO0lqdGj3uecgI9Bq4z8CtC85cfzhajfYqJoo3D26KbUxNuSKu63zNBtUOFbRtLRnrPkEs00mzvURZ3BkNlwZqFPDn0YTBnv6U9fxm0T-nm-IGPmRC7RUzxipxWsE2l0Sm-i4HpXDwfgAbaaq2dr80qgeO-Qpq_syGHkxm8E4lS0q8rex')` }}
                    />
                    <div className={styles.overlayTextContainer}>
                        <span className={styles.yearText}>2026</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2026;
