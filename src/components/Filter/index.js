import { Input, Space } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../redux/useActions";

const { Search } = Input;

const FilterButton = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  useEffect(() => {
    dispatch(memberActions.actions.getMemberList());
  });  

  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="Lọc theo đơn vị..."
          allowClear
          enterButton="Tìm kiếm"
          size="large"
        />
      </Space>
    </>
  );
};

export default FilterButton;
