import React, { useState, useEffect } from 'react';
import styles from './ThematicLines2026.module.css';

import { THEMATIC_AXES } from './constants';

const ThematicLines2026: React.FC = () => {
    const [externalHoverIndex, setExternalHoverIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleSpeakerHover = (e: any) => {
            setExternalHoverIndex(e.detail?.axisIndex ?? null);
        };
        window.addEventListener('speakerHover', handleSpeakerHover as EventListener);
        return () => window.removeEventListener('speakerHover', handleSpeakerHover as EventListener);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Ejes temáticos</span>
            </div>
            <div className={styles.grid}>
                {THEMATIC_AXES.map((axis, index) => (
                    <div 
                        key={index} 
                        className={`${styles.axisCard} ${externalHoverIndex === index ? styles.axisCardHovered : ''}`}
                    >
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
