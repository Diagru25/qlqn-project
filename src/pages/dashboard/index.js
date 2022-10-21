import { Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => {
    setError(null);
    try {
      const res = await fetch(
        "https://www.postman.com/collections/354849878b2d0bf3a61d",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data);
    } catch {}
  }, []);
  return <><Button onClick={fetchDataHandler}>Fetch Data</Button></>;
};

export default Dashboard;
