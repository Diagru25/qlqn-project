import { select, put, takeEvery, all, fork } from "redux-saga/effects";
import { showNotification } from "../../helper/showNotification";
import memberApi from "../../services/apis/memberAPI";
import memberActions from "./action";

function* getMemberList_saga(action) {
  try {
    const params = action.payload;
    const memberList = yield select(
      (state) => state.memberListReducer.memberList
    );
    // const pageSize = params.page_size ? params.page_size : memberList.page_size;
    // const pageIndex = params.page_index
    //   ? params.page_index
    //   : memberList.page_index;

    const metric = params.metric ? params.metric : "";
    const pageSize = params.page ? params.page : memberList.page;
    const limitSize = params.limit ? params.limit : memberList.limit;

    // const filter = params.filter
    //   ? { ...memberList.filter, ...params.filter }
    //   : memberList.filter;

    // yield put(memberActions.actions.setFilter(filter));

    const res = yield memberApi.getMemberlist(pageSize, limitSize, metric);

    const { message, page, limit, total } = res.result;

    yield put(
      memberActions.actions.updateState({
        memberList: {
          message,
          page,
          limit,
          total,
          isLoading: false,
          // filter: filter,
        },
      })
    );
  } catch (error) {
    yield put(
      memberActions.actions.updateState({
        memberList: {
          items: [],
          limit: 100,
          page: 1,
          total: 0,
          isLoading: false,
        },
      })
    );
  }
}

function* getMemberPosition_saga(action) {
  try {
    const params = action.payload;
    const memberPosition = yield select(
      (state) => state.memberListReducer.memberPosition
    );
    const pageIndex = params.page_index
      ? params.page_index
      : memberPosition.page_index;
    const pageSize = params.page_size
      ? params.page_size
      : memberPosition.page_size;
    const res = yield memberApi.getMemberPosition(
      pageIndex,
      pageSize,
      params.text
    );
    const { page_index, page_size, items, total } = res.result;

    yield put(
      memberActions.actions.updateState({
        memberPosition: {
          items,
          page_index,
          page_size,
          total,
          isLoading: false,
        },
      })
    );
  } catch (error) {
    yield put(
      memberActions.actions.updateState({
        memberPosition: {
          items: [],
          page_index: 1,
          page_size: 40,
          total: 0,
          isLoading: false,
        },
      })
    );
  }
}

function* getMemberRank_saga(action) {
  try {
    const params = action.payload;
    const memberRank = yield select(
      (state) => state.memberListReducer.memberRank
    );
    const pageIndex = params.page_index
      ? params.page_index
      : memberRank.page_index;
    const pageSize = params.page_size ? params.page_size : memberRank.page_size;
    const res = yield memberApi.getMemberRank(pageIndex, pageSize, params.text);
    const { page_index, page_size, items, total } = res.result;

    yield put(
      memberActions.actions.updateState({
        memberRank: {
          items,
          page_index,
          page_size,
          total,
          isLoading: false,
        },
      })
    );
  } catch (error) {
    yield put(
      memberActions.actions.updateState({
        memberRank: {
          items: [],
          page_index: 1,
          page_size: 40,
          total: 0,
          isLoading: false,
        },
      })
    );
  }
}

function* getMemberUnit_saga(action) {
  try {
    const parentUnitRes = yield memberApi.getMemberUnit();
    const parentUnitArr = parentUnitRes.result.items;

    if (parentUnitArr) {
      for (let i = 0; i < parentUnitArr.length; i++) {
        const childUnitRes = yield memberApi.getMemberAffiliatedUnit(
          parentUnitArr[i].Id
        );
        const { Id, Ten } = parentUnitArr[i];
        const { items, page_index, page_size } = childUnitRes.result;

        yield put(
          memberActions.actions.updateState({
            memberUnit: {
              data: [
                {
                  title: Ten,
                  key: Id,
                  children: items.map((item) => {
                    return {
                      title: item.Ten,
                      key: item.Id,
                    };
                  }),
                },
              ],
              isLoading: false,
              page_index,
              page_size,
            },
          })
        );
      }
    }
  } catch (error) {
    yield memberActions.actions.updateState({
      memberAffiliatedUnit: {
        data: [],
        page_index: 1,
        page_size: 40,
        total: 0,
        isLoading: false,
      },
    });
  }
}

