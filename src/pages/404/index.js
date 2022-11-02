import { Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";

import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { clientRoute } from "../../constants/route.constant";

const NotFoundLayout = () => {
  const navigate = useNavigate();

  const backLoginHandler = () => {
    navigate(clientRoute.LOGIN);
  }

  return (
    <div className={styles["not-found__layout"]}>
      <div className={styles["not-found__background"]}>
        <span className={styles["not-found__text"]}>404</span>
        <Button
          ghost
          size="large"
          icon={<RollbackOutlined />}
          className={styles["not-found__btn"]}
          onClick={backLoginHandler}
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default NotFoundLayout;
