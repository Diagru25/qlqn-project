import React from "react";
import styles from "./style.module.css";


const CardTitle = ({ title, subtitle }) => {
  return (
    <div className={styles["be-card-title"]}>
      <div className={styles["be-card-title__title"]}>{title}</div>
      <span className={styles["be-card-title__subtitle"]}>{subtitle}</span>
    </div>
  );
};

export default CardTitle;
