const express = require('express');
const router = express.Router();
const {homepage, search} = require('../controllers/facts');

router.get('/', homepage);
router.get('/search', search);

module.exports = {
    router
}