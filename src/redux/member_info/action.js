const prefix = "MEMBER_";

const types = {
  GET_MEMBER_LIST: prefix + "GET_MEMBER_LIST",
  GET_MEMBER_POSITION: prefix + "GET_MEMBER_POSITION",
  GET_MEMBER_RANK: prefix + "GET_MEMBER_RANK",
  GET_MEMBER_DETAIL: prefix + "GET_MEMBER_DETAIL",
  GET_MEMBER_UNIT: prefix + "GET_MEMBER_UNIT",
  GET_LIST_STATISTIC: prefix + "GET_LIST_STATISTIC",
  GET_MEMBER_UPDATED_LOGS: prefix + "GET_MEMBER_UPDATED_LOGS",
  SET_FILTER: prefix + "SET_FILTER",
  SET_DEFAULT_FILTER: prefix + "SET_DEFAULT_FILTER",
  UPDATE_STATE: prefix + "UPDATE_STATE",
};

const actions = {
  getMemberList: (DonVi, HoVaTen, NganhNgheDaoTao, NguyenQuan, page, limit) => {
    return {
      type: types.GET_MEMBER_LIST,
      payload: {
        DonVi,
        HoVaTen,
        NganhNgheDaoTao,
        NguyenQuan,
        page,
        limit,
      },
    };
  },
  getMemberPosition: (page_index, page_size) => {
    return {
      type: types.GET_MEMBER_POSITION,
      payload: {
        page_index,
        page_size,
      },
    };
  },
  getMemberRank: (page_index, page_size) => {
    return {
      type: types.GET_MEMBER_RANK,
      payload: {
        page_index,
        page_size,
      },
    };
  },

  getMemberUnit: () => {
    return {
      type: types.GET_MEMBER_UNIT,
      payload: {},
    };
  },

  getMemberDetail: (memberId) => {
    return {
      type: types.GET_MEMBER_DETAIL,
      payload: {
        memberId,
      },
    };
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
    return {
      type: types.GET_LIST_STATISTIC,
      payload: {
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
        SoTuoi,
      },
    };
  },

  getMemberUpdatedLogs: (memberId) => {
    return {
      type: types.GET_MEMBER_UPDATED_LOGS,
      payload: {
        memberId,
      },
    };
  },

  setFilter: (filter = {}) => {
    return {
      type: types.SET_FILTER,
      payload: {
        filter,
      },
    };
  },

  setDefaultFilter: () => {
    return {
      type: types.SET_FILTER,
      payload: {},
    };
  },

  updateState: (state) => {
    return {
      type: types.UPDATE_STATE,
      payload: {
        state,
      },
    };
  },
};

const memberActions = {
  types,
  actions,
};

export default memberActions;
