const knex =  require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
    client:'pg',
    connection: {
        host: process.env.db_host,
        port: process.env.db_port,
        user: process.env.db_user,
        password: process.env.db_pass,
        database: process.env.db_name,
        ssl:{rejectUnauthorized:false}
    }
})

module.exports = {
    db
}