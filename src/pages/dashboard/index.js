import { Card, Carousel, Col, Row } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb";
import CardTitleStatistic from "../../components/CardTitleStatistic";
import FilterModal from "../../components/FilterModal";
import BarChartDashboard from "./components/BarChart";
import FilterStatisticModal from "./components/FilterStatisticModal";
import PieChartDashboard from "./components/PieChart";

import styles from "./style.module.css";

const Dashboard = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleFilterCancel = () => {
    setIsFilterModalOpen(false);
  };

  const handleFilterModal = (filterField, filterVal) => {
    setIsFilterModalOpen(true);
    setFilterField(filterField);
    setFilterValue(filterVal);
  };

  console.log(filterField + "-----" + filterValue);

  // const [statisticValue, setStatisticValue] = useState({

  // });

  const memberListStatistic = useSelector(
    (state) => state.memberListReducer.memberListStatistic
  );

  const { filter } = memberListStatistic;

  console.log("abc", memberListStatistic);

  return (
    <>
      <FilterStatisticModal
        isFilterModalOpen={isFilterModalOpen}
        filterField={filterField}
        filterValue={filterValue}
        handleFilterCancel={handleFilterCancel}
      />
      <Row gutter={24} className={styles["dashboard-filter__header"]}>
        <Col span={12}>
          <Breadcrumb title="Trang chủ" />
        </Col>
        <Col span={12} className={styles["dashboard-filter__action"]}>
          <FilterModal />
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={6}>
          <Carousel
            className={styles["dashboard-carousel"]}
            autoplay
            dots={false}
          >
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="DonVi"
                title="Thống kê theo đơn vị"
                subtitle={memberListStatistic.countDonVi}
                detail={decodeURI(filter.DonVi)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="CapBac"
                title="Thống kê theo quân hàm"
                subtitle={memberListStatistic.countCapBac}
                detail={decodeURI(filter.CapBac)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="ChucVu"
                title="Thống kê theo chức vụ"
                subtitle={memberListStatistic.countChucVu}
                detail={decodeURI(filter.ChucVu)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
          </Carousel>
        </Col>
        <Col span={6}>
          <Carousel
            className={styles["dashboard-carousel"]}
            autoplay
            dots={false}
          >
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="HocVan"
                title="Thống kê theo học vấn"
                subtitle={memberListStatistic.countTrinhDoCMKT}
                detail={decodeURI(filter.TrinhDoCMKT)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="TrinhDoNgoaiNgu"
                title="Thống kê theo ngoại ngữ"
                subtitle={memberListStatistic.countTrinhDoNgoaiNgu}
                detail={decodeURI(filter.TrinhDoNgoaiNgu)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="SoNamNhapNgu"
                title="Thống kê theo năm nhập ngũ"
                subtitle={memberListStatistic.countSoNamNhapNgu}
                detail={decodeURI(filter.SoNamNhapNgu.toString())}
                handleFilterModal={handleFilterModal}
              />
            </Card>
          </Carousel>
        </Col>
        <Col span={6}>
          <Carousel
            className={styles["dashboard-carousel"]}
            autoplay
            dots={false}
          >
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="SoTuoi"
                title="Thống kê theo tuổi"
                subtitle={memberListStatistic.countSoTuoi}
                detail={decodeURI(filter.SoTuoi.toString())}
                handleFilterModal={handleFilterModal}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="KhuVucDiaLy"
                title="Thống kê theo khu vực"
                subtitle={memberListStatistic.countKhuVucDiaLy}
                detail={decodeURI(filter.KhuVucDiaLy)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="ChungChiDaoTao"
                title="Thống kê theo chứng chỉ"
                subtitle={memberListStatistic.countChungChiDaoTao}
                detail={decodeURI(filter.ChungChiDaoTao)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
          </Carousel>
        </Col>
        <Col span={6}>
          <Carousel
            className={styles["dashboard-carousel"]}
            autoplay
            dots={false}
          >
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="LoaiHinhDaoTao"
                title="Thống kê loại hình đào tạo"
                subtitle={memberListStatistic.countLoaiHinhDaoTao}
                detail={decodeURI(filter.LoaiHinhDaoTao)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                name="CoSoDaoTao"
                title="Thống kê cơ sở đào tạo"
                subtitle={memberListStatistic.countCoSoDaoTao}
                detail={decodeURI(filter.CoSoDaoTao)}
                handleFilterModal={handleFilterModal}
              />
            </Card>
          </Carousel>
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: 10 }}>
        <Col span={12}>
          <Card
            style={{ width: "100%", height: "100%" }}
            title="Số lượng quân nhân thay đổi theo tháng"
          >
            <BarChartDashboard />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            style={{ width: "100%", height: "100%" }}
            title="Thống kê chứng chỉ của quân nhân"
          >
            <PieChartDashboard />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
