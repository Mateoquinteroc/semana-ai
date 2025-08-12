import React from "react";
import styles from "./EventCategories.module.css";
import { BrainCircuit, CalendarDays, Mic2, MapPin, Radio } from "lucide-react";

interface Category {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  targetId: string;
}

const categories: Category[] = [
  {
    title: "Acerca de",
    description: "Obtén más información...",
    icon: BrainCircuit,
    color: "yellow",
    targetId: "about",
  },
  {
    title: "Programación",
    description: "Consulta la agenda...",
    icon: CalendarDays,
    color: "green",
    targetId: "programming",
  },
  {
    title: "Conferencistas",
    description: "Conoce a los invitados...",
    icon: Mic2,
    color: "blue",
    targetId: "speakers",
  },
  {
    title: "Ubicaciones",
    description: "Descubre los lugares...",
    icon: MapPin,
    color: "pink",
    targetId: "locations",
  },
  {
    title: "Transmisión en Vivo",
    description: "Sigue el evento en tiempo real...",
    icon: Radio,
    color: "red",
    targetId: "live-stream",
  },
];

const EventCategories: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.section} id="categories">
      <div className={styles.grid}>
        {categories.map(({ title, description, icon: Icon, color, targetId }) => (
          <div
            key={title}
            className={styles.card}
            onClick={() => scrollTo(targetId)}
          >
            <div className={`${styles.icon} ${styles[color]}`}>
              <Icon size={24} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;
