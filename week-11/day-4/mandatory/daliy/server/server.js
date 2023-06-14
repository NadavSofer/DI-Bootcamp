const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello',  (req, res)=>{
    res.json('Hello From Express')
})

app.listen(3030, ()=>{
    console.log('server is running on port 3030');
})