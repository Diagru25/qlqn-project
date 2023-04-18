import { request } from "./baseRequest";

const approveApi = {
  getApprovalList: (page_index, page_size) => {
    return request({
      url: `/admin/v1/canbo/list/Approvals`,
      method: "GET",
      params: {
        page_index: page_index,
        page_size: page_size,
      },
      isAuthRequest: true,
    });
  },

  getDetailApprovalList: (userId) => {
    return request({
      url: `/admin/v1/canbo/get/${userId}`,
      method: "GET",
      isAuthRequest: true,
    })
  },

  deleteApprovalRequest: (userId) => {
    return request({
      url: `/admin/v1/canbo/cancel/${userId}`,
      method: "PUT",
      isAuthRequest: true,
    })
  },

  updateApprovalRequest: (approvalId) => {
    return request({
      url: `/admin/v1/canbo/approvals/${approvalId}`,
      method: "PUT",
      isAuthRequest: true,
    });
  },
};

export default approveApi;
