import { Card, Col, Form, Input, Row } from "antd";
import React from "react";
import CardTitle from "../../../CardTitle";

const MemberCyberWarfare = () => {
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
                            //validateStatus={errors.name ? "error" : ""}
                            //help={errors.name}
                            >
                                <Input
                                    placeholder="Cấp tổ chức đào tạo"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Chứng chỉ đào tạo"
                                required
                            >
                                <Input
                                    placeholder="Chứng chỉ đào tạo"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Cơ sở đào tạo"
                                required
                            //validateStatus={errors.name ? "error" : ""}
                            //help={errors.name}
                            >
                                <Input
                                    placeholder="Cơ sở đào tạo"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Nội dung đào tạo"
                                required
                            >
                                <Input.TextArea
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
    )
}

export default MemberCyberWarfare;