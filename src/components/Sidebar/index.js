import {
  DashboardOutlined,
  UserOutlined,
  ControlOutlined,
  HistoryOutlined,
  DeploymentUnitOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";
import logo from "../../assets/images/icon.png";
import { adminRoute } from "../../constants/route.constant";
import { useDispatch } from "react-redux";
import authActions from "../../redux/auth/action";
import { useState } from "react";
import UnitDrawer from "../UnitDrawer";
import { readLocalStorage } from "../../helper/localStorage";
import { INFO } from "../../constants/auth.constant";
// import { usePermission } from "../../hooks/usePermission";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openUnit, setOpenUnit] = useState(false);
  const [sizeUnit, setSizeUnit] = useState();

  const info = readLocalStorage(INFO);

  // const { userLoggedInfo } = useSelector((state) => state.authReducer);

  // console.log(userLoggedInfo.chucvu.Viettat);
  // console.log(isAdmin);

  const showDrawer = () => {
    setSizeUnit("large");
    setOpenUnit(true);
  };
  const onClose = () => {
    setOpenUnit(false);
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
          items={[
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
            info === "TP" || info === "TrL" || info === "CNCT" || info === "TrLKHTH"
              ?{
                  key: "pheduyet",
                  icon: <CarryOutOutlined />,
                  label: "Phê duyệt",
                  onClick: () => {
                    navigate(adminRoute.APPROVE_REQUEST);
                  },
                }
              : "",

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
          ]}
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
