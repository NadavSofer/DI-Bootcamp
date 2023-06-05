const express = require('express');

const app = express();

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})

app.get('',  (req, res)=>{
    res.send('<h1>this is my first response with express.</h1>')
})