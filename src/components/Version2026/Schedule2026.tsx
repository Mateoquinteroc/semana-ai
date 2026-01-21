import React from 'react';
import { SCHEDULE } from './constants';
import styles from './Schedule2026.module.css';

const Schedule2026: React.FC = () => {
    return (
        <section className={styles.section} id="agenda">
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <h2 className={styles.sidebarTitle}>Agenda<br />2026</h2>
                    <p className={styles.sidebarSub}>Mayo 19 — 22</p>
                </div>

                <div className={styles.list}>
                    {SCHEDULE.map((item, i) => (
                        <div key={i} className={styles.item}>
                            <div className={styles.timeContainer}>
                                <span className={styles.time}>{item.time}</span>
                            </div>
                            <div className={styles.itemContent}>
                                <div className={styles.itemHeader}>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                    <span className={styles.location}>{item.location}</span>
                                </div>
                                <p className={styles.itemDescription}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule2026;
