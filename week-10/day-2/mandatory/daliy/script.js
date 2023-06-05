const express = require('express');

const app = express();



app.get('/aboutMe/:hobby',  (req, res)=>{
    let hobby = req.params.hobby
    if (isNaN(hobby)) {
        console.log(typeof hobby);
    } else {
        return res.status(404).json({Message:'not a word'})
    }
    console.log(typeof hobby);
    res.send('<h1>this is my first response with express.</h1>')
})

app.get('/pic',  (req, res)=>{
    res.send('<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="pic">')
})

app.use('/form', express.static('public'));

app.get('/form',  (req, res)=>{
    
})

app.get('/formData',  (req, res)=>{
    
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})