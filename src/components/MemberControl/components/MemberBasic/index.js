import { Card, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import React from "react";
import CardTitle from "../../../CardTitle";

const MemberBasic = () => {
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
                            //validateStatus={errors.name ? "error" : ""}
                            //help={errors.name}
                            >
                                <Input
                                    placeholder="Họ và tên"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Họ và tên khai sinh"
                                required
                            >
                                <Input
                                    placeholder="Họ và tên khai sinh"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Bí danh"
                                required
                            >
                                <Input
                                    placeholder="Bí danh"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Tên khác"
                                required
                            >
                                <Input
                                    placeholder="Tên khác"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Số hiệu QN"
                                required
                            >
                                <Input
                                    placeholder="Số hiệu QN"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Số CMND"
                                required
                            >
                                <Input
                                    placeholder="Số CMND"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Giới tính"
                                required
                            >
                                <Select
                                    allowClear
                                    style={{ width: '100%' }}
                                    placeholder="Giới tính"
                                    defaultValue={"nam"}
                                    //onChange={handleChange}
                                >
                                    <Select.Option value="nam">Nam</Select.Option>
                                    <Select.Option value="nữ">Nữ</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Cấp bậc"
                                required
                            >
                                <Input
                                    placeholder="Cấp bậc"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Ngày nhận cấp bậc"
                                required
                            >
                                <DatePicker placeholder="Ngày nhận cấp bậc" style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Chức vụ"
                                required
                            >
                                <Input
                                    placeholder="Chức vụ"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Ngày nhận chức vụ"
                                required
                            >
                                <DatePicker placeholder="Ngày nhận chức vụ" style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Ngày sinh"
                                required
                            >
                                <DatePicker placeholder="Ngày sinh" style={{ width: '100%' }}/>

                            </Form.Item>
                            <Form.Item
                                label="Dân tộc"
                                required
                            >
                                <Input
                                    placeholder="Dân tộc"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Tôn giáo"
                                required
                            >
                                <Input
                                    placeholder="Tôn giáo"
                                    //value={name}
                                    //onChange={}
                                    allowClear
                                />
                            </Form.Item>
                            <Form.Item
                                label="Ngày nhập ngũ"
                                required
                            >
                                <DatePicker placeholder="Ngày nhập ngũ" style={{ width: '100%' }} />

                            </Form.Item>
                            <Form.Item
                                label="Ngày xuất ngũ"
                                required
                            >
                                <DatePicker placeholder="Ngày xuất ngũ" style={{ width: '100%' }} />

                            </Form.Item>
                            <Form.Item
                                label="Ngày tái ngũ"
                                required
                            >
                                <DatePicker placeholder="Ngày tái ngũ" style={{ width: '100%' }} />

                            </Form.Item>
                            <Form.Item
                                label="Nguyên quán"
                                required
                            //validateStatus={errors.description ? "error" : ""}
                            //help={errors.description}
                            >
                                <Input.TextArea
                                //rows={10}
                                //value={description}
                                //onChange={}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Thường trú"
                                required
                            //validateStatus={errors.description ? "error" : ""}
                            //help={errors.description}
                            >
                                <Input.TextArea
                                //rows={10}
                                //value={description}
                                //onChange={}
                                />
                            </Form.Item>
                            <Form.Item
                                label="TP gia đình"
                                required
                            //validateStatus={errors.description ? "error" : ""}
                            //help={errors.description}
                            >
                                <Input.TextArea
                                //rows={10}
                                //value={description}
                                //onChange={}
                                />
                            </Form.Item>
                            <Form.Item
                                label="TP bản thân"
                                required
                            //validateStatus={errors.description ? "error" : ""}
                            //help={errors.description}
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

export default MemberBasic;