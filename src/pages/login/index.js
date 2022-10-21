import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { replace, useFormik } from "formik";

import authActions from "../../redux/auth/action";
import { useNavigate } from "react-router-dom";
import { adminRoute } from "../../constants/route.constant";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.authReducer);

  // useEffect(() => {
  //   dispatch(authActions.actions.checkSession())
  // }, []);

  const validator = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Trường này không được để trống";
    }

    if (!values.password) {
      errors.password = "Trường này không được để trống";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validator,
    onSubmit: (values) => {
      try {
        console.log(values);
        dispatch(authActions.actions.login(values.username, values.password));
        if (isLoggedIn) {
          navigate(adminRoute.DASHBOARD, {replace: true});
        }
      } catch (err) {
        console.log(err);
      }
      //call api
    },
  });

  return (
    <section className={styles["wrapper"]}>
      <div className={styles["header"]}>Quản lý thông tin quân nhân</div>
      <div className={styles["des"]}>
        Dự án quản lý thông tin quân nhân ứng dụng công nghệ blockchain
      </div>
      <div className={styles["form"]}>
        <Card>
          <Form autoComplete="off">
            <Form.Item
              validateStatus={formik.errors.username && "error"}
              help={formik.errors.username}
            >
              <Input
                name="username"
                placeholder="Tên đăng nhập"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </Form.Item>
            <Form.Item
              validateStatus={formik.errors.password && "error"}
              help={formik.errors.password}
            >
              <Input.Password
                name="password"
                placeholder="Mật khẩu"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>
            <Button block type="primary" onClick={formik.handleSubmit}>
              Đăng nhập
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default Login;
