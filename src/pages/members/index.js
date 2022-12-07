import { Space, Table, Col, Row, Button, Input, Popover } from "antd";
import { HistoryOutlined, EyeOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { adminRoute } from "../../constants/route.constant";

import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useActions from "../../redux/useActions";
import SearchField from "../../components/SearchFilter";
import handleExport from "../../helper/exportFile";
// import { saveAs } from "file-saver";
// import axios from "axios";

// import { readLocalStorage } from "../../helper/localStorage";
// import { ACCESS_TOKEN } from "../../constants/auth.constant";

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

  console.log(memberList);

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
        console.log("Record", record);
        return (
          <Space size="middle">
            <Button
              onClick={() => {
                navigate(adminRoute.MEMBER_DETAIL, { state: record.user_id });
              }}
              type="link"
            >
              <EyeOutlined />
            </Button>
            <Button
              onClick={() => {
                navigate(adminRoute.MEMBER_UPDATED_LOG, {
                  state: record.user_id,
                });
              }}
              type="link"
            >
              <HistoryOutlined />
            </Button>
          </Space>
        );
      },
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
      <Row style={{ marginBottom: "15px" }}>
        <Col span={12} className={styles["right-row__actions"]}>
          <Space>
            <Popover
              content={<SearchField onSubmit={searchHandler} />}
              placement={"bottomLeft"}
              trigger="click"
              open={openSearch}
              onOpenChange={handleOpenSearchChange}
            >
              <Button type="primary">Tìm kiếm</Button>
            </Popover>
          </Space>
        </Col>
        <Col span={12}>
          <div className={styles["right-control"]}>
            <Button
              type="primary"
              className={styles["export-btn"]}
              onClick={handleExport}
            >
              Xuất file
            </Button>
            <Button
              type="primary"
              onClick={() => navigate(adminRoute.ADD_MEMBER)}
            >
              Tạo mới
            </Button>
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
