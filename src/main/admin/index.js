import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import AdminHeader from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/auth/action";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { clientRoute } from "../../constants/route.constant";
import userAPI from "../../services/apis/userAPI";
import { writeLocalStorage } from "../../helper/localStorage";
import { FULL_NAME } from "../../constants/auth.constant";

const { Content } = Layout;

export const AdminLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.actions.checkSession());
  }, [dispatch]);

  const { isLoggedIn } = useSelector((state) => state.authReducer);

  const [collapsed, setCollapsed] = useState(true);


  if (!isLoggedIn) {
    return <Navigate to={clientRoute.LOGIN} replace={true} />;
  } else {
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
  }
};
