import React from 'react';
import styles from './InfoSection2026.module.css';

const InfoSection2026: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <div className={styles.item}>
                    <span className={styles.tag}>01 / Concepto</span>
                    <h2 className={styles.title}>
                        El Fantasma en la Máquina
                    </h2>
                    <p className={styles.description}>
                        Exploramos la intersección entre la conciencia humana y los procesos generativos. En 2026, la IA no es solo una herramienta, sino un espejo de nuestras propias capacidades creativas.
                    </p>
                </div>

                <div className={`${styles.item} styles.itemDark`}>
                    <span className={styles.tag}>02 / Manizales</span>
                    <h2 className={styles.title}>
                        Epicentro Tecnológico
                    </h2>
                    <p className={styles.description}>
                        La ciudad se transforma en un laboratorio vivo donde artistas, ingenieros y filósofos convergen para definir el futuro de la inteligencia artificial en Colombia.
                    </p>
                </div>

                <div className={`${styles.item} styles.itemLast`}>
                    <div>
                        <span className={styles.tag}>03 / Experiencia</span>
                        <p className={styles.description} style={{ marginTop: '2rem' }}>
                            Tres días de inmersión total: talleres de prompt engineering, exposiciones de arte generativo y debates sobre ética algorítmica.
                        </p>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.line}></div>
                        <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>settings_input_component</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection2026;
