const {db} = require('../config/db.js')

const register = user => {
    return db('users')
    .insert(user)
    .returning('*')
}

const login = user => {
    return db('login')
    .insert(user)
    .returning('*')
}

module.exports = {
    register,
    login
}