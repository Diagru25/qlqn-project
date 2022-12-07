import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "./style.module.css";

const SearchButton = () => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const inputSearchHandler = (e) => {
    setEnteredSearch(e.target.value);
  };
  return (
    <div className={styles["search-container"]}>
      <input
        className={styles["search-input"]}
        type="text"
        name="searchBtn"
        placeholder="Tìm kiếm..."
        onChange={inputSearchHandler}
        value={enteredSearch}
      />
      <button className={styles["search-icon"]}>
        <SearchOutlined />
      </button>
    </div>
  );
};

export default SearchButton;
