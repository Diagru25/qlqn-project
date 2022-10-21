import { Space, Table, Col, Row, Divider, Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { adminRoute } from "../../constants/route.constant";
import SearchInput from "../../components/SearchInput/SearchInput";

import styles from "./style.module.css";

const columns = [
  {
    title: "HashID",
    dataIndex: "hashID",
    key: "hashID",
    width: 400,
    ellipsis: {
      showTitle: false,
    },
    render: (hashID) => (
      <Tooltip placement="topLeft" title={hashID}>
        {hashID}
      </Tooltip>
    ),
  },
  {
    title: "Họ và tên",
    dataIndex: "name",
    key: "name",
    //render: (name) => <a>{name}</a>,
    width: 300
  },
  {
    title: "Chức vụ",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Cấp bậc",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "Đơn vị",
    dataIndex: "unit",
    key: "unit",

  },
  {
    title: "Hành động",
    key: "action",
    render: (_, record) => (
      <Space>
        <Button type="link">Sửa</Button>
        <Button type="link" danger>Xoa</Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    hashID:
      "0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26d",
    name: "Nguyễn Quý Khang",
    position: "Trưởng phòng",
    unit: "Viện 10 - BTL 86",
    rank: "Thượng tá",
  },
  {
    key: "2",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Lê Thị Anh",
    position: "Phó trưởng phòng",
    unit: "Viện 10 - BTL 86",
    rank: "Thiếu tá",
  },
  {
    key: "3",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Vũ Tuấn Sơn",
    position: "Nghiên cứu viên",
    unit: "Viện 10 - BTL 86",
    rank: "Thượng úy",
  },
  {
    key: "4",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Nguyễn Anh Tú",
    position: "Phó trưởng phòng",
    unit: "Viện 10 - BTL 86",
    rank: "Đại úy",
  },
  {
    key: "5",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Phùng Minh Hiếu",
    position: "Nghiên cứu viên",
    unit: "Lữ đoàn 1 - BTL 86",
    rank: "Thiếu úy",
  },
  {
    key: "6",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Phạm Thanh Tùng",
    position: "Sỹ quan hành động",
    unit: "Lữ đoàn 3 - BTL 86",
    rank: "Trung úy",
  },
  {
    key: "7",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Nguyễn Hoàng Huấn",
    position: "Nghiên cứu viên",
    unit: "Viện 10 - BTL 86",
    rank: "Thượng úy",
  },
  {
    key: "8",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Nguyễn Thanh Long",
    position: "Nhân viên",
    unit: "Lữ đoàn 2 - BTL 86",
    rank: "Trung úy CN",
  },
  {
    key: "9",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Phan Trọng Duy",
    position: "Nghiên cứu viên",
    unit: "Viện 10 - BTL 86",
    rank: "Thượng úy",
  },
  {
    key: "10",
    hashID: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
    name: "Lưu Đức Anh",
    position: "Nghiên cứu viên",
    unit: "Viện 10 - BTL 86",
    rank: "Thượng úy",
  },
];

const Members = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col span={12}>
          <SearchInput />
        </Col>
        <Col span={12}>
          <div className={styles["right-control"]}>
            <Button type="primary" className={styles["export-btn"]}>Xuất file</Button>
            <Button type="primary" onClick={() => navigate(adminRoute.ADD_MEMBER)}>Tạo mới</Button>
          </div>
        </Col>
      </Row>
      <Divider />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Members;
