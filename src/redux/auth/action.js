const prefix = 'AUTH_';

const types = {
    LOGIN: prefix + 'LOGIN',
    LOGOUT: prefix + 'LOGOUT',
    UPDATE_STATE: prefix + 'UPDATE_STATE'
};

const actions = {
    login: () => {
        return {
            type: types.LOGIN,
            payload: {}
        }
    },

    logout: () => {
        return {
            type: types.LOGOUT,
            payload: {}
        }
    },
    updateState: (state = {}) => {
        return {
            type: types.UPDATE_STATE,
            payload: {state}
        }
    }
};

const authActions = {
    types, actions
};

export default authActions;
