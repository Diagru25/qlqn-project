import authActions from "./auth/action";
import permissionActions from "./permission/action";

const useActions = () => {
    return {
        authActions,
        permissionActions
    }
}

export default useActions;