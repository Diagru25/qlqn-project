import actions from './action';

const initialState = {
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case actions.types.LOGIN:
            return state;
        case actions.types.LOGOUT:
            return state;
        case actions.types.UPDATE_STATE:
            return {
                ...state,
                ...payload.state
            }
        default: return state;
    }
}

export default reducer;