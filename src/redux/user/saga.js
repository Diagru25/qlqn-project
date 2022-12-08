import { all, fork, put, takeEvery } from "redux-saga/effects";
import userAPI from "../../services/apis/userAPI";
import userActions from "./action";
import { showNotification } from "../../helper/showNotification";

function* getUserInfo_saga(action) {
  try {
    const res = yield userAPI.getUserProfile();
    const userInfo = res.result.Record;
    console.log("abcd", userInfo);

    yield put(
      userActions.actions.updateState({
        userProfile: {
          userInfo: userInfo,
          isLoading: false,
        },
      })
    );
    
  } catch (error) {
    yield put(
      userActions.actions.updateState({
        userProfile: {
          userInfo: {},
          isLoading: false,
        },
      })
    );
    
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
  yield takeEvery(userActions.types.GET_USER_INFO, getUserInfo_saga);
  yield takeEvery(userActions.types.GET_USER_LOGS, getUserLogs_saga);
}

export default function* userSaga() {
  yield all([fork(listen)]);
}
