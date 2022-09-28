import { Space, Table, Col, Row, Divider, Button } from "antd";
import SearchInput from "./components/SearchInput";

import styles from "./index.module.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Sửa</a>
        <a>Xóa</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

const infoPage = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <SearchInput />
        </Col>
        <Col span={12}>
          <div className={styles["right-control"]}>
            <Button type="primary">Tạo mới</Button>
          </div>
        </Col>
      </Row>
      <Divider />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default infoPage;
