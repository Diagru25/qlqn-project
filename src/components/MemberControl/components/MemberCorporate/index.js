import { Card, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import React from "react";
import CardTitle from "../../../CardTitle";

const MemberCorporate = () => {
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
                                required
                            >
                                <DatePicker placeholder="Ngày vào đảng" style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Nơi vào đảng"
                                required
                            //validateStatus={errors.name ? "error" : ""}
                            //help={errors.name}
                            >
                                <Input
                                    placeholder="Nơi vào đảng"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            
                            <Form.Item
                                label="Ngày vào đảng chính thức"
                                required
                            >
                                <DatePicker placeholder="Ngày vào đảng chính thức" style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Ngày vào đoàn"
                                required
                            >
                                <DatePicker placeholder="Ngày vào đoàn" style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Chức vụ đảng"
                                required
                            //validateStatus={errors.name ? "error" : ""}
                            //help={errors.name}
                            >
                                <Input
                                    placeholder="Chức vụ đảng"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Chức vu đoàn"
                                required
                            //validateStatus={errors.name ? "error" : ""}
                            //help={errors.name}
                            >
                                <Input
                                    placeholder="Chức vu đoàn"
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
    )
}

export default MemberCorporate;