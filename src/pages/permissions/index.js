import { Row } from "antd";
import UserPermissions from "./components/UserPermissions";
import UserRoles from "./components/UserRoles";


import styles from "./style.module.css";

const PermissionsManagement = () => {
  return (
    <Row className={styles["user-controls"]}>
      <UserRoles />
      <UserPermissions />
    </Row>
  );
};

export default PermissionsManagement;
