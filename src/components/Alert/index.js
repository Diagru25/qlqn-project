import { Alert } from "antd";

export const AlertMessage = ({ title, description }) => {
  return <Alert type="error" message={title} description={description} showIcon />;
};
