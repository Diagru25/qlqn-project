import { lazy } from "react";
import { clientRoute } from "../../constants/route.constant";
const Login = lazy(() => import("./index"));

const route = {
    path: clientRoute.LOGIN,
    element: Login,
};

export default route;
