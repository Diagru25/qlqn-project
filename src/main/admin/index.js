import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

import AdminHeader from "../../components/ErrorBoundary/header";
import Sidebar from "../../components/ErrorBoundary/sidebar";
import "./index.css"

const { Content } = Layout;

export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  
  return (
    <Layout className="admin-layout">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <AdminHeader setCollapsed={() => setCollapsed(!collapsed)} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 24px",
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
