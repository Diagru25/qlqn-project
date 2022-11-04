import { Row } from "antd";
import UserPermissions from "./components/UserPermissions";
import Module from "./components/Module";


import styles from "./style.module.css";

const PermissionsManagement = () => {
  return (
    <Row className={styles["user-controls"]}>
      <Module />
      <UserPermissions />
    </Row>
  );
};

export default PermissionsManagement;
