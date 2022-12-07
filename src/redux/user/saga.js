import { all, fork, put, takeEvery } from "redux-saga/effects";
import { ACCESS_TOKEN } from "../../constants/auth.constant";
import { clearLocalStorage } from "../../helper/localStorage";
import userAPI from "../../services/apis/userAPI";
import userActions from "./action";

function* getUserInfo_saga(action) {
  try {
    const res = yield userAPI.getUserProfile();
    const userInfo = res.result.Record;
    console.log(userInfo)
    if (userInfo) {
      yield put(
        userActions.actions.updateState({
          userInfo: userInfo,
          isLoading: false,
        })
      );
    } else {
      yield put(
        userActions.actions.updateState({
          userInfo: null,
          isLoading: false,
        })
      );
      clearLocalStorage(ACCESS_TOKEN);
    }
  } catch (error) {
    console.log(error);
  }
}

function* getUserLogs_saga(action) {
  try {
    const payload = action.payload;
    const res = yield userAPI.getUserLogs(payload.page_index);
    const { items, page_index, page_size, total } = res.result;
    yield put(userActions.actions.updateState({
      userLogs: {
        items,
        page_index,
        page_size,
        total,
        isLoading: false
      }
    }))
  } catch (error) {
    yield put(userActions.actions.updateState({
      userLogs: {
        items: [],
        page_index: 1,
        page_size: 100,
        total: 0,
        isLoading: false
      }
    }))
  }
}

function* listen() {
  yield takeEvery(userActions.types.GET_USER_INFO, getUserInfo_saga);
  yield takeEvery(userActions.types.GET_USER_LOGS, getUserLogs_saga);
}

export default function* userSaga() {
  yield all([fork(listen)]);
}
