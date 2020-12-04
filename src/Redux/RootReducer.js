import { combineReducers } from "redux";
import { TodoReducer } from "./TodoReducer";

export const RootReducer = () => {
    return(
        combineReducers({
            todos: TodoReducer
        })
    );


};


