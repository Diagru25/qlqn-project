const prefix = "VERIFY_";

const types = {
  GET_VERIFY_INFO: prefix + "GET_VERIFY_INFO",
  UPDATE_STATE: prefix + "UPDATE_STATE",
};

const actions = {
  getVerifyInfo: (userId) => {
    return {
      type: types.GET_VERIFY_INFO,
      payload: { userId },
    };
  },

  updateState: (state) => {
    return {
      type: types.UPDATE_STATE,
      payload: {
        state,
      },
    };
  },
};

const verifyActions = {
  types,
  actions,
};

export default verifyActions;
