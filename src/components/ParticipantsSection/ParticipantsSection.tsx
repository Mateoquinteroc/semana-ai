import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Variants } from "framer-motion";
import styles from "./ParticipantsSection.module.css";

interface Participant {
  name: string;
  role: string;
  initials: string;
  day: string;
  date: string;
  bio: string;
  photoUrl?: string;
  photoColorUrl?: string;
  textColor: string;
}

const participantsData: Participant[] = [
  {
    name: "Iván Adolfo Robayo Abello",
    role: "Director de Arquitectura e Innovación Tecnológica, Banco de la República",
    initials: "1A",
    day: "Lunes",
    date: "11 de Agosto, 2025",
    bio: "Ingeniero en Ciencias de la Computación. 22 años de experiencia en TI para empresas del sector bancario y de telecomunicaciones. Especialista en Arquitectura Empresarial y modelos operativos. Lidera estrategias de Transformación Digital y planea los recursos de TI para la realización de mapas de ruta. Docente y conferencista nacional e internacional.",
    photoUrl: "/Ponentes/Ivan Robayo.png",
    photoColorUrl: "/Ponentes/Ivan Robayo color.png",
    textColor: styles.textCyan,
  },
  {
    name: "María Alejandra Echavarría Arcila",
    role: "Abogada, Doctora (PhD) en Gestión de la Tecnología",
    initials: "MA",
    day: "Martes",
    date: "12 de Agosto, 2025",
    bio: "Magíster en Derecho con énfasis en Propiedad Intelectual y Doctora en Gestión de la Tecnología y la Innovación. Investigadora del Instituto Max Planck para la Innovación. Docente de la Universidad Pontificia Bolivariana y de otras universidades. Especialista en derechos de autor y gestión de activos intangibles.",
    photoUrl: "/Ponentes/Maria Alejandra.png",
    photoColorUrl: "/Ponentes/Maria Alejandra color.png",
    textColor: styles.textGreen,
  },
  {
    name: "Paula Gil Ruiz",
    role: "Doctora en Educación, Universidad Complutense de Madrid",
    initials: "PG",
    day: "Miercoles",
    date: "13 de Agosto, 2025",
    bio: "Profesora y doctora por la Universidad Complutense de Madrid. Especialista en la intersección entre arte, educación y tecnología, con énfasis en IA en procesos creativos y pedagógicos. Investiga competencias digitales y educación artística orientada al bienestar.",
    photoUrl: "/Ponentes/Paula Gil.png",
    photoColorUrl: "/Ponentes/Paula Gil color.png",
    textColor: styles.textCyan,
  },
  {
    name: "Luna Herrera",
    role: "Docente universitaria, Desarrolladora de software e Investigadora en filosofía",
    initials: "LL",
    day: "Jueves",
    date: "14 de Agosto, 2025",
    bio: "Profesional en filosofía y letras, docente del departamento de filosofía de la universidad de Caldas, Desarrolladora de software, tesista en maestría en filosofía y miembro  del semillero de investigación de antropología filosófica y el semillero de las hijas de Lilith, adscrito al departamento de filosofía, de la Universidad de Caldas. Áreas de interés, la ética, fenomenología, epistemología feminista y filosofía de la tecnología. Con investigación actual en sesgos algorítmicos cu perspectiva de género.",
    photoUrl: "/Ponentes/Luna Luna.png",
    photoColorUrl: "/Ponentes/Luna Luna color.png",
    textColor: styles.textGreen,
  },
  {
    name: "Juan José Salazar",
    role: "Músico, Ingeniero de Sonido y Productor Musical",
    initials: "JS",
    day: "Viernes",
    date: "15 de Agosto, 2025",
    bio: "Especializado en composición y producción para medios audiovisuales. Experto en restauración, certificación y biometría de voz para el sector público y privado. Ganador del John Leckie Award for Excellence in Music Production. Docente universitario y productor de música para Discovery, BBC, Disney y Telemundo.",
    photoUrl: "/Ponentes/Juan Jose.png",
    photoColorUrl: "/Ponentes/Juan Jose color.png",
    textColor: styles.textCyan,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.34, type: "spring" } },
  exit: { opacity: 0, y: 30, scale: 0.98, transition: { duration: 0.18 } },
};

export default function ParticipantsSection() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className={styles.section} id="speakers">
      <h2 className={styles.title}>Conferencistas</h2>
      <div className={styles.grid}>
        {participantsData.map((p, idx) => (
          <div
            key={p.name}
            className={styles.cell}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(idx)}
            onBlur={() => setHovered(null)}
            tabIndex={0}
            onClick={() => setActive(idx)}
          >
            <div className={styles.circle}>
              {p.photoUrl && p.photoColorUrl ? (
                <div className={styles.photoContainer}>
                  <img
                    src={p.photoUrl}
                    alt={p.name}
                    className={styles.photoBase}
                    style={{ opacity: hovered === idx ? 0 : 1, transition: "opacity 0.28s" }}
                    draggable={false}
                  />
                  <img
                    src={p.photoColorUrl}
                    alt={p.name + " color"}
                    className={`${styles.photoBase} ${styles.photoColor}`}
                    style={{ opacity: hovered === idx ? 1 : 0, transition: "opacity 0.28s" }}
                    draggable={false}
                  />
                </div>
              ) : (
                <span className={styles.initials}>{p.initials}</span>
              )}
            </div>
            <div className={styles.name}>{p.name}</div>
            <div className={`${styles.role} ${p.textColor}`}>{p.role}</div>
          </div>
        ))}
      </div>
      <div className={styles.cardZone}>
        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div
              key={active}
              className={styles.expandCard}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardName}>{participantsData[active].name}</span>
                <span className={styles.cardDate}>
                  {participantsData[active].day} - {participantsData[active].date}
                </span>
              </div>
              <div className={styles.cardRole}>{participantsData[active].role}</div>
              <div className={styles.cardBio}>{participantsData[active].bio}</div>
                            <a
                className={styles.closeBtn}
                aria-label="Cerrar"
                onClick={() => setActive(null)}
                tabIndex={0}
                type="button"
              >
                ×
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
