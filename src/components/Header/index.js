import React from "react";

import { MenuOutlined } from "@ant-design/icons";
import { Layout } from "antd";

import styles from "./style.module.css";
import DropdownMenu from "./components/DropdownMenu";

const { Header } = Layout;

const AdminHeader = ({ setCollapsed }) => {
  return (
    <Header
      style={{
        padding: 0,
        backgroundColor: "#fff",
        borderBottom: "2px solid #f0f0f0",
      }}
    >
      <div
        className={styles["left-header"]}
        onClick={() => {
          setCollapsed();
        }}
      >
        <MenuOutlined className={styles["collapsed-btn"]} />
      </div>
      <DropdownMenu />
    </Header>
  );
};

export default AdminHeader;
