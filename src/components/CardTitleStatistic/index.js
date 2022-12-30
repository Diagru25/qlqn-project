import styles from "./style.module.css";

const CardTitleStatistic = ({ title, subtitle, color, detail }) => {
  let styleColor = "";
  if (color === "DonVi") {
    styleColor = "#FF6900";
  } else if (color === "CapBac") {
    styleColor = "#FCB900";
  } else if (color === "ChucVu") {
    styleColor = "#7BDCB5";
  } else if (color === "HocVan") {
    styleColor = "#00D084";
  } else if (color === "NgoaiNgu") {
    styleColor = "#8ED1FC";
  } else if (color === "NamNhapNgu") {
    styleColor = "#0693E3";
  } else if (color === "Tuoi") {
    styleColor = "#EB144C";
  } else if (color === "KhuVuc") {
    styleColor = "#F78DA7";
  } else if (color === "ChungChi") {
    styleColor = "#9900EF";
  } else if (color === "LoaiHinhDaoTao") {
    styleColor = "#3F51B5";
  } else if (color === "CoSoDaoTao") {
    styleColor = "#009688";
  }
  return (
    <div className={styles["be-card-title-statistic"]}>
      <div
        className={styles["be-card-title-statistic__title"]}
        style={{ color: styleColor }}
      >
        {title}
      </div>
      <span className={styles["be-card-title-statistic__subtitle"]}>
        {subtitle}
      </span>
      <span className={styles["be-card-title-statistic__detail"]}>
        ({detail})
      </span>
    </div>
  );
};

export default CardTitleStatistic;
