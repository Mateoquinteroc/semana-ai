import React from 'react';
import { SPEAKERS } from './constants';
import styles from './Speakers2026.module.css';

const Speakers2026: React.FC = () => {
    return (
        <section className={styles.section} id="speakers">
            <div className={styles.header}>
                <h2 className={styles.headerTitle}>Exponentes</h2>
                <span className={styles.headerSub}>Visionarios / 0{SPEAKERS.length}</span>
            </div>

            <div className={styles.grid}>
                {SPEAKERS.map((speaker) => (
                    <div key={speaker.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                src={speaker.imageUrl}
                                alt={speaker.name}
                                className={styles.image}
                            />
                            <div className={styles.imageOverlay} />
                        </div>

                        <div className={styles.info}>
                            <span className={styles.role}>{speaker.role}</span>
                            <h3 className={styles.name}>{speaker.name}</h3>
                            <p className={styles.bio}>
                                {speaker.bio}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Speakers2026;
