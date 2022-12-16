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
import BreadCrumb from "../../components/Breadcrumb";
import memberApi from "../../services/apis/memberAPI";
import { showNotification } from "../../helper/showNotification";

const initialSearchVal = {
  DonVi: "",
  HoVaTen: "",
  NganhNgheDaoTao: "",
  NguyenQuan: "",
};

const initialMemberList = {
  message: [],
  page: 1,
  limit: 30,
  total: 10,
};

const Members = () => {
  const navigate = useNavigate();

  const [searchVal, setSearchVal] = useState(initialSearchVal);
  const { memberActions } = useActions();

  const [memberList, setMemberList] = useState(initialMemberList);
  const [isLoading, setIsLoading] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);
  const [pagination, setPagination] = useState({
    pageSize: 4,
    total: 0,
    current: 1,
  });

  const handleOpenSearchChange = (newOpen) => {
    setOpenSearch(newOpen);
  };

  useEffect(() => {
    getMemberList(
      searchVal.DonVi,
      searchVal.HoVaTen,
      searchVal.NganhNgheDaoTao,
      searchVal.NguyenQuan,
      pagination.current,
      pagination.pageSize
    );
  }, [searchVal]);

  const getMemberList = async (
    donVi,
    hoVaTen,
    nganhNgheDaoTao,
    nguyenQuan,
    changedPage,
    pageSize
  ) => {
    try {
      const res = await memberApi.getMemberlist(
        donVi,
        hoVaTen,
        nganhNgheDaoTao,
        nguyenQuan,
        changedPage,
        pageSize
      );
      const { message, page, limit, total } = res.result;
      setMemberList({
        message: message,
        page: page,
        limit: limit,
        total: total,
      });
      setPagination({
        current: page,
        pageSize: limit,
        total,
      });
      setIsLoading(false);
    } catch (error) {
      if (error.data.statusCode === 403) {
        showNotification(
          "error",
          "Lỗi phân quyền",
          "Bạn không có quyền xem danh sách quân nhân!"
        );
      }
      setIsLoading(false);
    }
  };

  const searchHandler = (value = {}) => {
    setIsLoading(true);
    setSearchVal((state) => {
      return {
        ...state,
        ...value,
      };
    });
  };

  const handlePageChange = async (pageIndex, pageSize) => {
    try {
      setIsLoading(true);
      await getMemberList(
        searchVal.DonVi,
        searchVal.HoVaTen,
        searchVal.NganhNgheDaoTao,
        searchVal.NguyenQuan,
        pageIndex,
        pageSize
      );

      setPagination({
        ...pagination,
        current: pageIndex,
        pageSize: pageSize,
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const data = memberList.message
    ? memberList.message.map((item, index) => {
        return {
          ...item.Record,
          key: item.Key,
          index: (memberList.page - 1) * memberList.limit + index + 1,
        };
      })
    : [];

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
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
                  navigate(adminRoute.MEMBER_DETAIL, {
                    state: record.user_id,
                  });
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
            <Button onClick={handleExport}>Xuất file Excel</Button>
            <Button onClick={() => navigate(adminRoute.ADD_MEMBER)}>
              Tạo mới
            </Button>
            <Popover
              content={<SearchField onSubmit={searchHandler} />}
              placement={"bottomRight"}
              trigger="click"
              open={openSearch}
              onOpenChange={handleOpenSearchChange}
              style={{width: 400}}
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
        pagination={{ ...pagination, onChange: handlePageChange }}
        loading={isLoading}
        //onChange={handleTableChange}
      />
    </>
  );
};

export default Members;
