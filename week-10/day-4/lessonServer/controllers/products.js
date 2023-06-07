const { getAllProducts,
        getProduct,
        searchProduct,
        insertProduct,
        deleteProduct,
        updateProduct
        } = require('../modules/products.js');



const _getAllProducts = (req, res) => {
    getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg:err.message})
    })
};

const _getProduct = (req, res) => {
    let id = req.params.id;
    getProduct(id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg:err.message})
    })
};

const _searchProduct = (req, res) => {
    let name = req.query.name;
    searchProduct(name)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg:err.message})
    })
};


const _insertProduct = (req, res) => {
    insertProduct(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg:err.message})
    })
}


const _deleteProduct = (req, res) => {
    deleteProduct(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg:err.message})
    })
}

const _updateProduct = (req, res) => {
    updateProduct(req.params.id, req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg:err.message})
    })
}



module.exports = {
    _getAllProducts,
    _getProduct,
    _searchProduct,
    _insertProduct,
    _deleteProduct,
    _updateProduct
}


// const _getProduct = getProduct();