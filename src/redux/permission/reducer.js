import permissionActions from "./action";

const defaultModule = {};

const initialState = {
    moduleList: {
        items: [],
        page_size: 100,
        page_index: 1,
        isLoading: false
    },

    permissionList: {
        items: [],
        page_size: 100,
        page_index: 1,
        isLoading: false
    },

    currentModule: defaultModule
};

const reducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case permissionActions.types.GET_MODULE_LIST:
            return {
                ...state,
                moduleList: {
                    ...state.moduleList,
                    isLoading: true
                }
            };

        case permissionActions.types.GET_PERMISSION_LIST:
            return {
                ...state,
                permissionList: {
                    ...state.permissionList,
                    isLoading: true
                }
            };

        // case permissionActions.types.UPDATE_PERMISSION:
        //     return state;

        case permissionActions.types.UPDATE_STATE:
            return {
                ...state,
                ...payload.state,
            };

        default:
            return state;
    }
};

export default reducer;
