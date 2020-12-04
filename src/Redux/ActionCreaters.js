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

export const fetchToDos = async () =>  {
    try {
        let myHeaders = new Headers();
        myHeaders.set('Accept', 'application/json');
        const response = await fetch("http://localhost:4000/list",
            {method: 'GET',
                headers: myHeaders
            });

        return await response.json();

    } catch (e) {
        console.log(e)
    }

};

export const postToDo = (topic, desc) => (dispatch) => {
    const newToDo = {
        topic: topic,
        desc: desc
    };

    return fetch("localhost:4000/list", {
        method: 'POST',
        body: JSON.stringify(newToDo),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            let errMsg = new Error(error.message);
            throw errMsg
        })
        .then(response => response.json())
        .then(response => dispatch(addToDo(response)))
        .catch(error => {
            console.log('post todo', error.message);
            alert('Your todo could not be posted\nError: ' + error.message)
        })
}
