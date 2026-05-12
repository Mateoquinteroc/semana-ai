import React, { useState, useRef, useEffect } from 'react';
import styles from './Schedule2026.module.css';

interface Evento {
    hora: string;
    lugar: string;
    descripcion: string;
}

interface DiaPrograma {
    fecha: string;
    tema: string;
    eventos: Evento[];
}

const PROGRAMACION: DiaPrograma[] = [
    {
        fecha: "martes 26 de mayo",
        tema: "Creación artística",
        eventos: [
            {
                hora: "9:00",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Apertura oficial tercera Semana de la Inteligencia Artificial en las artes y la ciencia"
            },
            {
                hora: "9:30",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Conferencia: Máquinas de estados infinitos: una aproximación poética a la técnica de los modelos de aprendizaje automático\nPor: Ana Guzmán\nPresencial"
            },
            {
                hora: "10:45",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: ¿El segundo original o la santa copia? Beatriz González, la técnica, la datificación de los archivos y la mediación de las imágenes\nPor: Helmunth Torres-Contreras\nVirtual"
            },
            {
                hora: "11:00",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: Del hacer al pensar: tensiones de la práctica\nPor: William Ospina Toro y Silvana Lopez Bernal\nPresencial"
            },
            {
                hora: "11:20",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: La coherencia del identificador visual en la era de la inteligencia artificial generativa: una lectura semiótica y proyectual\nPor: Diego Alejandro Agudelo Ospina\nPresencial"
            },
            {
                hora: "2:00 PM",
                lugar: "Centro Cultural del Banco de la República, Auditorio",
                descripcion: "Taller Del caos al cosmos: creación de ruido cósmico con ComfyUI.\nPor: Ana Guzmán"
            }
        ]
    },
    {
        fecha: "miércoles 27 de mayo",
        tema: "Cultura ambiental",
        eventos: [
            {
                hora: "9:00",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Conferencia: IA: Aplicaciones e implicaciones para la sostenibilidad ambiental\nPor: Olga Ocampo López"
            },
            {
                hora: "10:15",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: Propuesta de implementación y evaluación dinámica del índice de transición energética territorial en Colombia basado en técnicas de inteligencia artificial\nPor: Grupo GIA UTP y Grupo TIC del Ministerio de Minas y Energía Alexander Molina, Carlos Andrés Gómez, Julio César Chavarro y otros\nPresencial"
            },
            {
                hora: "10:45",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Experiencia: Inteligencia artificial y futurismo social\nPor: Juliana Grisales Naranjo\nPresencial"
            },
            {
                hora: "2:00 PM",
                lugar: "Centro Cultural del Banco de la República, Auditorio",
                descripcion: "Taller IA para la investigación y el desarrollo en sostenibilidad ambiental\nPor: Olga Ocampo López"
            }
        ]
    },
    {
        fecha: "jueves 28 de mayo",
        tema: "Ética e inteligencia artificial",
        eventos: [
            {
                hora: "9:00",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Conferencia: Retos de gobernanza de la I.A.\nPor: Juan David Gutiérrez"
            },
            {
                hora: "10:15",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: Contaminación documental y ética de la difusión: trazabilidad de citas alucinadas y datos fabricados en la divulgación científica y cultural\nPor: Sergio Correa Mejía\nPresencial"
            },
            {
                hora: "10:30",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: Inteligencia artificial en educación superior: usos y percepciones de la voz de los estudiantes\nPor: Jonatan Andrés Puentes Gonzalez\nVirtual"
            },
            {
                hora: "10:45",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: Marco ético-curricular para el desarrollo de un simulador interactivo orientado a competencias de ética y ciudadanía\nPor: Ruth Esther Martínez y Mattius Felipe Rodríguez Buitrago\nPresencial"
            },
            {
                hora: "2:00 PM",
                lugar: "Centro Cultural del Banco de la República, Auditorio",
                descripcion: "Taller Buenas prácticas en el uso de herramientas de la I.A. en el sector público\nPor: Juan David Gutiérrez"
            }
        ]
    },
    {
        fecha: "viernes 29 de mayo",
        tema: "IA, trabajo y transformación social",
        eventos: [
            {
                hora: "9:00",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Conferencia: De aprendizaje automático a IA generativa: transformaciones en el mundo del trabajo\nPor: Reinel Tabares (docente de la Facultad de Inteligencia Artificial e Ingenierías de la Universidad de Caldas)"
            },
            {
                hora: "10:15",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: La inteligencia artificial como aliada del modelo de consultoría social y herramienta de supervivencia para transformar el esfuerzo del músico independiente en una carrera digna.\nPor:\nAutor: Jorge Andres Sanchez Gallejo\nCoautora: Maria Alejandra Ramirez Perez y Victoria Rubio Ruiz\nPresencial"
            },
            {
                hora: "10:30",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: Chatbots, automatización y reconfiguración organizacional en el sector cultural: hacia nuevos modelos de gestión humano–máquina en la era de la inteligencia artificial\nPor: Marcela Pedraza Quintero\nPresencial"
            },
            {
                hora: "10:45",
                lugar: "Centro Cultural Universitario Rogelio Salmona, Óculo",
                descripcion: "Ponencia: Sandbox regulatorio en la administración pública colombiana: Innovación tecnológica con garantías para los derechos fundamentales.\nPor: Xiomara Astrid Ciodaro Pérez\nPresencial"
            },
            {
                hora: "2:00 PM",
                lugar: "Centro Cultural del Banco de la República, Auditorio",
                descripcion: "Conversación abierta\nMesa intersectorial"
            },
            {
                hora: "3:30 PM",
                lugar: "Centro Cultural del Banco de la República, Auditorio",
                descripcion: "Cierre Semana de la IA en las artes y la ciencia\nExperiencia sonora: Paralelismo fluctuante\nPor: Mia Lebihan y Juan Daniel Ramirez\nPresencial"
            }
        ]
    }
];

