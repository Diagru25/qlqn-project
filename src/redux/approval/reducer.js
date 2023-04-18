import approvalActions from "./action";

const initialState = {
  approvalList: {
    items: [],
    page_index: 1,
    page_size: 40,
    total: 0,
    isLoading: false,
  },

  detailApprovalList: {
    approvalInfo: {},
    compared: [],
    isLoading: false,
  }
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case approvalActions.types.GET_APPROVAL_LIST:
      return {
        ...state,
        approvalList: {
          ...state.approvalList,
          isLoading: true,
        },
      };

    case approvalActions.types.GET_DETAIL_APPROVAL_LIST:
      return {
        ...state,
        detailApprovalList: {
          ...state.detailApprovalList,
          isLoading: true,
        }
      }

    case approvalActions.types.UPDATE_STATE:
      return {
        ...state,
        ...payload.state,
      };
    
    default:
      return {
        state,
      };
  }
};

export default reducer;
