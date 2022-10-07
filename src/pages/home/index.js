import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/packages/base/Button";
import loginRoute from "../login/route";
import styles from "./style.module.css";

const Home = () => {
  const navigate = useNavigate();

  const redirectLoginHandler = () => {
    navigate(loginRoute.path);
  };

  return (
    <div className={styles["home-container"]}>
      <div className={styles["home-content"]}>
        <h1 className={styles["home-title"]}>Hệ thống quản lý thông tin quân nhân</h1>
        <div className={styles["home-description"]}>
          Chào mừng đến với hệ thống quản lý thông tin quân nhân ứng dụng công nghệ
          Blockchain.
        </div>
        <Button type="button" onClick={redirectLoginHandler}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Home;
