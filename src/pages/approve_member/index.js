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

  const dispatch = useDispatch();
  const { approvalActions } = useActions();

  const approvalList = useSelector(
    (state) => state.approvalReducer.approvalList
  );

  const handleCancelApprovalModal = () => {
    setOpenApprovalModal(false);
  }

  // const handleOkApprovalModal = async (instance) => {
  //   console.log(instance);
  //   setIsLoading(true);
  //   const res = await approveApi.updateApprovalRequest(record.Id);
  //   if (res.statusCode === 200) {
  //     showNotification(
  //       "success",
  //       "Phê duyệt hồ sơ quân nhân thành công."
  //     );
  //   }
  //   dispatch(approvalActions.actions.getApprovalList());
  //   setIsLoading(false);
  // }

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
            return <div>Yeu cau cap nhap ho so quan nhan (Truong phong da xet duyet).</div>
          }
          if (record.tl_confirm === true) {
            return <div>Yeu cau cap nhap ho so quan nhan (Tro ly phong chinh tri da xet duyet).</div>
          }
          return <div>Yeu cau cap nhap ho so quan nhan.</div>
        }
        if (record.capnhat_khoahoc === true) {
          if (record.tp_confirm === true) {
            return <div>Yeu cau cap nhap ly lich khoa hoc (Truong phong da xet duyet).</div>
          }
          return <div>Yeu cau cap nhap ly lich khoa hoc.</div>
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
        return (<>
          <Space size={6}>
            <Tooltip title="Đồng ý" key="approve">
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
            <Tooltip title="Huy bo" key="reject">
              <Button
                shape="circle"
                type="link"
                onClick={() => {
                  dispatch(approvalActions.actions.deleteApprovalRequest(record.Id));
                }}
              >
                <CloseOutlined
                  style={{
                    fontSize: 16,
                    padding: 5,
                    border: "1px solid",
                    borderRadius: 5,
                    color: "red"
                  }}
                />
              </Button>
            </Tooltip>
            <Tooltip title="Chi tiet" key="detail">
              <Button
                shape="circle"
                type="link"
                onClick={() => {
                  dispatch(approvalActions.actions.getDetailApprovalList(record.Id));
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
      <Modal title="Chi tiet yeu cau phe duyet" open={openApprovalModal} onCancel={handleCancelApprovalModal} width={1000} bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 300px)' }} okButtonProps={{ style: {display: "none"} }}>
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
          loading={approvalList ? approvalList.isLoading : ""}
        />
      </Spin>
    </>
  );
};

export default ApproveMember;
