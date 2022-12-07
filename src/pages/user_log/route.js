import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";

const UserLog = lazy(() => import("./index"));

const route = {
    path: adminRoute.USER_LOG,
    element: UserLog
}

export default route;