import {call, put, takeLatest, takeEvery} from "redux-saga/effects";
import {GET_TODOS, REQUEST_TODOS} from "../Redux/ActionTypes";
import {fetchToDos, getToDos, getToDosError} from "../Redux/ActionCreaters";

function* getToDoData() {
    try {
        const data = yield call(fetchToDos);
        console.log(data);
        yield put(getToDos(data));
    } catch (e) {
        yield put(getToDosError(e.message));
    }
}

export default function* helloSaga() {
    yield takeEvery(REQUEST_TODOS, getToDoData);
}
