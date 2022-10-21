import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";
const PermissionsManagement = lazy(() => import("./index"))

const route = {
    path: adminRoute.PERMISSIONS,
    element: PermissionsManagement
}
export default route;