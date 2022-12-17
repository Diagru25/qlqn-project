import { Button, Col, Row, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import MemberControl from "../../components/MemberControl";
import Breadcrumb from "../../components/Breadcrumb";

const AddMember = () => {
  const navigate = useNavigate();

  const handleSubmitAddMember = async (memberData) => {
  };

  const renderActions = (onSubmit) => {
    return (
      <Space>
        <Button onClick={() => navigate(-1)}>Hủy</Button>
        <Button type="primary" onClick={onSubmit}>
          Lưu &#38; Hiển thị
        </Button>
      </Space>
    );
  };

  return (
    <>
      <Row gutter={24} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <Breadcrumb title="Thêm mới quân nhân" />
        </Col>
      </Row>
      <div>
        <MemberControl
          verifyInfo=""
          renderActions={renderActions}
          onSubmit={handleSubmitAddMember}
        />
      </div>
    </>
  );
};

export default AddMember;
