import { Input } from "antd";
import styles from "./style.module.css";

const { Search } = Input;

const SearchField = ({ onSubmit }) => {
  const handleSearch = (value) => {
    onSubmit(encodeURI(value));
  };

  return (
    <>
      <div className={styles["search-label"]}>
        Tìm kiếm theo tên, đơn vị, chuyên ngành
      </div>
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
