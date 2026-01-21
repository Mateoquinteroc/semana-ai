import React from 'react';
import styles from './Location2026.module.css';

const Location2026: React.FC = () => {
    return (
        <section className={styles.section} id="ubicacion">
            <div className={styles.content}>
                <div className={styles.header}>
                    <span className={styles.tag}>Ubicación</span>
                    <h2 className={styles.title}>Manizales,<br />Colombia</h2>
                </div>

                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <h4 className={styles.detailLabel}>Sede Principal</h4>
                        <p className={styles.detailValue}>Multimedia Art Museum (MAM)</p>
                        <p className={styles.detailSubValue}>Carrera 23 # 51-24, Manizales</p>
                    </div>

                    <div className={`${styles.detailItem} styles.divider`}>
                        <h4 className={styles.detailLabel}>Contacto</h4>
                        <p className={styles.detailSubValue}>info@semana-ia.co</p>
                    </div>
                </div>
            </div>

            <div className={styles.mapSection}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.561331782294!2d-75.50346!3d5.06744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDQnMDIuOCJOIDc1wrAzMCcxMi40Ilc!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
                    className={styles.iframe}
                    allowFullScreen
                    loading="lazy"
                />
                <div className={styles.mapOverlay} />
            </div>
        </section>
    );
};

export default Location2026;
