import { Card, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import React, { memo } from "react";
import CardTitle from "../../../CardTitle";

const MemberOthers = ({
  disabled,
  userOthersFormValue,
  errors,
  handleUserFormChange,
}) => {
  const handleChangeValue = (value = {}) => {
    handleUserFormChange({
      userOthersFormValue: {
        ...userOthersFormValue,
        ...value,
      },
    });
  };
  return (
    <>
      <Card>
        <CardTitle title="Các thông tin khác" />
        <Form
          colon={false}
          labelAlign={"right"}
          labelCol={{
            xs: { span: 12 },
            sm: { span: 6 },
          }}
          labelWrap
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Sức khỏe"
                // validateStatus={
                //   errors?.userOthersFormValue?.SucKhoe ? "error" : ""
                // }
                // help={
                //   errors?.userOthersFormValue?.SucKhoe &&
                //   errors?.userOthersFormValue?.SucKhoe
                // }
                // required
              >
                <Input
                  placeholder="Tình trạng sức khỏe"
                  name="SucKhoe"
                  value={userOthersFormValue.SucKhoe}
                  onChange={(e) =>
                    handleChangeValue({ SucKhoe: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Nhóm máu"
                // validateStatus={
                //   errors?.userOthersFormValue?.NhomMau ? "error" : ""
                // }
                // help={
                //   errors?.userOthersFormValue?.NhomMau &&
                //   errors?.userOthersFormValue?.NhomMau
                // }
                // required
              >
                <Input
                  placeholder="Nhóm máu"
                  name="NhomMau"
                  value={userOthersFormValue.NhomMau}
                  onChange={(e) =>
                    handleChangeValue({ NhomMau: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Số BHXH"
                // validateStatus={
                //   errors?.userOthersFormValue?.SoBHXH ? "error" : ""
                // }
                // help={
                //   errors?.userOthersFormValue?.SoBHXH &&
                //   errors?.userOthersFormValue?.SoBHXH
                // }
                // required
              >
                <Input
                  placeholder="Bảo hiểm xã hội"
                  name="SoBHXH"
                  value={userOthersFormValue.SoBHXH}
                  onChange={(e) =>
                    handleChangeValue({ SoBHXH: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Bậc lương"
                // validateStatus={
                //   errors?.userOthersFormValue?.BacLuong ? "error" : ""
                // }
                // help={
                //   errors?.userOthersFormValue?.BacLuong &&
                //   errors?.userOthersFormValue?.BacLuong
                // }
                // required
              >
                <Input
                  placeholder="Bậc lương"
                  name="BacLuong"
                  value={userOthersFormValue.BacLuong}
                  onChange={(e) =>
                    handleChangeValue({ BacLuong: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Hệ số lương"
                // validateStatus={
                //   errors?.userOthersFormValue?.HeSoLuong ? "error" : ""
                // }
                // help={
                //   errors?.userOthersFormValue?.HeSoLuong &&
                //   errors?.userOthersFormValue?.HeSoLuong
                // }
                // required
              >
                <Input
                  placeholder="Hệ số lương"
                  name="HeSoLuong"
                  value={userOthersFormValue.HeSoLuong}
                  onChange={(e) => {
                    handleChangeValue({ HeSoLuong: e.target.value });
                  }}
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Tình trạng hôn nhân"
                // validateStatus={
                //   errors?.userOthersFormValue?.TinhTrangHonNhan ? "error" : ""
                // }
                // help={
                //   errors?.userOthersFormValue?.TinhTrangHonNhan &&
                //   errors?.userOthersFormValue?.TinhTrangHonNhan
                // }
                // required
              >
                <Input
                  placeholder="Tình trạng hôn nhân"
                  name="TinhTrangHonNhan"
                  value={userOthersFormValue.TinhTrangHonNhan}
                  onChange={(e) =>
                    handleChangeValue({ TinhTrangHonNhan: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Ngành quản lý"
                // validateStatus={
                //   errors?.userOthersFormValue?.NganhQuanLy ? "error" : ""
                // }
                // help={
                //   errors?.userOthersFormValue?.NganhQuanLy &&
                //   errors?.userOthersFormValue?.NganhQuanLy
                // }
                // required
              >
                <Input
                  placeholder="Ngành quản lý"
                  name="NganhQuanLy"
                  value={userOthersFormValue.NganhQuanLy}
                  onChange={(e) =>
                    handleChangeValue({ NganhQuanLy: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default memo(MemberOthers);
