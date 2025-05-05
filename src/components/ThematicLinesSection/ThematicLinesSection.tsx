import React from "react";
import ThematicLineCard from "../ThematicLineCard/ThematicLineCard";
import styles from "./thematic-lines.module.css";

import {
  Scale,
  BookOpen,
  Palette,
  Users,
  Music,
} from "lucide-react";

const lines = [
  {
    title:
      "¿De quién es la creatividad? IA, derechos de autor y autenticidad",
    description:
      "Explora los desafíos éticos en el desarrollo y uso de la IA, el manejo responsable de datos, proyectos que impulsan el bien social (data4good) y los debates sobre derechos de autor y autenticidad en obras creadas con herramientas algorítmicas.",
    icon: Scale,
    iconColor: "icon-green",
  },
  {
    title:
      "Letras y algoritmos: transformación editorial y bibliotecaria en la era digital.",
    description:
      "Analiza cómo la IA transforma la creación literaria, la gestión de bibliotecas (clasificación, preservación digital) y la industria editorial, desde la generación de contenido hasta la personalización de experiencias de lectura.",
    icon: BookOpen,
    iconColor: "icon-yellow",
  },
  {
    title:
      "La nueva imagen: de la creación digital a los dilemas éticos de la IA",
    description:
      "Aborda el impacto de herramientas de IA (como ChatGTP, Gemini, Diagram, MidJourney, Runway o Sora) en la creación artística, el diseño audiovisual y la publicidad, así como los dilemas técnicos y éticos de las imágenes sintéticas.",
    icon: Palette,
    iconColor: "icon-red",
  },
  {
    title:
      "Cultura y código: IA y patrimonio inmaterial desde y para las comunidades.",
    description:
      "Destaca proyectos que emplean IA para fortalecer prácticas culturales locales, preservar patrimonio inmaterial, revitalizar lenguas o impulsar emprendimientos comunitarios desde una perspectiva inclusiva y descentralizada.",
    icon: Users,
    iconColor: "icon-blue",
  },
  {
    title: "ECOS: Composición, producción sonora y autoría",
    description:
      "Examina el uso de algoritmos para componer, mezclar o interpretar música, democratizar la creación sonora y redefinir la autoría, junto con sus implicaciones en derechos de propiedad intelectual.",
    icon: Music,
    iconColor: "icon-purple",
  },
];

const ThematicLinesSection: React.FC = () => {
  return (
    <section id="tarjetas" className={styles.section}>
      <h2 className={styles.title}>Postula tu ponencia o experiencia</h2>
      <p className={styles.description}>
      <strong>¿Estás explorando los límites entre la inteligencia artificial, el arte y la ciencia?</strong> Postula tu ponencia o experiencia para la Semana de la IA, del 11 al 15 de agosto en Manizales. Comparte tu visión en este cruce de mundos convocado por el Centro Cultural del Banco de la República y el Centro de Ciencia Francisco José de Caldas de la Universidad de Caldas.
      </p>

      <h3 className={styles.subtitle}>Líneas Temáticas</h3>

      <div className={styles.grid}>
        {lines.map((line, index) => (
          <ThematicLineCard key={index} {...line} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default ThematicLinesSection;


