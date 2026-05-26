import React from 'react';
import styles from './LiveStream2026.module.css';

interface LiveStreamProps {
    isLive?: boolean;
    channelId?: string;
}

const LiveStream2026: React.FC<LiveStreamProps> = ({ 
    isLive = true, 
    channelId = "UCx5H1F33N6rL6-D23H_94_g" 
}) => {
    const embedUrl = `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&mute=1`;

    return (
        <section className={styles.section} id="en-vivo">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className={styles.status}>
                            <span className={isLive ? styles.dotActive : styles.dotOffline} />
                            <span className={isLive ? styles.statusLabelLive : styles.statusLabelOffline}>
                                {isLive ? "En Vivo" : "Fuera de línea"}
                            </span>
                        </div>
                        <h2 className={styles.title}>Señal de Transmisión</h2>
                        <p className={styles.description}>
                            {isLive 
                                ? "Sigue todas las conferencias magistrales en tiempo real desde el Museo de Arte de Manizales."
                                : "La transmisión en vivo no ha comenzado o ha finalizado por el día."}
                        </p>
                    </div>

                    <div style={{ paddingTop: '2rem' }}>
                        <a 
                            href="https://www.youtube.com/@CentroDeCienciaFJC/live"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.remindBtn}
                        >
                            <span className="material-symbols-outlined">play_arrow</span>
                            <span>{isLive ? "Ver en YouTube" : "Ir al canal"}</span>
                        </a>
                    </div>
                </div>

                <div className={styles.videoSection}>
                    {isLive ? (
                        <iframe
                            className={styles.iframe}
                            src={embedUrl}
                            title="YouTube Live Stream"
                            frameBorder="0"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <>
                            <div className={styles.placeholder}>
                                <span className={`material-symbols-outlined ${styles.placeholderIcon}`}>videocam_off</span>
                            </div>
                            <div className={styles.overlay}>
                                <p className={styles.idLabel}>Transmisión programada</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LiveStream2026;
