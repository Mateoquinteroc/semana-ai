import React from "react";
import ThematicLineCard from "../ThematicLineCard/ThematicLineCard";
import styles from "../ThematicLinesSection/thematic-lines.module.css";

import {
    Palette,
    Briefcase,
    Scale,
    Leaf
} from "lucide-react";

const lines = [
    {
        title: "I.A y creación artística",
        description: "¿Para qué sirve la IA en el acto creativo? ¿Puede la máquina tener sensibilidad estética? ¿Qué significa “crear” en un contexto donde la IA genera imágenes, música o textos?",
        icon: Palette,
        iconColor: "icon-red",
    },
    {
        title: "I.A trabajo y transformación social",
        description: "¿Reemplazará la IA el empleo en las industrias creativas y científicas? ¿Qué nuevos roles emergen con la IA como herramienta?",
        icon: Briefcase,
        iconColor: "icon-blue",
    },
    {
        title: "Formación de públicos y ética",
        description: "¿Cómo formar públicos respecto a las creaciones de I.A.? ¿Cómo distinguir entre lo humano y lo artificial en la producción cultural? ¿Qué desafíos éticos plantea la IA en la creación y difusión de contenidos?",
        icon: Scale,
        iconColor: "icon-yellow",
    },
    {
        title: "I.A y cultura ambiental",
        description: "¿Qué desafíos plantea la I.A. para el cambio climático? ¿Qué acciones de mitigación de este impacto se pueden desarrollar?",
        icon: Leaf,
        iconColor: "icon-green",
    },
];

const ThematicLinesSection2026: React.FC = () => {
    return (
        <section id="tarjetas" className={styles.section}>
            <h3 className={styles.subtitle}>Líneas Temáticas 2026</h3>
            <div className={styles.grid}>
                {lines.map((line, index) => (
                    <ThematicLineCard key={index} {...line} delay={index * 0.1} />
                ))}
            </div>
        </section>
    );
};

export default ThematicLinesSection2026;
