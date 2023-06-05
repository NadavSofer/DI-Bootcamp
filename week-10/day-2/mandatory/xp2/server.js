const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())


// app.use(express.static('public'));

app.get('/test', (req, res)=>{
    const user = {firstName: 'John', lastName: 'Doe'}
    console.log(user);
    res.json(user);
})


// Exercise 2 : Express & Parameters ----------------------------------------------------------------

let objArray = [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}, {id: 3, name: 'name3'}];

app.get('/ex2/:id', (req, res)=> {
    let id = req.params.id
    let out =  objArray.find(obj => obj['id'] == id)
    if (!objArray) {
        return res.status(404).json({Message:'thing'})
    }
    res.json(out)
})

// Exercise 3: Express & Static Files ---------------------------------------------------------------

// app.use(express.static('public'));

app.get('/', (req, res)=>{

})

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})