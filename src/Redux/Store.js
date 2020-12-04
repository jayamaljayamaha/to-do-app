import {RootReducer} from "../Redux/RootReducer";

import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import helloSaga from "../TodoSagas/saga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga);
