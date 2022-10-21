import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";
const AddMember = lazy(() => import("./index"));

const route = {
    path: adminRoute.ADD_MEMBER,
    element: AddMember,
};

export default route
