import { Card, Carousel, Col, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardTitleStatistic from "../../components/CardTitleStatistic";
import FilterModal from "../../components/FilterModal";
import useActions from "../../redux/useActions";
import BarChartDashboard from "./components/BarChart";
import PieChartDashboard from "./components/PieChart";

import styles from "./style.module.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const memberListStatistic = useSelector(
    (state) => state.memberListReducer.memberListStatistic
  );

  const { memberActions } = useActions();
  useEffect(() => {
    dispatch(memberActions.actions.getListStatistic());
  }, [dispatch, memberActions]);

  return (
    <>
      <Row gutter={24} className={styles["dashboard-filter__header"]}>
        <Col span={12}>
          <span className={styles["dashboard-filter__title"]}>Trang chủ</span>
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
                color="DonVi"
                title="Thống kê theo đơn vị"
                subtitle={memberListStatistic.countDonVi}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                color="CapBac"
                title="Thống kê theo quân hàm"
                subtitle={memberListStatistic.countCapBac}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                color="ChucVu"
                title="Thống kê theo chức vụ"
                subtitle={memberListStatistic.countChucVu}
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
                color="HocVan"
                title="Thống kê theo học vấn"
                subtitle={memberListStatistic.countTrinhDoCMKT}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                color="NgoaiNgu"
                title="Thống kê theo ngoại ngữ"
                subtitle={memberListStatistic.countTrinhDoNgoaiNgu}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                color="NamNhapNgu"
                title="Thống kê theo năm nhập ngũ"
                subtitle={memberListStatistic.countSoNamNhapNgu}
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
                color="Tuoi"
                title="Thống kê theo tuổi"
                subtitle={memberListStatistic.countSoTuoi}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                color="KhuVuc"
                title="Thống kê theo khu vực"
                subtitle={memberListStatistic.countKhuVucDiaLy}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                color="ChungChi"
                title="Thống kê theo chứng chỉ"
                subtitle={memberListStatistic.countChungChiDaoTao}
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
                color="LoaiHinhDaoTao"
                title="Thống kê loại hình đào tạo"
                subtitle={memberListStatistic.countLoaiHinhDaoTao}
              />
            </Card>
            <Card className={styles["dashboard-carousel__card"]}>
              <CardTitleStatistic
                color="CoSoDaoTao"
                title="Thống kê cơ sở đào tạo"
                subtitle={memberListStatistic.countCoSoDaoTao}
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
