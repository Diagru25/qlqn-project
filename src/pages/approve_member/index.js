import { Button, Col, Modal, Row, Space, Spin, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb";
import useActions from "../../redux/useActions";
import { CheckOutlined, EyeOutlined, CloseOutlined } from "@ant-design/icons";

import approveApi from "../../services/apis/approveApi";
import { showNotification } from "../../helper/showNotification";
import ApprovalDetail from "./components/ApprovalDetail";

const ApproveMember = () => {
  let data = [];

  const [openApprovalModal, setOpenApprovalModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    pageSize: 10,
    total: 0,
    current: 1,
  });

  const dispatch = useDispatch();
  const { approvalActions } = useActions();

  const approvalList = useSelector(
    (state) => state.approvalReducer.approvalList
  );

  if (approvalList?.total) {
    setPagination((prevState) => {
      return {
        ...prevState,
        total: approvalList.total,
      };
    });
  }

  const handlePageChange = async (pageIndex, pageSize) => {
    dispatch(approvalActions.actions.getApprovalList(pageIndex, pageSize));
    setPagination((prevState) =>{
      return {
        ...prevState,
        current: pageIndex,
        pageSize: pageSize
      }
    })
  }

  const handleCancelApprovalModal = () => {
    setOpenApprovalModal(false);
  };

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
        // console.log("record", record.Tendaydu);
        return record.Tendaydu;
      },
      width: 250,
    },
    {
      title: "Chức vụ",
      dataIndex: "ChucVu",
      key: "ChucVu",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return JSON.parse(record.user_info_value).ChucVu;
      },
      width: 200,
    },
    {
      title: "Đơn vị",
      dataIndex: "DonVi",
      key: "DonVi",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return JSON.parse(record.user_info_value).DonVi;
      },
      width: 200,
    },
    {
      title: "Mô tả hành động",
      dataIndex: "motahanhdong",
      key: "motahanhdong",
      render: (_, record) => {
        if (record.capnhat_lylich === true) {
          if (record.tp_confirm === true) {
            return (
              <div>
                Yêu cầu cập nhật hồ sơ quân nhân (Trưởng phòng đã xét duyệt).
              </div>
            );
          }
          if (record.tl_confirm === true) {
            return (
              <div>
                Yêu cầu cập nhật hồ sơ quân nhân (Trợ lý phòng chính trị đã xét
                duyệt).
              </div>
            );
          }
          return <div>Yêu cầu cập nhật hồ sơ quân nhân.</div>;
        }
        if (record.capnhat_khoahoc === true) {
          if (record.tp_confirm === true) {
            return (
              <div>
                Yêu cầu cập nhật lý lịch khoa học (Trưởng phòng đã xét duyệt).
              </div>
            );
          }
          return <div>Yêu cầu cập nhật lý lịch khoa học.</div>;
        }
      },
      width: 700,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        // console.log(record);
        return (
          <>
            <Space size={6}>
              <Tooltip title="Đồng ý" key="approve">
                <Button
                  shape="circle"
                  type="link"
                  onClick={async () => {
                    setIsLoading(true);
                    const res = await approveApi.updateApprovalRequest(
                      record.Id
                    );
                    if (res.statusCode === 200) {
                      showNotification(
                        "success",
                        "Phê duyệt hồ sơ quân nhân thành công."
                      );
                    }
                    console.log("1");
                    dispatch(approvalActions.actions.getApprovalList());
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
              <Tooltip title="Hủy bỏ" key="reject">
                <Button
                  shape="circle"
                  type="link"
                  onClick={() => {
                    dispatch(
                      approvalActions.actions.deleteApprovalRequest(record.Id)
                    );
                  }}
                >
                  <CloseOutlined
                    style={{
                      fontSize: 16,
                      padding: 5,
                      border: "1px solid",
                      borderRadius: 5,
                      color: "red",
                    }}
                  />
                </Button>
              </Tooltip>
              <Tooltip title="Chi tiết" key="detail">
                <Button
                  shape="circle"
                  type="link"
                  onClick={() => {
                    dispatch(
                      approvalActions.actions.getDetailApprovalList(record.Id)
                    );
                    setOpenApprovalModal(true);
                  }}
                >
                  <EyeOutlined
                    style={{
                      fontSize: 16,
                      padding: 5,
                      border: "1px solid",
                      borderRadius: 5,
                    }}
                  />
                </Button>
              </Tooltip>
            </Space>
          </>
        );
      },
      width: 200,
    },
  ];

  if (approvalList?.items) {
    data = approvalList?.items
      ? approvalList?.items.map((item, index) => {
          return {
            ...item,
            key: index,
          };
        })
      : [];
  }

  console.log("approval list items", approvalList?.items)
  console.log("data approval", data);

  return (
    <>
      <Modal
        title="Chi tiết yêu cầu phê duyệt"
        open={openApprovalModal}
        onCancel={handleCancelApprovalModal}
        width={1000}
        bodyStyle={{ overflowY: "auto", maxHeight: "calc(100vh - 300px)" }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <ApprovalDetail />
      </Modal>
      <Spin tip="Đang xử lý..." spinning={isLoading}>
        <Row gutter={24} style={{ marginBottom: "15px" }}>
          <Col span={12}>
            <Breadcrumb title="Phê duyệt yêu cầu" />
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={data}
          pagination={{...pagination, onChange: handlePageChange}}
          loading={approvalList ? approvalList.isLoading : ""}
        />
      </Spin>
    </>
  );
};

export default ApproveMember;
