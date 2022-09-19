import { lazy } from "react";
import { clientRoute } from "../../constants/route.constant";
const Home = lazy(() => import("./index"));

const route = {
    path: clientRoute.DEFAULT,
    element: Home,
};

export default route;
