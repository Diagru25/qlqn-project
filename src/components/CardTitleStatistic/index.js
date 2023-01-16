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
  } else if (name === "TrinhDoCMKT") {
    styleColor = "#00D084";
  } else if (name === "TrinhDoNgoaiNgu") {
    styleColor = "#8ED1FC";
  } else if (name === "SoNamNhapNgu") {
    styleColor = "#0693E3";
  } else if (name === "SoTuoi") {
    styleColor = "#EB144C";
  } else if (name === "KhuVucDiaLy") {
    styleColor = "#F78DA7";
  } else if (name === "ChungChiDaoTao") {
    styleColor = "#9900EF";
  } else if (name === "LoaiHinhDaoTao") {
    styleColor = "#3F51B5";
  } else if (name === "CoSoDaoTao") {
    styleColor = "#009688";
  }

  // console.log("sub", title + "----" + subtitle);

  const handleFilterModalOpen = () => {
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
        {/* {name === "SoTuoi" && detail === "" && (
          <span className={styles["be-card-title-statistic__subtitle"]}>0</span>
        )}
        {name === "SoNamNhapNgu" && detail === "" && (
          <span className={styles["be-card-title-statistic__subtitle"]}>0</span>
        )} */}
        <span className={styles["be-card-title-statistic__subtitle"]}>
          {subtitle}
        </span>
        {detail && name !== "SoNamNhapNgu" && name !== "SoTuoi" && (
          <span className={styles["be-card-title-statistic__detail"]}>
            ({detail})
          </span>
        )}
        {detail && name === "SoNamNhapNgu" && detail !== "25" && (
          <span className={styles["be-card-title-statistic__detail"]}>
            ({detail} năm công tác)
          </span>
        )}
        {name === "SoNamNhapNgu" && detail === "25" && (
          <span className={styles["be-card-title-statistic__detail"]}>
            ({detail} năm công tác trở lên)
          </span>
        )}
        {detail && name === "SoTuoi" && detail !== "30" && (
          <span className={styles["be-card-title-statistic__detail"]}>
            ({detail} tuổi)
          </span>
        )}
        {name === "SoTuoi" && detail === "30" && (
          <span className={styles["be-card-title-statistic__detail"]}>
            ({detail} tuổi trở xuống)
          </span>
        )}

        {name === "KhuVucDiaLy" && detail === "" && subtitle !== 0 && (
          <span className={styles["be-card-title-statistic__detail"]}>
            (Ngoài TP Hà Nội)
          </span>
        )}
        {name === "CoSoDaoTao" && detail === "" && subtitle !== 0 && (
          <span className={styles["be-card-title-statistic__detail"]}>
            (Ngoài TP Hà Nội)
          </span>
        )}
      </div>
    </button>
  );
};

export default CardTitleStatistic;
