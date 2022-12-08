import { Col, Row } from "antd";
import UserPermissions from "./components/UserPermissions";
import Module from "./components/Module";
import Breadcrumb from "../../components/Breadcrumb"

import styles from "./style.module.css";

const PermissionsManagement = () => {
  return (
    <>
      <Row gutter={24} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <Breadcrumb title="Phân quyền" />
        </Col>
      </Row>
      <Row className={styles["user-controls"]}>
        <Module />
        <UserPermissions />
      </Row>
    </>
  );
};

export default PermissionsManagement;
