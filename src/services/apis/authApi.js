import { request } from "../apis/baseRequest";

const authApi = {
  checkSession: () => {
    return request({
      url: "/v1/auth/check_session",
      method: "GET",
      isAuthRequest: true,
    });
  },

  login: (username, password) => {
    return request({
      url: "/v1/auth/login",
      method: "POST",
      data: {
        Tendangnhap: username,
        Matkhau: password,
      },
      isAuthRequest: false,
    });
  },

  getUserInfo: () => {
    return request({
      url: "/home/v1/users",
      method: "GET",
      isAuthRequest: true,
    });
  },

  getSystemLog: (page_index, page_size) => {
    return request({
      url: "/admin/v1/logs",
      method: "GET",
      params: {
        page_index: page_index,
        page_size: page_size
      },
      isAuthRequest: true
    })
  },

  changePassword: (password, newPassword, confirmPassword) => {
    return request({
      url: "/auth/v1/change_password",
      method: "PUT",
      isAuthRequest: true,
      data: {
        confirm_password: confirmPassword,
        new_password: newPassword,
        password: password,
      },
      
    });
  },

  updateProfile: (fullname, address, sex, phone) => {
    return request({
      url: "/home/v1/users",
      method: "PUT",
      isAuthRequest: true,
      data: {
        fullname,
        address,
        sex,
        phone,
      },
    });
  },

  forgotPassword: (email) => {
    return request({
      url: "/auth/v1/forget_password",
      method: "POST",
      isAuthRequest: false,
      data: {
        email,
      },
    });
  },

  resetPassword: (newPassword, confirmPassword, token_verify) => {
    return request({
      url: "/auth/v1/reset_password",
      method: "PUT",
      isAuthRequest: false,
      data: {
        new_password: newPassword,
        confirm_password: confirmPassword,
        token_verify: token_verify,
      },
    });
  },

  resetPasswordUser: (id) => {
    return request({
      url: `admin/v1/users/reset_password/${id}`,
      method: "PUT",
      isAuthRequest: true,
    });
  },

  
};

export default authApi;
