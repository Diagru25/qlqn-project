import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";

const DetailMember = lazy(() => import("./index"));

const route = {
  path: adminRoute.MEMBER_DETAIL,
  element: DetailMember,
};

export default route;
