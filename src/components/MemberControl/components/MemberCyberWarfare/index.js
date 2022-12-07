import { Card, Col, Form, Input, Row, Select } from "antd";
import React, { memo } from "react";
import CardTitle from "../../../CardTitle";

const MemberCyberWarfare = ({
  disabled,
  userCyberWarfareFormValue,
  errors,
  handleUserFormChange,
}) => {
  const handleChangeValue = (value = {}) => {
    handleUserFormChange({
      userCyberWarfareFormValue: {
        ...userCyberWarfareFormValue,
        ...value,
      },
    });
  };
  return (
    <>
      <Card>
        <CardTitle
          title="Thông tin chuyên nghành tác chiến mạng"
          //subtitle="Bổ sung thông tin cơ bản của quân nhân. VD: Họ tên, đia chỉ, ...v...v"
        />
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
                label="Cấp tổ chức đào tạo"
                required
                validateStatus={
                  errors?.userCyberWarfareFormValue?.CapToChucDaoTao
                    ? "error"
                    : ""
                }
                help={
                  errors?.userCyberWarfareFormValue?.CapToChucDaoTao &&
                  errors?.userCyberWarfareFormValue?.CapToChucDaoTao
                }
              >
                <Input
                  placeholder="Cấp tổ chức đào tạo"
                  name="CapToChucDaoTao"
                  value={userCyberWarfareFormValue.CapToChucDaoTao}
                  onChange={(e) =>
                    handleChangeValue({ CapToChucDaoTao: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Chứng chỉ đào tạo"
                validateStatus={
                  errors?.userCyberWarfareFormValue?.ChungChiDaoTao
                    ? "error"
                    : ""
                }
                help={
                  errors?.userCyberWarfareFormValue?.ChungChiDaoTao &&
                  errors?.userCyberWarfareFormValue?.ChungChiDaoTao
                }
                required
              >
                <Input
                  placeholder="Chứng chỉ đào tạo"
                  name="ChungChiDaoTao"
                  value={userCyberWarfareFormValue.ChungChiDaoTao}
                  onChange={(e) =>
                    handleChangeValue({ ChungChiDaoTao: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Loại hình đào tạo"
                validateStatus={
                  errors?.userCyberWarfareFormValue?.LoaiHinhDaoTao
                    ? "error"
                    : ""
                }
                help={
                  errors?.userCyberWarfareFormValue?.LoaiHinhDaoTao &&
                  errors?.userCyberWarfareFormValue?.LoaiHinhDaoTao
                }
                required
              >
                <Select
                  allowClear
                  style={{ width: "100%" }}
                  name="LoaiHinhDaoTao"
                  placeholder="Loại hình đào tạo"
                  onChange={(value) => {
                    handleChangeValue({ LoaiHinhDaoTao: value });
                  }}
                >
                  <Select.Option key="29" value="Chính quy">
                    Chính quy
                  </Select.Option>
                  <Select.Option key="30" value="Tại chức">
                    Tại chức
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Cơ sở đào tạo"
                required
                validateStatus={
                  errors?.userCyberWarfareFormValue?.CoSoDaoTao ? "error" : ""
                }
                help={
                  errors?.userCyberWarfareFormValue?.CoSoDaoTao &&
                  errors?.userCyberWarfareFormValue?.CoSoDaoTao
                }
              >
                <Input
                  placeholder="Cơ sở đào tạo"
                  name="CoSoDaoTao"
                  value={userCyberWarfareFormValue.CoSoDaoTao}
                  onChange={(e) =>
                    handleChangeValue({ CoSoDaoTao: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Nội dung đào tạo"
                validateStatus={
                  errors?.userCyberWarfareFormValue?.NoiDungDaoTao
                    ? "error"
                    : ""
                }
                help={
                  errors?.userCyberWarfareFormValue?.NoiDungDaoTao &&
                  errors?.userCyberWarfareFormValue?.NoiDungDaoTao
                }
                required
              >
                <Input.TextArea
                  name="NoiDungDaoTao"
                  value={userCyberWarfareFormValue.NoiDungDaoTao}
                  onChange={(e) =>
                    handleChangeValue({ NoiDungDaoTao: e.target.value })
                  }
                  disabled={disabled}
                />
              </Form.Item>
              <Form.Item
                label="Ngành nghề đào tạo"
                required
                validateStatus={
                  errors?.userCyberWarfareFormValue?.NganhNgheDaoTao
                    ? "error"
                    : ""
                }
                help={
                  errors?.userCyberWarfareFormValue?.NganhNgheDaoTao &&
                  errors?.userCyberWarfareFormValue?.NganhNgheDaoTao
                }
              >
                <Input
                  placeholder="Ngành nghề đào tạo"
                  name="NganhNgheDaoTao"
                  value={userCyberWarfareFormValue.NganhNgheDaoTao}
                  onChange={(e) =>
                    handleChangeValue({ NganhNgheDaoTao: e.target.value })
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

export default memo(MemberCyberWarfare);
