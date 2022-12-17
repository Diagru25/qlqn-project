import { all, fork, put, takeEvery } from "redux-saga/effects";
import { showNotification } from "../../helper/showNotification";
import verifyAPI from "../../services/apis/verifyAPI";
import verifyActions from "./action";

function* getVerifyInfo_saga(action) {
  try {
    const payload = action.payload;
    const userId = payload.userId;
    if (userId) {
      const res = yield verifyAPI.verifyInfo(userId);

      const { result, diff, recover_data } = res.result;
     
      if (!result) {
        const pathModifyArr = diff.map((a) => a.path);

        let b = [];

        for (let i = 0; i < pathModifyArr.length; i++) {
          b.push(pathModifyArr[i].pop());
        }

        const modifyKeys = b.join(", ");

        showNotification(
          "warning",
          "Cảnh báo tấn công dữ liệu",
          `Dữ liệu bị sửa đổi tại ${modifyKeys}`,
          6
        );
        yield put(
          verifyActions.actions.updateState({
            verifyInfo: {
              diff,
              recover_data,
            },
          })
        );
        showNotification("success", "Khôi phục dữ liệu thành công");
      }
    }
  } catch (error) {
    yield put(
      verifyActions.actions.updateState({
        verifyInfo: {
          diff: [],
          recover_data: {},
        },
      })
    );
  }
}

function* listen() {
  yield takeEvery(verifyActions.types.GET_VERIFY_INFO, getVerifyInfo_saga);
}

export default function* verifySaga() {
  yield all([fork(listen)]);
}
