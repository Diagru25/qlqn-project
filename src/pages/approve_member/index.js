import { Button, Col, Row, Spin, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb";
import useActions from "../../redux/useActions";
import { CheckOutlined } from "@ant-design/icons";

import styles from "./index.module.css";
import approveApi from "../../services/apis/approveApi";
import { showNotification } from "../../helper/showNotification";

const ApproveMember = () => {
  let data = [];

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { approvalActions } = useActions();

  const approvalList = useSelector(
    (state) => state.approvalReducer.approvalList
  );

  useEffect(() => {
    dispatch(approvalActions.actions.getApprovalList());
  }, [dispatch, approvalActions]);

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return (
          (approvalList.pageIndex - 1) * approvalList.pageSize + record.key
        );
      },
      width: 20,
    },
    {
      title: "Họ và tên",
      dataIndex: "Tendaydu",
      key: "Tendaydu",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return JSON.parse(record.Publickey_value).HoVaTen;
      },
      width: 250,
    },
    {
      title: "Chức vụ",
      dataIndex: "ChucVu",
      key: "ChucVu",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return JSON.parse(record.Publickey_value).ChucVu;
      },
      width: 200,
    },
    {
      title: "Đơn vị",
      dataIndex: "DonVi",
      key: "DonVi",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return JSON.parse(record.Publickey_value).DonVi;
      },
      width: 200,
    },
    {
      title: "Mô tả hành động",
      dataIndex: "motahanhdong",
      key: "motahanhdong",
      render: (_, record) => (
        <div>Yêu cầu sửa đổi thông tin của quân nhân.</div>
      ),
      width: 700,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <Tooltip title="Đồng ý" key="purple">
            <Button
              shape="circle"
              type="link"
              onClick={async () => {
                setIsLoading(true);
                const res = await approveApi.updateApprovalRequest(record.Id);
                if (res.statusCode === 200) {
                  showNotification(
                    "success",
                    "Phê duyệt hồ sơ quân nhân thành công."
                  );
                }
                setIsLoading(false);
              }}
            >
              <CheckOutlined
                style={{
                  fontSize: 16,
                  padding: 5,
                  border: "1px solid",
                  borderRadius: 5,
                  color: "green",
                }}
              />
            </Button>
          </Tooltip>
        );
      },
      width: 200,
    },
  ];

  if (approvalList) {
    data = approvalList.items
      ? approvalList.items.map((item, index) => {
          return {
            ...item,
            key: index,
          };
        })
      : [];
  }

  return (
    <>
      <Spin tip="Đang xử lý..." spinning={isLoading}>
        <Row gutter={24} style={{ marginBottom: "15px" }}>
          <Col span={12}>
            <Breadcrumb title="Phê duyệt yêu cầu" />
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={data}
          loading={approvalList ? approvalList.isLoading : ""}
          // pagination={pagination}
          // onChange={handleTableChange}
        />
      </Spin>
    </>
  );
};

export default ApproveMember;
