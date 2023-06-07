const express = require('express');
const router = express.Router();

const {_register} = require('../controllers/users.js');


router.get('/')
router.post('/register', _register)


module.exports = {
    router
}