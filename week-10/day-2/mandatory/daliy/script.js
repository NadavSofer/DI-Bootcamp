const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/aboutMe/:hobby',  (req, res)=>{
    let hobby = req.params.hobby
    if (isNaN(hobby)) {
        return res.status(200).send(`my hobby is ${hobby}`);
    } 
    return res.status(404).send("that's not a hobby....");
})

app.get('/pic',  (req, res)=>{
    res.send('<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="pic">')
})

app.use('/form', express.static('public'));

app.get('/form',  (req, res)=>{
    
})

app.post('/formData',  (req, res)=>{
    console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    res.send(`${name} sent you a message "${message}" \n this is their email: ${email}`);
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})