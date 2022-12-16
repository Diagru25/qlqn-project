import { Col, Input, Row, Space } from "antd";

import styles from "./style.module.css";

const { Search } = Input;

const SearchField = ({ onSubmit }) => {
  const handleSearchHoTen = (value) => {
    onSubmit({ HoVaTen: value });
  };
  const handleSearchDonVi = (value) => {
    onSubmit({ DonVi: value });
  };
  const handleSearchNganhNghe = (value) => {
    onSubmit({ NganhNgheDaoTao: value });
  };
  const handleSearchDiaLy = (value) => {
    onSubmit({ NguyenQuan: value });
  };

  return (
    <>
      <Row gutter={24}>
        <Col span={12}>
          <Space direction="vertical">
            <div className={styles["search-filter__title"]}>
              Tìm kiếm theo họ tên
            </div>
            <Search
              placeholder="Tìm kiếm họ tên..."
              allowClear
              size="large"
              onSearch={handleSearchHoTen}
            />
            <div className={styles["search-filter__title"]}>
              Tìm kiếm theo đơn vị
            </div>
            <Search
              placeholder="Tìm kiếm đơn vị..."
              allowClear
              size="large"
              onSearch={handleSearchDonVi}
            />
          </Space>
        </Col>
        <Col span={12}>
          <Space direction="vertical">
            <div className={styles["search-filter__title"]}>
              Tìm kiếm theo chuyên ngành
            </div>
            <Search
              placeholder="Tìm kiếm chuyên ngành..."
              allowClear
              size="large"
              onSearch={handleSearchNganhNghe}
            />
            <div className={styles["search-filter__title"]}>
              Tìm kiếm theo khu vực địa lý
            </div>
            <Search
              placeholder="Tìm kiếm địa lý..."
              allowClear
              size="large"
              onSearch={handleSearchDiaLy}
            />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default SearchField;
