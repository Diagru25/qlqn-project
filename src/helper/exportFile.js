import { saveAs } from "file-saver";
import axios from "axios";

import { readLocalStorage } from "./localStorage";
import { ACCESS_TOKEN } from "../constants/auth.constant";

const handleExport = async (startTime, endTime) => {
  const accessToken = readLocalStorage(ACCESS_TOKEN);
  //end_time
  //start_time
  const res = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/admin/v1/canbo/export/excel?end_time=${endTime}&start_time=${startTime}`,
    {
      responseType: "arraybuffer",
      headers: {
        x_access_token: `${accessToken}`,
      },
    }
  );

  var blob = new Blob([res.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "DS_quan_nhan.xlsx");
};

export default handleExport;
