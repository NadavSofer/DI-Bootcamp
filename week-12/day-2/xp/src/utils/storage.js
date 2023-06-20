
export const addToStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export const getToStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key)) || []
}

