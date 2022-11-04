const prefix = "PERMISSION_";

const types = {
    GET_MODULE_LIST: prefix + "GET_MODULE_LIST",
    GET_PERMISSION_LIST: prefix + "GET_PERMISSION_LIST",
    UPDATE_PERMISSION: prefix + "UPDATE_PERMISSION",
    UPDATE_STATE: prefix + "UPDATE_STATE",
};

const actions = {
    getModuleList: (page_size, page_index) => {
        return {
            type: types.GET_MODULE_LIST,
            payload: {
                page_size,
                page_index
            }
        };
    },
    getPermissionList: (moduleId, page_size, page_index) => {
        return {
            type: types.GET_PERMISSION_LIST,
            payload: {
                moduleId,
                page_size,
                page_index
            }
        };
    },
    updatePermission: (moduleId, data) => {
        return {
            type: types.UPDATE_PERMISSION,
            payload: {
                moduleId,
                data
            }
        }
    },


    updateState: (state = {}) => {
        return {
            type: types.UPDATE_STATE,
            payload: { state },
        };
    },
};

const permissionActions = {
    types,
    actions,
};

export default permissionActions;
