const express = require('express');
const router = express.Router();

const { _getAllProducts, 
        _getProduct, 
        _searchProduct, 
        _insertProduct, 
        _deleteProduct, 
        _updateProduct
    } = require('../controllers/products');

router.get('/products', _getAllProducts);
router.get('/product/:id', _getProduct);
router.get('/search', _searchProduct);
router.post('/products', _insertProduct);
router.delete('/products/:id', _deleteProduct);
router.put('/products/:id', _updateProduct);


module.exports = {
    router
}