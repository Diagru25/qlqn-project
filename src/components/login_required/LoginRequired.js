import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { clientRoute } from "../../constants/route.constant";
import authActions from "../../redux/auth/action";

const LoginRequired = ({ location, redirectLink, ...rest }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  if (!isLoggedIn) {
    return <Navigate to={clientRoute.LOGIN} replace={true} />;
  } else {
    return <Outlet />;
  }
};

export default LoginRequired;
