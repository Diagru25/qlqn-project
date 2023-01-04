import { request } from "./baseRequest";

const memberApi = {
  getMemberlist: (page, limit, metric) => {
    return request({
      url: "/admin/v1/canbo",
      method: "GET",
      params: {
        // page_size: page_size,
        // page_index: page_index,
        page: page,
        limit: limit,
        metric: metric,
      },
      isAuthRequest: true,
    });
  },
  updateMemberList: (memberId, data = {}) => {
    return request({
      url: `/admin/v1/canbo/${memberId}`,
      method: "PUT",
      data: data,
      isAuthRequest: true,
    });
  },
  getMemberPosition: (page_index, page_size, text) => {
    return request({
      url: "/admin/v1/chucvu",
      method: "GET",
      params: {
        page_index: page_index,
        page_size: page_size,
        text: text,
      },
      isAuthRequest: true,
    });
  },

  getMemberRank: (page_index, page_size, text) => {
    return request({
      url: "/admin/v1/capbac",
      method: "GET",
      params: {
        page_index: page_index,
        page_size: page_size,
        text: text,
      },
      isAuthRequest: true,
    });
  },

  getMemberUnit: (page_index, page_size, text) => {
    return request({
      url: "/admin/v1/donvi",
      method: "GET",
      params: {
        page_index: page_index,
        page_size: page_size,
        text: text,
      },
      isAuthRequest: true,
    });
  },

  getMemberAffiliatedUnit: (parentUnitId) => {
    return request({
      url: `/admin/v1/donvi/${parentUnitId}/donvitructhuoc`,
      method: "GET",
      isAuthRequest: true,
    });
  },

  getListStatistic: (
    DonVi,
    ChucVu,
    CapBac,
    TrinhDoNgoaiNgu,
    KhuVucDiaLy,
    ChungChiDaoTao,
    TrinhDoCMKT,
    LoaiHinhDaoTao,
    CoSoDaoTao,
    SoNamNhapNgu,
    SoTuoi
  ) => {
    return request({
      url: "/admin/v1/thongke",
      method: "GET",
      params: {
        DonVi: DonVi,
        ChucVu: ChucVu,
        CapBac: CapBac,
        TrinhDoNgoaiNgu: TrinhDoNgoaiNgu,
        KhuVucDiaLy: KhuVucDiaLy,
        ChungChiDaoTao: ChungChiDaoTao,
        TrinhDoCMKT: TrinhDoCMKT,
        LoaiHinhDaoTao: LoaiHinhDaoTao,
        CoSoDaoTao: CoSoDaoTao,
        SoNamNhapNgu: SoNamNhapNgu,
        SoTuoi: SoTuoi,
      },
      isAuthRequest: true,
    });
  },

  getFilterStatistic: (filter, value, limit, page) => {
    return request({
      url: "/admin/v1/thongke/timkiemthongke",
      method: "GET",
      params: {
        filter: filter,
        value: value,
        limit: limit,
        page: page,
      },
      isAuthRequest: true,
    });
  },

  getMemberUpdatedLogs: (memberId) => {
    return request({
      url: `/admin/v1/canbo/history/${memberId}`,
      method: "GET",
      isAuthRequest: true,
    });
  },

  getMemberDetail: (memberId) => {
    return request({
      url: `/admin/v1/canbo/${memberId}`,
      method: "GET",
      isAuthRequest: true,
    });
  },
};

export default memberApi;
