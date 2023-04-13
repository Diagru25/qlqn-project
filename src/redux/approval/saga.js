import { useState } from "react";
import { fork, all, takeEvery, put, select } from "redux-saga/effects";
import { isDeepEqual } from "../../helper/comparedObjects";
import { showNotification } from "../../helper/showNotification";
import approveApi from "../../services/apis/approveApi";
import memberApi from "../../services/apis/memberAPI";
import approvalActions from "./action";

function* getApprovalList_saga(action) {
  try {
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

    // const fieldUpdate = params.fi

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
  } catch (error) { }
}

function* deleteApprovalRequest_saga(action) {
  try {
    const params = action.payload;

    const userId = params.userId;

    const res = yield approveApi.deleteApprovalRequest(userId);

    if (res.statusCode === 200) {
      showNotification("success", "Xoa yeu cau phe duyet thanh cong!");
    } 
  } catch (error) {
    showNotification("error", "Khong hoan thanh xoa yeu cau phe duyet!");
  }
}

function* getDetailApprovalList_saga(action) {
  try {
    const params = action.payload;
    const userId = params.userId;

    const memberRes = yield memberApi.getMemberDetail(userId);

    const memberDetail = memberRes.result.Record;

    if (userId) {
      const res = yield approveApi.getDetailApprovalList(userId);

      const { user_info_value } = res.result;

      const approvalValObj = JSON.parse(user_info_value)

      yield put(approvalActions.actions.updateState({
        detailApprovalList: {
          approvalInfo: approvalValObj,
          comparedInfo: memberDetail,
          isLoading: false,
        }
      }))
    }
  } catch (error) {
    yield put(approvalActions.actions.updateState({
      detailApprovalList: {
        approvalInfo: {},
        compared: [],
        isLoading: false,
      }
    }))
  }
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
  yield takeEvery(approvalActions.types.GET_DETAIL_APPROVAL_LIST, getDetailApprovalList_saga);
  yield takeEvery(approvalActions.types.DELETE_APPROVAL_REQUEST, deleteApprovalRequest_saga);
}

export default function* approvalSaga() {
  yield all([fork(listen)]);
}
