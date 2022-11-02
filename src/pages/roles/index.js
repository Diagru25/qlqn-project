import { useState, useRef } from "react";
import Highlighter from "react-highlight-words";
import { Table, Button, Space, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { stringHandler } from "../../helper/StringHandler";

const data = [
  {
    key: "1",
    position: "Trợ lý cán bộ",
    unit: "Bộ Tư lệnh 86",
    permissionGroup: "Quản lý cán bộ cấp 1",
  },
  {
    key: "2",
    position: "Trợ lý chính trị",
    unit: "Viện 10",
    permissionGroup: "Quản lý cán bộ cấp 2",
  },
  {
    key: "3",
    position: "Chỉ huy phòng",
    unit: "Viện 10",
    permissionGroup: "Quản lý cán bộ cấp 3",
  },
  {
    key: "4",
    position: "Nghiên cứu viên",
    unit: "Viện 10",
    permissionGroup: "Người dùng",
  },
  {
    key: "5",
    position: "Trợ lý chính trị",
    unit: "Trung tâm 586",
    permissionGroup: "Quản lý cán bộ cấp 2",
  },
];

const RolesManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, confirm) => {
    clearFilters();
    setSearchText("");
    confirm();
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Tìm kiếm chức vụ`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: "fit-content",
              height: "fit-content",
              padding: 5,
              borderRadius: 5,
            }}
          >
            Tìm kiếm
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters, confirm)}
            size="small"
            style={{
              width: "fit-content",
              height: "fit-content",
              padding: 5,
              borderRadius: 5,
            }}
          >
            Xóa tùy chọn
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>{
        const handleRecord = stringHandler.searchHandler(record[dataIndex].toString().toLowerCase());
        const enteredValue = stringHandler.searchHandler(value.toLowerCase())
        return handleRecord.includes(enteredValue);
    },
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Chức vụ",
      dataIndex: "position",
      key: "position",
      ...getColumnSearchProps("position"),
    },
    {
      title: "Đơn vị",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Nhóm quyền",
      dataIndex: "permissionGroup",
      key: "permissionGroup",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default RolesManagement;
