const prefix = "APPROVAL_";

const types = {
  GET_APPROVAL_LIST: prefix + "GET_APPROVAL_LIST",
  UPDATE_APPROVAL_LIST: prefix + "UPDATE_APPROVAL_LIST",
  GET_DETAIL_APPROVAL_LIST: prefix + "GET_DETAIL_APPROVAL_LIST",
  DELETE_APPROVAL_REQUEST: prefix + "DELETE_APPROVAL_REQUEST",
  UPDATE_STATE: prefix + "UPDATE_STATE",
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

  getDetailApprovalList: (userId) => {
    return {
      type: types.GET_DETAIL_APPROVAL_LIST,
      payload: {
        userId,
      }
    }
  },

  deleteApprovalRequest: (userId) => {
    return {
      type: types.DELETE_APPROVAL_REQUEST,
      payload: {
        userId,
      }
    }
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
