import {call, put, takeLatest, fork, takeEvery} from "redux-saga/effects";
import {ADD_TODO, REQUEST_TODOS} from "../Redux/ActionTypes";
import {fetchToDos, getToDos, getToDosError, postToDo, postNewToDo} from "../Redux/ActionCreaters";
import {all} from "@redux-saga/core/effects";

function* getToDoData() {
    try {
        const data = yield call(fetchToDos);
        yield put(getToDos(data));
    } catch (e) {
        yield put(getToDosError(e.message));
    }
}

function* addNewToDo(action) {
    try{
        const data = yield call(postToDo, action);
        yield put(postNewToDo(data));
    } catch (e) {
        yield put(getToDosError(e.message));
    }

}

function* saga1() {
    yield takeEvery(REQUEST_TODOS, getToDoData);
}

function* saga2() {
    yield takeEvery(ADD_TODO, addNewToDo);
}

export default function* helloSaga() {
    yield all([
        fork(saga1),
        fork(saga2),
    ])
}
