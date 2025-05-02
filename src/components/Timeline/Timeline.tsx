import React from "react";
import styles from "./Timeline.module.css";
import { CalendarDays } from "lucide-react";

interface Event {
  title: string;
  date: string;
  icon?: React.ElementType;
}

const timelineEvents: Event[] = [
  { title: "Apertura de convocatoria", date: "Lunes, 5 de Mayo" },
  { title: "Fecha límite de envío de propuestas", date: "Hasta el 04 de julio" },
  { title: "Notificación de propuestas seleccionadas", date: "25 de julio" },
  { title: "Realización del encuentro", date: "11 al 15 de agosto" },
];

const Timeline: React.FC = () => {
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className={styles.timelineContainer} id="timeline">
      <div className={styles.timelineCard}>
        <h2 className={styles.timelineTitle}>Cronograma</h2>
        <div className={styles.dateLabel}>Fecha Actual: {currentDate}</div>
        <div className={styles.timelineEvents}>
          {timelineEvents.map((event, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className={styles.connector}></div>}
              <div className={styles.event}>
                <div className={styles.eventCircle}>
                  {event.icon ? <event.icon size={16} color="white" /> : <CalendarDays size={16} color="white" />}
                </div>
                <div className={styles.eventTitle}>{event.title}</div>
                <div className={styles.eventDate}>{event.date}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
