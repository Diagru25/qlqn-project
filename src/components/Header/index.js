import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Menu, Space } from "antd";

import styles from "./index.module.css";
import authReducer from "../../redux/auth/reducer";
import avatar from "../../assets/images/1239288.png";
import authActions from "../../redux/auth/action";
import { clientRoute } from "../../constants/route.constant";
import { replace } from "formik";

const { Header } = Layout;

const userActions = {
  USER_INFO: "user-info",
  CHANGE_PASSWD: "new-passwd",
  LOGOUT: "logout",
};

const AdminHeader = ({ setCollapsed }) => {
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    switch (key) {
      case userActions.USER_INFO:
        alert("1");
        break;
      case userActions.CHANGE_PASSWD:
        alert("2");
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
          label: "Đổi mật khẩu",
          key: userActions.CHANGE_PASSWD,
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
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "#fff",
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
