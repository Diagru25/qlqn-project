import verifyActions from "./action";

const initialState = {
  verifyInfo: {
    diff: [],
    recover_data: {}
  },
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case verifyActions.types.VERIFY_INFO:
      return {
        ...state,
        verifyInfo: {
          ...state.verifyInfo,
        },
      };
    case verifyActions.types.UPDATE_STATE:
      return {
        ...state,
        ...payload.state,
      };
    default:
      return state;
  }
};

export default reducer;
