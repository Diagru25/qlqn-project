import authActions from "./auth/action";
import permissionActions from "./permission/action";
import memberActions from "./member_info/action";
import userActions from "./user/action";
import verifyActions from "./verify/action";

const useActions = () => {
  return {
    authActions,
    permissionActions,
    memberActions,
    userActions,
    verifyActions,
  };
};

export default useActions;
