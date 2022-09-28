import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import MemberControl from "../../components/MemberControl";

const AddMember = () => {
    const navigate = useNavigate();

    const handleSubmitAddMember = async (memberData) => {
        console.log(memberData);
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
        <div>
            <MemberControl
                renderActions={renderActions}
                onSubmit={handleSubmitAddMember}
            />
        </div>
    );
};

export default AddMember;