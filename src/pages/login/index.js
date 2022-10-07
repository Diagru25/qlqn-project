import React from "react";
import styles from "./style.module.css";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { useFormik } from "formik";
import {validUsername} from "../../util/validate";
const Login = () => {

    const validator = (values) => {
        const errors = {};
        const usernamePattern = /^[a-zA-Z0-9]{8,50}[a-zA-Z0-9]$/i;

        errors.username = validUsername(values.username);
        
        if (!values.password) {
            errors.password = 'Trường này không được để trống';
        }
        return errors;
    }


    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: validator,
        onSubmit: values => {
            //call api
            console.log(values);
        },
    });

    return <section className={styles["wrapper"]}>
        <div className={styles["header"]}>
            Quản lý thông tin quân nhân
        </div>
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
                        <Input name="username" placeholder="Tên đăng nhập" value={formik.values.username} onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item
                        validateStatus={formik.errors.password && "error"}
                        help={formik.errors.password}
                    >
                        <Input.Password name="password" placeholder="Mật khẩu" value={formik.values.password} onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                    </Form.Item>
                    <Button block type="primary" onClick={formik.handleSubmit}>Đăng nhập</Button>
                </Form>
            </Card>
        </div>
    </section>
}

export default Login;