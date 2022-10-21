import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";
const RolesManagement = lazy(() => import("./index"));

const route = {
    path: adminRoute.ROLES,
    element: RolesManagement
}

export default route;