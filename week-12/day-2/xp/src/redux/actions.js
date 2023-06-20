export const getUser = () => (dispatch, getState) => {
    console.log(getState().currentIndex);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=> {
        dispatch({type:'USERS', payload:data})
        })
    }


export const INSERT = transaction => {
    return {
        type: 'INSERT',
        payload: transaction
    }
}

export const UPDATE = transaction => {
    return {
        type: 'UPDATE',
        payload: transaction
    }
}

export const UPDATE_INDEX = index => {
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }
}

export const DELETE = index => {
    return {
        type: 'DELETE',
        payload: index
    }
}