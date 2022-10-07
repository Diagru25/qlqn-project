import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";
const MemberPage = lazy(() => import("./index"));

const route = {
    path: adminRoute.MEMBERS,
    element: MemberPage,
};

export default route;