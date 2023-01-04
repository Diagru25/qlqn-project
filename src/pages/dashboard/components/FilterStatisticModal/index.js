import { Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../../../redux/useActions";
import styles from "./style.module.css";

const FilterStatisticModal = ({
  isFilterModalOpen,
  handleFilterCancel,
  filterField,
  filterValue,
}) => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  const filterValEncode = encodeURI(filterValue);

  const filterStatistic = useSelector(
    (state) => state.memberListReducer.filterStatistic
  );

  const [pagination, setPagination] = useState({
    limit: 10,
    total: 0,
    current: 1,
  });

  useEffect(() => {
    dispatch(
      memberActions.actions.getFilterStatistic(
        filterField,
        filterValEncode,
        pagination.current,
        pagination.limit
      )
    );
    setPagination({ ...pagination, total: filterStatistic.total });
  }, [
    memberActions,
    dispatch,
    filterStatistic.total,
    filterField,
    filterValEncode,
  ]);

  const handlePageChange = async (page, limit) => {
    dispatch(
      memberActions.actions.getFilterStatistic(
        filterField,
        filterValEncode,
        page,
        limit
      )
    );
    setPagination({
      ...pagination,
      current: page,
      limit: limit,
    });
  };

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
      width: 450,
    },
    {
      title: "Đơn vị",
      dataIndex: "Donvi",
      key: "DonVi",
      render: (_, record) => record.DonVi,
    },
  ];

  const data = filterStatistic.message.map((item, index) => {
    return {
      ...item.Record,
      key: item.Key,
    };
  });

  return (
    <Modal
      title="Thông tin về quân nhân"
      open={isFilterModalOpen}
      onCancel={handleFilterCancel}
      footer={false}
      width={750}
      bodyStyle={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}
      centered
    >
      <Table
        bordered={true}
        rowClassName={styles["member-info__row"]}
        columns={columns}
        dataSource={data}
        pagination={{ ...pagination, onChange: handlePageChange }}
        loading={filterStatistic.isLoading}
        //onChange={handleTableChange}
      />
    </Modal>
  );
};

export default FilterStatisticModal;
