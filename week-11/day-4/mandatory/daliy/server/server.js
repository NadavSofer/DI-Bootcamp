const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/api/hello',  (req, res)=>{
    res.json('Hello From Express')
})

app.post('/api/world',  (req, res)=>{
    res.json(`I received your POST request. This is what you sent me: ${req.body}`)
})

app.listen(3030, ()=>{
    console.log('server is running on port 3030');
})