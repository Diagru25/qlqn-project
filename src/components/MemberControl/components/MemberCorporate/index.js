import { Card, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import moment from "moment";
import React, { memo } from "react";
import { DATE_FORMAT } from "../../../../constants/datetime_format.constant";
import CardTitle from "../../../CardTitle";

const MemberCorporate = ({
  disabled,
  userCorporateFormValue,
  errors,
  handleUserFormChange,
}) => {
  const handleChangeValue = (value = {}) => {
    handleUserFormChange({
      userCorporateFormValue: { ...userCorporateFormValue, ...value },
    });
  };
  return (
    <>
      <Card>
        <CardTitle
          title="Thông tin đoàn thể"
          //subtitle="Bổ sung thông tin đoàn của quân nhân. VD: Họ tên, đia chỉ, ...v...v"
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
                label="Ngày vào đảng"
                validateStatus={
                  errors?.userCorporateFormValue?.NgayVaoDang ? "error" : ""
                }
                help={
                  errors?.userCorporateFormValue?.NgayVaoDang &&
                  errors?.userCorporateFormValue?.NgayVaoDang
                }
                required
              >
                <DatePicker
                  placeholder="Ngày vào đảng"
                  name="NgayVaoDang"
                  value={
                    userCorporateFormValue.NgayVaoDang
                      ? moment(+userCorporateFormValue.NgayVaoDang)
                      : undefined
                  }
                  disabled={disabled}
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgayVaoDang: time });
                    } else {
                      handleChangeValue({ NgayVaoDang: moment() });
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                label="Nơi vào đảng"
                validateStatus={
                  errors?.userCorporateFormValue?.NoiVaoDang ? "error" : ""
                }
                help={
                  errors?.userCorporateFormValue?.NoiVaoDang &&
                  errors?.userCorporateFormValue?.NoiVaoDang
                }
                required
                //validateStatus={errors.name ? "error" : ""}
                //help={errors.name}
              >
                <Input
                  placeholder="Nơi vào đảng"
                  name="NoiVaoDang"
                  value={userCorporateFormValue.NoiVaoDang}
                  onChange={(e) =>
                    handleChangeValue({ NoiVaoDang: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>

              <Form.Item
                label="Ngày vào đảng chính thức"
                validateStatus={
                  errors?.userCorporateFormValue?.NgayVaoDangChinhThuc
                    ? "error"
                    : ""
                }
                help={
                  errors?.userCorporateFormValue?.NgayVaoDangChinhThuc &&
                  errors?.userCorporateFormValue?.NgayVaoDangChinhThuc
                }
                required
              >
                <DatePicker
                  placeholder="Ngày vào đảng chính thức"
                  name="NgayVaoDangChinhThuc"
                  value={
                    userCorporateFormValue.NgayVaoDangChinhThuc
                      ? moment(+userCorporateFormValue.NgayVaoDangChinhThuc)
                      : undefined
                  }
                  disabled={disabled}
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgayVaoDangChinhThuc: time });
                    } else {
                      handleChangeValue({ NgayVaoDangChinhThuc: moment() });
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Ngày vào đoàn"
                validateStatus={
                  errors?.userCorporateFormValue?.NgayVaoDoan ? "error" : ""
                }
                help={
                  errors?.userCorporateFormValue?.NgayVaoDoan &&
                  errors?.userCorporateFormValue?.NgayVaoDoan
                }
                required
              >
                <DatePicker
                  placeholder="Ngày vào đoàn"
                  name="NgayVaoDoan"
                  value={
                    userCorporateFormValue.NgayVaoDoan
                      ? moment(+userCorporateFormValue.NgayVaoDoan)
                      : undefined
                  }
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgayVaoDoan: time });
                    } else {
                      handleChangeValue({ NgayVaoDoan: moment() });
                    }
                  }}
                  disabled={disabled}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                label="Chức vụ đảng"
                validateStatus={
                  errors?.userCorporateFormValue?.ChucVuDang ? "error" : ""
                }
                help={
                  errors?.userCorporateFormValue?.ChucVuDang &&
                  errors?.userCorporateFormValue?.ChucVuDang
                }
                required
                //validateStatus={errors.name ? "error" : ""}
                //help={errors.name}
              >
                <Input
                  placeholder="Chức vụ đảng"
                  name="ChucVuDang"
                  value={userCorporateFormValue.ChucVuDang}
                  onChange={(e) =>
                    handleChangeValue({ ChucVuDang: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Chức vụ đoàn"
                validateStatus={
                  errors?.userCorporateFormValue?.ChucVuDoan ? "error" : ""
                }
                help={
                  errors?.userCorporateFormValue?.ChucVuDoan &&
                  errors?.userCorporateFormValue?.ChucVuDoan
                }
                required
                //validateStatus={errors.name ? "error" : ""}
                //help={errors.name}
              >
                <Input
                  placeholder="Chức vụ đoàn"
                  name="ChucVuDoan"
                  value={userCorporateFormValue.ChucVuDoan}
                  onChange={(e) =>
                    handleChangeValue({ ChucVuDoan: e.target.value })
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

export default memo(MemberCorporate);
