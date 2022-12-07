import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Menu, Space } from "antd";

import styles from "./index.module.css";
import avatar from "../../assets/images/1239288.png";
import authActions from "../../redux/auth/action";
import { adminRoute, clientRoute } from "../../constants/route.constant";
import { replace } from "formik";

const { Header } = Layout;

const userActions = {
  USER_INFO: "user-info",
  USER_LOG: "user-log",
  LOGOUT: "logout",
};

const AdminHeader = ({ setCollapsed }) => {
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    switch (key) {
      case userActions.USER_INFO:
        navigate(adminRoute.USER_PROFILE);
        break;
      case userActions.USER_LOG:
        navigate(adminRoute.USER_LOG);
        break;
      case userActions.LOGOUT:
        dispatch(authActions.actions.logout());
        console.log(isLoggedIn);
        if (!isLoggedIn) {
          navigate(clientRoute.LOGIN, replace);
        }
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
          key: userActions.USER_INFO,
        },
        {
          label: "Nhật ký người dùng",
          key: userActions.USER_LOG,
        },
        {
          label: "Đăng xuất",
          key: userActions.LOGOUT,
        },
      ]}
    />
  );

  return (
    <Header
      style={{
        padding: 0,
        backgroundColor: "#fff",
        borderBottom: "2px solid #f0f0f0"
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
        <a href="#" onClick={(e) => e.preventDefault()}>
          <Space>
            <img className={styles["avatar"]} src={avatar} alt="Ảnh avatar" />
            <span className={styles["fullname"]}>Nguyễn Văn A</span>
            <DownOutlined className={styles["arrowdown-btn"]} />
          </Space>
        </a>
      </Dropdown>
    </Header>
  );
};

export default AdminHeader;
