import { request } from "./baseRequest";

const permissionApi = {
    getModuleList: (page_index, page_size = 100) => {
        return request({
            url: "/admin/v1/module",
            method: "GET",
            params: {
                page_size: page_size,
                "page-index": page_index
            },
            isAuthRequest: true,
        });
    },

    getPermissionList: (moduleId, page_index, page_size = 100) => {
        return request({
            url: `/admin/v1/module/${moduleId}/quyen`,
            method: "GET",
            params: {
                page_size: page_size,
                page_index: page_index
            },
            isAuthRequest: true,
        });
    },
    updatePermission: (moduleId, data = {}) => {
        return request({
            url: `/admin/v1/module/${moduleId}/quyen`,
            method: "PUT",
            data: data,
            isAuthRequest: true
        })
    }
};

export default permissionApi;
