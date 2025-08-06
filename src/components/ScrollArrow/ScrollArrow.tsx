import React, { useEffect, useState } from "react";
import styles from "./ScrollArrow.module.css";

const ScrollArrow: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("#hero-section");
      const rect = hero?.getBoundingClientRect();

      if (!rect) return;

      const isVisible = rect.bottom > 0;
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = document.getElementById("categories");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!visible) return null;

  return (
    <div className={styles.arrowContainer} onClick={handleClick}>
      <span className={styles.arrow}>↓</span>
    </div>
  );
};

export default ScrollArrow;
