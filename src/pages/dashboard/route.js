import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";
const Dashboard = lazy(() => import("./index"));


export default {
    path: adminRoute.DASHBOARD,
    element: Dashboard,
};;
