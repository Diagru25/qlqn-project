import { all, fork, put, takeEvery } from "redux-saga/effects";
import userAPI from "../../services/apis/userAPI";
import userActions from "./action";
import { showNotification } from "../../helper/showNotification";

function* getUserProfile_saga(action) {
  try {
    const res = yield userAPI.getUserProfile();
    const userProfile = res.result.Record;

    yield put(
      userActions.actions.updateState({
        userProfile: {
          userProfile: userProfile,
          isLoading: false,
        },
      })
    );
  } catch (error) {
    yield put(
      userActions.actions.updateState({
        userProfile: {
          userProfile: {},
          isLoading: false,
        },
      })
    );
    showNotification("error", "Cập nhập hồ sơ quân nhân lỗi!");
  }
}

function* getUserLogs_saga(action) {
  try {
    const payload = action.payload;
    const res = yield userAPI.getUserLogs(payload.page_index);
    const { items, page_index, page_size, total } = res.result;
    yield put(
      userActions.actions.updateState({
        userLogs: {
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
      userActions.actions.updateState({
        userLogs: {
          items: [],
          page_index: 1,
          page_size: 100,
          total: 0,
          isLoading: false,
        },
      })
    );
  }
}

function* listen() {
  yield takeEvery(userActions.types.GET_USER_PROFILE, getUserProfile_saga);
  yield takeEvery(userActions.types.GET_USER_LOGS, getUserLogs_saga);
}

export default function* userSaga() {
  yield all([fork(listen)]);
}
