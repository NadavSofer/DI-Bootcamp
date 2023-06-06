const knex = require('knex');

const db = knex({
    client:'pg',
    connection: {
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: 'Ns9517530809',
        database: 'IMDI',
    }
})

db.select('films_film')
// .from('films_film')

// .insert([]) ---> adding to database

// .update({title: 'Spirited Away'}) ---> updating the database

// .del() ---> deleting from database

// .where({id:1})

// .returning('*')

// .then(rows => {
//     console.log(rows);
// })