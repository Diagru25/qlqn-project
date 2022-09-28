import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";
import { Layout, Dropdown, Menu, Space } from "antd";

import "antd/dist/antd.min.css";
import styles from "./index.module.css";
import avatar from "../../../assets/images/1239288.png";

const { Header } = Layout;

const AdminHeader = ({ setCollapsed }) => {
  const onClick = ({ key }) => {
    switch (+key) {
      case 1:
        alert("1");
        break;
      case 2:
        alert("2");
        break;
      case 3:
        alert("3");
        break;
      default:
        alert("none");
    }
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "Thông tin tài khoản",
          key: "1",
        },
        {
          label: "Đổi mật khẩu",
          key: "2",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
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
      <Dropdown overlay={menu} arrow={false} className={styles["right-header"]}>
        <a className={styles["member-wrapper"]} onClick={(e) => e.preventDefault()}>
          <Space>
            <img className={styles["avatar"]} src={avatar} alt="Ảnh avatar" />
            <span className={styles["fullname"]}>Nguyễn Văn A</span>
            <DownOutlined className={styles["arrowdown-btn"]} />
          </Space>
        </a>
      </Dropdown>
      <div></div>
    </Header>
  );
};

export default AdminHeader;
