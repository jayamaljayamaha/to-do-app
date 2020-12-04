import { combineReducers } from "redux";
import { Todos } from "./Todos";

export const RootReducer = () => {
    return(
        combineReducers({
            Todos
        })
    );


};


