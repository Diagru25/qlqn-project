import { useSelector } from "react-redux";
import styles from "./style.module.css";

const BarChartTooltip = ({ active, payload, label }) => {
  let count = "";
  let barDesc = "";

  const memberListStatistic = useSelector(
    (state) => state.memberListReducer.memberListStatistic
  );

  const { filter } = memberListStatistic;

  console.log("member list statistic", memberListStatistic);

  console.log("label", label);

  if (label === "Chức vụ") {
    barDesc = decodeURI(filter.ChucVu);
    count = memberListStatistic.countChucVu;
  }
  if (label === "Cấp bậc") {
    barDesc = decodeURI(filter.CapBac);
    count = memberListStatistic.countCapBac;
  }
  if (label === "Đơn vị") {
    barDesc = decodeURI(filter.DonVi);
    count = memberListStatistic.countDonVi;
  }
  if (label === "Trình độ học vấn") {
    barDesc = decodeURI(filter.TrinhDoCMKT);
    count = memberListStatistic.countTrinhDoCMKT;
  }
  if (label === "Trình độ ngoại ngữ") {
    barDesc = decodeURI(filter.TrinhDoNgoaiNgu);
    count = memberListStatistic.countTrinhDoNgoaiNgu;
  }
  if (label === "Số năm nhập ngũ") {
    barDesc =
      filter.SoNamNhapNgu === 25
        ? `trên ${decodeURI(filter.SoNamNhapNgu)} năm công tác`
        : `${decodeURI(filter.SoNamNhapNgu)} năm công tác`;
    count = memberListStatistic.countSoNamNhapNgu;
  }
  if (label === "Số tuổi") {
    barDesc =
      filter.SoTuoi === 30
        ? `dưới ${decodeURI(filter.SoTuoi)} tuổi`
        : `${decodeURI(filter.SoTuoi)} tuổi`;
    count = memberListStatistic.countSoTuoi;
  }
  if (label === "Khu vực địa lý") {
    barDesc =
      filter.KhuVucDiaLy === ""
        ? `Ngoài TP Hà Nội`
        : decodeURI(filter.KhuVucDiaLy);
    count = memberListStatistic.countKhuVucDiaLy;
  }
  if (label === "Chứng chỉ đào tạo") {
    barDesc = decodeURI(filter.ChungChiDaoTao);
    count = memberListStatistic.countChungChiDaoTao;
  }
  if (label === "Chuyên môn kỹ thuật") {
    barDesc = decodeURI(filter.TrinhDoCMKT);
    count = memberListStatistic.countTrinhDoCMKT;
  }
  if (label === "Loại hình đào tạo") {
    barDesc = decodeURI(filter.LoaiHinhDaoTao);
    count = memberListStatistic.countLoaiHinhDaoTao;
  }
  if (label === "Cơ sở đào tạo") {
    barDesc =
      filter.CoSoDaoTao === ""
        ? "Ngoài TP Hà Nội"
        : decodeURI(filter.CoSoDaoTao);
    count = memberListStatistic.countCoSoDaoTao;
  }

  if (active && payload && payload.length) {
    return (
      <div className={styles["bar-chart-tooltip"]}>
        <div className={styles["bar-chart-tooltip__label"]}>
          {`Thống kê theo ${label}: ${payload[0].value}%`}
        </div>
        <div
          className={styles["bar-chart-tooltip__desc"]}
        >{`Số lượng ${barDesc}: ${count}`}</div>
      </div>
    );
  }
};

export default BarChartTooltip;
