import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { adminRoute, clientRoute } from "../../../../constants/route.constant";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useActions from "../../../../redux/useActions";
import { replace } from "formik";

import avatar from "../../../../assets/images/1239288.png";
import styles from "./style.module.css";
import { readLocalStorage } from "../../../../helper/localStorage";
import { HOTEN } from "../../../../constants/auth.constant";

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.authReducer);
  // const { recover_data } = useSelector((state) => state.verifyReducer.verifyInfo);

  const hoTen = readLocalStorage(HOTEN);

  const { authActions } = useActions();

  const actions = {
    USER_INFO: "user-info",
    USER_LOG: "user-log",
    GENERAL_SCIENCE: "general-science",
    LOGOUT: "logout",
  };
  const onClick = ({ key }) => {
    switch (key) {
      case actions.USER_INFO:
        navigate(adminRoute.USER_PROFILE);
        break;
      case actions.GENERAL_SCIENCE: 
        navigate(adminRoute.GENERAL_SCIENCE);
        break;
      case actions.USER_LOG:
        navigate(adminRoute.USER_LOG);
        break;
      case actions.LOGOUT:
        dispatch(authActions.actions.logout());
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
          key: actions.USER_INFO,
        },
        {
          label: "Hồ sơ khoa học tổng hợp",
          key: actions.GENERAL_SCIENCE,
        },
        {
          label: "Nhật ký người dùng",
          key: actions.USER_LOG,
        },
        {
          label: "Đăng xuất",
          key: actions.LOGOUT,
        },
      ]}
    />
  );
  return (
    <>
      <Dropdown overlay={menu} arrow={false} className={styles["right-header"]}>
        <div
          className={styles["menu-dropdown__button"]}
          onClick={(e) => e.preventDefault()}
        >
          <Space>
            <img className={styles["avatar"]} src={avatar} alt="Ảnh avatar" />
            <span className={styles["fullname"]}>{hoTen}</span>
            <DownOutlined className={styles["arrowdown-btn"]} />
          </Space>
        </div>
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
