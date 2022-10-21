import {
  DashboardOutlined,
  UserOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";
import logo from "../../assets/images/icon.png";
import { adminRoute } from "../../constants/route.constant";
import { useDispatch } from "react-redux";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  return (
    <Sider
      className={styles["sider-wrapper"]}
      collapsible
      collapsed={collapsed}
      trigger={null}
      collapsedWidth={65}
      theme="light"
    >
      <div className={styles["logo"]}>
        <img src={logo} alt="blockchain_icon" width={40} />
      </div>
      <Menu
        className={styles["items"]}
        theme="light"
        mode="inline"
        items={[
          {
            key: "Tổng quan",
            icon: <DashboardOutlined />,
            label: "Tổng quan",
            onClick: () => {
              navigate(adminRoute.DASHBOARD) ;
            },
          },
          {
            key: "Managements",
            icon: <ControlOutlined />,
            label: "Quản lý thông tin",
            children: [
              {
                label: "Danh sách QN",
                onClick: () => {
                  
                  navigate(adminRoute.MEMBERS);
                },
                key: "Item 1",
              },
              {
                label: "Thêm mới QN",
                onClick: () => {
                  
                  navigate(adminRoute.ADD_MEMBER);
                },
                key: "item 2",
              },
            ],
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "Quản lý người dùng",
            children: [
              {
                label: "Yêu cầu QN",
                onClick: () => {
                  
                  navigate(adminRoute.APPROVALS);
                },
                key: "approvals"
              },
              {
                label: "Nhóm quyền QN",
                onClick: () => {
                  navigate(adminRoute.ROLES);
                },
                key: "permissionGroups"
              },
              {
                label: "Phân quyền",
                onClick: () => {
                 
                  navigate(adminRoute.PERMISSIONS);
                },
                key: "Permissions"
              }
            ]
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
