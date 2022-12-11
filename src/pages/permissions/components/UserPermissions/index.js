import { Col, Table, Checkbox } from "antd";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../../../redux/useActions";

import styles from "./style.module.css";

const UserPermissions = () => {
  const dispatch = useDispatch();
  const { permissionActions } = useActions();

  const currentModule = useSelector(
    (state) => state.permissionReducer.currentModule
  );
  const permissionList = useSelector(
    (state) => state.permissionReducer.permissionList
  );

  useEffect(() => {
    if (currentModule.Id) {
      dispatch(permissionActions.actions.getPermissionList(currentModule.Id));
    }
  }, [currentModule.Id, dispatch, permissionActions]);

  const handleCheckboxChange = (e, recordUpdate) => {
    //const checkValue = e.target.checked;
    console.log("Record update", recordUpdate);
    dispatch(
      permissionActions.actions.updatePermission(currentModule.Id, recordUpdate)
    );
  };

  const columns = [
    {
      title: "Chức vụ",
      dataIndex: "Chucvu",
      key: "Chucvu",
      render: (_, record) => record.Chucvu.Ten,
    },
    {
      title: "Xem bản ghi",
      dataIndex: "AllowView",
      key: "AllowView",
      width: "20%",
      render: (value, record) => (
        <Checkbox
          checked={value}
          onClick={(e) =>
            handleCheckboxChange(e, { ...record, AllowView: e.target.checked })
          }
        />
      ),
    },
    {
      title: "Sửa đổi",
      dataIndex: "AllowEdit",
      key: "AllowEdit",
      width: "20%",
      render: (value, record) => (
        <Checkbox
          checked={value}
          onClick={(e) =>
            handleCheckboxChange(e, { ...record, AllowEdit: e.target.checked })
          }
        />
      ),
    },
    {
      title: "Xóa bản ghi",
      dataIndex: "AllowDelete",
      key: "AllowDelete",
      width: "20%",
      render: (value, record) => (
        <Checkbox
          checked={value}
          onClick={(e) =>
            handleCheckboxChange(e, {
              ...record,
              AllowDelete: e.target.checked,
            })
          }
        />
      ),
    },
    {
      title: "Phê duyệt",
      dataIndex: "AllowDuyet",
      key: "AllowDuyet",
      width: "20%",
      render: (value, record) => (
        <Checkbox
          checked={value}
          onClick={(e) =>
            handleCheckboxChange(e, {
              ...record,
              AllowDuyet: e.target.checked,
            })
          }
        />
      ),
    },
  ];

  return (
    <Col className={styles["user-permissions__table"]} flex="auto">
      <Table
        dataSource={permissionList.items.map((item, index) => ({
          ...item,
          key: index,
        }))}
        columns={columns}
        pagination={false}
      />
    </Col>
  );
};

export default UserPermissions;
