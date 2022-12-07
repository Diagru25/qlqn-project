import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";

const UserInfo = lazy(() => import("./index"));

const route = {
    path: adminRoute.USER_PROFILE,
    element: UserInfo
}

export default route;