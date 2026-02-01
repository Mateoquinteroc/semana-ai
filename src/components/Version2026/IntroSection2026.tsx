import React from 'react';
import styles from './IntroSection2026.module.css';

const IntroSection2026: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tag}>PRESENTACIÓN</span>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Del 25 al 28 de mayo de 2026, Manizales será el punto de encuentro donde el <strong>arte</strong>, la <strong>ciencia</strong> y la <strong>inteligencia artificial</strong> dialogan, se cruzan y se transforman mutuamente. Durante la Semana de la Inteligencia Artificial en las Artes y la Ciencia, abriremos un espacio para explorar cómo estas tecnologías no solo amplían nuestras herramientas creativas y de investigación, sino que también reconfiguran la manera en que imaginamos el futuro, interpretamos el presente y nos relacionamos entre nosotros y con el mundo.
                    </p>
                    <p className={styles.text}>
                        Si desarrollas una investigación, un proyecto creativo, una experiencia educativa o simplemente sientes curiosidad por estas convergencias, te invitamos a participar: comparte tu trabajo en la convocatoria de ponencias y experiencias, o acompáñanos como asistente a las conversaciones, talleres y actividades abiertas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntroSection2026;
