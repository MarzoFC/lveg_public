const mysql = require('mysql');

//mysql --host=us-cdbr-east-03.cleardb.com --user=b998edc31cacd7 --password=3243e73b --reconnect heroku_50e309c4e32044b

const config = {
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b998edc31cacd7',
    password: '3243e73b',
    database: 'heroku_50e309c4e32044b',
};

const pool = mysql.createPool(config);

module.exports = pool;
