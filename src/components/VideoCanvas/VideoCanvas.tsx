import React from 'react';
import styles from './VideoCanvas.module.css';

interface VideoCanvasProps {
  videoUrls: string[]; // Ej: ["https://youtu.be/abcd1234", "https://www.youtube.com/watch?v=efgh5678"]
  title?: string;
}

// Función auxiliar para extraer el videoId desde la URL
function extractVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }
    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
    return null;
  } catch {
    return null;
  }
}

const VideoCanvas: React.FC<VideoCanvasProps> = ({
  videoUrls,
  title = "Nuestros videos"
}) => {
  return (
    <div className={styles.wrapper} id='live-stream'>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>
        {videoUrls.slice(0, 5).map((url, index) => {
          const id = extractVideoId(url);
          if (!id) return null;

          return (
            <div key={id} className={styles.card}>
              <div className={styles.badge}>EN VIVO</div>
              <iframe
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${id}`}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoCanvas;
