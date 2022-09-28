import {
  HomeOutlined,
  DashboardOutlined,
  UserOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import "antd/dist/antd.min.css";
import "./index.css";
import logo from "../../../assets/images/icon.png";
import { adminRoute, clientRoute } from "../../../constants/route.constant";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  return (
    <Sider
      className="sider-wrapper"
      collapsible
      collapsed={collapsed}
      trigger={null}
      collapsedWidth={65}
      theme="light"
    >
      <div className="logo">
        <img src={logo} alt="blockchain_icon" width={40} />
      </div>
      <Menu
        className="items"
        theme="light"
        mode="inline"
        items={[
          {
            key: "Home",
            icon: <HomeOutlined />,
            label: "Home",
          },
          {
            key: "Tổng quan",
            icon: <DashboardOutlined />,
            label: "Tổng quan",
            onClick: () => {
              navigate(adminRoute.DASHBOARD);
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
                  navigate(adminRoute.INFO);
                },
                key: "Item 1",
              },
              {
                label: "Thêm mới QN",
                key: "item 2",
              },
            ],
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "Quản lý người dùng",
            onClick: () => {
              navigate(adminRoute.APPROVALS);
            },
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
