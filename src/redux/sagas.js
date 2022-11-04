import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import permissionSaga from "./permission/saga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        permissionSaga()
    ]);
}
