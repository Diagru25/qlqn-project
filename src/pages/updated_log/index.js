import { Col, Row, Table } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import useActions from "../../redux/useActions";

const MemberUpdatedLog = () => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  const { state } = useLocation();

  console.log(state);

  const memberUpdatedLogs = useSelector(
    (state) => state.memberListReducer.memberUpdatedLogs
  );

  useEffect(() => {
    dispatch(memberActions.actions.getMemberUpdatedLogs(state));
  }, [dispatch, memberActions]);

  console.log("member updated log", memberUpdatedLogs);

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        console.log(record);
        return record.key + 1;
      },
      width: 20,
    },
    {
      title: "Thời gian",
      dataIndex: "updateTime",
      key: "updateTime",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return moment(+record.updateTime).format("DD-MM-YYYY hh:mm a");
      },
      width: 700,
    },
    {
      title: "Số hiệu quân nhân",
      dataIndex: "SoHieuQuanNhan",
      key: "SoHieuQuanNhan",
      render: (_, record) => record.SoHieuQuanNhan,
    },
  ];

  const data = memberUpdatedLogs.records.map((item, index) => {
    return { ...item.Record, key: index };
  });

  return (
    <>
      <Row gutter={24} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <Breadcrumb title="Nhật ký cập nhật" />
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={data}
        loading={memberUpdatedLogs.isLoading}
      />
    </>
  );
};

export default MemberUpdatedLog;
