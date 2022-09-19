import { lazy } from "react";
import { clientRoute } from "../../constants/route.constant";
const Login = lazy(() => import("./index"));

export default {
    path: clientRoute.LOGIN,
    element: Login,
};
