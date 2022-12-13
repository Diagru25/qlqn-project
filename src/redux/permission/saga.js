import { fork, all, takeEvery, put, select } from "redux-saga/effects";
import { showNotification } from "../../helper/showNotification";
import permissionApi from "../../services/apis/permissionApi";
import permissionActions from "./action";

function* getModuleList_saga(action) {
  try {
    const params = action.payload;
    const moduleList = yield select(
      (state) => state.permissionReducer.moduleList
    );

    const pageSize = params.page_size ? params.page_size : moduleList.page_size;
    const pageIndex = params.page_index
      ? params.page_index
      : moduleList.page_index;

    const res = yield permissionApi.getModuleList(pageIndex, pageSize);
    const { page_index, page_size, items } = res.result;

    yield put(
      permissionActions.actions.updateState({
        moduleList: {
          items,
          page_size,
          page_index,
          isLoading: false,
        },
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      permissionActions.actions.updateState({
        moduleList: {
          items: [],
          page_size: 100,
          page_index: 1,
          isLoading: false,
        },
      })
    );
  }
}

function* getPermissionList_saga(action) {
  try {
    const params = action.payload;
    const permissionList = yield select(
      (state) => state.permissionReducer.permissionList
    );

    const pageSize = params.page_size
      ? params.page_size
      : permissionList.page_size;
    const pageIndex = params.page_index
      ? params.page_index
      : permissionList.page_index;
    const moduleId = params.moduleId;

    if (moduleId) {
      const res = yield permissionApi.getPermissionList(
        moduleId,
        pageIndex,
        pageSize
      );
      const { page_index, page_size, items } = res.result;

      yield put(
        permissionActions.actions.updateState({
          permissionList: {
            items,
            page_size,
            page_index,
            isLoading: false,
          },
        })
      );
    }
  } catch (error) {
    console.log(error);
    yield put(
      permissionActions.actions.updateState({
        permissionList: {
          items: [],
          page_size: 100,
          page_index: 1,
          isLoading: false,
        },
      })
    );
  }
}

function* updatePermission_saga(action) {
  try {
    const { moduleId, data } = action.payload;
    const permissionList = yield select(
      (state) => state.permissionReducer.permissionList
    );
    const _list = [...permissionList.items];
    let foundIndex = _list.findIndex((el) => el.Id === data.Id);

    if (foundIndex !== -1 && moduleId) {
      const updatedObj = { ..._list[foundIndex], ...data };
      const updatedList = [
        ..._list.slice(0, foundIndex),
        updatedObj,
        ..._list.slice(foundIndex + 1),
      ];

      const dataForUpdate = {
        list_permissions: [...updatedList],
      };

      const res = yield permissionApi.updatePermission(moduleId, dataForUpdate);
      if (res.statusCode === 200) {
        yield put(
          permissionActions.actions.updateState({
            permissionList: {
              ...permissionList,
              items: dataForUpdate.list_permissions,
            },
          })
        );

        showNotification("success", "Cập nhật quyền thành công");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* listen() {
  yield takeEvery(permissionActions.types.GET_MODULE_LIST, getModuleList_saga);
  yield takeEvery(
    permissionActions.types.GET_PERMISSION_LIST,
    getPermissionList_saga
  );
  yield takeEvery(
    permissionActions.types.UPDATE_PERMISSION,
    updatePermission_saga
  );
}

export default function* permissionSaga() {
  yield all([fork(listen)]);
}
