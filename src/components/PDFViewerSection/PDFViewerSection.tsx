import React from "react";
import styles from "./PDFViewerSection.module.css";
import pdfFile from "/Convocatoria ponencias y experiencias Semana I.A. 2025 (1).pdf"; // Ajusta si está en otra ruta

const PDFViewerSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.viewerWrapper}>
        <iframe
          src={`${pdfFile}#view=FitH`}
          title="Visor PDF"
          className={styles.iframe}
        />
      </div>
    </section>
  );
};

export default PDFViewerSection;
