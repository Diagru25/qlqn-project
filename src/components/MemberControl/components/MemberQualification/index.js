import { Card, Col, Form, Input, Row } from "antd";
import React from "react";
import CardTitle from "../../../CardTitle";

const MemberQualification = () => {
    return (
        <>
            <Card>
                <CardTitle
                    title="Thông tin trình độ chuyên môn"
                    //subtitle="Bổ sung thông tin trình độ chuyên môn của quân nhân. VD: Họ tên, đia chỉ, ...v...v"
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
                                label="Trình dộ văn hóa"
                                required
                            //validateStatus={errors.name ? "error" : ""}
                            //help={errors.name}
                            >
                                <Input
                                    placeholder="Trình dộ văn hóa"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Học hàm"
                                required
                            >
                                <Input
                                    placeholder="Học hàm"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Học vị"
                                required
                            >
                                <Input
                                    placeholder="Học vị"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Trình độ quản lỹ"
                                required
                            >
                                <Input
                                    placeholder="Trình độ quản lỹ"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Trình độ lý luận chính trị"
                                required
                            >
                                <Input
                                    placeholder="Trình độ lý luận chính trị"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Trình độ CMKT"
                                required
                            >
                                <Input
                                    placeholder="Trình độ CMKT"
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

export default MemberQualification;