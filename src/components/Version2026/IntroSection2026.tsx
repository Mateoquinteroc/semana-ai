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
                        Del 25 al 28 de mayo de 2026, Manizales será el punto de encuentro donde el arte, la ciencia y la inteligencia artificial dialogan, se cruzan y se transforman mutuamente. Durante la Semana de la Inteligencia Artificial en el Arte y la Ciencia, organizada por el Centro Cultural del Banco de la República en Manizales y el Centro de Ciencia Francisco José de Caldas, abriremos un espacio para reflexionar y experimentar alrededor de los desafíos y posibilidades que estas tecnologías plantean. Exploraremos cómo la inteligencia artificial no solo impulsa nuevas formas de creación y conocimiento, sino que también nos invita a pensar en los dilemas éticos que emergen —como la responsabilidad en la toma de decisiones algorítmicas, la privacidad, la autoría o los sesgos—, así como en las profundas transformaciones sociales que genera en nuestras maneras de trabajar, aprender, relacionarnos y participar en la vida pública. De igual modo, abordaremos los impactos ambientales asociados al desarrollo y uso de estas tecnologías, desde el consumo energético hasta la extracción de recursos, para imaginar juntos caminos más sostenibles, conscientes y responsables.
                    </p>
                    <p className={styles.text}>
                        Si desarrollas una investigación o una experiencia en la que se aborden estos temas o que se relacionen con la inteligencia artificial desde las artes y la ciencia, te invitamos a participar en esta convocatoria.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntroSection2026;
