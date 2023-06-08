
const express = require('express');
const ejs = require('ejs');
const site_router = require('./routes/facts.js')

const app = express();


app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'))
app.listen(process.env.PORT || 3000, ()=> {
    console.log(`running on port ${process.env.PORT || 3000}`);
})

app.use(site_router.router)