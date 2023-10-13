const mysql = require('mysql');
require('dotenv').config();

function createConnection() {
    const Connection = mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DB,
        user: process.env.USER,
        password: process.env.PASSWORD
    });

    return Connection;
}

module.exports = { createConnection };