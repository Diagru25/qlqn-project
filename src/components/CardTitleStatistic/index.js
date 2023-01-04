import styles from "./style.module.css";

const CardTitleStatistic = ({
  title,
  subtitle,
  name,
  detail,
  handleFilterModal,
}) => {
  let styleColor = "";
  if (name === "DonVi") {
    styleColor = "#FF6900";
  } else if (name === "CapBac") {
    styleColor = "#FCB900";
  } else if (name === "ChucVu") {
    styleColor = "#7BDCB5";
  } else if (name === "HocVan") {
    styleColor = "#00D084";
  } else if (name === "NgoaiNgu") {
    styleColor = "#8ED1FC";
  } else if (name === "NamNhapNgu") {
    styleColor = "#0693E3";
  } else if (name === "Tuoi") {
    styleColor = "#EB144C";
  } else if (name === "KhuVuc") {
    styleColor = "#F78DA7";
  } else if (name === "ChungChi") {
    styleColor = "#9900EF";
  } else if (name === "LoaiHinhDaoTao") {
    styleColor = "#3F51B5";
  } else if (name === "CoSoDaoTao") {
    styleColor = "#009688";
  }

  const handleFilterModalOpen = () => {
    console.log(detail);
    handleFilterModal(name, detail);
  };

  return (
    <button
      className={styles["be-card-title-statistic__btn"]}
      onClick={handleFilterModalOpen}
    >
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
        {detail && (
          <span className={styles["be-card-title-statistic__detail"]}>
            ({detail})
          </span>
        )}
      </div>
    </button>
  );
};

export default CardTitleStatistic;