const DAY_LABELS = ["MAR 26", "MIÉ 27", "JUE 28", "VIE 29"];

function parseDescripcion(desc: string) {
    const lines = desc.split('\n').map(l => l.trim()).filter(Boolean);
    const title = lines[0];
    const meta = lines.slice(1);
    return { title, meta };
}

function getEventType(desc: string): 'apertura' | 'conferencia' | 'ponencia' | 'taller' | 'concierto' | 'mesa' | 'experiencia' | 'cierre' | 'otro' {
    const lower = desc.toLowerCase();
    if (lower.startsWith('apertura')) return 'apertura';
    if (lower.startsWith('conferencia:') || lower.includes('conferencia:')) return 'conferencia';
    if (lower.startsWith('ponencia:') || lower.includes('ponencia:')) return 'ponencia';
    if (lower.startsWith('taller') || lower.includes('taller')) return 'taller';
    if (lower.startsWith('cierre') || lower.includes('cierre')) return 'cierre';
    if (lower.includes('conversación abierta') || lower.includes('mesa intersectorial') || lower.includes('mesa ')) return 'mesa';
    if (lower.startsWith('experiencia') || lower.includes('experiencia')) return 'experiencia';
    return 'otro';
}

const Schedule2026: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState(0);
    const [animating, setAnimating] = useState(false);
    const listRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleDayChange = (index: number) => {
        if (index === selectedDay) return;
        setAnimating(true);
        setTimeout(() => {
            setSelectedDay(index);
            setAnimating(false);
            if (listRef.current) {
                listRef.current.scrollTop = 0;
            }
        }, 250);
    };

    const currentDay = PROGRAMACION[selectedDay];

    return (
        <section className={styles.section} id="agenda" ref={sectionRef}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <span className={styles.headerTag}>— Programación</span>
                    <h2 className={`${styles.headerTitle} ${isVisible ? styles.headerTitleVisible : ''}`}>
                        Agenda<br />2026
                    </h2>
                    <p className={styles.headerDates}>Mayo 26 — 29 · Manizales</p>
                </div>
            </div>

            {/* Day Tabs */}
            <div className={styles.tabs}>
                {PROGRAMACION.map((dia, index) => (
                    <button
                        key={index}
                        className={`${styles.tab} ${selectedDay === index ? styles.tabActive : ''}`}
                        onClick={() => handleDayChange(index)}
                        type="button"
                    >
                        <span className={styles.tabDay}>{DAY_LABELS[index]}</span>
                        <span className={styles.tabTheme}>{dia.tema}</span>
                    </button>
                ))}
            </div>

            {/* Day Theme Banner */}
            <div className={styles.themeBanner}>
                <div className={styles.themeBannerInner}>
                    <span className={styles.themeNumber}>0{selectedDay + 1}</span>
                    <div className={styles.themeInfo}>
                        <h3 className={styles.themeTitle}>{currentDay.tema}</h3>
                        <span className={styles.themeDate}>{currentDay.fecha}</span>
                    </div>
                </div>
            </div>

            {/* Events List */}
            <div
                className={`${styles.eventsList} ${animating ? styles.eventsListFading : ''}`}
                ref={listRef}
            >
                {currentDay.eventos.map((evento, i) => {
                    const { title, meta } = parseDescripcion(evento.descripcion);
                    const type = getEventType(evento.descripcion);

                    return (
                        <div
                            key={`${selectedDay}-${i}`}
                            className={styles.eventItem}
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            {/* Time Column */}
                            <div className={styles.eventTime}>
                                <span className={styles.eventTimeText}>{evento.hora}</span>
                            </div>

                            {/* Divider line */}
                            <div className={styles.eventDivider}>
                                <div className={styles.eventDot} />
                                {i < currentDay.eventos.length - 1 && (
                                    <div className={styles.eventLine} />
                                )}
                            </div>

                            {/* Content */}
                            <div className={styles.eventContent}>
                                <div className={styles.eventHeader}>
                                    <h4 className={styles.eventTitle}>{title}</h4>
                                    <div className={styles.badgesContainer}>
                                        {type === 'taller' && (
                                            <a 
                                                href="https://forms.cloud.microsoft/r/cd9i25W9bM"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.inscriptionChip}
                                            >
                                                Inscripción ↗
                                            </a>
                                        )}
                                        <span className={`${styles.eventBadge} ${styles[`badge_${type}`]}`}>
                                            {type === 'conferencia' ? 'Conferencia' :
                                             type === 'ponencia' ? 'Ponencia' :
                                             type === 'taller' ? 'Taller' :
                                             type === 'apertura' ? 'Apertura' :
                                             type === 'cierre' ? 'Cierre' :
                                             type === 'mesa' ? 'Mesa' :
                                             type === 'experiencia' ? 'Experiencia' : 'Evento'}
                                        </span>
                                    </div>
                                </div>

                                {meta.length > 0 && (
                                    <div className={styles.eventMeta}>
                                        {meta.map((line, j) => (
                                            <span key={j} className={styles.eventMetaLine}>
                                                {line}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className={styles.eventLocation}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>{evento.lugar}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Schedule2026;
