import { request } from "./baseRequest";

const userAPI = {
    getUserProfile: () => {
        return request({
            url: "/admin/v1/users",
            method: "GET",
            isAuthRequest: true
        })
    },
    getUserLogs: (page_index) => {
        return request({
            url: "/home/v1/logs",
            method: "GET",
            params: {
                page_index: page_index
            },
            isAuthRequest: true
        })
    },
    updateUserProfile: (data = {}, field_update) => {
        return request({
            url: "/admin/v1/users",
            method: "PUT",
            params: {
                field_update: field_update,
            },
            data: data,
            isAuthRequest: true,
        })
    }
}

export default userAPI;