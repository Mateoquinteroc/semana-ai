import React, { useEffect, useState } from 'react';
import styles from './TermsOfReference2026.module.css';
import CustomAlert2026 from './CustomAlert2026';
import { isFormAvailable, FORM_CONFIG } from './config';

import { THEMATIC_AXES } from './constants';

interface TermsProps {
    onBack: () => void;
}

const TermsOfReference2026: React.FC<TermsProps> = ({ onBack }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={onBack} className={styles.backBtn}>
                        <span className="material-symbols-outlined">arrow_back</span>
                        <span className={styles.backBtnLabel}>Volver al Inicio</span>
                    </button>
                </div>
                <span className={styles.docRef}>Doc. Ref. IA-2026-MANIZALES</span>
            </header>

            <main className={styles.main}>
                <div className={styles.container}>
                    <header className={styles.intro}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span className={styles.introTag}>Convocatoria Oficial 2026</span>
                            <h1 className={styles.introTitle}>
                                Tercera Semana de la Inteligencia Artificial
                            </h1>
                        </div>
                        <p className={styles.introLead}>
                            El Centro de Ciencia Francisco José de Caldas de la Universidad de Caldas y el Centro Cultural del Banco de la República en Manizales invitan a artistas, investigadores/as, estudiantes, docentes, desarrolladores/as, gestores/as culturales, colectivos, comunidades, ciudadanos y demás actores interesados en las relaciones entre la inteligencia artificial (IA), el arte, la ciencia y los procesos educativos, culturales y sociales derivados de esta interacción, a participar en la convocatoria de ponencias y experiencias para la Semana de la Inteligencia Artificial en las Artes y la Ciencia, que se llevará a cabo del 27 al 29 de mayo de 2026 en la ciudad de Manizales, Colombia.
                            <br /><br />
                            En su tercera versión, la Semana de la Inteligencia Artificial busca consolidarse como un espacio de reflexión y diálogo sobre los impactos y posibilidades de la IA en la vida contemporánea. Para ello, contaremos con expertos nacionales que activarán conversaciones, talleres y espacios de diálogo para comprender cómo la IA se integra en la vida cotidiana y en los procesos creativos.
                        </p>
                    </header>

                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>1.0 Objetivos de la Iniciativa</h2>
                            <div className={styles.objGrid}>
                                {[
                                    { t: "Conversaciones Críticas", d: "Promover conversaciones críticas sobre las implicaciones éticas del uso de la IA en la creación artística, la investigación científica y la gestión cultural." },
                                    { t: "Centros Culturales", d: "Explorar el aprovechamiento de la IA en centros culturales como museos, bibliotecas, salas de conciertos y otros espacios de difusión del conocimiento." },
                                    { t: "Transformación Social", d: "Analizar su papel en la transformación social y ambiental, así como los retos que plantea para la sostenibilidad y la equidad." },
                                    { t: "Redes de Colaboración", d: "Generar redes de colaboración entre expertos, creadores y comunidades para pensar juntos las maneras de correlación con los avances digitales." }
                                ].map((obj, i) => (
                                    <div key={i} className={styles.objItem}>
                                        <span className={styles.objNum}>0{i + 1}</span>
                                        <h4 className={styles.objTitle}>{obj.t}</h4>
                                        <p className={styles.objDesc}>{obj.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>2.0 Ponencias</h2>
                            <div className={styles.accordionContent} style={{ maxHeight: 'none', opacity: 1, padding: '1.5rem 0', border: 'none' }}>
                                <p>Presentaciones teóricas o resultados de investigación sobre IA en relación con los ejes temáticos del evento.</p>
                                <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                                    * Las presentaciones podrán ser presenciales o virtuales, aunque se privilegiarán las propuestas presenciales. Quienes sean aceptados recibirán una constancia de participación expedida por la Universidad de Caldas y el Centro Cultural del Banco de la República en Manizales.
                                </p>
                            </div>
                        </div>

                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>3.0 Ejes temáticos para las ponencias</h2>
                            <div className={styles.accordionList}>
                                {THEMATIC_AXES.map((axis) => (
                                    <div key={axis.number} className={styles.accordionItem}>
                                        <button
                                            className={styles.accordionHeader}
                                            onClick={() => toggleAccordion(`eje-${axis.number}`)}
                                            type="button"
                                        >
                                            <span className={styles.accordionTitle}>{axis.title}</span>
                                            <span className="material-symbols-outlined">
                                                {openAccordion === `eje-${axis.number}` ? 'expand_less' : 'expand_more'}
                                            </span>
                                        </button>
                                        <div className={`${styles.accordionContent} ${openAccordion === `eje-${axis.number}` ? styles.active : ''}`}>
                                            <p className={styles.axisDescription}>{axis.description}</p>
                                            <ul className={styles.questionsList}>
                                                {axis.questions.map((q, i) => (
                                                    <li key={i} className={styles.questionItem}>
                                                        <span className={styles.bullet}>•</span>
                                                        {q}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>4.0 Experiencias</h2>
                            <div className={styles.accordionContent} style={{ maxHeight: 'none', opacity: 1, padding: '1.5rem 0', border: 'none' }}>
                                <p>Proyectos aplicados, demostraciones tecnológicas, intervenciones artísticas, procesos comunitarios, emprendimientos y proyectos creativos o personales vinculados a la IA.</p>
                                <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                                    * Las experiencias deberán desarrollarse únicamente en modalidad presencial y no estarán sujetas a los ejes temáticos definidos por el evento; su enfoque será de libre elección. Quienes sean aceptados recibirán una constancia de participación expedida por la Universidad de Caldas y el Centro Cultural del Banco de la República en Manizales.
                                </p>
                            </div>
                        </div>

                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>5.0 Requisitos para la postulación</h2>
                            <div className={styles.requisitosList}>
                                <div className={styles.requisitoItem}>Ser mayor de edad.</div>
                                <div className={styles.requisitoItem}>Las propuestas pueden provenir de cualquier lugar del mundo, pero deben presentarse en español.</div>
                                <div className={styles.requisitoItem}>Duración de la presentación de la ponencia: 20 minutos + 5 minutos para preguntas.</div>

                                <div className={styles.requisitoItem} style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                                    Llenar el formulario de postulación de la convocatoria con la siguiente información:
                                </div>
                                <ul className={styles.formList}>
                                    <li>Título de la ponencia o experiencia.</li>
                                    <li>Autor(es) y afiliación institucional (si aplica).</li>
                                    <li>Resumen (máx. 300 palabras).</li>
                                    <li>Modalidad (ponencia o experiencia).</li>
                                    <li>Eje temático (para el caso de la ponencia).</li>
                                    <li>Breve biografía (máx. 150 palabras).</li>
                                    <li>Opcional: enlace a video o audio.</li>
                                </ul>

                                <div className={styles.riderBox}>
                                    <p>
                                        <strong>Nota sobre Experiencias:</strong> Las propuestas presentadas en modalidad de experiencia deberán incluir obligatoriamente un <strong>rider técnico</strong>, en el que se especifiquen de manera detallada los requerimientos tecnológicos, logísticos y de infraestructura necesarios para su realización. La selección de las propuestas estará sujeta a la viabilidad técnica, de acuerdo con las capacidades tecnológicas y operativas disponibles del evento. En caso de no contar con requerimientos técnicos específicos, esta condición deberá indicarse expresamente en la propuesta.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>6.0 Criterios de selección</h2>
                            <ul className={styles.criteriosList}>
                                <li>Cumplimiento de los requisitos de la convocatoria.</li>
                                <li>Pertinencia con los ejes temáticos y/o objetivos del evento.</li>
                                <li>Aportes significativos al desarrollo del encuentro.</li>
                            </ul>
                        </div>

                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>7.0 Notas Importantes</h2>
                            <div className={styles.notesBox}>
                                <p><strong>Nota 1:</strong> La participación a través de las ponencias o experiencias no genera ningún vínculo contractual con el Banco de la República ni con el Centro de Ciencia Francisco José de Caldas. Se expedirá una constancia de participación firmada por el Banco de la República y la Universidad de Caldas.</p>
                                <p style={{ marginTop: '1.5rem' }}><strong>Nota 2:</strong> Las iniciativas artísticas presentadas en el encuentro no serán exhibidas ni entrarán a formar parte de las colecciones de arte del Banco de la República ni del Centro de Ciencia Francisco José de Caldas.</p>
                                <p style={{ marginTop: '1.5rem' }}><strong>Nota 3:</strong> Quienes sean seleccionados para participar en el encuentro deben tener disponibilidad para la presentación de su ponencia o experiencia entre el 25 y 28 de mayo del presente año, según la programación de la semana.</p>
                                <p style={{ marginTop: '1.5rem' }}><strong>Nota 4:</strong> La aceptación como ponente no incluye gastos de ningún tipo por parte del evento y de la organización.</p>
                            </div>
                        </div>

                        <div className={styles.contentBlock} style={{ padding: '2.5rem', border: '1px dashed rgba(26, 26, 26, 0.2)', backgroundColor: '#f9f9f9' }}>
                            <h2 style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.3em', margin: 0 }}>Cronograma</h2>
                            <div className={styles.cronGrid}>
                                {[
                                    { l: "Apertura", d: "03 Mar" },
                                    { l: "Cierre", d: "20 Mar" },
                                    { l: "Resultados", d: "20 Abr" },
                                    { l: "Evento", d: "25-28 May" }
                                ].map((date, i) => (
                                    <div key={i} className={styles.cronItem}>
                                        <span className={styles.cronLabel}>{date.l}</span>
                                        <span className={styles.cronValue}>{date.d}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <footer style={{ paddingTop: '5rem' }}>
                        <button
                            onClick={() => {
                                if (isFormAvailable()) {
                                    window.open(FORM_CONFIG.formLink, '_blank');
                                } else {
                                    setShowAlert(true);
                                }
                            }}
                            className={styles.submitBtn}
                        >
                            Ir al formulario de envío
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </footer>
                </div>
            </main>

            <CustomAlert2026
                isOpen={showAlert}
                onClose={() => setShowAlert(false)}
                message="Este formulario estará disponible el 3 de marzo."
            />
        </div>
    );
};

export default TermsOfReference2026;
