import {RootReducer} from "../Redux/RootReducer";

import {applyMiddleware, createStore, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import helloSaga from "../TodoSagas/saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(helloSaga);

export default store;
