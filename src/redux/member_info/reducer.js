import memberActions from "./action";

const defaultFilter = {
  DonVi: "",
  ChucVu: "",
  CapBac: "",
  TrinhDoNgoaiNgu: "",
  KhuVucDiaLy: "",
  ChungChiDaoTao: "",
  TrinhDoCMKT: "",
  LoaiHinhDaoTao: "",
  CoSoDaoTao: "",
  SoNamNhapNgu: 25,
  SoTuoi: 30,
};

const initialState = {
  memberList: {
    message: [],
    page: 1,
    limit: 40,
    total: 0,
    isLoading: false,
  },

  filterStatistic: {
    message: [],
    limit: 40,
    page: 1,
    total: 0,
    isLoading: false,
  },

  memberPosition: {
    items: [],
    page_index: 1,
    page_size: 40,
    isLoading: false,
    total: 0,
  },

  memberRank: {
    items: [],
    page_index: 1,
    page_size: 40,
    isLoading: false,
    total: 0,
  },

  memberUnit: {
    data: [],
    page_index: 1,
    page_size: 40,
    isLoading: false,
    total: 0,
  },

  memberListStatistic: {
    countSoNamNhapNgu: 0,
    countLoaiHinhDaoTao: 0,
    countChungChiDaoTao: 0,
    countCapBac: 0,
    countChucVu: 0,
    countCoSoDaoTao: 0,
    countDonVi: 0,
    countSoTuoi: 0,
    countKhuVucDiaLy: 0,
    countTrinhDoNgoaiNgu: 0,
    countTrinhDoCMKT: 0,
    isLoading: false,
    filter: defaultFilter,
  },

  memberUpdatedLogs: {
    records: [],
    isLoading: false,
  },
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case memberActions.types.GET_MEMBER_LIST: {
      return {
        ...state,
        memberList: {
          ...state.memberList,
          isLoading: true,
        },
      };
    }
    case memberActions.types.GET_MEMBER_POSITION: {
      return {
        ...state,
        memberPosition: {
          ...state.memberPosition,
          isLoading: true,
        },
      };
    }
    case memberActions.types.GET_MEMBER_RANK: {
      return {
        ...state,
        memberRank: {
          ...state.memberRank,
          isLoading: true,
        },
      };
    }
    case memberActions.types.GET_MEMBER_UNIT: {
      return {
        ...state,
        memberUnit: {
          ...state.memberUnit,
          isLoading: true,
        },
      };
    }

    case memberActions.types.SET_FILTER: {
      return {
        ...state,
        memberListStatistic: {
          ...state.memberListStatistic,
          filter: { ...state.memberListStatistic.filter, ...payload.filter },
        },
      };
    }

    case memberActions.types.GET_LIST_STATISTIC: {
      return {
        ...state,
        memberListStatistic: {
          ...state.memberListStatistic,
          isLoading: true,
        },
      };
    }

    case memberActions.types.GET_FILTER_STATISTIC: {
      return {
        ...state,
        filterStatistic: {
          ...state.filterStatistic,
          isLoading: true,
        },
      };
    }

    case memberActions.types.GET_MEMBER_UPDATED_LOGS: {
      return {
        ...state,
        memberUpdatedLogs: {
          ...state.memberUpdatedLogs,
          isLoading: true,
        },
      };
    }

    case memberActions.types.SET_DEFAULT_FILTER: {
      return {
        ...state,
        memberList: {
          ...state.memberList,
        },
      };
    }
    case memberActions.types.UPDATE_STATE: {
      return {
        ...state,
        ...payload.state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
