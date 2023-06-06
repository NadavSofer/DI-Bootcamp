const express = require('express');

const app = express();

app.listen(3001, ()=> {
    console.log('server is running on port 3001');
})

app.use('/', express.static(__dirname + '/public'));

console.log(__dirname + '/public')
app.get('/about', (req, res)=> {
    res.sendFile(__dirname + '/public/about.html')
})