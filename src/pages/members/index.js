import { Table, Col, Row, Button, Popover, Tooltip } from "antd";
import { HistoryOutlined, EyeOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { adminRoute } from "../../constants/route.constant";

import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useActions from "../../redux/useActions";
import SearchField from "../../components/SearchFilter";
import handleExport from "../../helper/exportFile";
import BreadCrumb from "../../components/Breadcrumb"


const initialSearchVal = {
  DonVi: "",
  HoVaTen: "",
  NganhNgheDaoTao: "",
  NguyenQuan: "",
};

const Members = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState(initialSearchVal);
  const { memberActions } = useActions();

  const [openSearch, setOpenSearch] = useState(false);
  const [pagination, setPagination] = useState({
    pageSize: 0,
    total: 0,
    current: 1,
  });

  const handleOpenSearchChange = (newOpen) => {
    setOpenSearch(newOpen);
  };

  const memberList = useSelector((state) => state.memberListReducer.memberList);

  useEffect(() => {
    dispatch(
      memberActions.actions.getMemberList(
        searchVal.DonVi,
        searchVal.HoVaTen,
        searchVal.NganhNgheDaoTao,
        searchVal.NguyenQuan,
        pagination.current,
        10
      )
    );
  }, [dispatch, memberActions, searchVal, pagination]);

  useEffect(() => {
    setPagination({
      ...pagination,
      total: memberList.total,
      pageSize: memberList.limit,
    });
  }, [memberList.total, memberList.limit]);

  const data = memberList.message.map((item, index) => {
    return { ...item.Record, key: item.Key, index: index };
  });

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      //render: (name) => <a>{name}</a>,
      render: (_, record) => {
        return (memberList.page - 1) * memberList.limit + record.index;
      },
      width: 20,
    },
    {
      title: "Họ và tên",
      dataIndex: "HoVaTen",
      key: "HoVaTen",
      render: (_, record) => record.HoVaTen,
      width: 300,
    },
    {
      title: "Chức vụ",
      dataIndex: "ChucVu",
      key: "ChucVu",
      render: (_, record) => record.ChucVu,
    },
    {
      title: "Cấp bậc",
      dataIndex: "Capbac",
      key: "Capbac",
      render: (_, record) => {
        return record.CapBac;
      },
    },
    {
      title: "Đơn vị",
      dataIndex: "Donvi",
      key: "DonVi",
      render: (_, record) => record.DonVi,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => {
        return (
          <>
            <Tooltip title="Chi tiết" color="cyan" key="cyan">
              <Button
                shape="circle"
                onClick={() => {
                  navigate(adminRoute.MEMBER_DETAIL, { state: record.user_id });
                }}
                type="link"
              >
                <EyeOutlined style={{ fontSize: 16 }} />
              </Button>
            </Tooltip>
            <Tooltip title="Nhật ký cập nhật" color="purple" key="purple">
              <Button
                shape="circle"
                onClick={() => {
                  navigate(adminRoute.MEMBER_UPDATED_LOG, {
                    state: record.user_id,
                  });
                }}
                type="link"
              >
                <HistoryOutlined style={{ fontSize: 16 }} />
              </Button>
            </Tooltip>
          </>
        );
      },
      width: 200,
    },
  ];

  const searchHandler = (value = {}) => {
    setSearchVal((state) => {
      return {
        ...state,
        ...value,
      };
    });
  };

  const handleTableChange = (page) => {
    setPagination({
      ...pagination,
      current: page.current,
    });
  };

  return (
    <>
      {/* <Row>
        <Input
          placeholder="search"
          value={memberList.filter.search}
          onChange={(e) => handleUpdateFilter({ search: e.target.value })}
        />
        locj theo ngay vao dang
        <Input
          value={memberList.filter.capbac}
          onChange={(e) => handleUpdateFilter({ capbac: e.target.value })}
        />
        <Button onClick={() => dispatch(memberActions.actions.getMemberList())}>
          Loc
        </Button>
      </Row> */}
      <Row gutter={24} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <BreadCrumb title="Danh sách quân nhân" />
        </Col>
        <Col span={12}>
          <div className={styles["right-control"]}>
            <Button onClick={handleExport}>Xuất file</Button>
            <Button onClick={() => navigate(adminRoute.ADD_MEMBER)}>
              Tạo mới
            </Button>
            <Popover
              content={<SearchField onSubmit={searchHandler} />}
              placement={"bottomRight"}
              trigger="click"
              open={openSearch}
              onOpenChange={handleOpenSearchChange}
            >
              <Button type="primary">Tìm kiếm</Button>
            </Popover>
          </div>
        </Col>
      </Row>
      <Table
        bordered={true}
        rowClassName={styles["member-info__row"]}
        columns={columns}
        dataSource={data}
        pagination={pagination}
        loading={memberList.isLoading}
        onChange={handleTableChange}
      />
    </>
  );
};

export default Members;
