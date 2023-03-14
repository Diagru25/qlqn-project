import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import permissionSaga from "./permission/saga";
import memberListSaga from "./member_info/saga";
import userSaga from "./user/saga";
import verifySaga from "./verify/saga";
import approvalSaga from "./approval/saga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    permissionSaga(),
    memberListSaga(),
    userSaga(),
    verifySaga(),
    approvalSaga(),
  ]);
}
