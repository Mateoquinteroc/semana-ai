import React from "react";
import { motion } from "framer-motion";
import styles from "./ThematicLineCard.module.css";

type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
  iconColor?: string;
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const ThematicLineCard: React.FC<Props> = ({
  title,
  description,
  icon: Icon,
  delay = 0,
  iconColor = "",
}) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay }}
      className={styles.card}
    >
     <div className={`${styles.icon} ${styles[iconColor]}`}>
        <Icon className="w-8 h-8" />
    </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};

export default ThematicLineCard;
