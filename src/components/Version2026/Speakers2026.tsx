import React, { useState, useEffect } from 'react';
import { SPEAKERS } from './constants';
import { Speaker } from './types';
import styles from './Speakers2026.module.css';

/* ────────────────────────────────────────────────────
   SpeakerCard – individual speaker card component
   ──────────────────────────────────────────────────── */

interface SpeakerCardProps {
    speaker: Speaker;
    index: number;
    onClick: () => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index, onClick }) => {
    const handleMouseEnter = () => {
        window.dispatchEvent(new CustomEvent('speakerHover', { detail: { axisIndex: index } }));
    };

    const handleMouseLeave = () => {
        window.dispatchEvent(new CustomEvent('speakerHover', { detail: { axisIndex: null } }));
    };

    return (
        <div
            className={styles.card}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.imageContainer}>
                <img
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    className={styles.image}
                />
                <div className={styles.scanlines} />
                <div className={styles.imageOverlay} />
                <span className={styles.clickHint}>Ver perfil →</span>
            </div>

            <div className={styles.info}>
                <span className={styles.role}>{speaker.role}</span>
                <h3 className={styles.name}>{speaker.name}</h3>
                <p className={styles.bio}>{speaker.bio}</p>
            </div>
        </div>
    );
};

/* ────────────────────────────────────────────────────
   SpeakerModal – fullscreen detail view
   ──────────────────────────────────────────────────── */

interface SpeakerModalProps {
    speaker: Speaker | null;
    onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (speaker) {
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            // Trigger enter animation
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsActive(true);
                });
            });
        }

        return () => {
            document.body.style.overflow = '';
            setIsActive(false);
        };
    }, [speaker]);

    const handleClose = () => {
        setIsActive(false);
        setTimeout(onClose, 350);
    };

    if (!speaker) return null;

    return (
        <div
            className={`${styles.modalBackdrop} ${isActive ? styles.modalBackdropActive : ''}`}
            onClick={handleClose}
        >
            <div
                className={`${styles.modal} ${isActive ? styles.modalActive : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalClose}>
                    <button className={styles.closeBtn} onClick={handleClose} aria-label="Cerrar">
                        ✕
                    </button>
                </div>

                <div className={styles.modalContent}>
                    <div className={styles.modalImageContainer}>
                        <img
                            src={speaker.imageUrl}
                            alt={speaker.name}
                            className={styles.modalImage}
                        />
                    </div>

                    <div className={styles.modalInfo}>
                        <h3 className={styles.modalName}>{speaker.name}</h3>
                        <span className={styles.modalRole}>{speaker.role}</span>

                        <div className={styles.modalDivider} />

                        {speaker.conference && (
                            <div>
                                <span className={styles.modalLabel}>Conferencia</span>
                                <p className={styles.modalConference}>{speaker.conference}</p>
                            </div>
                        )}

                        {speaker.workshop && (
                            <div>
                                <span className={styles.modalLabel}>Taller</span>
                                <p className={styles.modalWorkshop}>{speaker.workshop}</p>
                            </div>
                        )}

                        <div className={styles.modalDivider} />

                        <div>
                            <span className={styles.modalLabel}>Perfil</span>
                            <p className={styles.modalProfile}>{speaker.profile}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ────────────────────────────────────────────────────
   Speakers2026 – Main section
   ──────────────────────────────────────────────────── */

const Speakers2026: React.FC = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedSpeaker(null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <section className={styles.section} id="speakers">
            <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>Conferencistas</span>
            </div>

            <div className={styles.grid}>
                {SPEAKERS.map((speaker, index) => (
                    <SpeakerCard
                        key={speaker.id}
                        speaker={speaker}
                        index={index}
                        onClick={() => setSelectedSpeaker(speaker)}
                    />
                ))}
            </div>

            <SpeakerModal
                speaker={selectedSpeaker}
                onClose={() => setSelectedSpeaker(null)}
            />
        </section>
    );
};

export default Speakers2026;
