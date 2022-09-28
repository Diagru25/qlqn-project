import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";
const InfoUser = lazy(() => import("./index"));

const route = {
    path: adminRoute.INFO,
    element: InfoUser,
};

export default route;