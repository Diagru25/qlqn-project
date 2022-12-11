import userActions from "./action";

const initialState = {
  userProfile: {
    userProfile: {},
    isLoading: false,
  },
  userLogs: {
    items: [],
    page_index: 1,
    page_size: 40,
    isLoading: false,
    total: 200,
  },
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case userActions.types.GET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          isLoading: true,
        },
      };
    case userActions.types.GET_USER_LOGS:
      return {
        ...state,
        userLogs: {
          ...state.userLogs,
          isLoading: true,
        },
      };
    case userActions.types.UPDATE_STATE:
      return {
        ...state,
        ...payload.state,
      };
    default:
      return state;
  }
};

export default reducer;
