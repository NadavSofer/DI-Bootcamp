const initState = {
    count: 0
};

export const reducer = (state= initState, action={}) => {
    switch (action.type) {
        case 'counterAdd':
            return{...state, count:state.count + 1}

        case 'counterMinus':
            return{...state, count:state.count - 1}

        default:
            return {...state};
    }
};