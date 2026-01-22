import React, { useEffect, useState } from 'react';
import styles from './TermsOfReference2026.module.css';
import CustomAlert2026 from './CustomAlert2026';
import { isFormAvailable, FORM_CONFIG } from './config';

interface TermsProps {
    onBack: () => void;
}

const TermsOfReference2026: React.FC<TermsProps> = ({ onBack }) => {
    const [showAlert, setShowAlert] = useState(false);

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
                            El Centro de Ciencia Francisco José de Caldas y el Centro Cultural del Banco de la República invitan a la comunidad a participar en la convocatoria de ponencias y experiencias en Manizales, Colombia.
                        </p>
                    </header>

                    <section className={styles.section}>
                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>1.0 Objetivos de la Iniciativa</h2>
                            <div className={styles.objGrid}>
                                {[
                                    { t: "Conversaciones Críticas", d: "Sobre implicaciones éticas en creación artística e investigación." },
                                    { t: "Centros Culturales", d: "Explorar el aprovechamiento de la IA en museos, bibliotecas y salas." },
                                    { t: "Transformación Social", d: "Analizar el papel de la IA en la sostenibilidad y la equidad." },
                                    { t: "Redes de Colaboración", d: "Generar vínculos entre expertos, creadores y comunidades." }
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
                            <h2 className={styles.sectionTitle}>2.0 Modalidades de Participación</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div className={styles.itemCard}>
                                    <h3>Ponencias</h3>
                                    <p>Presentaciones teóricas o resultados de investigación sobre IA en relación con los ejes temáticos.</p>
                                </div>
                                <div className={styles.itemCard}>
                                    <h3>Experiencias</h3>
                                    <p>Proyectos aplicados, demostraciones tecnológicas, intervenciones artísticas o procesos comunitarios vinculados a la IA.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contentBlock} style={{ padding: '2.5rem', border: '1px dashed rgba(26, 26, 26, 0.2)' }}>
                            <h2 style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.3em', margin: 0 }}>Cronograma</h2>
                            <div className={styles.cronGrid}>
                                {[
                                    { l: "Apertura", d: "02 Feb" },
                                    { l: "Cierre", d: "20 Mar" },
                                    { l: "Resultados", d: "10 Abr" },
                                    { l: "Evento", d: "19 May" }
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
                message="Este formulario estará disponible el 2 de febrero."
            />
        </div>
    );
};

export default TermsOfReference2026;
