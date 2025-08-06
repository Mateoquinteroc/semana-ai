import React, { useEffect, useState } from "react";
import styles from "./HeroTextSection.module.css";

const HeroTextSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const keywords = ["artes", "ciencias"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pdfURL = "/Convocatoria%20ponencias%20y%20experiencias%20Semana%20I.A.%202025.pdf#view=FitH";

  // --- Scroll suave a Formulario ---
  const scrollToForm = () => {
    const el = document.getElementById("registro-formulario");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.heroSection} id="hero-section">
      <div className={styles.background} />
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>
          SEMANA DE LA <br /> INTELIGENCIA <br /> ARTIFICIAL
        </h1>
        <p className={styles.heroSubtitle}>
          en las{" "}
          <span className={styles.fadeText} key={keywordIndex}>
            {keywords[keywordIndex]}
          </span>
        </p>
        <div className={styles.heroButtons}>
          <a
            href={isMobile ? pdfURL : "/documento"}
            target={isMobile ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`${styles.heroButton} ${styles.termsButton}`}
          >
            Términos
          </a>
          {/* Nuevo botón INSCRÍBETE */}
          <button
            type="button"
            onClick={scrollToForm}
            className={styles.submitBtn}
          >
            Inscríbete
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroTextSection;
