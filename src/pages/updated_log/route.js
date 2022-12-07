import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";

const MemberUpdatedLog = lazy(() => import("./index"));

const route = {
  path: adminRoute.MEMBER_UPDATED_LOG,
  element: MemberUpdatedLog,
};

export default route;
