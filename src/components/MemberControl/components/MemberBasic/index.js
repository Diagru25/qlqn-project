import { Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import moment from "moment";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DATE_FORMAT } from "../../../../constants/datetime_format.constant";
import useActions from "../../../../redux/useActions";
import CardTitle from "../../../CardTitle";

const MemberBasic = ({
  userBasicFormValue,
  errors,
  handleUserFormChange,
  disabled,
}) => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  const memberRank = useSelector((state) => state.memberListReducer.memberRank);
  const memberPosition = useSelector(
    (state) => state.memberListReducer.memberPosition
  );
  const memberUnit = useSelector((state) => state.memberListReducer.memberUnit);

  useEffect(() => {
    dispatch(memberActions.actions.getMemberPosition());
    dispatch(memberActions.actions.getMemberRank());
    dispatch(memberActions.actions.getMemberUnit());
  }, [dispatch, memberActions]);

  const handleChangeValue = (value = {}) => {
    handleUserFormChange({
      userBasicFormValue: { ...userBasicFormValue, ...value },
    });
  };
  return (
    <>
      <Card>
        <CardTitle
          title="Thông tin cơ bản"
          subtitle="Bổ sung thông tin cơ bản của quân nhân. VD: Họ tên, đia chỉ, ...v...v"
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
                label="Họ và tên"
                required
                validateStatus={
                  errors?.userBasicFormValue?.HoVaTen ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.HoVaTen &&
                  errors?.userBasicFormValue?.HoVaTen
                }
              >
                <Input
                  placeholder="Họ và tên"
                  name="HoVaTen"
                  value={userBasicFormValue.HoVaTen}
                  onChange={(e) =>
                    handleChangeValue({ HoVaTen: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Họ và tên khai sinh"
                validateStatus={
                  errors?.userBasicFormValue?.HoVaTenKhaiSinh ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.HoVaTenKhaiSinh &&
                  errors?.userBasicFormValue?.HoVaTenKhaiSinh
                }
                required
              >
                <Input
                  placeholder="Họ và tên khai sinh"
                  name="HoVaTenKhaiSinh"
                  value={userBasicFormValue.HoVaTenKhaiSinh}
                  onChange={(e) =>
                    handleChangeValue({ HoVaTenKhaiSinh: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Bí danh"
                validateStatus={
                  errors?.userBasicFormValue?.BiDanh ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.BiDanh &&
                  errors?.userBasicFormValue?.BiDanh
                }
                required
              >
                <Input
                  placeholder="Bí danh"
                  name="BiDanh"
                  //value={name}
                  //onChange={}
                  value={userBasicFormValue.BiDanh}
                  onChange={(e) =>
                    handleChangeValue({ BiDanh: e.target.value })
                  }
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Tên khác"
                validateStatus={
                  errors?.userBasicFormValue?.TenKhac ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.TenKhac &&
                  errors?.userBasicFormValue?.TenKhac
                }
                required
              >
                <Input
                  placeholder="Tên khác"
                  name="TenKhac"
                  value={userBasicFormValue.TenKhac}
                  onChange={(e) =>
                    handleChangeValue({ TenKhac: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Số hiệu QN"
                validateStatus={
                  errors?.userBasicFormValue?.SoHieuQuanNhan ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.SoHieuQuanNhan &&
                  errors?.userBasicFormValue?.SoHieuQuanNhan
                }
                required
              >
                <Input
                  placeholder="Số hiệu QN"
                  name="SoHieuQuanNhan"
                  value={userBasicFormValue.SoHieuQuanNhan}
                  onChange={(e) =>
                    handleChangeValue({ SoHieuQuanNhan: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Số CMND"
                validateStatus={
                  errors?.userBasicFormValue?.SoCMND ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.SoCMND &&
                  errors?.userBasicFormValue?.SoCMND
                }
                required
              >
                <Input
                  placeholder="Số CMND"
                  name="SoCMND"
                  value={userBasicFormValue.SoCMND}
                  onChange={(e) =>
                    handleChangeValue({ SoCMND: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Giới tính"
                validateStatus={
                  errors?.userBasicFormValue?.GioiTinh ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.GioiTinh &&
                  errors?.userBasicFormValue?.GioiTinh
                }
                required
              >
                <Select
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Giới tính"
                  defaultValue={"nam"}
                  value={userBasicFormValue.GioiTinh}
                  onChange={(value) => {
                    handleChangeValue({ GioiTinh: value });
                  }}
                  disabled={disabled}
                  //onChange={(e) => handleChangeValue({})}
                >
                  <Select.Option value="nam">Nam</Select.Option>
                  <Select.Option value="nữ">Nữ</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Cấp bậc"
                validateStatus={
                  errors?.userBasicFormValue?.CapBac ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.CapBac &&
                  errors?.userBasicFormValue?.CapBac
                }
                required
              >
                <Select
                  placeholder="Cấp bậc"
                  name="CapBac"
                  style={{ width: "100%" }}
                  value={userBasicFormValue.CapBac}
                  onChange={(value) => {
                    handleChangeValue({ CapBac: value });
                  }}
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                >
                  {memberRank.items.map((rank) => (
                    <Select.Option key={rank.Id} value={rank.Ten}>
                      {rank.Ten}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Chức vụ"
                validateStatus={
                  errors?.userBasicFormValue?.ChucVu ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.ChucVu &&
                  errors?.userBasicFormValue?.ChucVu
                }
                required
              >
                <Select
                  placeholder="Chức vụ"
                  name="ChucVu"
                  style={{ width: "100%" }}
                  value={userBasicFormValue.ChucVu}
                  onChange={(value) => {
                    handleChangeValue({ ChucVu: value });
                  }}
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                >
                  {memberPosition.items.map((position) => (
                    <Select.Option key={position.Id} value={position.Ten}>
                      {position.Ten}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Đơn vị"
                validateStatus={
                  errors?.userBasicFormValue?.ChucVu ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.ChucVu &&
                  errors?.userBasicFormValue?.ChucVu
                }
                required
              >
                <Select
                  placeholder="Đơn vị"
                  name="DonVi"
                  style={{ width: "100%" }}
                  value={userBasicFormValue.DonVi}
                  onChange={(value) => {
                    handleChangeValue({ DonVi: value });
                  }}
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                >
                  {memberUnit.data.map((unit) => (
                    <Select.Option key={unit.key} value={unit.title}>
                      {unit.title}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Ngày nhận cấp bậc"
                validateStatus={
                  errors?.userBasicFormValue?.NgayNhanCapBac ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.NgayNhanCapBac &&
                  errors?.userBasicFormValue?.NgayNhanCapBac
                }
                required
              >
                <DatePicker
                  name="NgayNhanCapBac"
                  value={
                    userBasicFormValue.NgayNhanCapBac
                      ? moment(+userBasicFormValue.NgayNhanCapBac)
                      : undefined
                  }
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgayNhanCapBac: time });
                    } else {
                      handleChangeValue({ NgayNhanCapBac: moment() });
                    }
                  }}
                  disabled={disabled}
                  placeholder="Ngày nhận cấp bậc"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                label="Ngày nhận chức vụ"
                validateStatus={
                  errors?.userBasicFormValue?.NgayNhanChucVu ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.NgayNhanChucVu &&
                  errors?.userBasicFormValue?.NgayNhanChucVu
                }
                required
              >
                <DatePicker
                  placeholder="Ngày nhận chức vụ"
                  name="NgayNhanChucVu"
                  value={
                    userBasicFormValue.NgayNhanChucVu
                      ? moment(+userBasicFormValue.NgayNhanChucVu)
                      : undefined
                  }
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgayNhanChucVu: time });
                    } else {
                      handleChangeValue({ NgayNhanChucVu: moment() });
                    }
                  }}
                  disabled={disabled}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Ngày sinh"
                validateStatus={
                  errors?.userBasicFormValue?.NgaySinh ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.NgaySinh &&
                  errors?.userBasicFormValue?.NgaySinh
                }
                required
              >
                <DatePicker
                  placeholder="Ngày sinh"
                  name="NgaySinh"
                  value={
                    userBasicFormValue.NgaySinh
                      ? moment(+userBasicFormValue.NgaySinh)
                      : undefined
                  }
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgaySinh: time });
                    } else {
                      handleChangeValue({ NgaySinh: moment() });
                    }
                  }}
                  disabled={disabled}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                label="Dân tộc"
                validateStatus={
                  errors?.userBasicFormValue?.DanToc ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.DanToc &&
                  errors?.userBasicFormValue?.DanToc
                }
                required
              >
                <Input
                  placeholder="Dân tộc"
                  name="DanToc"
                  value={userBasicFormValue.DanToc}
                  onChange={(e) =>
                    handleChangeValue({ DanToc: e.target.value })
                  }
                  //value={name}
                  //onChange={}
                  disabled={disabled}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Tôn giáo"
                validateStatus={
                  errors?.userBasicFormValue?.TonGiao ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.TonGiao &&
                  errors?.userBasicFormValue?.TonGiao
                }
                required
              >
                <Input
                  placeholder="Tôn giáo"
                  name="TonGiao"
                  value={userBasicFormValue.TonGiao}
                  onChange={(e) =>
                    handleChangeValue({ TonGiao: e.target.value })
                  }
                  disabled={disabled}
                  //value={name}
                  //onChange={}
                  allowClear
                />
              </Form.Item>
              <Form.Item
                label="Ngày nhập ngũ"
                validateStatus={
                  errors?.userBasicFormValue?.NgayNhapNgu ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.NgayNhapNgu &&
                  errors?.userBasicFormValue?.NgayNhapNgu
                }
                required
              >
                <DatePicker
                  placeholder="Ngày nhập ngũ"
                  name="NgayNhapNgu"
                  value={
                    userBasicFormValue.NgayNhapNgu
                      ? moment(+userBasicFormValue.NgayNhapNgu)
                      : undefined
                  }
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgayNhapNgu: time });
                    } else {
                      handleChangeValue({ NgayNhapNgu: moment() });
                    }
                  }}
                  disabled={disabled}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item label="Ngày xuất ngũ">
                <DatePicker
                  placeholder="Ngày xuất ngũ"
                  name="NgayXuatNgu"
                  value={
                    userBasicFormValue.NgayXuatNgu !== "NaN" &&
                    userBasicFormValue.NgayXuatNgu
                      ? moment(+userBasicFormValue.NgayXuatNgu)
                      : ""
                  }
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgayXuatNgu: time });
                    } else {
                      handleChangeValue({ NgayXuatNgu: "" });
                    }
                  }}
                  disabled={disabled}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item label="Ngày tái ngũ">
                <DatePicker
                  placeholder="Ngày tái ngũ"
                  name="NgayTaiNgu"
                  value={
                    userBasicFormValue.NgayTaiNgu !== "NaN" &&
                    userBasicFormValue.NgayTaiNgu
                      ? moment(+userBasicFormValue.NgayTaiNgu)
                      : ""
                  }
                  format={DATE_FORMAT}
                  onChange={(date) => {
                    console.log(date);
                    if (date) {
                      const time = moment(date).valueOf().toString();
                      handleChangeValue({ NgayTaiNgu: time });
                    } else {
                      handleChangeValue({ NgayTaiNgu: "" });
                    }
                  }}
                  disabled={disabled}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                label="Nguyên quán"
                validateStatus={
                  errors?.userBasicFormValue?.NguyenQuan ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.NguyenQuan &&
                  errors?.userBasicFormValue?.NguyenQuan
                }
                required
                //validateStatus={errors.description ? "error" : ""}
                //help={errors.description}
              >
                <Input.TextArea
                  name="NguyenQuan"
                  value={userBasicFormValue.NguyenQuan}
                  onChange={(e) =>
                    handleChangeValue({ NguyenQuan: e.target.value })
                  }
                  disabled={disabled}
                  //rows={10}
                  //value={description}
                  //onChange={}
                />
              </Form.Item>
              <Form.Item
                label="Thường trú"
                validateStatus={
                  errors?.userBasicFormValue?.ThuongTru ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.ThuongTru &&
                  errors?.userBasicFormValue?.ThuongTru
                }
                required
                //validateStatus={errors.description ? "error" : ""}
                //help={errors.description}
              >
                <Input.TextArea
                  name="ThuongTru"
                  value={userBasicFormValue.ThuongTru}
                  onChange={(e) =>
                    handleChangeValue({ ThuongTru: e.target.value })
                  }
                  disabled={disabled}
                  //rows={10}
                  //value={description}
                  //onChange={}
                />
              </Form.Item>
              <Form.Item
                label="TP gia đình"
                validateStatus={
                  errors?.userBasicFormValue?.TPGiaDinh ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.TPGiaDinh &&
                  errors?.userBasicFormValue?.TPGiaDinh
                }
                required
                //validateStatus={errors.description ? "error" : ""}
                //help={errors.description}
              >
                <Input.TextArea
                  name="TPGiaDinh"
                  value={userBasicFormValue.TPGiaDinh}
                  onChange={(e) =>
                    handleChangeValue({ TPGiaDinh: e.target.value })
                  }
                  disabled={disabled}
                  //rows={10}
                  //value={description}
                  //onChange={}
                />
              </Form.Item>
              <Form.Item
                label="TP bản thân"
                validateStatus={
                  errors?.userBasicFormValue?.TPBanThan ? "error" : ""
                }
                help={
                  errors?.userBasicFormValue?.TPBanThan &&
                  errors?.userBasicFormValue?.TPBanThan
                }
                required
                //validateStatus={errors.description ? "error" : ""}
                //help={errors.description}
              >
                <Input.TextArea
                  name="TPBanThan"
                  value={userBasicFormValue.TPBanThan}
                  onChange={(e) =>
                    handleChangeValue({ TPBanThan: e.target.value })
                  }
                  disabled={disabled}
                  //rows={10}
                  //value={description}
                  //onChange={}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default memo(MemberBasic);
