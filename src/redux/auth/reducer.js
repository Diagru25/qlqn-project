import { ACCESS_TOKEN } from "../../constants/auth.constant";
import { readLocalStorage } from "../../helper/localStorage";
import authActions from "./action";

const _getSessionKey = () => {
  const sessionKey = readLocalStorage(ACCESS_TOKEN);
  console.log(sessionKey);
  return sessionKey ? sessionKey : null;
};

const initialState = {
  sessionKey: _getSessionKey(),
  isLoggedIn: _getSessionKey()!=null,
  isLoading: false,
  error: null,
  userInfo: null,
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case authActions.types.CHECK_SESSION:
      console.log("Check session")
      return state;

    case authActions.types.LOGIN:
      console.log("Login State", state);
      return {
        ...state,
        ...{
          isLoading: true,
        },
      };

    case authActions.types.LOGOUT:
      return state;

    case authActions.types.UPDATE_STATE:
      console.log("Update State", payload.state)
      return {
        ...state,
        ...payload.state,
      };

    default:
      return state;
  }
};

export default reducer;
