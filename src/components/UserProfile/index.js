import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { useFormik } from "formik";
import CardTitle from "../CardTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../redux/useActions";

import styles from "./style.module.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userActions, memberActions } = useActions();

  const { userInfo } = useSelector((state) => state.userReducer.userProfile);
  const { items } = useSelector(
    (state) => state.memberListReducer.memberPosition
  );

  useEffect(() => {
    dispatch(userActions.actions.getUserInfo());
  }, [dispatch, userActions]);

  useEffect(() => {
    dispatch(memberActions.actions.getMemberPosition());
  }, [dispatch, memberActions]);
  // console.log(UserProfile.defaultProps);
  // const newUserInfo = userInfo != null ? userInfo : UserProfile.defaultProps;

  // const newUserInfo =
  //   userInfo != null
  //     ? { ...UserProfile.defaultProps, ...userInfo }
  //     : { ...UserProfile.defaultProps };

  // const initialValues = {
  //   tenDangNhap: newUserInfo.Tendangnhap,
  //   tenDayDu: newUserInfo.Tendaydu,
  //   soDienThoai: newUserInfo.Dienthoai_mobile,
  //   soDienThoai1: newUserInfo.Dienthoai_cd1,
  //   soDienThoai2: newUserInfo.Dienthoai_cd2,
  //   soDienThoai3: newUserInfo.Dienthoai_cd3,
  //   ngaySinh: newUserInfo.Ngaysinh,
  // };

  const initialValues = {
    tenDangNhap: "",
  };

  useEffect(() => {
    if (userInfo && items) {
      const initValue = {
        tenDangNhap: userInfo.Tendangnhap,
        tenDayDu: userInfo.Tendaydu,
        ngaySinh: userInfo.Ngaysinh,
        soDienThoai: userInfo.Dienthoai_mobile,
        soDienThoai1: userInfo.Dienthoai_cd1,
        soDienThoai2: userInfo.Dienthoai_cd2,
        soDienThoai3: userInfo.Dienthoai_cd3,
        chucVu: userInfo.Chucvu.Ten,
        capBac: userInfo.Capbac.Ten,
        donVi: userInfo.Donvi.Ten,
        tenAnhDaiDien: userInfo.Anhdaidien_ten,
        urlAnhDaiDien: userInfo.Anhdaidien_url,
      };
      formik.setValues({ ...initValue });
    }
  }, [userInfo]);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(initialValues);

  return (
    <>
      <Card>
        <CardTitle
          title="Thông tin cán bộ"
          subtitle="Các trường có đánh dấu * là bắt buộc."
        />
        <Form
          colon={false}
          labelAlign={"right"}
          labelCol={{ xs: { span: 12 }, sm: { span: 6 } }}
          labelWrap
        >
          <Row align="middle" justify="center">
            <Col span={24} className={styles["avatar-control"]}>
              <Form.Item
                labelCol={{ xs: { span: 24 }, sm: { span: 24 } }}
                labelAlign={"left"}
              >
                <div>
                  <Avatar
                    size={170}
                    src=""
                    alt="Avatar"
                    className={styles["avatar-control__img"]}
                  />
                </div>
                <div>
                  <Button className={styles["avatar-control__action"]}>
                    Browse
                  </Button>
                  <span>abc</span>
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Tên đăng nhập">
                <Input
                  readOnly
                  disabled
                  name="tenDangNhap"
                  placeholder="Tên đăng nhập"
                  value={formik.values.tenDangNhap}
                  onChange={formik.handleChange}
                  allowClear
                />
              </Form.Item>
              <Form.Item label="Họ và tên">
                <Input
                  name="tenDayDu"
                  placeholder="Tên đầy đủ"
                  value={formik.values.tenDayDu}
                  onChange={formik.handleChange}
                  allowClear
                />
              </Form.Item>
              <Form.Item label="Cấp bậc">
                <Input
                  name="capBac"
                  placeholder="Cấp bậc"
                  value={formik.values.capBac}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <Form.Item label="Chức vụ">
                <Select
                  value={formik.values.chucVu}
                  onChange={formik.handleChange}
                  options={items.map((chucVu) => {
                    return {
                      value: chucVu.Ten,
                      label: chucVu.Ten
                    }
                  })}
                />
              </Form.Item>
              <Form.Item label="Đơn vị">
                <Input
                  name="donVi"
                  placeholder="Đơn vị"
                  value={formik.values.donVi}
                  onChange={formik.handleChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Ngày sinh">
                <DatePicker
                  name="ngaySinh"
                  style={{ width: "100%" }}
                  placeholder="Ngày sinh"
                  value={formik.values.ngaySinh}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <Form.Item label="Số điện thoại">
                <Input
                  name="soDienThoai"
                  placeholder="Số điện thoại"
                  value={formik.values.soDienThoai}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <Form.Item label="Số điện thoại">
                <Input
                  name="soDienThoai"
                  placeholder="Số điện thoại 1"
                  value={formik.values.soDienThoai1}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <Form.Item label="Số điện thoại">
                <Input
                  name="soDienThoai"
                  placeholder="Số điện thoại 2"
                  value={formik.values.soDienThoai2}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <Form.Item label="Số điện thoại 3">
                <Input
                  name="soDienThoai"
                  placeholder="Số điện thoại 3"
                  value={formik.values.soDienThoai3}
                  onChange={formik.handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <div className={styles["user-action"]}>
            <Button type="submit" size="large" onClick={formik.handleSubmit}>
              Lưu thay đổi
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default UserProfile;
