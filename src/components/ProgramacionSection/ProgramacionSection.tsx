import React from "react";
import styles from "./ProgramacionSection.module.css";

const schedule = [
  { hora: "09:00", lugar: "Auditorio Principal", evento: "Ceremonia de Apertura", ponente: "Autoridades" },
  { hora: "10:00", lugar: "Sala 1", evento: "Charla: IA en la Medicina", ponente: "Dra. Eleanor Vance" },
  { hora: "11:00", lugar: "Sala 2", evento: "Taller: Introducción a Machine Learning", ponente: "Profesor Alex Ryder" },
  { hora: "14:00", lugar: "Galería de Arte", evento: "Presentación: Arte Generativo con IA", ponente: "Dra. Anya Petrova" },
  { hora: "16:00", lugar: "Sala 1", evento: "Networking y Café", ponente: "Todos" },
  { hora: "17:00", lugar: "Auditorio Principal", evento: "Charla: Ética en la IA", ponente: "Jordan Lee" },
];

const ProgramacionSection: React.FC = () => {
  return (
    <section className={styles.section} id="programming">
      <h2 className={styles.title}>Programación</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Hora</th>
              <th>Lugar</th>
              <th>Evento</th>
              <th>Ponente</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <td>{item.hora}</td>
                <td>{item.lugar}</td>
                <td>{item.evento}</td>
                <td>{item.ponente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProgramacionSection;
