import {
  DashboardOutlined,
  UserOutlined,
  ControlOutlined,
  HistoryOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";
import logo from "../../assets/images/icon.png";
import { adminRoute } from "../../constants/route.constant";
import { useDispatch } from "react-redux";
import authActions from "../../redux/auth/action";
import { useEffect, useState } from "react";
import UnitDrawer from "../UnitDrawer";
import { usePermission } from "../../hooks/usePermission";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sidebarItems, setSidebarItems] = useState([]);
  const [openUnit, setOpenUnit] = useState(false);
  const [sizeUnit, setSizeUnit] = useState();
  const isAdmin = usePermission();

  const showDrawer = () => {
    setSizeUnit("large");
    setOpenUnit(true);
  };
  const onClose = () => {
    setOpenUnit(false);
  };

  useEffect(() => {
    handlePermission(isAdmin);
  }, [isAdmin]);

  const handlePermission = async (isAdmin) => {
    if (isAdmin) {
      setSidebarItems([
        {
          key: "Tongquan",
          icon: <DashboardOutlined />,
          label: "Tổng quan",
          onClick: () => {
            navigate(adminRoute.DASHBOARD);
          },
        },
        {
          key: "Quanlythongtin",
          icon: <ControlOutlined />,
          label: "Quản lý thông tin",
          children: [
            {
              label: "Danh sách QN",
              onClick: () => {
                navigate(adminRoute.MEMBERS);
              },
              key: "list-user",
            },
            {
              label: "Thêm mới QN",
              onClick: () => {
                navigate(adminRoute.ADD_MEMBER);
              },
              key: "new-user",
            },
          ],
        },
        {
          key: "phanquyen",
          icon: <UserOutlined />,
          label: "Phân quyền",
          onClick: () => {
            navigate(adminRoute.PERMISSIONS);
          },
        },
        {
          key: "Quanlylog",
          icon: <HistoryOutlined />,
          label: "Quản lý log",
          onClick: () => navigate(adminRoute.MANAGE_LOG),
        },
        {
          key: "Quanlydonvi",
          icon: <DeploymentUnitOutlined />,
          label: "Quản lý đơn vị",
          onClick: () => {
            showDrawer();
          },
        },
      ]);
    } else {
      setSidebarItems([
        {
          key: "Tongquan",
          icon: <DashboardOutlined />,
          label: "Tổng quan",
          onClick: () => {
            navigate(adminRoute.DASHBOARD);
          },
        },
        {
          key: "Quanlythongtin",
          icon: <ControlOutlined />,
          label: "Quản lý thông tin",
          children: [
            {
              label: "Danh sách QN",
              onClick: () => {
                navigate(adminRoute.MEMBERS);
              },
              key: "list-user",
            },
          ],
        },

        {
          key: "Quanlydonvi",
          icon: <DeploymentUnitOutlined />,
          label: "Quản lý đơn vị",
          onClick: () => {
            showDrawer();
          },
        },
      ]);
    }
  };

  return (
    <>
      <Sider
        className={styles["sider-wrapper"]}
        collapsible
        collapsed={collapsed}
        trigger={null}
        collapsedWidth={65}
        theme="light"
        style={{ border: "1px" }}
      >
        <div className={styles["logo"]}>
          <img src={logo} alt="blockchain_icon" width={40} />
        </div>
        <Menu
          className={styles["items"]}
          theme="light"
          mode="inline"
          onSelect={() => {
            dispatch(authActions.actions.checkSession());
          }}
          items={sidebarItems}
        />
      </Sider>
      <UnitDrawer
        onClose={onClose}
        size={sizeUnit}
        open={openUnit}
        title="Quản lý danh sách đơn vị"
      />
    </>
  );
};

export default Sidebar;
