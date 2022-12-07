import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";

const ManageLog = lazy(() => import("./index"));

const route = {
    path: adminRoute.MANAGE_LOG,
    element: ManageLog
}

export default route;