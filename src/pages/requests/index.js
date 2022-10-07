import { Badge, Space, Table } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import styles from "./style.module.css";

const columns = [
  {
    title: "Thời gian",
    dataIndex: "time",
    key: "time",
    width: 250,
  },
  {
    title: "Người dùng",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Chi tiết",
    dataIndex: "description",
    key: "description",
    width: 700,
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    width: 200,
  },
  {
    title: "Hành động",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <CheckOutlined
          className={[styles["action-btn"], styles["approve"]].join(" ")}
        />
        <CloseOutlined
          className={[styles["action-btn"], styles["remove"]].join(" ")}
        />
      </Space>
    ),
    width: 200,
  },
];

const data = [
  {
    key: "1",
    time: new Date("12/09/2022").toLocaleString(),
    user: "Nguyễn Thị A",
    description: "Tôi muốn sửa lại bản hồ sơ",
    status: <Badge status="success" text="Đã xử lý" />,
  },
  {
    key: "2",
    time: new Date().toLocaleString(),
    user: "Nguyễn Hoàng B",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    status: <Badge status="warning" text="Chờ xử lý" />,
  },
  {
    key: "3",
    time: new Date().toLocaleString(),
    user: "Lê Văn A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    status: <Badge status="success" text="Đã xử lý" />,
  },
  {
    key: "4",
    time: new Date().toLocaleString(),
    user: "Phùng Văn A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      status: <Badge status="warning" text="Chờ xử lý" />,
  },
  {
    key: "5",
    time: new Date().toLocaleString(),
    user: "Nguyễn Văn B",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    status: <Badge status="success" text="Đã xử lý" />,
  },
  {
    key: "6",
    time: new Date().toLocaleString(),
    user: "Nguyễn Văn A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    status: <Badge status="success" text="Đã xử lý" />,
  },
];

const ApprovalRequest = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default ApprovalRequest;
