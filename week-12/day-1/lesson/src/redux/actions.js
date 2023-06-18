export const changePropOne = value => {
    return {
        type:'props_one',
        payload: value
    }
}

export const changePropTwo = value => {
    return {
        type:'props_two',
        payload: value
    }
}

export const add = () => {
    return {
        type:'counterAdd',
    }
}

export const minus = () => {
    return {
        type:'counterMinus',
    }
}