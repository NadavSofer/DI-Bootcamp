const express = require('express');
const {products} = require('./config/data.js')

const app = express();

const logger = (req, res, next) => {
    console.log('url=>' ,req.url);
    console.log('params=>' ,req.params);
    console.log('query=>' ,req.query);
    console.log('body=>' ,req.body);
    next()
}

const authentication = (req, res, next) => {
    const user = req.query.user;
    if (user== 'admin') {
        next()
    } 
    else{
        res.status(401).send('unauthorized')
    }
}

// app.use('/api/products', logger);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3001, ()=>{
    console.log('server is running on port 3001');
})

app.get('/api/products',authentication,  (req, res)=>{
    res.json(products)
})

app.get('/api/products/:id', (req, res)=> {
    let id = req.params.id
    let out =  products.find(obj => obj['id'] == id)
    if (!products) {
        return res.status(404).json({Message:'thing'})
    }
    res.send(out)
})

app.get('/api/search',  (req, res)=> {
    const productName = req.query.name;
    const filtered = products.filter(item => {
        return item.name.toLowerCase().includes(productName.toLowerCase())
    })
    res.json(filtered)
})

app.post('/api/products',  (req, res)=>{
    products.push(req.body)
    console.log(req.body);
    res.status(201).json(products);
})


app.delete('/api/products/:id',  (req, res)=> {
    const id = req.params.id;
    let index = products.findIndex(item => item.id == id);
    if (index == -1 ) {
        res.status(404).json({Message: 'not found'})
    }
    products.splice(index,1)

    res.status(200).json(products)
})

app.put('/api/products/:id',  (req, res) =>{
    const id = req.params.id;
    let index = products.findIndex(item => item.id == id);
    if (index == -1 ) {
        res.status(404).json({Message: 'not found'})
    }
    products[index] = {
        ...products[index],
        name: req.body.name,
        price: req.body.price
    }

    res.status(200).json(products)
}) 

