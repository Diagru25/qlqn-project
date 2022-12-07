import authActions from "./auth/action";
import permissionActions from "./permission/action";
import memberActions from "./member_info/action";
import userActions from "./user/action";

const useActions = () => {
    return {
        authActions,
        permissionActions,
        memberActions,
        userActions
    }
}

export default useActions;