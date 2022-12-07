import React from "react";
import { Button, Popover, Space } from "antd";

import styles from "./style.module.css";

const content = (
  <div className={styles["filter-btn_popup"]}>
    <Space>
      <Button onClick={()=>{}}>Họ tên</Button>
      <Button>Đơn vị</Button>
    </Space>
  </div>
);

const FilterButton = (props) => {
    
  console.log("filter button", props);

  const filterMemberHandler = (filterCol) => {
    
  }
  return (
    <>
      <Popover
        className={styles["filter-btn"]}
        content={content}
        placement="bottomLeft"
        trigger="click"
      >
        <Button>Lọc</Button>
      </Popover>
    </>
  );
};

export default FilterButton;
