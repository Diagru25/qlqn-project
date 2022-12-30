import { Input } from "antd";

const { Search } = Input;

const SearchField = ({ onSubmit }) => {
  const handleSearch = (value) => {
    onSubmit(encodeURI(value));
  };

  return (
    <>
      <Search
        placeholder="Tìm kiếm thông tin quân nhân..."
        allowClear
        size="large"
        onSearch={handleSearch}
      />
    </>
  );
};

export default SearchField;
