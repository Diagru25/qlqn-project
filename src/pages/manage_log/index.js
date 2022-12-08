import { Col, Row, Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import authApi from "../../services/apis/authApi";
import Breadcrumb from "../../components/Breadcrumb";

const ManageLog = () => {
  const [systemLog, setSystemLog] = useState({
    page_size: 20,
    page_index: 1,
    items: [],
    isLoading: true,
  });

  const [pagination, setPagination] = useState({
    pageSize: 10,
    total: 0,
    current: 1,
  });

  useEffect(() => {
    getSystemLog(pagination.current, pagination.pageSize);
  }, [pagination.current]);

  const getSystemLog = async (pageIndex, pageSize) => {
    try {
      const res = await authApi.getSystemLog(pageIndex, pageSize);
      const { items, total, page_index, page_size } = res.result;
      setSystemLog((state) => {
        return {
          ...state,
          items: items,
          page_index: page_index,
          page_size: page_size,
          isLoading: false,
        };
      });
      setPagination((state) => {
        return {
          ...state,
          total: total,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return (systemLog.page_index - 1) * systemLog.page_size + record.key;
      },
      width: 20,
    },
    {
      title: "Thời gian",
      dataIndex: "created_at",
      key: "created_at",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return moment(record.created_at).format("DD-MM-YYYY hh:mm a");
      },
      width: 250,
    },
    {
      title: "Phần mềm sử dụng",
      dataIndex: "user_agent",
      key: "user_agent",
      render: (_, record) => record.user_agent,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return record.action;
      },
      width: 200,
    },
  ];

  const handleTableChange = (page) => {
    setPagination({
      ...pagination,
      current: page.current,
    });
  };

  const data = systemLog.items.map((item, index) => {
    return { ...item, key: index };
  });

  console.log(systemLog);

  return (
    <>
      <Row gutter={24} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <Breadcrumb title="Nhật ký người dùng" />
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={data}
        loading={systemLog.isLoading}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </>
  );
};

export default ManageLog;
