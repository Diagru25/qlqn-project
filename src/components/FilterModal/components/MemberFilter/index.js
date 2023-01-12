import { Button, Col, Form, Row, Select, Space } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../../../redux/useActions";

const MemberFilter = ({ statisticFormik, handleUpdateStatistic }) => {
  const { handleSubmit } = statisticFormik;
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

  return (
    <>
      <Form colon={false} layout="vertical">
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="Chức vụ">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Chức vụ"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ ChucVu: encodeURI(value) })
                    : handleUpdateStatistic({ ChucVu: "" });
                }}
              >
                {memberPosition.items.map((position) => (
                  <Select.Option key={position.Id} value={position.Ten}>
                    {position.Ten}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Cấp bậc">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Cấp bậc"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ CapBac: encodeURI(value) })
                    : handleUpdateStatistic({ CapBac: "" });
                }}
              >
                {memberRank.items.map((position) => (
                  <Select.Option key={position.Id} value={position.Ten}>
                    {position.Ten}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Đơn vị">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Đơn vị"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ DonVi: encodeURI(value) })
                    : handleUpdateStatistic({ DonVi: "" });
                }}
              >
                {memberUnit.data.map((unit) => (
                  <Select.Option key={unit.key} value={unit.title}>
                    {unit.title}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Trình độ học vấn">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Trình độ học vấn"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ TrinhDoCMKT: encodeURI(value) })
                    : handleUpdateStatistic({ TrinhDoCMKT: encodeURI("") });
                }}
              >
                <Select.Option key="1" value="Tiến sĩ">
                  Tiến sĩ
                </Select.Option>
                <Select.Option key="2" value="Thạc sĩ">
                  Thạc sĩ
                </Select.Option>
                <Select.Option key="3" value="Kỹ sư">
                  Kỹ sư
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Trình độ ngoại ngữ">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Trình độ ngoại ngữ"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({
                        TrinhDoNgoaiNgu: encodeURI(value),
                      })
                    : handleUpdateStatistic({ TrinhDoNgoaiNgu: "" });
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
            <Form.Item label="Số năm nhập ngũ">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Số năm nhập ngũ"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ SoNamNhapNgu: encodeURI(value) })
                    : handleUpdateStatistic({ SoNamNhapNgu: "" });
                  if (value && value === "25") {
                    handleUpdateStatistic({ SoNamNhapNgu: +value });
                  }
                }}
              >
                <Select.Option key="9" value="0-5">
                  0-5
                </Select.Option>
                <Select.Option key="10" value="5-10">
                  5-10
                </Select.Option>
                <Select.Option key="11" value="10-15">
                  10-15
                </Select.Option>
                <Select.Option key="12" value="15-20">
                  15-20
                </Select.Option>
                <Select.Option key="13" value="20-25">
                  20-25
                </Select.Option>
                <Select.Option key="14" value="25">
                  25 năm trở lên
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Số tuổi">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Số tuổi"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ SoTuoi: encodeURI(value) })
                    : handleUpdateStatistic({ SoTuoi: "" });
                  if (value && value === "30") {
                    handleUpdateStatistic({ SoTuoi: +value });
                  }
                }}
              >
                <Select.Option key="14" value="30">
                  Nhỏ hơn 30
                </Select.Option>
                <Select.Option key="15" value="30-35">
                  30-35
                </Select.Option>
                <Select.Option key="16" value="35-40">
                  35-40
                </Select.Option>
                <Select.Option key="17" value="40-45">
                  40-45
                </Select.Option>
                <Select.Option key="18" value="45-50">
                  45-50
                </Select.Option>
                <Select.Option key="19" value="50-55">
                  50-55
                </Select.Option>
                <Select.Option key="20" value="55-60">
                  55-60
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Khu vực địa lý">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Khu vực địa lý"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ KhuVucDiaLy: encodeURI(value) })
                    : handleUpdateStatistic({ KhuVucDiaLy: "" });
                }}
              >
                <Select.Option key="21" value="TP Hà Nội">
                  TP Hà Nội
                </Select.Option>
                <Select.Option key="22" value="Ngoài TP Hà Nội">
                  Ngoài TP Hà Nội
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Chứng chỉ đào tạo">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Chứng chỉ đào tạo"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({
                        ChungChiDaoTao: encodeURI(value),
                      })
                    : handleUpdateStatistic({ ChungChiDaoTao: "" });
                }}
              >
                <Select.Option key="23" value="Chứng chỉ an toàn thông tin">
                  Chứng chỉ an toàn thông tin
                </Select.Option>
                <Select.Option key="24" value="Chứng chỉ công nghệ thông tin">
                  Chứng chỉ công nghệ thông tin
                </Select.Option>
                <Select.Option key="25" value="Chứng chỉ hệ thống mạng">
                  Chứng chỉ hệ thống mạng
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Chuyên môn kỹ thuật">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Chuyên môn kỹ thuật"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ TrinhDoCMKT: encodeURI(value) })
                    : handleUpdateStatistic({ TrinhDoCMKT: "" });
                }}
              >
                <Select.Option key="26" value="Tiến sĩ">
                  Tiến sĩ
                </Select.Option>
                <Select.Option key="27" value="Thạc sĩ">
                  Thạc sĩ
                </Select.Option>
                <Select.Option key="28" value="Kỹ sư">
                  10-15
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Loại hình đào tạo">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Loại hình đào tạo"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({
                        LoaiHinhDaoTao: encodeURI(value),
                      })
                    : handleUpdateStatistic({ LoaiHinhDaoTao: "" });
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
            <Form.Item label="Cơ sở đào tạo">
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Cơ sở đào tạo"
                onChange={(value) => {
                  value
                    ? handleUpdateStatistic({ CoSoDaoTao: encodeURI(value) })
                    : handleUpdateStatistic({ CoSoDaoTao: "" });
                }}
              >
                <Select.Option key="31" value="TP Hà Nội">
                  TP Hà Nội
                </Select.Option>
                <Select.Option key="32" value="Ngoài TP Hà Nội">
                  Ngoài TP Hà Nội
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Space>
            <Button onClick={handleSubmit}>Thống kê</Button>
            {/* <Button onClick={handleClearFilter}>Xóa lọc</Button> */}
          </Space>
        </Row>
      </Form>
    </>
  );
};

export default MemberFilter;
