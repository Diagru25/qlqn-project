import { adminRoute } from "../../constants/route.constant";

const { lazy } = require("react");

const ApproveMember = lazy(() => import("./index"));

const route = {
  path: adminRoute.APPROVE_REQUEST,
  element: ApproveMember,
};

export default route;
