import { Col, Table, Checkbox } from "antd";

import styles from "./style.module.css";

const UserPermissions = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const columns = [
    {
      title: "Xem thông tin",
      dataIndex: "read",
      key: "read",
      width: "20%"
    },
    {
      title: "Thêm mới",
      dataIndex: "add",
      key: "add",
      width: "20%"
    },
    {
      title: "Sửa đổi",
      dataIndex: "modify",
      key: "modify",
      width: "20%"
    },
    {
      title: "Xóa bản ghi",
      dataIndex: "delete",
      key: "delete",
      width: "20%"
    },
    {
      title: "Phê duyệt",
      dataIndex: "approve",
      key: "approve",
    },
  ];

  const datasource = [
    {
      key: "1",
      read: <Checkbox onChange={onChange} />,
      add: <Checkbox onChange={onChange} />,
      modify: <Checkbox onChange={onChange} />,
      delete: <Checkbox onChange={onChange} />,
      approve: <Checkbox onChange={onChange} />
    }
  ]

  return <Col className={styles["user-permissions__table"]} flex="auto">
    <Table dataSource={datasource} columns={columns} pagination={false} />
  </Col>;
};

export default UserPermissions;
