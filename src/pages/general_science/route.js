import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";

const GeneralScience = lazy(() => import("./index"));

const route = {
    path: adminRoute.GENERAL_SCIENCE,
    element: GeneralScience,
}

export default route;