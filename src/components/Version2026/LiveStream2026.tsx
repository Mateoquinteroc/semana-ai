import React from 'react';
import styles from './LiveStream2026.module.css';

const LiveStream2026: React.FC = () => {
    return (
        <section className={styles.section} id="en-vivo">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className={styles.status}>
                            <span className={styles.dot} />
                            <span className={styles.statusLabel}>En Vivo</span>
                        </div>
                        <h2 className={styles.title}>Señal de Transmisión</h2>
                        <p className={styles.description}>
                            Sigue todas las conferencias magistrales en tiempo real desde el Museo de Arte de Manizales.
                        </p>
                    </div>

                    <div style={{ paddingTop: '2rem' }}>
                        <div className={styles.remindBtn}>
                            <span className="material-symbols-outlined">play_arrow</span>
                            <span>Activar Recordatorio</span>
                        </div>
                    </div>
                </div>

                <div className={styles.videoSection}>
                    <div className={styles.placeholder}>
                        <span className={`material-symbols-outlined ${styles.placeholderIcon}`}>videocam_off</span>
                    </div>
                    <div className={styles.overlay}>
                        <p className={styles.idLabel}>ID de Transmisión: IA-2026-LIVE-001</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveStream2026;
