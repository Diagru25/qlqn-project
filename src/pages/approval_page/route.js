import { lazy } from "react";
import { adminRoute } from "../../constants/route.constant";

const ApprovalRequest = lazy(() => import("./index"));

const route = {
    path: adminRoute.APPROVALS,
    element: ApprovalRequest
}

export default route;
