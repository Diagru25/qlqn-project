const prefix = "USER_"

const types = {
    GET_USER_INFO: prefix + "GET_USER_INFO",
    GET_USER_LOGS: prefix + "GET_USER_LOGS",
    UPDATE_STATE: prefix + "UPDATE_STATE",
}

const actions = {
    getUserInfo: () => {
        return {
            type: types.GET_USER_INFO,
            payload: {}
        }
    },
    getUserLogs: (page_index) => {
        return {
            type: types.GET_USER_LOGS,
            payload: {
                page_index
            } 
        }
    },
    updateState: (state = {}) => {
        return {
            type: types.UPDATE_STATE,
            payload: { state }
        }
    }
}

const userActions = {
    types,
    actions
}

export default userActions;