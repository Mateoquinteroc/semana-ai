import React from 'react';
import styles from './Footer2026.module.css';

const Footer2026: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.section}>
                    <h3 className={styles.brand}>SEMANA IA</h3>
                    <p className={styles.tagline}>
                        Construyendo el futuro de la inteligencia artificial desde las montañas de Colombia.
                    </p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.label}>Invitan y organizan</h4>
                    <p className={styles.organizerText}>
                        Centro Cultural del Banco de la República Manizales y el Centro de Ciencia Francisco José de Caldas de la Universidad de Caldas.
                    </p>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.label}>Navegación</h4>
                    <ul className={styles.linkList}>
                        {['Agenda', 'Exponentes', 'Ubicación', 'Registro'].map(item => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className={styles.link}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`${styles.section} ${styles.sectionDark}`}>
                    <h4 className={styles.label} style={{ color: 'rgba(255,255,255,0.4)' }}>Newsletter</h4>
                    <div className={styles.newsletter}>
                        <input
                            type="email"
                            placeholder="TU EMAIL"
                            className={styles.input}
                        />
                        <button className={`material-symbols-outlined ${styles.submitBtn}`}>arrow_forward</button>
                    </div>
                    <p className={styles.copyright}>
                        © 2026 SEMANA DE LA IA. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                </div>
            </div>

            <div className={styles.logosBanner}>
                <div className={styles.logosContainer}>
                    <span className={styles.logoPlaceholder}>Banco de la República</span>
                    <span className={styles.logoPlaceholder}>UCaldas</span>
                    <span className={styles.logoPlaceholder}>VPU</span>
                    <span className={styles.logoPlaceholder}>Centro de Ciencia</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer2026;
