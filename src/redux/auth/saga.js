import { fork, all, takeEvery, put } from "redux-saga/effects";
import { ACCESS_TOKEN } from "../../constants/auth.constant";
import {
  clearLocalStorage,
  writeLocalStorage,
} from "../../helper/localStorage";
import { showNotification } from "../../helper/showNotification";
import authApi from "../../services/apis/authApi";
import authActions from "./action";

function* checkSesion_saga() {
  try {
    const res = yield authApi.checkSession();
    console.log(res.message);
    if (res.statusCode !== 200) {
      yield put(
        authActions.actions.updateState({
          isLoggedIn: false,
          isLoading: false,
          sessionKey: null,
        })
      );
    }
  } catch (error) {
    yield put(
      authActions.actions.updateState({
        isLoggedIn: false,
        isLoading: false,
        sessionKey: null,
      })
    );
    showNotification("error", "Lỗi xác thực người dùng!");
  }
}

function* login_saga(action) {
  try {
    const { username, password } = action.payload;

    const res = yield authApi.login(username, password);
    console.log(res);

    if (res.statusCode === 200) {
      const sessionKey = res.result.token;
      writeLocalStorage(ACCESS_TOKEN, sessionKey);
      console.log(ACCESS_TOKEN);
      yield put(
        authActions.actions.updateState({
          sessionKey: sessionKey,
          isLoggedIn: true,
          isLoading: false,
          error: null,
        })
      );
      showNotification("success", "Đăng nhập thành công")
      console.log("Đăng nhập thành công");
    }
  } catch (error) {
    yield put(
      authActions.actions.updateState({
        isLoggedIn: false,
        isLoading: false,
        sessionKey: null,
        error: "Đăng nhập không thành công",
      })
    );
    showNotification("error", "Đăng nhập không thành công", "Mời bạn nhập lại thông tin")
    //log('[AUTH SAGA][login_saga]', error);
  }
}

function* logout_saga(action) {
  try {
    clearLocalStorage(ACCESS_TOKEN);

    console.log("logout");
    yield put(
      authActions.actions.updateState({
        isLoggedIn: false,
        isLoading: false,
        error: null,
        sessionKey: null,
      })
    );
    showNotification("success", "Đăng xuất người dùng thành công");
  } catch (error) {
    console.log(error);
    //log('[AUTH SAGA][login_saga]', error);
  }
}

function* listen() {
  yield takeEvery(authActions.types.CHECK_SESSION, checkSesion_saga);
  yield takeEvery(authActions.types.LOGIN, login_saga);
  yield takeEvery(authActions.types.LOGOUT, logout_saga);
}

export default function* authSaga() {
  yield all([fork(listen)]);
}
