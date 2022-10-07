import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import AdminHeader from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styles from "./style.module.css"

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
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
