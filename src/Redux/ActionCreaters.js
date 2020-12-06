import * as ActionTypes from './ActionTypes'

export const getToDos = (data) => ({
    type: ActionTypes.GET_TODOS,
    payload: data
});

export const requestToDos = () => ({
    type: ActionTypes.REQUEST_TODOS,
});

export const getToDosError = (errMsg) => ({
    type: ActionTypes.GET_TODO_ERROR,
    payload: errMsg
});

export const addToDo = (todo) => ({
    type: ActionTypes.ADD_TODO,
    payload: todo

});

export const postNewToDo = (todo) => ({
    type: ActionTypes.POST_TODO,
    payload: todo
})

export const fetchToDos = async () =>  {
    try {
        let myHeaders = new Headers();
        myHeaders.set('Accept', 'application/json');
        const response = await fetch("http://localhost:4000/list",
            {method: 'GET',
                headers: myHeaders
            });
        let data = response.json();
        console.log(data);
        return await data;

    } catch (e) {
        console.log(e)
    }

};

export const postToDo = async (data) => {

    let myHeaders = new Headers();
    myHeaders.set('Accept', 'application/json');
    myHeaders.set('Content-Type', 'application/json');
    try{
        const response = await fetch("http://localhost:4000/list", {
            method: 'POST',
            body: JSON.stringify(data.payload),
            headers: myHeaders
        });

        let res =  response.json();
        return await res;
    } catch (e) {
        console.log(e)
    }
}
