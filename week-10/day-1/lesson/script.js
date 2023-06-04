const {greeting, sayBye} = require('./greeting.js');
// syntax --> const {function names} = require('file name);

let name = 'Nadav'

// greeting(name);
// sayBye(name);

// node file name.js to run !!!


const {carInfo} = require('./cars.js');

let toyota = carInfo('toyota', 2022, 'gold')

// console.log(toyota);

const {users} = require('./users.js');

let url = 'https://jsonplaceholder.typicode.com/users'

users(url)
.then ((res) => {
    console.log(res[0]);
})