import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";
const Dashboard = lazy(() => import("./index"));

const route = {
  path: adminRoute.DASHBOARD,
  element: Dashboard,
};

export default route;