function* getListStatistic_saga(action) {
  try {
    const params = action.payload;

    const memberListStatistic = yield select(
      (state) => state.memberListReducer.memberListStatistic
    );

    const donVi = params.DonVi ? params.DonVi : "";
    const chucVu = params.ChucVu ? params.ChucVu : "";
    const capBac = params.CapBac ? params.CapBac : "";
    const trinhDoNgoaiNgu = params.TrinhDoNgoaiNgu
      ? params.TrinhDoNgoaiNgu
      : "";
    const trinhDoCMKT = params.TrinhDoCMKT ? params.TrinhDoCMKT : "";
    const khuVucDiaLy = params.KhuVucDiaLy ? params.KhuVucDiaLy : "";
    const chungChiDaoTao = params.ChungChiDaoTao ? params.ChungChiDaoTao : "";
    const loaiHinhDaoTao = params.LoaiHinhDaoTao ? params.LoaiHinhDaoTao : "";
    const coSoDaoTao = params.CoSoDaoTao ? params.CoSoDaoTao : "";
    const soNamNhapNgu = params.SoNamNhapNgu ? params.SoNamNhapNgu : "";
    const soTuoi = params.SoTuoi ? params.SoTuoi : "";
    const hocVi = params.HocVi ? params.HocVi : "";

    const filter = params
      ? { ...memberListStatistic.filter, ...params }
      : memberListStatistic.filter;

    yield put(memberActions.actions.setFilter(filter));

    const res = yield memberApi.getListStatistic(
      donVi,
      chucVu,
      capBac,
      trinhDoNgoaiNgu,
      khuVucDiaLy,
      chungChiDaoTao,
      trinhDoCMKT,
      loaiHinhDaoTao,
      coSoDaoTao,
      soNamNhapNgu,
      soTuoi,
      hocVi
    );

    const {
      countSoNamNhapNgu,
      countLoaiHinhDaoTao,
      countChungChiDaoTao,
      countCapBac,
      countChucVu,
      countCoSoDaoTao,
      countDonVi,
      countSoTuoi,
      countKhuVucDiaLy,
      countTrinhDoNgoaiNgu,
      countTrinhDoCMKT,
      countTotal,
    } = res.result;

    yield put(
      memberActions.actions.updateState({
        memberListStatistic: {
          countSoNamNhapNgu: countSoNamNhapNgu,
          countLoaiHinhDaoTao: countLoaiHinhDaoTao,
          countChungChiDaoTao: countChungChiDaoTao,
          countCapBac: countCapBac,
          countChucVu: countChucVu,
          countCoSoDaoTao: countCoSoDaoTao,
          countDonVi: countDonVi,
          countSoTuoi: countSoTuoi,
          countKhuVucDiaLy: countKhuVucDiaLy,
          countTrinhDoNgoaiNgu: countTrinhDoNgoaiNgu,
          countTrinhDoCMKT: countTrinhDoCMKT,
          countTotal: countTotal,
          isLoading: false,
          filter: filter,
        },
      })
    );
    showNotification("success", "Thống kê danh sách quân nhân thành công!");
  } catch (error) {
    yield put(
      memberActions.actions.updateState({
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
          countTotal: 0,
          isLoading: false,
        },
      })
    );

    showNotification("error", "Thống kê danh sách quân nhân thất bại!");
  }
}

function* getFilterStatistic_saga(action) {
  try {
    const params = action.payload;

    const filterStatistic = yield select(
      (state) => state.memberListReducer.filterStatistic
    );

    const filter = params.filter ? params.filter : "";
    const value = params.value ? params.value : "";
    const pageIndex = params.limit ? params.limit : filterStatistic.limit;
    const pageSize = params.page ? params.page : filterStatistic.page;

    const res = yield memberApi.getFilterStatistic(
      filter,
      value,
      pageSize,
      pageIndex
    );

    const { message, limit, page, total } = res.result;

    yield put(
      memberActions.actions.updateState({
        filterStatistic: {
          message,
          limit,
          page,
          total,
          isLoading: false,
        },
      })
    );
  } catch (error) {
    yield put(
      memberActions.actions.updateState({
        filterStatistic: {
          message: [],
          limit: 40,
          page: 1,
          total: 0,
          isLoading: false,
        },
      })
    );
  }
}

function* getMemberUpdatedLogs_saga(action) {
  try {
    const param = action.payload;
    if (param.memberId) {
      const res = yield memberApi.getMemberUpdatedLogs(param.memberId);

      const record = res.result;

      yield put(
        memberActions.actions.updateState({
          memberUpdatedLogs: {
            records: record,
            isLoading: false,
          },
        })
      );
    }
  } catch (error) {
    yield put(
      memberActions.actions.updateState({
        memberUpdatedLogs: {
          records: [],
          isLoading: false,
        },
      })
    );
  }
}

function* listen() {
  yield takeEvery(memberActions.types.GET_MEMBER_LIST, getMemberList_saga);
  yield takeEvery(
    memberActions.types.GET_MEMBER_POSITION,
    getMemberPosition_saga
  );
  yield takeEvery(memberActions.types.GET_MEMBER_UNIT, getMemberUnit_saga);
  yield takeEvery(memberActions.types.GET_MEMBER_RANK, getMemberRank_saga);
  yield takeEvery(
    memberActions.types.GET_LIST_STATISTIC,
    getListStatistic_saga
  );
  yield takeEvery(
    memberActions.types.GET_MEMBER_UPDATED_LOGS,
    getMemberUpdatedLogs_saga
  );
  yield takeEvery(
    memberActions.types.GET_FILTER_STATISTIC,
    getFilterStatistic_saga
  );
}

export default function* memberListSaga() {
  yield all([fork(listen)]);
}
