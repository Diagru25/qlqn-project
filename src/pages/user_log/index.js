import { Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../redux/useActions";

const UserLog = () => {
  const dispatch = useDispatch();
  const userLogs = useSelector((state) => state.userReducer.userLogs);

  const [pagination, setPagination] = useState({
    pageSize: 0,
    total: 0,
    current: 1,
  });

  const { userActions } = useActions();

  useEffect(() => {
    console.log("useEffect 1", pagination);
    dispatch(userActions.actions.getUserLogs(pagination.current));
  }, [dispatch, userActions, pagination]);

  useEffect(() => {
    setPagination({
      ...pagination,
      total: userLogs.total,
      pageSize: userLogs.page_size,
    });
  }, [userLogs.total, userLogs.page_size]);

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return (userLogs.page_index - 1) * userLogs.page_size + record.key;
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

  const data = userLogs.items.map((item, index) => {
    return { ...item, key: index };
  });

  if (userLogs.total !== 0) {
    return (
      <>
        <Table
          columns={columns}
          dataSource={data}
          loading={userLogs.isLoading}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </>
    );
  }
};

export default UserLog;
