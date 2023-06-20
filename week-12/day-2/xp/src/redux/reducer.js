import { addToStorage, getToStorage } from "../utils/storage";

const initState = {
    transactions: getToStorage('transactions'), 
    currentIndex:-1};


export const reducer = (state= initState, action={}) => {

    switch (action.type) {
        case 'USERS':
            return {...state, users: action.payload}
        case 'INSERT':
            state.transactions.push(action.payload)
            addToStorage('transactions', [...state.transactions])
            return{...state, transactions: [...state.transactions], currentIndex: -1}
        
        case 'UPDATE':
            state.transactions[state.currentIndex] = action.payload
            addToStorage('transactions', [...state.transactions])
            return{...state, transactions: [...state.transactions], currentIndex: -1}

        case 'UPDATE-INDEX':
            return{...state, currentIndex:action.payload}

        case 'DELETE':
            state.transactions.splice(action.payload, 1)
            addToStorage('transactions', [...state.transactions])
            return{...state, transactions: [...state.transactions], currentIndex: -1}

        default:
            return {...state};
    }
};
