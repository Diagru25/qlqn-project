import { fork, all, takeEvery, put, select } from "redux-saga/effects";
import { showNotification } from "../../helper/showNotification";
import approveApi from "../../services/apis/approveApi";
import approvalActions from "./action";

function* getApprovalList_saga(action) {
  try {
    const params = action.payload;

    const res = yield approveApi.getApprovalList();
    const { items, page_size, page_index } = res.result;

    yield put(
      approvalActions.actions.updateState({
        approvalList: {
          items: items,
          pageIndex: page_index,
          pageSize: page_size,
          isLoading: false,
        },
      })
    );

    showNotification(
      "success",
      "Danh sách yêu cầu xét duyệt cập nhật thành công"
    );
  } catch (error) {
    yield put(
      approvalActions.actions.updateState({
        approvalList: {
          item: [],
          pageIndex: 1,
          pageSize: 40,
          isLoading: false,
        },
      })
    );
  }
}

function* updateApprovalList_saga(action) {
  try {
    const params = action.payload;

    const approvalId = params.approvalId;

    if (approvalId) {
      const res = yield approveApi.updateApprovalRequest(approvalId);

      if (res.statusCode === 200) {
        showNotification("success", "Chấp thuận yêu cầu sửa đổi thông tin");
      } else {
        showNotification(
          "error",
          "Đã có lỗi xảy ra trong quá trình chấp thuận yêu cầu"
        );
      }
    }
  } catch (error) {}
}

function* listen() {
  yield takeEvery(
    approvalActions.types.GET_APPROVAL_LIST,
    getApprovalList_saga
  );
  yield takeEvery(
    approvalActions.types.UPDATE_APPROVAL_LIST,
    updateApprovalList_saga
  );
}

export default function* approvalSaga() {
  yield all([fork(listen)]);
}
