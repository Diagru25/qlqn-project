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
    updateUserProfile: (data = {}) => {
        console.log("body", data);
        return request({
            url: "/admin/v1/users",
            method: "PUT",
            data: data,
            isAuthRequest: true,
        })
    }
}

export default userAPI;