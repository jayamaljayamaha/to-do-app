import {GET_TODOS, REQUEST_TODOS} from './ActionTypes';

export const Todos = (state = {
    isLoading: true,
    todos: []

}, action) => {
    console.log(action.type)
    switch (action.type) {
        case GET_TODOS:
            return {...state, isLoading: false, todos: action.data};
        case REQUEST_TODOS:
            return {...state, isLoading: true, todos: []};
        default:
            return state;
    }
};
