const prefix = "AUTH_";

const types = {
  CHECK_SESSION: prefix + "CHECK_SESSION",
  LOGIN: prefix + "LOGIN",
  LOGOUT: prefix + "LOGOUT",
  UPDATE_STATE: prefix + "UPDATE_STATE",
};

const actions = {
  checkSession: () => {
    
    return {
      type: types.CHECK_SESSION,
      payload: {}
    };
  },

  login: (username, password) => {
    
    return {
      type: types.LOGIN,
      payload: {
        username,
        password,
      },
    };
  },

  logout: () => {
    return {
      type: types.LOGOUT,
      payload: {},
    };
  },
  updateState: (state = {}) => {
    return {
      type: types.UPDATE_STATE,
      payload: { state },
    };
  },
};

const authActions = {
  types,
  actions,
};

export default authActions;
