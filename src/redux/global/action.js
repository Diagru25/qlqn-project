const types = {
    ADD_TOAST: "ADD_TOAST",
}

const actions = {
    // toast
    addToast: (options) => {
        return {
            type: types.ADD_TOAST,
            payload: options
        }
    }
}

const globalActions = {
    types,
    actions
}

export default globalActions;