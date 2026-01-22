import React, { useState, useEffect } from 'react';
import { DIAS, Dia, ScheduleItem } from './types';
import styles from './Schedule2026.module.css';

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1Rkq6A6_KyVDwhuHszznqUPRArLMAUma-YA3tjUCi5n8/export?format=csv";

function agrupaPorDia(rows: ScheduleItem[]): Record<Dia, ScheduleItem[]> {
    return DIAS.reduce((acc, dia) => {
        acc[dia] = rows.filter((row) => row.dia === dia);
        return acc;
    }, {} as Record<Dia, ScheduleItem[]>);
}

function getSelectedByFechaHoy(): Dia {
    // Por ahora, usamos Lunes por defecto como en 2025
    return "Lunes";
}

// Función para parsear una línea de CSV respetando comillas
function parseCSVLine(line: string): string[] {
    const result = [];
    let cur = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(cur);
            cur = "";
        } else {
            cur += char;
        }
    }
    result.push(cur);
    return result;
}

const Schedule2026: React.FC = () => {
    const [dataByDay, setDataByDay] = useState<Record<Dia, ScheduleItem[]>>({
        Lunes: [], Martes: [], Miércoles: [], Jueves: [], Viernes: []
    });
    const [selected, setSelected] = useState<Dia>(getSelectedByFechaHoy());
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const fetchSheet = async () => {
            setLoading(true);
            try {
                const res = await fetch(SHEET_URL);
                const text = await res.text();

                const rows = text.trim().split(/\r?\n/).slice(1);
                const events: ScheduleItem[] = rows.map((row) => {
                    const fields = parseCSVLine(row).map(f => f.trim());
                    // Esperamos: Dia,Hora,Lugar,Evento,Tipo,Ponente
                    const [dia, hora, lugar, evento, tipo, ponente] = fields;
                    return {
                        dia: dia as Dia,
                        time: hora,
                        location: lugar,
                        title: evento,
                        tipo: tipo,
                        ponente: ponente
                    };
                }).filter(ev => DIAS.includes(ev.dia));

                setDataByDay(agrupaPorDia(events));
            } catch (error) {
                console.error("Error fetching schedule:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSheet();
    }, []);

    const scheduleItems = dataByDay[selected] || [];

    return (
        <section className={styles.section} id="agenda">
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <h2 className={styles.sidebarTitle}>Agenda<br />2026</h2>
                    <p className={styles.sidebarSub}>Mayo 19 — 22</p>
                </div>

                <div className={styles.list}>
                    <div className={styles.tabs}>
                        {DIAS.map((dia, index) => {
                            const selectedIndex = DIAS.indexOf(selected);
                            const distance = Math.abs(index - selectedIndex);
                            const isMain = !isMobile || distance <= 1;

                            return (
                                <button
                                    key={dia}
                                    className={`
                                        ${styles.tab} 
                                        ${selected === dia ? styles.tabActive : ''} 
                                        ${!isMain ? styles.tabStacked : ''}
                                    `}
                                    onClick={() => setSelected(dia)}
                                    type="button"
                                >
                                    {isMobile && !isMain ? dia.substring(0, 1) : dia}
                                </button>
                            );
                        })}
                    </div>

                    {loading ? (
                        <div className={styles.noData}>Cargando agenda...</div>
                    ) : scheduleItems.length === 0 ? (
                        <div className={styles.noData}>No hay eventos registrados para este día.</div>
                    ) : (
                        scheduleItems.map((item, i) => (
                            <div key={i} className={styles.item}>
                                <div className={styles.timeContainer}>
                                    <span className={styles.time}>{item.time}</span>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <div className={styles.itemMeta}>
                                            <span className={styles.badge}>{item.tipo}</span>
                                            <span className={styles.location}>{item.location}</span>
                                        </div>
                                    </div>
                                    <p className={styles.itemDescription}>
                                        <strong>{item.ponente}</strong>
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Schedule2026;
