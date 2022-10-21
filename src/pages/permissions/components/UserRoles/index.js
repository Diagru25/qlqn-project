import { Col, Tree } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import styles from "./style.module.css";

const TREE_DATA = [
  {
    title: "Bộ Tư lệnh 86",
    key: "0-0",
    children: [
      {
        title: "Thủ trưởng BTL",
        key: "0-0-100",
      },
      {
        title: "CH Phòng Chính Trị",
        key: "0-0-0",
      },
      {
        title: "CH Phòng Tham Mưu",
        key: "0-0-1",
      },
      {
        title: "CH Phòng Hậu Cần",
        key: "0-0-2",
      },
      {
        title: "CH Phòng Kỹ Thuật",
        key: "0-0-3",
      },
      {
        title: "CH Phòng Phần Mềm",
        key: "0-0-4",
      },
      {
        title: "Văn phòng",
        key: "0-0-5",
      },
      {
        title: "Phòng Tài Chính",
        key: "0-0-6",
      },
      {
        title: "Thanh tra BTL",
        key: "0-0-7",
      },
      {
        title: "CH Lữ đoàn 1",
        key: "0-0-8",
        children: [
          {
            title: "Phòng Chính trị",
            key: "0-0-8-1",
            icon: <UserOutlined />,
          },
          {
            title: "CH Tiểu đoàn",
            key: "0-0-8-2",
            icon: <UserOutlined />,
          },
        ],
      },
      {
        title: "CH Lữ đoàn 2",
        key: "0-0-9",
        children: [
          {
            title: "Phòng Chính trị",
            key: "0-0-9-1",
            icon: <UserOutlined />,
          },
          {
            title: "CH Tiểu đoàn",
            key: "0-0-9-2",
            icon: <UserOutlined />,
          },
        ],
      },
      {
        title: "CH Lữ đoàn 3",
        key: "0-0-10",
        children: [
          {
            title: "Phòng Chính trị",
            key: "0-0-10-1",
            icon: <UserOutlined />,
          },
          {
            title: "CH Tiểu đoàn",
            key: "0-0-10-2",
            icon: <UserOutlined />,
          },
        ],
      },
      {
        title: "CH Viện 10",
        key: "0-0-11",
        children: [
          {
            title: "Phòng Chính trị",
            key: "0-0-11-1",
            icon: <UserOutlined />,
          },
          {
            title: "CH Phòng",
            key: "0-0-11-2",
            icon: <UserOutlined />,
          },
        ],
      },
      {
        title: "CH Trung Tâm 5",
        key: "0-0-12",
      },
      {
        title: "CH Trung tâm 6",
        key: "0-0-13",
      },
      {
        title: "CH Trung tâm 7",
        key: "0-0-14",
      }
    ],
  },
];

const UserRoles = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <Col className={styles["user-roles__table"]} flex="450px">
      <Tree
        className={styles["role-tree"]}
        showLine={{ showLeafIcon: false }}
        showIcon
        defaultExpandedKeys={["0-0"]}
        switcherIcon={<DownOutlined />}
        onSelect={onSelect}
        treeData={TREE_DATA}
      />
    </Col>
  );
};

export default UserRoles;
