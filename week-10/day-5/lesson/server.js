const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');


app.listen(process.env.PORT || 3030, ()=> {
    console.log(`running on port ${process.env.PORT || 3030}`);
})

app.get('/', (req, res) => {
    let login = true
    let user = {'firstName': 'steve', 'lastName': 'stevenson',}
    let students = {stu1: 'mary', stu2: 'jean', stu3: 'lora'}
    res.render('index', {
        login,
        user,
        students
    });
})

app.get('/shop', (req, res) => {
    res.render('shop')
})