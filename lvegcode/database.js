const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'id15969095_database',
    password: 'C\(9<vPQXi&_?!df',
    database: 'id15969095_app',
};

const pool = mysql.createPool(config);

module.exports = pool;