import React, { useEffect, useState } from "react";
import styles from "./HeroTextSection.module.css";

const HeroTextSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pdfURL =
    "/Convocatoria%20ponencias%20y%20experiencias%20Semana%20I.A.%202025%20(1).pdf#view=FitH";

  return (
    <section className={styles.heroSection} id="hero-section">
      <div className={styles.background} />
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>
          SEMANA DE LA <br /> INTELIGENCIA <br /> ARTIFICIAL
        </h1>
        <p className={styles.heroSubtitle}>en las artes y la ciencia.</p>
        <div className={styles.heroButtons}>
          <a
            href={isMobile ? pdfURL : "/documento"}
            target={isMobile ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`${styles.heroButton} ${styles.termsButton}`}
          >
            Términos
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdkcFO6b4i6SzdHfBGwuovRVphXSJWYxDAYVnPfcamcyRyClQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.heroButton} ${styles.applyButton}`}
          >
            Postúlate
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroTextSection;
