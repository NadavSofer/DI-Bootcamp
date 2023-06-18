const initState = {
    property_one: 'text one from redux',
    property_two: 'prop two',
    count: 0
};

export const reducer = (state= initState, action={}) => {
    switch (action.type) {
        case 'props_one':
            return{...state, property_one:action.payload}

        case 'props_two':
        return{...state, property_two:action.payload}

        case 'counterAdd':
            return{...state, count:state.count + 1}

        case 'counterMinus':
            return{...state, count:state.count - 1}

        default:
            return {...state};
    }
};


