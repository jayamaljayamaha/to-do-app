import {call, put, takeLatest} from "redux-saga/effects";
import {REQUEST_TODOS} from "../Redux/ActionTypes";
import {fetchToDos, getToDos} from "../Redux/ActionCreaters";

function* getToDoData() {
    try {
        const data = yield call(fetchToDos);
        yield put(getToDos(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* helloSaga() {
    yield takeLatest(REQUEST_TODOS, getToDoData);
}
