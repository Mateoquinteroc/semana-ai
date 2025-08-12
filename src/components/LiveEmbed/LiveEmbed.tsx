import React, { useEffect, useState } from 'react';
import styles from './LiveEmbed.module.css';

interface LiveEmbedProps {
  channelId: string; // UCxxxxx
  title?: string;
  channelUrl?: string; // Link al canal para el botón
}

const LiveEmbed: React.FC<LiveEmbedProps> = ({
  channelId,
  title = "Transmisión en vivo",
  channelUrl = "https://www.youtube.com"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Bogota",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      };
      const [hourStr, minuteStr] = new Intl.DateTimeFormat("en-GB", options)
        .format(now)
        .split(":");

      const hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);

      const currentMinutes = hour * 60 + minute;
      const startMinutes = 8 * 60 + 30;
      const endMinutes = 12 * 60;

      setIsVisible(currentMinutes >= startMinutes && currentMinutes <= endMinutes);
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.offline}>
          <p>La transmisión en vivo terminó por hoy.</p>
          <p>Visítanos en nuestro canal para más contenido.</p>
          <a href={channelUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
            🔗 Ir al canal
          </a>
        </div>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&mute=1`;

  return (
    <div className={styles.wrapper} id='live-stream'>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        <div className={styles.badge}>EN VIVO</div>
        <iframe
          className={styles.iframe}
          src={embedUrl}
          title="YouTube Live Stream"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LiveEmbed;
