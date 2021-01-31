const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'app',
    password: 'app',
    database: 'app',
};

const pool = mysql.createPool(config);

module.exports = pool;