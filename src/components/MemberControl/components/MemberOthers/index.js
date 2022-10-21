import { Card, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import React from "react";
import CardTitle from "../../../CardTitle";

const MemberOthers = () => {
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
              <Form.Item label="Sức khỏe">
                <Input placeholder="Tình trạng sức khỏe" allowClear />
              </Form.Item>
              <Form.Item label="Nhóm máu">
                <Input placeholder="Nhóm máu" allowClear />
              </Form.Item>
              <Form.Item label="Số BHXH">
                <Input placeholder="Bảo hiểm xã hội" allowClear />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item label="Bậc lương">
                <Input placeholder="Tình trạng sức khỏe" allowClear />
              </Form.Item>
              <Form.Item label="Hệ số lương">
                <Input placeholder="Nhóm máu" allowClear />
              </Form.Item>
              <Form.Item label="Tình trạng hôn nhân">
                <Input placeholder="Tình trạng hôn nhân" allowClear />
              </Form.Item>
              <Form.Item label="Ngành quản lý">
                <Input placeholder="Ngành quản lý" allowClear />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default MemberOthers;
