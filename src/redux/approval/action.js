const prefix = "APPROVAL_";

const types = {
  GET_APPROVAL_LIST: "GET_APPROVAL_LIST",
  UPDATE_APPROVAL_LIST: "UPDATE_APPROVAL_LIST",
  UPDATE_STATE: "UPDATE_STATE",
};

const actions = {
  getApprovalList: () => {
    return {
      type: types.GET_APPROVAL_LIST,
      payload: {},
    };
  },

  updateApprovalList: (approvalId) => {
    return {
      type: types.UPDATE_APPROVAL_LIST,
      payload: {
        approvalId,
      },
    };
  },

  updateState: (state) => {
    return {
      type: types.UPDATE_STATE,
      payload: {
        state
      }
    }
  }
};

const approvalActions = {
  types,
  actions,
};

export default approvalActions;
