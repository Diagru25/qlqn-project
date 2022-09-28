import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
    const [enteredSearch, setEnteredSearch] = useState("");
    const inputSearchHandler = (e) => {
        setEnteredSearch(e.target.value);
    }
  return (
    <div className={styles["search-box"]}>
      <input
        className={styles["search-input"]}
        type="text"
        name=""
        placeholder="Search"
        onChange={inputSearchHandler}
        value={enteredSearch}
      />
      <button className={styles["search-btn"]}>
        <SearchOutlined />
      </button>
    </div>
  );
};

export default SearchInput;
