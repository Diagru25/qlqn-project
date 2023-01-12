import { Card, Col, Form, Input, Row, Select } from "antd";
import React, { memo } from "react";
import CardTitle from "../../../CardTitle";

const MemberQualification = ({
  disabled,
  userQualificationFormValue,
  errors,
  handleUserFormChange,
}) => {
  const handleChangeValue = (value = {}) => {
    handleUserFormChange({
      userQualificationFormValue: { ...userQualificationFormValue, ...value },
    });
  };
  return (
    <>
      <Card>
        <CardTitle
          title="Thông tin trình độ chuyên môn"
          subtitle="Bổ sung thông tin trình độ chuyên môn của quân nhân. VD: Học hàm, học vị, trình độ ngoại ngữ...v...v"
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
                label="Trình độ văn hóa"
                validateStatus={
                  errors?.userQualificationFormValue?.TrinhDoVanHoa
                    ? "error"
                    : ""
                }
                help={
                  errors?.userQualificationFormValue?.TrinhDoVanHoa &&
                  errors?.userQualificationFormValue?.TrinhDoVanHoa
                }
                required
                //validateStatus={errors.name ? "error" : ""}
                //help={errors.name}
              >
                <Input
                  placeholder="Trình độ văn hóa"
                  name="TrinhDoVanHoa"
                  value={userQualificationFormValue.TrinhDoVanHoa}
                  onChange={(e) =>
                    handleChangeValue({ TrinhDoVanHoa: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Học hàm"
                validateStatus={
                  errors?.userQualificationFormValue?.HocHam ? "error" : ""
                }
                help={
                  errors?.userQualificationFormValue?.HocHam &&
                  errors?.userQualificationFormValue?.HocHam
                }
                required
              >
                <Input
                  placeholder="Học hàm"
                  name="HocHam"
                  value={userQualificationFormValue.HocHam}
                  onChange={(e) =>
                    handleChangeValue({ HocHam: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Học vị"
                validateStatus={
                  errors?.userQualificationFormValue?.HocVi ? "error" : ""
                }
                help={
                  errors?.userQualificationFormValue?.HocVi &&
                  errors?.userQualificationFormValue?.HocVi
                }
                required
              >
                <Input
                  placeholder="Học vị"
                  name="HocVi"
                  value={userQualificationFormValue.HocVi}
                  onChange={(e) => handleChangeValue({ HocVi: e.target.value })}
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Trình độ ngoại ngữ"
                validateStatus={
                  errors?.userQualificationFormValue?.TrinhDoNgoaiNgu
                    ? "error"
                    : ""
                }
                help={
                  errors?.userQualificationFormValue?.TrinhDoNgoaiNgu &&
                  errors?.userQualificationFormValue?.TrinhDoNgoaiNgu
                }
                required
              >
                <Select
                  allowClear
                  style={{ width: "100%" }}
                  value={userQualificationFormValue.TrinhDoNgoaiNgu}
                  placeholder="Trình độ ngoại ngữ"
                  onChange={(value) => {
                    handleChangeValue({ TrinhDoNgoaiNgu: value });
                  }}
                >
                  <Select.Option key="4" value="IELTS">
                    IELTS
                  </Select.Option>
                  <Select.Option key="5" value="TOEIC">
                    TOEIC
                  </Select.Option>
                  <Select.Option key="6" value="B1">
                    B1
                  </Select.Option>
                  <Select.Option key="7" value="B2">
                    B2
                  </Select.Option>
                  <Select.Option key="8" value="Khác">
                    Khác
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Trình độ quản lý"
                validateStatus={
                  errors?.userQualificationFormValue?.TrinhDoQuanLy
                    ? "error"
                    : ""
                }
                help={
                  errors?.userQualificationFormValue?.TrinhDoQuanLy &&
                  errors?.userQualificationFormValue?.TrinhDoQuanLy
                }
                required
              >
                <Input
                  placeholder="Trình độ quản lý"
                  name="TrinhDoQuanLy"
                  value={userQualificationFormValue.TrinhDoQuanLy}
                  onChange={(e) =>
                    handleChangeValue({ TrinhDoQuanLy: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Trình độ lý luận chính trị"
                validateStatus={
                  errors?.userQualificationFormValue?.TrinhDoLyLuanChinhTri
                    ? "error"
                    : ""
                }
                help={
                  errors?.userQualificationFormValue?.TrinhDoLyLuanChinhTri &&
                  errors?.userQualificationFormValue?.TrinhDoLyLuanChinhTri
                }
                disabled={disabled}
                required
              >
                <Input
                  placeholder="Trình độ lý luận chính trị"
                  name="TrinhDoLyLuanChinhTri"
                  value={userQualificationFormValue.TrinhDoLyLuanChinhTri}
                  onChange={(e) =>
                    handleChangeValue({ TrinhDoLyLuanChinhTri: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Trình độ CMKT"
                validateStatus={
                  errors?.userQualificationFormValue?.TrinhDoCMKT ? "error" : ""
                }
                help={
                  errors?.userQualificationFormValue?.TrinhDoCMKT &&
                  errors?.userQualificationFormValue?.TrinhDoCMKT
                }
                required
              >
                <Input
                  placeholder="Trình độ CMKT"
                  name="TrinhDoCMKT"
                  value={userQualificationFormValue.TrinhDoCMKT}
                  onChange={(e) =>
                    handleChangeValue({ TrinhDoCMKT: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
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

export default memo(MemberQualification);
