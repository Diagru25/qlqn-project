import { Drawer } from "antd";
import UnitTree from "./components/UnitTree";

const UnitDrawer = ({ size, title, open, onClose }) => {
  return (
    <Drawer
      title={title}
      placement="right"
      size={size}
      onClose={onClose}
      open={open}
    >
      <UnitTree />
    </Drawer>
  );
};

export default UnitDrawer;
