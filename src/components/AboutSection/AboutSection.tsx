import React from "react";
import styles from "./AboutSection.module.css";

const paragraphs = [
  `La Semana de la Inteligencia Artificial en la Ciencia y en el Arte es un evento pionero que busca explorar la intersección entre la tecnología de vanguardia y la creatividad humana. Durante una semana intensiva, reuniremos a mentes brillantes de ambos campos para compartir conocimientos, debatir ideas y presentar proyectos innovadores.`,
  `Nuestro objetivo es fomentar el diálogo interdisciplinario, inspirar nuevas colaboraciones y mostrar el potencial transformador de la IA cuando se aplica tanto a la investigación científica rigurosa como a la expresión artística libre. Creemos que la IA no es solo una herramienta para la automatización y la eficiencia, sino también un catalizador para la innovación y la exploración de nuevas fronteras creativas.`,
  `El evento contará con una variedad de formatos, incluyendo charlas magistrales de líderes en IA y arte digital, talleres prácticos para desarrollar habilidades en herramientas de IA creativa, presentaciones de proyectos de investigación, obras de arte generadas por IA, y espacios de networking para conectar a profesionales, académicos, artistas y entusiastas.`,
];

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.title}>Acerca del evento</h2>
      <div className={styles.contentBox}>
        {paragraphs.map((text, index) => (
          <p key={index} className={styles.paragraph}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
