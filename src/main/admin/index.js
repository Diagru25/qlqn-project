import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import AdminHeader from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import authActions from "../../redux/auth/action";
import LoginRequired from "../../components/login_required/LoginRequired";

const { Content } = Layout;

export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout className={styles["admin-layout"]}>
      <Sidebar collapsed={collapsed} />
      <Layout className={styles["site-layout"]}>
        <AdminHeader setCollapsed={() => setCollapsed(!collapsed)} />
        <Content
          style={{
            //margin: "24px 24px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <LoginRequired />
        </Content>
      </Layout>
    </Layout>
  );
};
