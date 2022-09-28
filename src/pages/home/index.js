import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/packages/base/Button";
import loginRoute from "../login/route";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const redirectLoginHandler = () => {
    navigate(loginRoute.path);
  };
  
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hệ thống quản lý quân nhân</h1>
        <div className="home-description">
          Chào mừng đến với hệ thống quản lý quân nhân ứng dụng công nghệ
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
