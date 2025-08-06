"use client";
import { useState, useEffect } from "react";
import styles from "./ProgramacionSection.module.css";

// Días de la semana
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"] as const;
type Dia = typeof DIAS[number];

interface Evento {
  dia: Dia;
  hora: string;
  lugar: string;
  evento: string;
  tipo: string;
  ponente: string;
}

function agrupaPorDia(rows: Evento[]): Record<Dia, Evento[]> {
  return DIAS.reduce((acc, dia) => {
    acc[dia] = rows.filter((row) => row.dia === dia);
    return acc;
  }, {} as Record<Dia, Evento[]>);
}

function getSelectedByFechaHoy(): Dia {
  const hoy = new Date();
  const inicio = new Date(2025, 7, 11);
  const fin = new Date(2025, 7, 15);
  if (hoy >= inicio && hoy <= fin) {
    const diaNum = hoy.getDate() - 11;
    if (diaNum >= 0 && diaNum < DIAS.length) {
      return DIAS[diaNum];
    }
  }
  return "Lunes";
}

export default function ProgramacionSection() {
  const [DATA, setDATA] = useState<Record<Dia, Evento[]>>({
    Lunes: [],
    Martes: [],
    Miércoles: [],
    Jueves: [],
    Viernes: [],
  });
  const [selected, setSelected] = useState<Dia>(getSelectedByFechaHoy());
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchSheet = async () => {
      setCargando(true);
      const res = await fetch(
        // TU URL DE GOOGLE SHEET COMO CSV
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQjyRAQk-X5m7As9Dda63qTDt-U409ERL7PvMawbPb7fJ-LVGIsZ99N0UJfpLaqLylKeI3AELmNdRbI/pub?output=csv"
      );
      const text = await res.text();
      const clean = (str: string) => str.replace(/^"(.*)"$/, "$1").trim();

      // Lee filas: Dia,Hora,Lugar,Evento,Tipo,Ponente
      const rows = text.trim().split("\n").slice(1); // Omitir encabezado
      const eventos: Evento[] = rows
        .map((row) => {
          const [dia, hora, lugar, evento, tipo, ponente] = row.split(",");
          return {
            dia: clean(dia) as Dia,
            hora: clean(hora),
            lugar: clean(lugar),
            evento: clean(evento),
            tipo: clean(tipo),
            ponente: clean(ponente),
          };
        })
        .filter((ev) => DIAS.includes(ev.dia));
      setDATA(agrupaPorDia(eventos));
      setCargando(false);
    };
    fetchSheet();
  }, []);

  // Badge class según tipo/categoría
  function getBadgeClass(tipo: string) {
    const val = tipo.toLowerCase();
    if (val.includes("apertura")) return styles.badgeApertura;
    if (val.includes("charla") || val.includes("conferencia")) return styles.badgeCharla;
    if (val.includes("ponencia")) return styles.badgePonencia;
    if (val.includes("taller")) return styles.badgeTaller;
    if (val.includes("concierto")) return styles.badgeConcierto;
    return styles.badgeCharla;
  }

  return (
    <div className={styles.sectionWrapper} id="programming">
      <div className={styles.card}>
        <h2 className={styles.titulo}>Programación</h2>
        <div className={styles.tabsWrapper}>
          {DIAS.map((dia) => (
            <button
              key={dia}
              className={`${styles.tab} ${selected === dia ? styles.tabActive : ""}`}
              onClick={() => setSelected(dia)}
              type="button"
            >
              {dia}
            </button>
          ))}
        </div>

        {/* Desktop/Tablet: Tabla tradicional */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Hora</th>
                <th className={styles.th}>Lugar</th>
                <th className={styles.th}>Evento</th>
                <th className={styles.th}>Tipo</th>
                <th className={styles.th}>Ponente</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr>
                  <td colSpan={5} className={styles.noData}>
                    Cargando datos...
                  </td>
                </tr>
              ) : DATA[selected].length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.noData}>
                    No hay eventos registrados para este día.
                  </td>
                </tr>
              ) : (
                DATA[selected].map((row, i) => (
                  <tr key={`${selected}-${i}`} className={styles.fila}>
                    <td className={styles.tdHora}>{row.hora}</td>
                    <td className={styles.td}>{row.lugar}</td>
                    <td className={styles.td}>
                      <div className={styles.eventoScroll}>{row.evento}</div>
                    </td>
                    <td className={styles.td}>
                      <span className={getBadgeClass(row.tipo)}>
                        {row.tipo}
                      </span>
                    </td>
                    <td className={styles.td}>{row.ponente}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* MÓVIL: Lista de tarjetas compacta */}
        <div className={styles.mobileEventosList}>
          {cargando ? (
            <div className={styles.noData}>Cargando datos...</div>
          ) : DATA[selected].length === 0 ? (
            <div className={styles.noData}>No hay eventos registrados para este día.</div>
          ) : (
            DATA[selected].map((row, i) => (
              <div key={i} className={styles.mobileEventoCard}>
                <div className={styles.mobileEventoHora}>{row.hora}</div>
                <div className={styles.mobileEventoTitulo}>{row.evento}</div>
                <div className={styles.mobileEventoPonente}>{row.ponente}</div>
                <div className={styles.mobileEventoLugar}>{row.lugar}</div>
                {/* Puedes agregar más campos o botón de detalles aquí */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
