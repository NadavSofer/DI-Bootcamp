const initState = {transactions:[], currentIndex:0};



export const reducer = (state= initState, action={}) => {
    const insert = (payload) => {
        const arr = state.transactions
        arr.push(payload)
        return arr
    }

    

    switch (action.type) {
        case 'INSERT':
            return{...state, transactions:insert(action.payload)}
        
        case 'UPDATE':
            return{...state, selected:action.payload}

        case 'UPDATE-INDEX':
            return{...state, selected:action.payload}

        case 'DELETE':
            return{...state, transactions:state.transactions.splice(action.payload, 1)}

        default:
            return {...state};
    }
};
