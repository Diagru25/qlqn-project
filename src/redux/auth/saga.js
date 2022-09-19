import { fork, all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';

function* login_saga(action) {
    try {
        console.log("login");
        yield put(actions.actions.updateState({isLoggedIn: true}));
    }
    catch (error) {
        //log('[AUTH SAGA][login_saga]', error);
    }
}

function* logout_saga(action) {
    try {
        console.log("logout");
        yield put(actions.actions.updateState({ isLoggedIn: false }));
    }
    catch (error) {
        //log('[AUTH SAGA][login_saga]', error);
    }
}

function* listen() {
    yield takeEvery(actions.types.LOGIN, login_saga);
}

export default function* authSaga() {
    yield all([fork(listen)]);
}