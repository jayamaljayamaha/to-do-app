import {GET_TODO_ERROR, GET_TODOS, REQUEST_TODOS} from './ActionTypes';

export const TodoReducer = (state = {
    isLoading: false,
    todos: [],
    errMsg: ''
}, action ={}) => {
    switch (action.type) {
        case GET_TODOS:
            return {...state, errMsg: '', isLoading: false, todos: action.payload};
        case REQUEST_TODOS:
            return {...state, errMsg: '', isLoading: true, todos: []};
        case GET_TODO_ERROR:
            return {...state, errMsg: action.payload, isLoading: false, todos: []};
        default:
            return state;
    }
};
