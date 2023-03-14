import approvalActions from "./action";

const initialState = {
  approvalList: {
    items: [],
    pageIndex: 1,
    pageSize: 40,
    isLoading: false,
  },
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
