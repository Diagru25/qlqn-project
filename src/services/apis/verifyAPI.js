import { request } from "./baseRequest"

const verifyAPI = {
    verifyInfo: (userId) => {
        return request({
            url: `/admin/v1/canbo/check_verify/${userId}`,
            method: "GET",
            isAuthRequest: true,
        })
    }
}

export default verifyAPI;