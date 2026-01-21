
import React from 'react';
import styles from './ThematicLines2026.module.css';

const THEMATIC_AXES = [
    {
        number: "01",
        title: "I.A y creación artística",
        icon: "palette",
        questions: [
            "¿Para qué sirve la IA en el acto creativo?",
            "¿Puede la máquina tener sensibilidad estética?",
            "¿Qué significa 'crear' en un contexto donde la IA genera imágenes, música o textos?"
        ]
    },
    {
        number: "02",
        title: "I.A trabajo y transformación social",
        icon: "engineering",
        questions: [
            "¿Reemplazará la IA el empleo en las industrias creativas y científicas?",
            "¿Qué nuevos roles emergen con la IA como herramienta?"
        ]
    },
    {
        number: "03",
        title: "Formación de públicos y ética",
        icon: "balance",
        questions: [
            "¿Cómo formar públicos respecto a las creaciones de I.A.?",
            "¿Cómo distinguir entre lo humano y lo artificial en la producción cultural?",
            "¿Qué desafíos éticos plantea la IA en la creación y difusión de contenidos?"
        ]
    },
    {
        number: "04",
        title: "I.A y cultura ambiental",
        icon: "eco",
        questions: [
            "¿Qué desafíos plantea la I.A. para el cambio climático?",
            "¿Qué acciones de mitigación de este impacto se pueden desarrollar?"
        ]
    }
];

const ThematicLines2026: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {THEMATIC_AXES.map((axis, index) => (
                    <div key={index} className={styles.axisCard}>
                        <div className={styles.text}>
                            <div className={styles.header}>
                                <span className={styles.label}>
                                    AXIS_{axis.number}
                                </span>
                                <span className={`material-symbols-outlined ${styles.icon}`}>
                                    {axis.icon}
                                </span>
                            </div>
                            <h3 className={styles.title}>
                                {axis.title}
                            </h3>

                            <div className={styles.questionsWrapper}>
                                <ul className={styles.questionsList}>
                                    {axis.questions.map((q, i) => (
                                        <li key={i} className={styles.questionItem}>
                                            <span className={styles.bullet}>•</span>
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <span className={styles.footerLabel}>
                                Thematic Track 2026
                            </span>
                        </div>

                        <div className={styles.bgAccent}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ThematicLines2026;
