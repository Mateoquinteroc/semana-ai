import React from "react";
import styles from "./HeroTextSection.module.css";

const HeroTextSection: React.FC = () => {
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
            href="/documento"
            target="_blank"
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
